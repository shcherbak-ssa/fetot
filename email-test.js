'use strict';

const EmailWorker = require('./server/lib/email-worker');

let data = {
	clientEmail: 'shcherbak.ssa@gmail.com',
	subject: 'test',
	type: 'test'
};

emailTest(data)
	.then((info) => {
		console.log(info)
	})
	.catch((err) => {
		console.log(err);
	});

async function emailTest(data) {
	let emailWorker = EmailWorker.init();
	
	await emailWorker.createMessage(data);
	return await emailWorker.sendMail();
}