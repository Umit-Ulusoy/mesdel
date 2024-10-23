import { delay } from '../helpers/misc.js';
import { getUserId } from '../helpers/apiHandler.js';
import { getUserToken } from '../helpers/tokenHandler.js';
import { setIconBusy, setIconIdle, setIconSuccess} from '../helpers/iconHandler.js';
import { showNotification } from '../helpers/notificationHandler.js';

let
authorId,
delayTime = 2500,
progress = 0,
isPopupOpen = false,
isProcessing = false,
deletedMessageCount = 0,
totalMessageCountToDelete,
lastMessageId,
TOKEN;

const API_URL = 'https://discord.com/api/v9';

chrome.runtime.onConnect.addListener((port) => {

    if (port.name !== 'MAIN_POPUP') return;

    isPopupOpen = true;
  
    port.onDisconnect.addListener(() => {
        isPopupOpen = false;
    });

    return;
  });

  
chrome.runtime.onMessage.addListener( async (request, sender, sendResponse) => {

    if (request.action !== 'START_MESSAGE_DELETION' || isProcessing) return;

    if (!TOKEN) {
        TOKEN = (await getUserToken())
        .replace(/"/g, '');
    }

    authorId = await getUserId(TOKEN);

    setIconBusy();
    isProcessing = true;
    
    const {
        channelId,
        messageCount
    } = request;

    let restMessageCount = messageCount;
    totalMessageCountToDelete = messageCount;

    while (restMessageCount > 0) {
        const messageCountToDeleteNow = (restMessageCount >= 20) ? 20 : restMessageCount;
        
        await deleteMessages(channelId, authorId, messageCountToDeleteNow);
        restMessageCount -= messageCountToDeleteNow;
    }

    setIconSuccess();

    isProcessing = false;
    progress = 0;
    deletedMessageCount = 0;
    lastMessageId = null;

    if (isPopupOpen) {
        await chrome.runtime.sendMessage({
            action: 'MESSAGE_DELETION_COMPLETE'
        });
    } else {
    await showNotification(
        'MesDel',
         `Mesaj silme işlemi tamamlandı! ${totalMessageCountToDelete} mesaj başarıyla uzaya fırlatıldı!`,
        'action_success.png');
    }
});

async function deleteMessages(channelId, authorId, messageCount) {

    try {
        const messageIds = await getMessageIds(channelId, authorId, messageCount);

        
        for (const messageId of messageIds) {
            const response = await fetch(`${API_URL}/channels/${channelId}/messages/${messageId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': TOKEN,
                    'Content-Type': 'application/json'
                }
            });

            deletedMessageCount += 1;
            const progress = ((deletedMessageCount / totalMessageCountToDelete) * 100).toFixed(0);

if (isPopupOpen) {
    await chrome.runtime.sendMessage({
        action: "MESSAGE_DELETION_PROGRESS",
progress
    });
}
                                    
            await delay(delayTime);
        }
        
    } catch (error) {
        setIconIdle();
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}