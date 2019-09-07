'use strict';

const path = require('path'),
	clientDirname = path.join(process.cwd(), 'client'),
	
	setFilename = (dirname, filename) => {
		return path.join(clientDirname, dirname, filename);
	};

module.exports = new Map([
	[
		/\.html$/,
		{
			valid: new Set(['index']),
			filename(base) {
				return setFilename('view', ( base === '/' ? 'index.html' : base))
			}
		}
	],
	[
		/\.js$/,
		{
			valid: new Set(['index']),
			filename(base) {
				return setFilename('js', base)
			}
		}
	],
	[
		/\.ico$/, {
			valid: new Set([ 'favicon' ]),
			filename(base) {
				return setFilename('assets/images', base)
			}
		}
	],
	[
		/\.ttf$/, {
			valid: new Set(['fRobotoBold', 'fRobotoLight', 'fRobotoReqular']),
			filename(base) {
				return setFilename('assets/fonts', base)
			}
		}
	],
	[
		/\.png$/, {
			valid: new Set(['logo-bg']),
			filename(base) {
				return setFilename('assets/images', base)
			}
		}
	],
]);