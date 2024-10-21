const ACTIONS = {
    MESSAGE: {
        START_MESSAGE_DELETION: "START_MESSAGE_DELETION",
        MESSAGE_DELETION_PROGRESS: "MESSAGE_DELETION_PROGRESS",
        MESSAGE_DELETION_COMPLETE: "MESSAGE_DELETION_COMPLETE",
    },
    ALERT: {
        SHOW_ALERT: "SHOW_ALERT"
    }
}

function deletionProcessListener(){
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_PROGRESS) {
            document.getElementById("progress").innerText = `İlerleme: ${request.progress}%`
        }

        if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_COMPLETE) {
            document.getElementById("progress").innerText = `Tamamlandı!`
        }
    })
}

function startMessageDeletion(channelId, messageCount){
    if (messageCount > 0) {
        chrome.runtime.sendMessage({
            action: ACTIONS.MESSAGE.START_MESSAGE_DELETION,
            messageCount: parseInt(messageCount),
            channelId: channelId
        })
    } else {
        alert("Lütfen 1 ile 50 arasında bir sayı girin.");
    }
}

export {
    startMessageDeletion,
    deletionProcessListener
}