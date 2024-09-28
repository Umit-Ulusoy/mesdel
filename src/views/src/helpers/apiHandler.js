const API_URL = 'https://discord.com/api/v9/';
import axios from "axios";
async function getUserData(TOKEN) {
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

function getUserAvatar(userId, avatarId) {
    const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`
    return avatarId ? avatarUrl : "";
}

async function getUserDms(TOKEN) {
    console.log("toqen:", TOKEN)
    const USER_TOKEN = TOKEN
    const url = `${API_URL}users/@me/channels`;
    try {
        const response = await axios.get(url, {
            headers: {
                "Authorization": `${USER_TOKEN}`
            }
        });

        const channels = response.data
            .filter(channel => channel.type === 1)
            .map(async channel => {
                const user = channel.recipients[0];
                const userAvatar = getUserAvatar(user.id, user.avatar);
                const lastMessageTimestamp = await getLastMessageTimestamp(channel.id);

                return {
                    id: channel.id,
                    lastMessageTimestamp,
                    user: {
                        id: user.id,
                        username: user.username,
                        globalName: user.global_name,
                        avatarUrl: userAvatar
                    }
                }
            });

        const sortedChannels = (await Promise.all(channels)).sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp);

        return JSON.stringify(sortedChannels, null, 2);
    } catch (err) {
        console.error('Error in DM listing: ' + err)
    }
}

export {
    getUserData,
    getUserDms
}