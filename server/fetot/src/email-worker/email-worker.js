'use strict';

const nodemailer = require('nodemailer'),
	
	getTransportOptions = require('./get-transport-options'),
	getMessageConfig = require('./get-message-config');

class EmailWorker {
	constructor(transporter) {
		this.transporter = transporter;
	}
	
	static async init() {
		let testAccount = await nodemailer.createTestAccount();
		let transporter = nodemailer.createTransport(getTransportOptions(testAccount));
		return new EmailWorker(transporter);
	}
	
	async sendMail(message) {
		return await this.transporter.sendMail(message);
	}
}

// let clientEmail = 'zenyutich99@mail.ru';

EmailWorker.init()
	.then((emailWorker) => {
		let message = getMessageConfig({clientEmail: 'shcherbak.ssa@gmail.com'});
		return emailWorker.sendMail(message);
	})
	.then((info) => {
		console.log(info)
	})
	.catch((err) => {
		console.log(err)
	});