function showNotification(title, message, iconPath = 'default_notification_icon.png') {
    const fullIconPath = chrome.runtime.getURL(`src/icons/${iconPath}`);

    chrome.notifications.create({
        type: 'basic',
        iconUrl: fullIconPath,
        title: title,
        message: message,
        priority: 2
    }, function(notificationId) {
        if (chrome.runtime.lastError) {
            console.error('Bildirim gönderilirken bir hata oluştu: ', chrome.runtime.lastError);
        } else {
            // console.log('Bildirim gönderildi, ID: ' + notificationId);
        }
    });
}

export {
    showNotification
};