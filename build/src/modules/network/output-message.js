'use strict';

/*** exports [begin] ***/

const outputMessageTemplate = {
	type: 'message',
	client: 0,
	content: {
		type: 0,
		data: {}
	}
};
const outputHeadersTemplate = {
	'Content-Type': 'application/json'
};

function getOutputMessage(message) {
	return Object.assign(outputMessageTemplate, message)
}
function getOutputHeaders(headers) {
	return Object.assign(outputHeadersTemplate, headers);
}

/*** exports [begin] ***/

export default {
	headers: outputHeadersTemplate,
	template: outputMessageTemplate,
	getMessage: getOutputMessage,
	getHeaders: getOutputHeaders
};