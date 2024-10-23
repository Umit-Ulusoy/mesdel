const API_URL = 'https://discord.com/api/v9/';

async function getUserData(TOKEN) {
    const url = `${API_URL}users/@me`;

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `${TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const userData = {
            id: data.id,
            avatar: getUserAvatar(data.id, data.avatar),
            username: data.username,
            globalName: data.global_name
        };

        return userData;
    } catch (err) {
        console.log('Error: ' + err.message);
    }
}

async function getLastMessageTimestamp(channelId, TOKEN) {
    const url = `${API_URL}channels/${channelId}/messages?limit=1`;

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `${TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const lastMessage = data[0];
        return lastMessage ? new Date(lastMessage.timestamp).getTime() : 0;
    } catch (err) {
        console.log('Error: ' + err.message);
        return 0;
    }
}

function getUserAvatar(userId, avatarId) {
    const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`
    return avatarId ? avatarUrl : "";
}

async function getUserDms(TOKEN) {
    const url = `${API_URL}users/@me/channels`;
    
    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `${TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const channels = data
            .filter(channel => channel.type === 1)
            .map(async channel => {
                const user = channel.recipients[0];
                const userAvatar = getUserAvatar(user.id, user.avatar);
                const lastMessageTimestamp = await getLastMessageTimestamp(channel.id, TOKEN);

                return {
                    id: channel.id,
                    lastMessageTimestamp,
                    user: {
                        id: user.id,
                        username: user.username,
                        globalName: user.global_name,
                        avatarUrl: userAvatar
                    }
                };
            });

        const sortedChannels = (await Promise.all(channels)).sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp);

        return JSON.stringify(sortedChannels, null, 2);
    } catch (err) {
        console.error('Error in DM listing: ' + err);
    }
}

async function getUserId(TOKEN) {
    const url = `${API_URL}users/@me`;

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `${TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.id;
    } catch (err) {
        console.log('Error: ' + err.message);
    }
}

export {
    getUserId,
    getUserData,
    getUserDms
};
