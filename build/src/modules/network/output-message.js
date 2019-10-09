'use strict';

/*** exports [begin] ***/

const outputMessageTemplate = {
	type: 'message',
	client: 0,
	content: {
		type: '',
		data: {}
	}
};

function getOutputMessage(message) {
	return Object.assign(outputMessageTemplate, message)
}

/*** exports [begin] ***/

export default {
	template: outputMessageTemplate,
	get: getOutputMessage
};