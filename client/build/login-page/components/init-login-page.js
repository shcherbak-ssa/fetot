'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services-components/store';
import inputs from '../store/inputs.json';

/*** imports [end] ***/
/*** init [begin] ***/

let inputsCollection = Store.collection.create('inputs');
for( let [inputName, inputObject] of Object.entries(inputs) )
	inputsCollection.set(inputName, inputObject);

/*** init [end] ***/
/*** exports [begin] ***/

async function initLoginPage() {
	console.log('by call function', Store.collection('inputs'));
	console.log('by property', Store.inputs)
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default initLoginPage;