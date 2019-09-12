'use strict';

const childProcess = require('child_process'),
	processPath = 'C:\\mongodb\\bin\\mongod.exe',
	processArgs = ['--dbpath="D:\\mongodb\\fetot"'],
	processOptions = { cwd: process.cwd() };

async function runMongodProcess() {
	childProcess.execFile(processPath, processArgs, processOptions, (err, stdout, stderr) => {
		if ( err ) {
			console.error('stderr: ' + Buffer.isBuffer(stderr) ? stderr.toString() : stderr);
			return Promise.reject(err);
		}
		console.log('stdout: ' + Buffer.isBuffer(stdout) ? stdout.toString() : stdout);
	})
}

module.exports = runMongodProcess;