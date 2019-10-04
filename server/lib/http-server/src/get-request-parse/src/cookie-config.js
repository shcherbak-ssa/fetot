'use strict';

const
	cookieConfig = {
		login() {
			return {
				$fetot: JSON.stringify({
					mode: `login`,
					client: createClientID(),
				}),
				'path': '/',
				'max-age': '60'
			}
		},
		app() {
			return {
			
			}
		}
	},
	proxyHandler = {
		get(target, prop) {
			return async (...args) => {
				let cookie = target[prop](...args);
				return Object
					.entries(cookie)
					.map(([key, value]) => {
						return `${key}=${value}`
					})
					.join(';');
			}
		}
	};

module.exports = new Proxy(cookieConfig, proxyHandler);