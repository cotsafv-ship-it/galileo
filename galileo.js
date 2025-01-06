const botToken = "no token for u";
const channelId = "1167693916779331604";  // Channel ID
const message = "hi";

// Connect to Discord WebSocket Gateway
const ws = new WebSocket('wss://gateway.discord.gg/?v=10&encoding=json');

ws.onopen = () => {
    console.log('WebSocket connection established.');

    // Identify the bot with Discord's Gateway
    const identifyPayload = {
        op: 2,  // OP code for identifying with the gateway
        d: {
            token: botToken,
            properties: {
                $os: 'linux',
                $browser: 'my_library',
                $device: 'my_device'
            }
        }
    };
    
    ws.send(JSON.stringify(identifyPayload));  // Send identify payload to Discord

    // Subscribe to messages (for listening to channel events)
    const subscribePayload = {
        op: 14,  // Subscribe to specific events
        d: {
            channel_id: channelId,
            message_create: true  // Listen for message events in the channel
        }
    };

    ws.send(JSON.stringify(subscribePayload));  // Subscribe to events

    // Simulate sending a message by calling REST API (WebSockets are for event-driven)
    // Discord's WebSocket API doesn't directly allow message sending via WebSocket
    // Use the REST API for message sending
    fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
        method: 'POST',
        headers: {
            'Authorization': `Bot ${botToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
    }).then(response => response.json())
      .then(data => console.log('Message Sent:', data))
      .catch(error => console.error('Error:', error));
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received data:', data);
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

ws.onclose = () => {
    console.log('WebSocket connection closed.');
};
