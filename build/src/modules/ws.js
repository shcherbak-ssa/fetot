'use strict';

let websocket = '',
	currentMessage = {};

function initWebSocketModule(url) {
	websocket = new WebSocket(url);
	
	websocket.onopen = () => {
		websocket.send('sing-in')
	};
	websocket.onmessage = (event) => {
		let message = JSON.parse(event.data);
		Object.assign(currentMessage, message);
	};
	websocket.onerror = (error) => {
		console.log(error);
	};
	websocket.onclose = () => {
		console.log('WebSocket is close');
	}
}

export default {
	initWebSocketModule
}