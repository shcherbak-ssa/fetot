'use strict';

/*** exports [begin] ***/

const preparingResponse = {
	create() {
		return {
			response: { config: {}, modules: {} },
			async setClientConfig(config) {
				this.response.config = config
			},
			async setModules(modules, database) {
				const self = this;
				return Promise.all(modules.map( async ({name, categories_id}) => {
					const $module = { categories: [] };

					const categoriesCollection = database.collection(categories_id);
					$module.categories = await categoriesCollection.findAllDocuments();
					
					self.response.modules[name] = {...$module};
				}))
			}
		}
	}
};

/*** exports [end] ***/

module.exports = preparingResponse;