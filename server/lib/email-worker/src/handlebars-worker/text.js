'use strict';

/*** exports [begin] ***/

function textHelper(Handlebars) {
	Handlebars.registerHelper('title', (text, padding) => {
		return new Handlebars.SafeString( getTextString(text, padding) )
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

function getTextString(text, padding) {
	return (
		''
	)
}

/*** src [end] ***/

module.exports = textHelper;