'use strict';

/*** imports [begin] ***/

const Handlebars = require('handlebars'),
	
	lineSpaceHelper = require('./line-space'),
	titleHelper = require('./title'),
	headerHelper = require('./header');

/*** imports [end] ***/
/*** init [begin] ***/

const helpers = [
	lineSpaceHelper,
	titleHelper,
	headerHelper
];

/*** init [end] ***/
/*** exports [begin] ***/

function initHandlebars() {
	helpers.forEach((helper) => helper(Handlebars));
	return Handlebars;
}

/*** exports [end] ***/

module.exports = initHandlebars;