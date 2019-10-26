'use strict';

/*** imports [begin] ***/

const nodeMailer = require('nodemailer'),
	transportOptions = require('./src/transport-options'),
	getLetterConfig = require('./src/get-letter-config');

/*** imports [end] ***/
/*** init [begin] ***/

const transporter = nodeMailer.createTransport(transportOptions);

/*** init [end] ***/
/*** exports [begin] ***/

async function sendMailLetter(config) {
	let letter = await getLetterConfig(config);
	return await transporter.sendMail(letter);
}

/*** exports [end] ***/

module.exports = sendMailLetter;