'use strict';

/*** exports [begin] ***/

function headerHelper(Handlebars) {
	Handlebars.registerHelper('header', () => {
		return new Handlebars.SafeString( getHeaderString() )
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

function getHeaderString() {
	return (
		'<tr style="margin: 0;padding: 0;">' +
			'<td> </td>' +
			'<td style="margin: 0;padding: 0;"><img src="http://localhost:8080/email-logo.png" alt="logo"></td>' +
			'<td> </td>' +
		'</tr>'
	)
}

/*** src [end] ***/

module.exports = headerHelper;