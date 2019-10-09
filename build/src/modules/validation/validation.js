'use strict';

/*** imports [begin] ***/

import inputValidation from './types/input-validation'

/*** imports [end] ***/
/*** exports [begin] ***/

async function getValidationWorker(type, options) {
	switch( type ) {
		case 'input': return inputValidation(options);
	}
}

/*** exports [end] ***/

export default getValidationWorker;