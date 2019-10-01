'use strict';

const Events = require('events');

class FetotEventEmitter extends Events {}

const fetotEventEmitter = new FetotEventEmitter();

module.exports = fetotEventEmitter;