'use strict';

/*** imports [begin] ***/

import {currentModuleStore} from './current-module';

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const blockViewWorker = {
	preparingContent(content) {
		return currentModuleStore.state.workers.drawBlockContentWorker(content);
	},
	preparingDate(date) {
		date = new Date(date);
		return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default blockViewWorker;