'use strict';

const path = require('path'),
	projectDirname = process.cwd(),
	publicDirname = path.join(projectDirname, 'public');

module.exports = {
	html: {
		valid: [ 'login' ],
		dirname: path.join(publicDirname, 'html')
	},
	css: {
		valid: [ 'login' ],
		dirname: path.join(publicDirname, 'css')
	},
	js: {
		valid: [ 'login' ],
		dirname: path.join(publicDirname, 'js')
	},
	ttf: {
		valid: [ 'fRobotoBold', 'fRobotoReqular' ],
		dirname: path.join(publicDirname, 'assets/fonts')
	},
	svg: {
		valid: [ 'fullname', 'username', 'mail', 'password' ],
		dirname: path.join(publicDirname, 'assets')
	},
	404: path.join(projectDirname, 'public/html/404.html')
};