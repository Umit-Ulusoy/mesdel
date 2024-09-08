function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getOpenBefore() {
    try {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(['openBefore'], (result) => {
                if (chrome.runtime.lastError) {
                    reject(new Error('OpenBefore verisi alınırken bir hata oluştu: ' + chrome.runtime.lastError.message));
                } else {
                    resolve(result.token || null);
                }
            });
        });
    } catch (error) {
        console.error('OpenBefore alınırken bir hata oluştu:', error);
        throw error;
    }
}

function setOpenBefore(openBefore) {
    try {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set(openBefore, () => {
                if (chrome.runtime.lastError) {
                    reject(new Error('Open Before kaydedilirken bir hata oluştu: ' + chrome.runtime.lastError.message));
                } else {
                    resolve();
                }
            });
        });
    } catch (error) {
        console.error('Open Before kaydedilirken bir hata oluştu:', error);
        throw error;
    }
}
export {
    delay,
    getOpenBefore,
    setOpenBefore
}