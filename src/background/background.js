chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'SEND_TOKEN') {
        chrome.storage.local.set({ token: message.token }, () => {
            console.log('Token stored');
        })
    }
})
