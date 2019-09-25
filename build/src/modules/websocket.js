'use strict';

const outputMessageTemplate = { clientID: 1, type: '', message: {} },
	messageHandlers = {};

let websocket = {};

function init(mode) {
	websocket = new WebSocket('ws://localhost:8080/');
	
	setMessageHandlers({
		ws: {
			connection(message) {
				console.log('Connection is true');
				outputMessageTemplate.clientID = message.clientID;
			}
		}
	});
	websocket.onmessage = ({data}) => {
		let {type, message} = JSON.parse(data),
			[moduleName, handlerName] = type.slice('/');
		
		console.log(message);
		messageHandlers[moduleName].get(handlerName)(message);
	};
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
}
function setMessageHandlers(...handlers) {
	handlers = Object.assign({}, ...handlers);
	
	for( let [moduleName, moduleHandlers] of Object.entries(handlers) )
		messageHandlers[moduleName] = new Map( Object.entries(moduleHandlers) )
}
function sendMessage(message) {
	let sendMessage = Object.assign(outputMessageTemplate, message);
	sendMessage = JSON.stringify(sendMessage);
	
	websocket.send(sendMessage);
}

export default {
	init,
	setMessageHandlers,
	sendMessage
}