// Set the icon to "busy" to indicate that a task is in progress.
function changeIconToBusy() {
    chrome.action.setIcon({ path: 'src/icons/icon_busy.png' });
}

// Set the icon to "idle" to indicate that nothing is in progress.
function changeIconToIdle() {
    chrome.action.setIcon({ path: 'src/icons/icon_idle.png' });
}

// Set the icon to "completed" to indicate that the task is finished.
function changeIconToCompleted() {
    chrome.action.setIcon({ path: 'src/icons/icon_completed.png' });
}
