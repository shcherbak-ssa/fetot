'use strict';

const sendMailLetter = require('./server/lib/email-worker');

let config = {
	clientEmail: 'shcherbak.ssa@gmail.com',
	subject: 'Confirm email',
	type: 'confirm-email',
	data: {
		text: {
			text: 'Hey there! Someone gave us an email to sign in. If it wasn\'t you just delete the email. Otherwise, copy the code below :)',
			padding: 30
		},
		code: '123456'
	}
};

sendMailLetter(config)
	.then((info) => {
		console.log(info)
	})
	.catch((err) => {
		console.log(err);
	});