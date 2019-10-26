'use strict';

/*** exports [begin] ***/

function lineSpaceHelper(Handlebars) {
	Handlebars.registerHelper('lineSpace', (size) => {
		return new Handlebars.SafeString(`<tr><td style="height: ${size}px;"> </td></tr>`)
	})
}

/*** exports [end] ***/

module.exports = lineSpaceHelper;