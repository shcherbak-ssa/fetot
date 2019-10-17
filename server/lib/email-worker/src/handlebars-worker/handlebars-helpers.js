'use strict';

/*** imports [begin] ***/

const Handlebars = require('handlebars'),
	
	headerHelper = require('./header'),
	lineSpaceHelper = require('./line-space'),
	titleHelper = require('./title'),
	textHelper = require('./text');

/*** imports [end] ***/
/*** init [begin] ***/

const helpers = [
	headerHelper,
	lineSpaceHelper,
	titleHelper,
	textHelper
];

/*** init [end] ***/
/*** exports [begin] ***/

function initHandlebars() {
	helpers.forEach((helper) => helper(Handlebars));
	return Handlebars;
}

/*** exports [end] ***/

module.exports = initHandlebars;