'use strict';

const
	cookieConfig = {
		'sing-in': {
			$fetot: JSON.stringify({
				mode: 'login/sing-in',
				client: createClientID(),
			}),
			'path': '/',
			'max-age': '60',
		},
		'login': {
		
		},
		'user': {
		
		}
	},
	proxyHandler = {
		get(target, prop) {
			return Object.entries(target[prop]).map(([key, value]) => `${key}=${value}`).join(';');
		}
	};

function createClientID() {
	return Date.now()
}

module.exports = new Proxy(cookieConfig, proxyHandler);