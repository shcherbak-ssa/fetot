'use strict';

const fs = require('fs'),
	path = require('path'),
	sass = require('node-sass');

renderScss2Css({
	input: path.join(__dirname, 'loading/sass/index.scss'),
	output: path.join(__dirname, 'loading/loading.css')
});

function renderScss2Css(config) {
	sass.render({file: config.input}, (err, result) => {
		if( err ) {
			console.log(err);
			return
		}
		
		fs.writeFile(config.output, result.css.toString(), {encoding: 'utf-8'}, (err) => {
			console.log( err ? new Error(err) : 'Check output file' )
		})
	})
}