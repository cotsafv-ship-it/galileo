const botToken = "botoken";

var message = "hi";

// Use only the channel ID, not the full URL structure
fetch(`https://discord.com/api/v10/channels/1167693916779331604/messages`, {
    method: 'POST',
    headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: message }),
}).then(response => response.json()).then(data => console.log(data));
