'use strict';

/*** imports [begin] ***/

import $fetch from '../../network/fetch';

import dataTransform from './data-transform';
import dataWorker from './data-worker';

/*** imports [end] ***/
/*** init [begin] ***/
/*** init [end] ***/
/*** exports [begin] ***/

class OutputMessage {
	constructor({messageType = 'message', type}) {
		this.messageType = messageType; // 'connection', 'close', 'message'
		
		this.type = type;
		this.data = {};
	}
	
	/* static */
	static clientID = '';
	
	/* public */
	send() {
		let dataTransformer = this._withFile ? dataTransform.toFormData : dataTransform.toJSON;
		return $fetch({ body: dataTransformer(this.getMessage()) })
	}
	getMessage() {
		return {
			id: OutputMessage.clientID,
			type: this.messageType,
			content: {
				type: this.type,
				data: this.data
			}
		}
	}
	
	/* privet */
	_withFile = false;
	_isFile(value) {
		this._withFile = value instanceof Blob;
	}
}

Object.assign(OutputMessage.prototype, dataWorker);

/*** exports [end] ***/

export default OutputMessage;