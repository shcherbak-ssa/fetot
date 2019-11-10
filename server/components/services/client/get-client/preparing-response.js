'use strict';

/*** imports [begin] ***/

const {responseTemplate, modulesView, moduleTemplate} = require('./config');

/*** imports [end] ***/
/*** exports [begin] ***/

const preparingResponse = {
	create() {
		return {
			response: { config: {}, modules: [] },
			async setClientConfig(config) {
				this.response.config = config
			},
			async setModules(modules, database) {
				const self = this;
				return Promise.all(modules.map( async ({name, categories_id}) => {
					const $module = { view: {}, categories: [] };
					$module.view = modulesView[name];
					
					const categoriesCollection = database.collection(categories_id);
					$module.categories = await categoriesCollection.findAllDocuments();
					
					self.response.modules.push($module);
				}))
			}
		}
	}
};

/*** exports [end] ***/

module.exports = preparingResponse;