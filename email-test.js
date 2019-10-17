'use strict';

const sendMailLetter = require('./server/lib/email-worker');

let config = {
	clientEmail: 'shcherbak.ssa@gmail.com',
	subject: 'Confirm email',
	type: 'confirm-email'
};

sendMailLetter(config)
	.then((info) => {
		console.log(info)
	})
	.catch((err) => {
		console.log(err);
	});