'use strict';

const nodemailer = require('nodemailer'),
	
	transportOptions = require('./src/transport-options'),
	getMessageConfig = require('./src/get-message-config');

class EmailWorker {
	constructor(transporter) {
		this.transporter = transporter;
		this.message = {};
	}
	
	static init() {
		let transporter = nodemailer.createTransport(transportOptions);
		return new EmailWorker(transporter);
	}
	
	async createMessage(messageConfig) {
		messageConfig = await getMessageConfig(messageConfig);
		this.message = messageConfig;
	}
	async sendMail() {
		return await this.transporter.sendMail(this.message);
	}
}

module.exports = EmailWorker.init();