'use strict';

const nodemailer = require('nodemailer'),
	
	transportOptions = require('./transport-options'),
	getMessageConfig = require('./get-message-config');

class EmailWorker {
	constructor(transporter) {
		this.transporter = transporter;
		this.message = {};
	}
	
	static async init() {
		let transporter = nodemailer.createTransport(transportOptions);
		return new EmailWorker(transporter);
	}
	
	async createMessage(messageConfig) {
		messageConfig = getMessageConfig(messageConfig);
		Object.assign(this.message, messageConfig);
	}
	async sendMail() {
		return await this.transporter.sendMail(this.message);
	}
}

module.exports = EmailWorker.init();