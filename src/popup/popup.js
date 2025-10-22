document.addEventListener('DOMContentLoaded', function () {

    chrome.runtime.sendMessage({ action: "POPUP_OPENED" });

    window.addEventListener('beforeunload', function () {
        chrome.runtime.sendMessage({ action: "POPUP_CLOSED" });
    });

    const ACTIONS = {
        MESSAGE: {
            START_MESSAGE_DELETION: "START_MESSAGE_DELETION",
            MESSAGE_DELETION_PROGRESS: "MESSAGE_DELETION_PROGRESS",
            MESSAGE_DELETION_COMPLETE: "MESSAGE_DELETION_COMPLETE",
        },
        ALERT: {
            SHOW_ALERT: "SHOW_ALERT"
        }
    };

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === ACTIONS.ALERT.SHOW_ALERT) {
            alert(request.message);
        }

        if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_PROGRESS) {
            document.getElementById("progress").innerText = `İlerleme: ${request.progress}%`;
        }

        if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_COMPLETE) {
            document.getElementById("progress").innerText = `Tamamlandı!`;
        }
    });

    document.getElementById("deleteMessagesButton").addEventListener("click", () => {
        const messageCount = document.getElementById("messageCount").value;

        if (messageCount > 0) {
            chrome.runtime.sendMessage({
                action: ACTIONS.MESSAGE.START_MESSAGE_DELETION,
                messageCount: parseInt(messageCount),
                channelId: '1276828503056322646'
            });
        } else {
            alert("Lütfen 1 ile 50 arasında bir sayı girin.");
        }
    });
});
