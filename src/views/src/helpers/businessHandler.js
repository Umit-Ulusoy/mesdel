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
			const progresses = document.querySelectorAll("#progress")
			const progressTexts = document.querySelectorAll("#progressText")
			console.log(progressTexts)
			progresses.forEach(progress=> {
				progress.value = request.progress
			})
			progressTexts.forEach(progressText=> {
				progressText.innerText = `%${request.progress}`
			})
        }

        if (request.action === ACTIONS.MESSAGE.MESSAGE_DELETION_COMPLETE) {
			const progressTexts = document.querySelectorAll("#progressText")
			progressTexts.forEach(progressText=> {
				progressText.innerText = `Tamamlandı!`
			})
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