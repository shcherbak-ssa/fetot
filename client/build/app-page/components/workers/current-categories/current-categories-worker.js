'use strict';

/*** imports [begin] ***/

import createCurrentCategoriesStore from './current-categories-store';

import sendOutputMessageService from '../../services/send-output-message';
import updateModuleDataService from '../../services/update-module-data';

/*** imports [end] ***/
/*** init [begin] ***/

const currentCategoriesStore = createCurrentCategoriesStore();



/*** init [end] ***/
/*** exports [begin] ***/



/*** exports [end] ***/


export { currentCategoriesStore, currentCategoriesWorker };