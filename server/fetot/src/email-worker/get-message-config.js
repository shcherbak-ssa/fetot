'use strict';

function getMessageConfig({clientEmail, subject}) {
	return {
		from: 'nodejs@example.com',
		to: clientEmail,
		subject: 'Test email',
		text: 'Ето тест',
		html: '<h1>Ето тест</h1>'
	}
}

module.exports = getMessageConfig;