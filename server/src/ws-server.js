'use strict';

const ws = require('ws');
const wss = new ws.Server({
	hostname: 'localhost',
	port: 8080
});