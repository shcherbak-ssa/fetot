'use strict';

const path = require('path'),
	clientDirname = path.join(process.cwd(), 'client'),
	
	setFilename = (dirname, filename) => path.join(clientDirname, dirname, filename),
	
	validation = {
		404: setFilename('view', '404.html'),
		'\.html$': {
			valid: new Set(['settings', 'login']),
			filename(base) {
				return setFilename('view', ( base === '/' ? 'index.html' : base))
			}
		},
		'\.js$': {
			valid: new Set(['login', 'app']),
			filename(base) {
				return setFilename('js', base)
			}
		},
		'\.ico$': {
			valid: new Set([ 'favicon' ]),
			filename(base) {
				return setFilename('assets/images', base)
			}
		},
		'\.ttf$': {
			valid: new Set(['fRobotoBold', 'fRobotoLight', 'fRobotoReqular']),
			filename(base) {
				return setFilename('assets/fonts', base)
			}
		},
		'\.png$': {
			valid: new Set(['logo-bg']),
			filename(base) {
				return setFilename('assets/images', base)
			}
		}
	};

module.exports = new Map( Object.entries(validation) );