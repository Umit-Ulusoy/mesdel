const API_URL = 'https://discord.com/api/v9/';
let TOKEN;

async function getUserData() {
    const url = `${API_URL}users/@me`;

    try {
        const response = await axios.get(url, {
            headers: {
                "Authorization": `${TOKEN}`
            }
        });

        const userData = {
            id: response.data.id,
            avatar: getUserAvatar(response.data.id, response.data.avatar),
            username: response.data.username,
            globalName: response.data.global_name
        };

        return userData;
    } catch (err) {
        console.log('Error: ' + err.message);
    }
}

async function getLastMessageTimestamp(channelId) {
    const url = `${API_URL}channels/${channelId}/messages?limit=1`;

    try {
        const response = await axios.get(url, {
            headers: {
                "Authorization": `${TOKEN}`
            }
        });

        const lastMessage = response.data[0];
        return lastMessage ? new Date(lastMessage.timestamp).getTime() : 0;
    } catch (err) {
        console.log('Error: ' + err.message);
        return 0;
    }
}