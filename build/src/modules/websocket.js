'use strict';

const outputMessageTemplate = { clientID: 1, type: '', message: {} },
	messageHandlers = new Map();

let websocket = {};

function initWebSocketModule(url, mode) {
	websocket = new WebSocket(url);

	websocket.onopen = () => {
		console.log('WebSocket is open');
		sendMessage({type: 'connection', message: {mode}})
	};
	websocket.onerror = (error) => {
		console.log(error);
	};
	websocket.onclose = (event) => {
		if( event.wasClean ) console.log(`WebSocket is close: ${event.code} : ${event.reason}`);
		else console.log('wtf?');
	};
	
	return websocket;
}
function initMessageHandler() {
	setMessageHandlers('connection', (message) => {
		console.log('Connection is true');
		outputMessageTemplate.clientID = message.clientID;
	});
	websocket.onmessage = ({data}) => {
		let {type, message} = JSON.parse(data);
		console.log(message);
		
		messageHandlers.get(type)(message);
	}
}
function setMessageHandlers(name, handler) {
	messageHandlers.set(name, handler)
}
function sendMessage(message) {
	let sendMessage = Object.assign(outputMessageTemplate, message);
	sendMessage = JSON.stringify(sendMessage);
	
	websocket.send(sendMessage);
}

export default {
	initWebSocketModule,
	initMessageHandler,
	setMessageHandlers,
	sendMessage
}