'use strict';

const outputMessageTemplate = { clientID: 1, type: '', message: {} };

let websocket = {};

function initWebSocketModule(url, fetotMode) {
	websocket = new WebSocket(url);

	websocket.onopen = () => {
		console.log('WebSocket is open');
		sendMessage({type: 'connection', message: {'fetot-mode': fetotMode}})
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
	setMessageEvent('connection', (message) => {
		console.log('Connection is true');
		outputMessageTemplate.clientID = message.clientID;
	});
	websocket.onmessage = ({data: message}) => {
		message = JSON.parse(message);
		console.log(message);
		
		document.dispatchEvent(new CustomEvent(message.type, {detail: message.message}))
	}
}
function setMessageEvent(eventName, messageHandler) {
	document.addEventListener(eventName, (event) => {
		messageHandler(event.detail)
	});
}
function sendMessage(message) {
	let sendMessage = Object.assign(outputMessageTemplate, message);
	sendMessage = JSON.stringify(sendMessage);
	
	websocket.send(sendMessage);
}

export default {
	initWebSocketModule,
	initMessageHandler,
	setMessageEvent,
	sendMessage
}