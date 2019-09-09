'use strict';

const {createInterface} = require('readline'),
	path = require('path'),
	fs = require('fs'),
	fileSep = require('os').EOL,
	options = {encoding: 'utf-8'};

let componentsDirname = path.resolve(__dirname, `../src/components`),
	cli = createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: '@create-vue-component: '
	});

cli.prompt();
cli.on('line', (name) => {
	let componentFiles = JSON.stringify(require('./component-files.json')),
		componentPathname = path.join(componentsDirname, name);
	
	fs.mkdir(componentPathname, (err) => {
		if( err ) return console.log(new Error(err));
		
		componentFiles = preparingComponentFiles(componentFiles, name);
		createComponentFiles(componentPathname, componentFiles);
		
		cli.prompt();
	})
});
function preparingComponentFiles(files, name) {
	return JSON.parse(files.replace(/\$/g, name));
}
function createComponentFiles(componentPathname, files) {
	for( let [filename, filedata] of Object.entries(files) ) {
		filename = path.join(componentPathname, filename);
		filedata = filedata.join(fileSep);
		
		fs.writeFileSync(filename, filedata, options)
	}
}