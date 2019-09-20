'use strict';

const nodemailer = require('nodemailer'),
	
	transportOptions = require('./transport-options'),
	getMessageConfig = require('./get-message-config');

class EmailWorker {
	constructor(transporter) {
		this.transporter = transporter;
	}
	
	static async init() {
		let transporter = nodemailer.createTransport(transportOptions);
		return new EmailWorker(transporter);
	}
	
	async sendMail(message) {
		return await this.transporter.sendMail(message);
	}
}

// let clientEmail = 'zenyutich99@mail.ru';

EmailWorker.init()
	.then((emailWorker) => {
		let message = getMessageConfig({clientEmail: 'zenyutich99@mail.ru', type: 'sing-in'});
		return emailWorker.sendMail(message);
	})
	.then((info) => {
		console.log(info)
	})
	.catch((err) => {
		console.log(err)
	});