'use strict';

/*** exports [begin] ***/

function titleHelper(Handlebars) {
	Handlebars.registerHelper('title', (title) => {
		return new Handlebars.SafeString( getTitleString(title) )
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

function getTitleString(title) {
	return (
		'<tr>' +
			'<td> </td>' +
			'<td style="text-align: center;font-size: 24px;font-weight: 500;color: #393E46;"> ' +
				title +
			'</td>' +
			'<td> </td>' +
		'</tr>'
	)
}

/*** src [end] ***/

module.exports = titleHelper;