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

async function sendEmailLetter(config, sendCount = 0) {
	try {
		let letter = await getLetterConfig(config);
		return await transporter.sendMail(letter);
	} catch( err ) {
		console.log(err);
		if( sendCount === 7 ) return false;
		return await sendEmailLetter(config, sendCount + 1)
	}
}

/*** exports [end] ***/

module.exports = sendEmailLetter;