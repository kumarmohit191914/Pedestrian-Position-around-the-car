const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 5000});

wss.on("connection",ws=>{
    ws.on("message",message=>{
        console.log(JSON.parse(message));
    });
});