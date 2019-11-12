'use strict';

/*** exports [begin] ***/

const preparingResponse = {
	create() {
		return {
			response: { config: {}, modules: {} },
			async setClientConfig(config) {
				this.response.config = config
			},
			async setClientModules(modules) {
				const self = this;
				return Promise.all(modules.map( async ($module) => {
					delete $module._id;
					self.response.modules[$module.name] = {...$module};
				}))
			}
		}
	}
};

/*** exports [end] ***/

module.exports = preparingResponse;