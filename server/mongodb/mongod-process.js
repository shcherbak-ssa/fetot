'use strict';

const fs = require('fs'),
	path = require('path'),
	
	logDirname = path.join(__dirname, 'log'),
	logStderrFilename = path.join(logDirname, 'stderr.txt'),
	logStdoutFilename = path.join(logDirname, 'stdout.txt'),
	
	childProcess = require('child_process'),
	processCommand = 'C:\\mongodb\\bin\\mongod',
	processArgs = ['--dbpath=D:\\mongodb\\fetot'],
	processOptions = { cwd: process.cwd() };

let p = '2019-09-13T18:50:59.059+0300 I  NETWORK  [initandlisten] Listening on 127.0.0.1' +
	'2019-09-13T18:50:59.062+0300 I  NETWORK  [initandlisten] waiting for connections on port 27017';

function runMongodProcess() {
	return new Promise((success, error) => {
		let mongodProcess = childProcess.spawn(processCommand, processArgs, processOptions);
		
		mongodProcess.on('close', (code) => {
			console.log(`child process exited with code ${code}`);
			// removeTempFiles();
		});
		
		createTempFile();
		runStderrWriteStream(mongodProcess);
		runStdoutWriteStream(mongodProcess);
		
		console.log('mongod process run');
		return success();
	})
}
function createTempFile() {
	if( !fs.existsSync(logDirname) ) fs.mkdirSync(logDirname);
}
function removeTempFiles() {
	[ logStderrFilename, logStdoutFilename ].forEach((filename) => {
		fs.unlinkSync(filename);
	})
}
function runStdWriteStream(std, filename) {
	let writeStream = new fs.WriteStream(filename);
	
	std.on('data', (data) => {
		writeStream.write(data.toString());
	});
}
function runStderrWriteStream({stderr}) {
	let writeStream = new fs.WriteStream(logStderrFilename);
	
	stderr.on('data', (data) => {
		writeStream.write(data.toString());
	});
}
function runStdoutWriteStream({stdout}) {
	let writeStream = new fs.WriteStream(logStdoutFilename);
	
	stdout.on('data', (data) => {
		writeStream.write(data.toString());
	});
}

module.exports = runMongodProcess;