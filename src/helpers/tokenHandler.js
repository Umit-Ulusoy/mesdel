
function setUserToken(token) {
    try {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ token }, () => {
                if (chrome.runtime.lastError) {
                    reject(new Error('Token kaydedilirken bir hata oluştu: ' + chrome.runtime.lastError.message));
                } else {
                    resolve();
                }
            });
        });
    } catch (error) {
        console.error('Token kaydedilirken bir hata oluştu:', error);
        throw error;
    }
}

function getUserToken() {
    try {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get('token', (result) => {
                if (chrome.runtime.lastError) {
                    reject(new Error('Token verisi alınırken bir hata oluştu: ' + chrome.runtime.lastError.message));
                } else {
                    resolve(result.token || null);
                }
            });
        });
    } catch (error) {
        console.error('Token alınırken bir hata oluştu:', error);
        throw error;
    }
}

function deleteUserToken() {
    try {
        return new Promise((resolve, reject) => {
            chrome.storage.local.remove(['token'], () => {
                if (chrome.runtime.lastError) {
                    reject(new Error('Token silinirken bir hata oluştu: ' + chrome.runtime.lastError.message));
                } else {
                    resolve();
                }
            });
        });
    } catch (error) {
        console.error('Token silinirken bir hata oluştu:', error);
        throw error;
    }
}

export {
    setUserToken,
    getUserToken,
    deleteUserToken,
};
