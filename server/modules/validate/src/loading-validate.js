'use strict';

const path = require('path'),
	projectDirname = process.cwd(),
	loadingDirname = path.join(projectDirname, 'loading');

module.exports = {
	html: {
		valid: [ 'index' ],
		dirname: loadingDirname
	},
	css: {
		valid: [ 'loading' ],
		dirname: loadingDirname
	},
	js: {
		valid: [ 'loading' ],
		dirname: loadingDirname
	},
	ttf: {
		valid: [ 'fRobotoBold', 'fRobotoReqular' ],
		dirname: path.join(loadingDirname, 'fonts')
	},
	404: path.join(projectDirname, 'public/html/404.html')
};