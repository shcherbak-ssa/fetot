'use strict';

/*** imports [begin] ***/

const nodeMailer = require('nodemailer'),
	transportOptions = require('./src/transport-options'),
	getMessageConfig = require('./src/get-message-config');

/*** imports [end] ***/
/*** exports [begin] ***/

class EmailWorker {
	constructor(transporter) {
		this.transporter = transporter;
		this.message = {};
	}
	
	static init() {
		let transporter = nodeMailer.createTransport(transportOptions);
		return new EmailWorker(transporter);
	}
	
	async createMessage(messageConfig) {
		this.message = await getMessageConfig(messageConfig);
	}
	async sendMail() {
		return await this.transporter.sendMail(this.message);
	}
}

/*** exports [end] ***/

module.exports = EmailWorker;