'use strict';

let websocket = '';

function initWebSocketModule(url) {
	websocket = new WebSocket(url);

	websocket.onopen = () => {
		console.log('WebSocket is open')
	};
	websocket.onerror = (error) => {
		console.log(error);
	};
	websocket.onclose = () => {
		console.log('WebSocket is close');
	};
	
	return websocket;
}
function initMessageHandler() {
	websocket.onmessage = ({data}) => {
		data = JSON.parse(data);
		document.dispatchEvent(new CustomEvent(data.type, {
			detail: data.message
		}))
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