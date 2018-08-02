import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export default {
    client: function (cb) {
        console.log("inside clientSocket");
        socket.on(clientSocket);
        socket.emit("client");
    }
}