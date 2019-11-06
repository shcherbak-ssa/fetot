'use strict';

/*** imports [begin] ***/

import eventsEmitterWorker from '$fetot-events-emitter';

import {importModule, importLoginPageComponent} from './services/login-import-service';

/*** imports [end] ***/
/*** init [begin] ***/

const loginPageEventEmitter = eventsEmitterWorker.createEmitter('login-page');

loginPageEventEmitter
	.on('import-module', importModule)
	.on('import-login-page-component', importLoginPageComponent);

/*** init [end] ***/
/*** src [begin] ***/
/*** src [end] ***/