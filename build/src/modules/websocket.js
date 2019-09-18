'use strict';

let websocket = '';

function initWebSocketModule(url, fetotMode) {
	websocket = new WebSocket(url);

	websocket.onopen = () => {
		console.log('WebSocket is open');
		sendData({ clientID: 1, type: 'connection', message: {'fetot-mode': fetotMode}})
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
	websocket.onmessage = ({data}) => {
		data = JSON.parse(data);
		if( 'event' in data ) {
			document.dispatchEvent(new CustomEvent(data.event, {detail: data.message}))
		} else console.log(data);
	}
}
function setMessageEvent(eventName, messageHandler) {
	document.addEventListener(eventName, (event) => {
		messageHandler(event.detail)
	});
}
function sendData(data) {
	data = JSON.stringify(data);
	websocket.send(data);
}

export default {
	initWebSocketModule,
	initMessageHandler,
	setMessageEvent,
	sendData
}