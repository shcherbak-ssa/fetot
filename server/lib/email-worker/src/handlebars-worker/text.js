'use strict';

/*** exports [begin] ***/

function textHelper(Handlebars) {
	Handlebars.registerHelper('text', (text) => {
		return new Handlebars.SafeString( getTextString(text) )
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

function getTextString({text, padding}) {
	return (
		'<tr>' +
			'<td style="text-align: center;font-size: 18px;' +
						'font-weight: lighter;color: #393e46;' +
						`padding: 0 ${padding}px;">${text}</td>` +
		'</tr>'
	)
}

/*** src [end] ***/

module.exports = textHelper;