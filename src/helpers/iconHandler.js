// Set the icon to "busy" to indicate that a task is in progress.
function setIconBusy() {
    const path = chrome.runtime.getURL('src/icons/icon_busy.png');
    chrome.action.setIcon({ path });
}

// Set the icon to "idle" to indicate that nothing is in progress.
function setIconIdle() {
    const path = chrome.runtime.getURL('src/icons/icon_idle.png');
    chrome.action.setIcon({ path });
}

// Set the icon to "success" to indicate that the task is successfully completed.
function setIconSuccess() {
    const path = chrome.runtime.getURL('src/icons/icon_success.png');
    chrome.action.setIcon({ path });
}

export {
    setIconBusy,
    setIconIdle,
    setIconSuccess
}