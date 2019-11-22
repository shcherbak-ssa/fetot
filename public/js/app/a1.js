(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/components/workers/events-emitter.js":
/*!**************************************************!*\
  !*** ./app/components/workers/events-emitter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** init [begin] ***/

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const emitterCollection = new Map();

class EventsEmitter {
  constructor() {
    _defineProperty(this, "handlers", new Map());
  }

  on(event, handler) {
    if (this.handlers.has(event)) {
      let oldHandlers = this.handlers.get(event);
      this.handlers.set(event, [...oldHandlers, handler]);
    } else {
      this.handlers.set(event, [handler]);
    }

    return this;
  }

  remove(event, handler) {
    let handlers = this.handlers.get(event).filter(item => item !== handler);
    this.handlers.set(event, handlers);
  }

  emit(event, ...args) {
    if (!this.handlers.has(event)) return Promise.reject(new Error(`event '${event}' didn't add`));
    return Promise.all(this.handlers.get(event).map(handler => {
      return handler(...args);
    }));
  }

}
/*** init [end] ***/

/*** exports [begin] ***/


const eventsEmitterWorker = {
  createEmitter(name) {
    if (emitterCollection.has(name)) return emitterCollection.get(name);
    let emitter = new EventsEmitter();
    emitterCollection.set(name, emitter);
    return emitter;
  },

  removeEmitter(name) {
    if (!emitterCollection.has(name)) return;
    emitterCollection.delete(name);
  },

  getEmitter(name) {
    return emitterCollection.has(name) ? emitterCollection.get(name) : this.createEmitter(name);
  }

};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (eventsEmitterWorker);

/***/ }),

/***/ "./app/view/components/elements/fetot-ava.vue":
/*!****************************************************!*\
  !*** ./app/view/components/elements/fetot-ava.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetot_ava_vue_vue_type_template_id_dc5fe7e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true& */ "./app/view/components/elements/fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true&");
/* harmony import */ var _fetot_ava_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetot-ava.vue?vue&type=script&lang=js& */ "./app/view/components/elements/fetot-ava.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fetot_ava_vue_vue_type_style_index_0_id_dc5fe7e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true& */ "./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fetot_ava_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fetot_ava_vue_vue_type_template_id_dc5fe7e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fetot_ava_vue_vue_type_template_id_dc5fe7e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dc5fe7e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/view/components/elements/fetot-ava.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/view/components/elements/fetot-ava.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./app/view/components/elements/fetot-ava.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-ava.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_style_index_0_id_dc5fe7e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_style_index_0_id_dc5fe7e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_style_index_0_id_dc5fe7e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_style_index_0_id_dc5fe7e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_style_index_0_id_dc5fe7e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_style_index_0_id_dc5fe7e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/view/components/elements/fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./app/view/components/elements/fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_template_id_dc5fe7e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_template_id_dc5fe7e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_ava_vue_vue_type_template_id_dc5fe7e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/services/update-module-data.js":
/*!******************************************************************!*\
  !*** ./build/app-page/components/services/update-module-data.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** exports [begin] ***/

async function updateModuleDataService() {
  const clientStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__["default"].getStore('client');
  const currentModuleStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__["default"].getStore('current-module');
  const currentBlocksStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__["default"].getStore('current-blocks'); // const currentCategoriesStore = StoreWorker.getStore('current-categories');

  const {
    name,
    ...$module
  } = currentModuleStore.state.module;
  await clientStore.actions.updateModule({
    name,
    $module: { ...$module,
      blocks: currentBlocksStore.getters.getLikeArray()
    }
  });
}
/*** exports [end] ***/


/* harmony default export */ __webpack_exports__["default"] = (updateModuleDataService);

/***/ }),

/***/ "./build/app-page/components/workers/current-module-worker.js":
/*!********************************************************************!*\
  !*** ./build/app-page/components/workers/current-module-worker.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_services_output_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-services/output-message */ "./app/components/services/output-message/index.js");
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
/* harmony import */ var _services_update_module_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/update-module-data */ "./build/app-page/components/services/update-module-data.js");

/*** imports [begin] ***/




/*** imports [end] ***/

/*** src [begin] ***/

const clientStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('client');
const currentModuleStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-module'); // const currentCategoriesStore = StoreWorker.getStore('current-categories');

const currentBlocksStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-blocks');
/*** src [end] ***/

/*** exports [begin] ***/

const currentModuleWorker = {
  async updateCurrentModule(name) {
    if (currentModuleStore.getters.name() === name) return;
    if (currentModuleStore.state.isFirst) await currentModuleStore.actions.updateIsFirst();else await Object(_services_update_module_data__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const [$module, blocks] = await this.changeModule(name);
    currentBlocksStore.actions.update(blocks);
    currentModuleStore.actions.update({
      name,
      ...$module
    });
    $module.config.init();
  },

  async changeModule(name) {
    const moduleInit = await clientStore.actions.hasModule(name);
    const outputMessage = new $fetot_services_output_message__WEBPACK_IMPORTED_MODULE_0__["default"]({
      type: 'change-module'
    });
    outputMessage.set('$module', name);

    if (!moduleInit) {
      outputMessage.send();
      return clientStore.state.modules[name];
    }

    outputMessage.set('blocks', true);
    const config = await importModule(name);
    const {
      blocks
    } = await outputMessage.send();
    const $module = { ...clientStore.state.modules[name],
      config
    };
    await clientStore.actions.updateModule({
      name,
      $module: { ...$module,
        blocks
      }
    });
    return [$module, blocks];
  }

};
/*** exports [end] ***/

/*** src [begin] ***/

async function importModule(name) {
  const $import = await __webpack_require__("./build/app-page/modules lazy recursive ^\\.\\/.*\\.js$")(`./${name}.js`);
  return $import.default;
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = (currentModuleWorker);

/***/ }),

/***/ "./build/app-page/modules lazy recursive ^\\.\\/.*\\.js$":
/*!*******************************************************************!*\
  !*** ./build/app-page/modules lazy ^\.\/.*\.js$ namespace object ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./notes.js": [
		"./build/app-page/modules/notes.js",
		0
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./build/app-page/modules lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./build/app-page/store/modules-view-store.js":
/*!****************************************************!*\
  !*** ./build/app-page/store/modules-view-store.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

const modulesViewStore = {
  home: [{
    name: 'Notes',
    icon: '&#xE80C;',
    label: 'notes'
  } // {
  // 	name: 'Lists',
  // 	icon: '&#xE806;',
  // 	label: 'lists'
  // }
  ],
  frame: {
    notes: {
      icon: '&#xE80C;'
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (modulesViewStore);

/***/ }),

/***/ "./build/app-page/view/app-header/app-header.vue":
/*!*******************************************************!*\
  !*** ./build/app-page/view/app-header/app-header.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_header_vue_vue_type_template_id_3605cafa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header.vue?vue&type=template&id=3605cafa&scoped=true& */ "./build/app-page/view/app-header/app-header.vue?vue&type=template&id=3605cafa&scoped=true&");
/* harmony import */ var _app_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header.vue?vue&type=script&lang=js& */ "./build/app-page/view/app-header/app-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_header_vue_vue_type_style_index_0_id_3605cafa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true& */ "./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_header_vue_vue_type_template_id_3605cafa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_header_vue_vue_type_template_id_3605cafa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3605cafa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/view/app-header/app-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/view/app-header/app-header.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./build/app-page/view/app-header/app-header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_3605cafa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_3605cafa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_3605cafa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_3605cafa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_3605cafa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_3605cafa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/view/app-header/app-header.vue?vue&type=template&id=3605cafa&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./build/app-page/view/app-header/app-header.vue?vue&type=template&id=3605cafa&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_template_id_3605cafa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-header.vue?vue&type=template&id=3605cafa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=template&id=3605cafa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_template_id_3605cafa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_template_id_3605cafa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/view/app-header/client-info.vue":
/*!********************************************************!*\
  !*** ./build/app-page/view/app-header/client-info.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_info_vue_vue_type_template_id_627497ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-info.vue?vue&type=template&id=627497ff&scoped=true& */ "./build/app-page/view/app-header/client-info.vue?vue&type=template&id=627497ff&scoped=true&");
/* harmony import */ var _client_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-info.vue?vue&type=script&lang=js& */ "./build/app-page/view/app-header/client-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _client_info_vue_vue_type_style_index_0_id_627497ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true& */ "./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _client_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _client_info_vue_vue_type_template_id_627497ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _client_info_vue_vue_type_template_id_627497ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "627497ff",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/view/app-header/client-info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/view/app-header/client-info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./build/app-page/view/app-header/client-info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./client-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_style_index_0_id_627497ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_style_index_0_id_627497ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_style_index_0_id_627497ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_style_index_0_id_627497ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_style_index_0_id_627497ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_style_index_0_id_627497ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/view/app-header/client-info.vue?vue&type=template&id=627497ff&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./build/app-page/view/app-header/client-info.vue?vue&type=template&id=627497ff&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_template_id_627497ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./client-info.vue?vue&type=template&id=627497ff&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=template&id=627497ff&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_template_id_627497ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_info_vue_vue_type_template_id_627497ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/view/app-header/hamburger-button.vue":
/*!*************************************************************!*\
  !*** ./build/app-page/view/app-header/hamburger-button.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger_button_vue_vue_type_template_id_3f906912_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger-button.vue?vue&type=template&id=3f906912&scoped=true& */ "./build/app-page/view/app-header/hamburger-button.vue?vue&type=template&id=3f906912&scoped=true&");
/* harmony import */ var _hamburger_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger-button.vue?vue&type=script&lang=js& */ "./build/app-page/view/app-header/hamburger-button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _hamburger_button_vue_vue_type_style_index_0_id_3f906912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true& */ "./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _hamburger_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hamburger_button_vue_vue_type_template_id_3f906912_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hamburger_button_vue_vue_type_template_id_3f906912_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3f906912",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/view/app-header/hamburger-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/view/app-header/hamburger-button.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./build/app-page/view/app-header/hamburger-button.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./hamburger-button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_style_index_0_id_3f906912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_style_index_0_id_3f906912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_style_index_0_id_3f906912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_style_index_0_id_3f906912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_style_index_0_id_3f906912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_style_index_0_id_3f906912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/view/app-header/hamburger-button.vue?vue&type=template&id=3f906912&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./build/app-page/view/app-header/hamburger-button.vue?vue&type=template&id=3f906912&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_template_id_3f906912_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./hamburger-button.vue?vue&type=template&id=3f906912&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=template&id=3f906912&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_template_id_3f906912_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hamburger_button_vue_vue_type_template_id_3f906912_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/view/app-home/app-home.vue":
/*!***************************************************!*\
  !*** ./build/app-page/view/app-home/app-home.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_home_vue_vue_type_template_id_f3bc538c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-home.vue?vue&type=template&id=f3bc538c&scoped=true& */ "./build/app-page/view/app-home/app-home.vue?vue&type=template&id=f3bc538c&scoped=true&");
/* harmony import */ var _app_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-home.vue?vue&type=script&lang=js& */ "./build/app-page/view/app-home/app-home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_home_vue_vue_type_style_index_0_id_f3bc538c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true& */ "./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_home_vue_vue_type_template_id_f3bc538c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_home_vue_vue_type_template_id_f3bc538c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f3bc538c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/view/app-home/app-home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/view/app-home/app-home.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./build/app-page/view/app-home/app-home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_style_index_0_id_f3bc538c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_style_index_0_id_f3bc538c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_style_index_0_id_f3bc538c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_style_index_0_id_f3bc538c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_style_index_0_id_f3bc538c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_style_index_0_id_f3bc538c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/view/app-home/app-home.vue?vue&type=template&id=f3bc538c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./build/app-page/view/app-home/app-home.vue?vue&type=template&id=f3bc538c&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_template_id_f3bc538c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-home.vue?vue&type=template&id=f3bc538c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=template&id=f3bc538c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_template_id_f3bc538c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_home_vue_vue_type_template_id_f3bc538c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/view/app-home/content-section.vue":
/*!**********************************************************!*\
  !*** ./build/app-page/view/app-home/content-section.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_section_vue_vue_type_template_id_08d6809c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-section.vue?vue&type=template&id=08d6809c&scoped=true& */ "./build/app-page/view/app-home/content-section.vue?vue&type=template&id=08d6809c&scoped=true&");
/* harmony import */ var _content_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-section.vue?vue&type=script&lang=js& */ "./build/app-page/view/app-home/content-section.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _content_section_vue_vue_type_style_index_0_id_08d6809c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true& */ "./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _content_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _content_section_vue_vue_type_template_id_08d6809c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _content_section_vue_vue_type_template_id_08d6809c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08d6809c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/view/app-home/content-section.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/view/app-home/content-section.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./build/app-page/view/app-home/content-section.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./content-section.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_style_index_0_id_08d6809c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_style_index_0_id_08d6809c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_style_index_0_id_08d6809c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_style_index_0_id_08d6809c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_style_index_0_id_08d6809c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_style_index_0_id_08d6809c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/view/app-home/content-section.vue?vue&type=template&id=08d6809c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./build/app-page/view/app-home/content-section.vue?vue&type=template&id=08d6809c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_template_id_08d6809c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./content-section.vue?vue&type=template&id=08d6809c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=template&id=08d6809c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_template_id_08d6809c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_section_vue_vue_type_template_id_08d6809c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/view/app-home/module-item.vue":
/*!******************************************************!*\
  !*** ./build/app-page/view/app-home/module-item.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_item_vue_vue_type_template_id_1c655ef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-item.vue?vue&type=template&id=1c655ef5&scoped=true& */ "./build/app-page/view/app-home/module-item.vue?vue&type=template&id=1c655ef5&scoped=true&");
/* harmony import */ var _module_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-item.vue?vue&type=script&lang=js& */ "./build/app-page/view/app-home/module-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _module_item_vue_vue_type_style_index_0_id_1c655ef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true& */ "./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _module_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_item_vue_vue_type_template_id_1c655ef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _module_item_vue_vue_type_template_id_1c655ef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c655ef5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/view/app-home/module-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/view/app-home/module-item.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./build/app-page/view/app-home/module-item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./module-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_style_index_0_id_1c655ef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_style_index_0_id_1c655ef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_style_index_0_id_1c655ef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_style_index_0_id_1c655ef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_style_index_0_id_1c655ef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_style_index_0_id_1c655ef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/view/app-home/module-item.vue?vue&type=template&id=1c655ef5&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./build/app-page/view/app-home/module-item.vue?vue&type=template&id=1c655ef5&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_template_id_1c655ef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./module-item.vue?vue&type=template&id=1c655ef5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=template&id=1c655ef5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_template_id_1c655ef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_module_item_vue_vue_type_template_id_1c655ef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/view/app-page.vue":
/*!******************************************!*\
  !*** ./build/app-page/view/app-page.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_page_vue_vue_type_template_id_9a1a6640_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-page.vue?vue&type=template&id=9a1a6640&scoped=true& */ "./build/app-page/view/app-page.vue?vue&type=template&id=9a1a6640&scoped=true&");
/* harmony import */ var _app_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-page.vue?vue&type=script&lang=js& */ "./build/app-page/view/app-page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_page_vue_vue_type_template_id_9a1a6640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_page_vue_vue_type_template_id_9a1a6640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9a1a6640",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/view/app-page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/view/app-page.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./build/app-page/view/app-page.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./app-page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/view/app-page.vue?vue&type=template&id=9a1a6640&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./build/app-page/view/app-page.vue?vue&type=template&id=9a1a6640&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_page_vue_vue_type_template_id_9a1a6640_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./app-page.vue?vue&type=template&id=9a1a6640&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-page.vue?vue&type=template&id=9a1a6640&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_page_vue_vue_type_template_id_9a1a6640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_page_vue_vue_type_template_id_9a1a6640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-ava.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fetot-ava',
  props: {
    fullname: String,
    size: String
  },
  computed: {
    setClientLetters() {
      let [first, second] = this.fullname.split(' ');
      first = first ? first[0] : '';
      second = second ? second[0] : '';
      return (first + second).toUpperCase();
    },

    setSize() {
      let size = this.size + 'px';
      return {
        width: size,
        height: size
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/app-header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_text_fetot_title_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/text/fetot-title.vue */ "./app/view/components/text/fetot-title.vue");
/* harmony import */ var _client_info_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-info.vue */ "./build/app-page/view/app-header/client-info.vue");
/* harmony import */ var _hamburger_button_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger-button.vue */ "./build/app-page/view/app-header/hamburger-button.vue");
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-header',
  props: {
    isActive: Boolean
  },
  components: {
    'fetot-title': $fetot_view_components_text_fetot_title_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'client-info': _client_info_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'hamburger-button': _hamburger_button_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    hamburgerButtonClickHandler(isActive) {
      this.$emit('hamburger-button-click', isActive);
    }

  },
  computed: {
    currentModuleName() {
      const name = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_3__["default"].getStore('current-module').getters.name();
      return this.isActive || !name ? '' : `${name[0].toUpperCase()}${name.slice(1)}`;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/client-info.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_elements_fetot_ava_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/elements/fetot-ava.vue */ "./app/view/components/elements/fetot-ava.vue");
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
//
//
//
//
//
//
//
//
//
//
//
//
 // import menuComponent from '../menu/menu-component.vue';


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'client-info',

  data() {
    return {
      client: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('client').state.config,
      isMenuOpen: false,
      appMenuService: null,
      submenu: false
    };
  },

  components: {
    'fetot-ava': $fetot_view_components_elements_fetot_ava_vue__WEBPACK_IMPORTED_MODULE_0__["default"] // 'menu-component': menuComponent

  },
  methods: {},

  mounted() {}

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/hamburger-button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hamburger-button',
  props: {
    active: Boolean
  },
  methods: {
    clickHandler() {
      this.$emit('hamburger-button-click', this.active);
    }

  },
  computed: {
    isActive() {
      return {
        'is-active': this.active
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/app-home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_buttons_fetot_close_button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/buttons/fetot-close-button.vue */ "./app/view/components/buttons/fetot-close-button.vue");
/* harmony import */ var _app_header_app_header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-header/app-header.vue */ "./build/app-page/view/app-header/app-header.vue");
/* harmony import */ var _content_section_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-section.vue */ "./build/app-page/view/app-home/content-section.vue");
/* harmony import */ var _module_item_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-item.vue */ "./build/app-page/view/app-home/module-item.vue");
/* harmony import */ var _store_modules_view_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/modules-view-store */ "./build/app-page/store/modules-view-store.js");
/* harmony import */ var _components_workers_current_module_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/workers/current-module-worker */ "./build/app-page/components/workers/current-module-worker.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-home',

  data() {
    return {
      states: {
        'is-close': false,
        'is-active': true,
        'is-first-time': true
      },
      modulesViewStore: _store_modules_view_store__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
  },

  components: {
    'fetot-close-button': $fetot_view_components_buttons_fetot_close_button_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'app-header': _app_header_app_header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'module-item': _module_item_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'content-section': _content_section_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    hamburgerButtonClickHandler(isActive) {
      isActive ? this.closeHome() : this.openHome();
    },

    moduleItemClickHandler(name) {
      _components_workers_current_module_worker__WEBPACK_IMPORTED_MODULE_5__["default"].updateCurrentModule(name);
      this.closeButtonClickHandler();
    },

    closeButtonClickHandler() {
      if (this.states['is-first-time']) this.states['is-first-time'] = false;
      this.closeHome();
    },

    closeHome() {
      this.states['is-close'] = true;
      this.states['is-active'] = false;
    },

    openHome() {
      this.states['is-close'] = false;
      this.states['is-active'] = true;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/content-section.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'content-section'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/module-item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_icons_fetot_icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/icons/fetot-icon.vue */ "./app/view/components/icons/fetot-icon.vue");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'module-item',
  props: {
    item: Object
  },
  components: {
    'fetot-icon': $fetot_view_components_icons_fetot_icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-page.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-page.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_home_app_home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-home/app-home.vue */ "./build/app-page/view/app-home/app-home.vue");
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
/* harmony import */ var $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $fetot-events-emitter */ "./app/components/workers/events-emitter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-page',

  data() {
    return {
      isModalOpen: false,
      modalOptions: {},
      modalContentComponent: '',
      modalFooterComponent: '',
      appEventsEmitter: $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].getEmitter('app'),
      documentWidth: ''
    };
  },

  components: {
    'app-home': _app_home_app_home_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    openModalEventHandler({
      options,
      contentComponent,
      footerComponent
    }) {
      this.modalOptions = options;
      this.modalContentComponent = contentComponent;
      this.modalFooterComponent = footerComponent;
      this.isModalOpen = true;
      this.appEventsEmitter.on('close-modal-event', this.closeModalEventHandler);
    },

    closeModalEventHandler() {
      this.isModalOpen = false;
      this.appEventsEmitter.remove('close-modal-event', this.closeModalEventHandler);
    }

  },
  computed: {
    currentModuleComponent() {
      return $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-module').getters.configByKey('view') || '';
    }

  },

  mounted() {
    window.onresize = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('page').actions.updateDocumentWidth;
    this.appEventsEmitter.on('open-modal-event', this.openModalEventHandler);
  }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.fetot-ava[data-v-dc5fe7e8] {\n  background: #004466;\n  color: #fff;\n  font: 18px 'roboto-medium';\n  box-shadow: 0 2px 4px rgba(57, 62, 70, 0.4);\n}\n.fetot-ava[data-v-dc5fe7e8]::after {\n    border-radius: 50%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    content: '';\n    display: block;\n    position: absolute;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.app-header[data-v-3605cafa] {\n  height: 46px;\n  margin-bottom: 24px;\n}\n.fetot-title[data-v-3605cafa] {\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hamburger-button[data-v-3605cafa] {\n  left: -72px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media screen and (max-width: 1023px) {\n.hamburger-button[data-v-3605cafa] {\n      left: -42px;\n}\n}\n@media screen and (max-width: 670px) {\n.hamburger-button[data-v-3605cafa] {\n      left: 0;\n}\n}\n.is-close .hamburger-button[data-v-3605cafa] {\n    left: 0;\n}\n.is-first-time .hamburger-button[data-v-3605cafa] {\n    opacity: 0;\n    left: -200px;\n}\n.change-module-title-enter-to[data-v-3605cafa], .change-module-title-leave[data-v-3605cafa] {\n  opacity: 1;\n}\n.change-module-title-leave-to[data-v-3605cafa], .change-module-title-enter[data-v-3605cafa] {\n  opacity: 0;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.client-info[data-v-627497ff] {\n  top: 0;\n  right: 0;\n}\n.fetot-ava[data-v-627497ff] {\n  margin-left: 12px;\n}\n.name[data-v-627497ff] {\n  color: #004466;\n  font: 18px 'roboto-medium';\n  transition: .4s;\n}\n@media screen and (max-width: 670px) {\n.name[data-v-627497ff] {\n      display: none;\n}\n}\n.is-close .name[data-v-627497ff] {\n    opacity: 0;\n}\n.menu-component[data-v-627497ff] {\n  top: 125%;\n  right: 0;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.hamburger-button[data-v-3f906912] {\n  width: 36px;\n  height: 36px;\n  transition: .4s;\n}\n.it[data-v-3f906912] {\n  background: #004466;\n  height: 3px;\n  transition: .4s;\n  border-radius: 50px;\n}\n.it[data-v-3f906912]:nth-child(1), .it[data-v-3f906912]:nth-child(3) {\n    width: 70%;\n}\n.it[data-v-3f906912]:nth-child(1) {\n    top: 7px;\n    right: 0;\n}\n.it[data-v-3f906912]:nth-child(2) {\n    width: 100%;\n}\n.it[data-v-3f906912]:nth-child(3) {\n    bottom: 7px;\n    left: 0;\n}\n.hamburger-button:hover .it[data-v-3f906912] {\n  width: 100%;\n}\n.hamburger-button.is-active .it[data-v-3f906912] {\n  width: 100%;\n}\n.hamburger-button.is-active .it[data-v-3f906912]:nth-child(2) {\n    opacity: 0;\n}\n.hamburger-button.is-active .it[data-v-3f906912]:nth-child(1) {\n    transform-origin: right center;\n    transform: rotate(-45deg);\n    top: 2px;\n    right: 5px;\n}\n.hamburger-button.is-active .it[data-v-3f906912]:nth-child(3) {\n    transform-origin: left center;\n    transform: rotate(45deg);\n    bottom: calc(100% - 5px);\n    left: 5px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.app-home[data-v-f3bc538c] {\n  padding: 12px 24px;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 106px;\n  transition: .4s;\n  box-shadow: 0 2px 4px rgba(57, 62, 70, 0.4);\n}\n@media screen and (max-width: 419px) {\n.app-home[data-v-f3bc538c] {\n      padding: 12px;\n}\n}\n.app-home.is-active[data-v-f3bc538c] {\n    padding: 36px 128px;\n    height: 100%;\n}\n@media screen and (max-width: 1023px) {\n.app-home.is-active[data-v-f3bc538c] {\n        padding: 36px 72px;\n}\n}\n@media screen and (max-width: 670px) {\n.app-home.is-active[data-v-f3bc538c] {\n        padding: 36px;\n}\n}\n@media screen and (max-width: 419px) {\n.app-home.is-active[data-v-f3bc538c] {\n        padding: 24px;\n}\n}\n.app-home.is-first-time .fetot-close-button[data-v-f3bc538c] {\n    opacity: 0;\n    bottom: -200px;\n}\n.app-home.is-close .fetot-close-button[data-v-f3bc538c] {\n    opacity: 0;\n}\n.app-home.is-close .home[data-v-f3bc538c] {\n    transition: .4s;\n    top: -60vh;\n    opacity: 0;\n}\n.home[data-v-f3bc538c] {\n  padding-top: 32px;\n  transition: .4s;\n  width: calc(100% - 256px);\n  height: calc(100% - 192px);\n  overflow: hidden;\n  left: 128px;\n  top: 156px;\n}\n@media screen and (max-width: 1023px) {\n.home[data-v-f3bc538c] {\n      width: calc(100% - 144px);\n      left: 72px;\n      top: 106px;\n}\n}\n@media screen and (max-width: 670px) {\n.home[data-v-f3bc538c] {\n      width: calc(100% - 48px);\n      align-items: center;\n      flex-direction: column;\n      left: 24px;\n}\n}\n@media screen and (max-width: 419px) {\n.home[data-v-f3bc538c] {\n      top: 92px;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.content-section[data-v-08d6809c] {\n  margin: 0 10px 20px 0;\n}\n@media screen and (max-width: 670px) {\n.content-section[data-v-08d6809c] {\n      margin: 0 0 30px 0;\n      width: 320px;\n}\n}\n@media screen and (max-width: 419px) {\n.content-section[data-v-08d6809c] {\n      width: 100%;\n}\n}\n.title[data-v-08d6809c] {\n  color: #393E46;\n  font: 18px 'roboto-bold';\n  top: -30px;\n  left: 10px;\n}\n.content[data-v-08d6809c] {\n  overflow: hidden;\n  padding: 10px;\n}\n@media screen and (max-width: 670px) {\n.content[data-v-08d6809c] {\n      flex-direction: column;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.module-item[data-v-1c655ef5] {\n  background: #fff;\n  color: #004466;\n  font: 24px 'roboto-medium';\n  width: 100px;\n  height: 100px;\n  margin: 0 20px 20px 0;\n  justify-content: center;\n  transition: .2s;\n}\n@media screen and (max-width: 670px) {\n.module-item[data-v-1c655ef5] {\n      font-size: 20px;\n      width: 100%;\n      height: 64px;\n      flex-direction: row;\n      justify-content: left;\n      padding: 15px;\n      margin-right: 0;\n      box-sizing: border-box;\n}\n}\n.module-item .fetot-icon[data-v-1c655ef5] {\n    margin-bottom: 5px;\n}\n@media screen and (max-width: 670px) {\n.module-item .fetot-icon[data-v-1c655ef5] {\n        margin: 0 10px 0 0;\n        font-size: 20px;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-ava.vue?vue&type=template&id=dc5fe7e8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "fetot-ava br50 pr fc cp",
      style: _vm.setSize,
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.$emit("fetot-ava-click")
        }
      }
    },
    [_vm._v("\n  " + _vm._s(_vm.setClientLetters) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=template&id=3605cafa&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/app-header.vue?vue&type=template&id=3605cafa&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-header pr" },
    [
      _c("hamburger-button", {
        attrs: { active: _vm.isActive },
        on: { "hamburger-button-click": _vm.hamburgerButtonClickHandler }
      }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "change-module-title", mode: "out-in" } },
        [_c("fetot-title", [_vm._v(_vm._s(_vm.currentModuleName))])],
        1
      ),
      _vm._v(" "),
      _c("client-info")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=template&id=627497ff&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/client-info.vue?vue&type=template&id=627497ff&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "client-info pa faic" },
    [
      _c("div", { staticClass: "name" }, [_vm._v(_vm._s(_vm.client.fullname))]),
      _vm._v(" "),
      _c("fetot-ava", {
        attrs: { fullname: _vm.client.fullname, size: "46" },
        on: { "fetot-ava-click": function($event) {} }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=template&id=3f906912&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/hamburger-button.vue?vue&type=template&id=3f906912&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "hamburger-button cp pa",
      class: _vm.isActive,
      on: { click: _vm.clickHandler }
    },
    [
      _c("div", { staticClass: "it pa" }),
      _vm._v(" "),
      _c("div", { staticClass: "it pc" }),
      _vm._v(" "),
      _c("div", { staticClass: "it pa" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=template&id=f3bc538c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/app-home.vue?vue&type=template&id=f3bc538c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-home bg-fff pa bs hover_hov-sh", class: _vm.states },
    [
      _c("app-header", {
        attrs: { isActive: _vm.states["is-active"] },
        on: { "hamburger-button-click": _vm.hamburgerButtonClickHandler }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "home flex bs pa" },
        [
          _c("content-section", {
            scopedSlots: _vm._u([
              {
                key: "title",
                fn: function() {
                  return [_vm._v("Modules")]
                },
                proxy: true
              },
              {
                key: "content",
                fn: function() {
                  return _vm._l(_vm.modulesViewStore.home, function(
                    item,
                    index
                  ) {
                    return _c("module-item", {
                      key: index,
                      attrs: { item: item },
                      on: { "module-item-click": _vm.moduleItemClickHandler }
                    })
                  })
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "fetot-close-button",
        { on: { "fetot-close-button-click": _vm.closeButtonClickHandler } },
        [_vm._v("close home")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=template&id=08d6809c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/content-section.vue?vue&type=template&id=08d6809c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-section pr" }, [
    _c("div", { staticClass: "title pa" }, [_vm._t("title")], 2),
    _vm._v(" "),
    _c("div", { staticClass: "content flex full bs" }, [_vm._t("content")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=template&id=1c655ef5&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/module-item.vue?vue&type=template&id=1c655ef5&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "module-item cp fcc br6px hover_hov-sh",
      on: {
        click: function($event) {
          return _vm.$emit("module-item-click", _vm.item.label)
        }
      }
    },
    [
      _c("fetot-icon", { attrs: { icon: _vm.item.icon } }),
      _vm._v(" "),
      _c("div", { staticClass: "name" }, [_vm._v(_vm._s(_vm.item.name))])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-page.vue?vue&type=template&id=9a1a6640&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-page.vue?vue&type=template&id=9a1a6640&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "page", staticClass: "app-page pr full" },
    [
      _c("app-home"),
      _vm._v(" "),
      _c(_vm.currentModuleComponent, { tag: "component" }),
      _vm._v(" "),
      _vm.isModalOpen
        ? _c("modal-container", {
            attrs: { options: _vm.modalOptions },
            on: { "close-modal-event": _vm.closeModalEventHandler },
            scopedSlots: _vm._u(
              [
                {
                  key: "modal-content",
                  fn: function() {
                    return [_c(_vm.modalContentComponent, { tag: "component" })]
                  },
                  proxy: true
                },
                {
                  key: "modal-footer",
                  fn: function() {
                    return [_c(_vm.modalFooterComponent, { tag: "component" })]
                  },
                  proxy: true
                }
              ],
              null,
              false,
              1860542185
            )
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-ava.vue?vue&type=style&index=0&id=dc5fe7e8&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bde7d152", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/app-header.vue?vue&type=style&index=0&id=3605cafa&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1da17f8e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/client-info.vue?vue&type=style&index=0&id=627497ff&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6ef8aa75", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-header/hamburger-button.vue?vue&type=style&index=0&id=3f906912&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("681078c6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/app-home.vue?vue&type=style&index=0&id=f3bc538c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("fad46196", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/content-section.vue?vue&type=style&index=0&id=08d6809c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("37ecc3e8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/view/app-home/module-item.vue?vue&type=style&index=0&id=1c655ef5&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d8443e80", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy93b3JrZXJzL2V2ZW50cy1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtYXZhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWU/MWE0ZiIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWU/ZWQ2YiIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWU/NzU4MyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL3NlcnZpY2VzL3VwZGF0ZS1tb2R1bGUtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL3dvcmtlcnMvY3VycmVudC1tb2R1bGUtd29ya2VyLmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL21vZHVsZXMgbGF6eSBeXFwuXFwvLipcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9zdG9yZS9tb2R1bGVzLXZpZXctc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2FwcC1oZWFkZXIudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnZ1ZT84YWY4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnZ1ZT8wZGYwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnZ1ZT8xZmVjIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9jbGllbnQtaW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2NsaWVudC1pbmZvLnZ1ZT82NTZiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9jbGllbnQtaW5mby52dWU/M2ZiZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlP2YzYWQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2hhbWJ1cmdlci1idXR0b24udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9oYW1idXJnZXItYnV0dG9uLnZ1ZT83M2Y1Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9oYW1idXJnZXItYnV0dG9uLnZ1ZT9kMmExIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9oYW1idXJnZXItYnV0dG9uLnZ1ZT84MmFiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvYXBwLWhvbWUudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvYXBwLWhvbWUudnVlPzBmNzQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9hcHAtaG9tZS52dWU/YTk3NSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2FwcC1ob21lLnZ1ZT9jNjk2Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvY29udGVudC1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWU/ZTc4ZiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWU/Mzc2OSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWU/ZTUyYyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL21vZHVsZS1pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL21vZHVsZS1pdGVtLnZ1ZT9iMzliIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvbW9kdWxlLWl0ZW0udnVlP2U5ZDMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9tb2R1bGUtaXRlbS52dWU/YjFhZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1wYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1wYWdlLnZ1ZT8wZjUzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLXBhZ2UudnVlP2ZiZTUiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtYXZhLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2FwcC1oZWFkZXIudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvaGFtYnVyZ2VyLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvYXBwLWhvbWUudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvbW9kdWxlLWl0ZW0udnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1wYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWU/OWIyMSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvYXBwLWhlYWRlci52dWU/ZmUxYiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlP2RjNGEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2hhbWJ1cmdlci1idXR0b24udnVlPzZmNDAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9hcHAtaG9tZS52dWU/MGQxMiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWU/YzE3YiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL21vZHVsZS1pdGVtLnZ1ZT9kMDljIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtYXZhLnZ1ZT83OTljIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnZ1ZT9hYmE2Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9jbGllbnQtaW5mby52dWU/MzllMiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvaGFtYnVyZ2VyLWJ1dHRvbi52dWU/MWY5MiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2FwcC1ob21lLnZ1ZT83MzFjIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvY29udGVudC1zZWN0aW9uLnZ1ZT9hNTI5Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvbW9kdWxlLWl0ZW0udnVlP2E5MWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtcGFnZS52dWU/M2U0OCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWU/MGJlOSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvYXBwLWhlYWRlci52dWU/ZDQwNiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlPzJiZmQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2hhbWJ1cmdlci1idXR0b24udnVlPzc5MzUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9hcHAtaG9tZS52dWU/NDJkNiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWU/YWRiOSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL21vZHVsZS1pdGVtLnZ1ZT9jZTY1Il0sIm5hbWVzIjpbImVtaXR0ZXJDb2xsZWN0aW9uIiwiTWFwIiwiRXZlbnRzRW1pdHRlciIsIm9uIiwiZXZlbnQiLCJoYW5kbGVyIiwiaGFuZGxlcnMiLCJoYXMiLCJvbGRIYW5kbGVycyIsImdldCIsInNldCIsInJlbW92ZSIsImZpbHRlciIsIml0ZW0iLCJlbWl0IiwiYXJncyIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImFsbCIsIm1hcCIsImV2ZW50c0VtaXR0ZXJXb3JrZXIiLCJjcmVhdGVFbWl0dGVyIiwibmFtZSIsImVtaXR0ZXIiLCJyZW1vdmVFbWl0dGVyIiwiZGVsZXRlIiwiZ2V0RW1pdHRlciIsInVwZGF0ZU1vZHVsZURhdGFTZXJ2aWNlIiwiY2xpZW50U3RvcmUiLCJTdG9yZVdvcmtlciIsImdldFN0b3JlIiwiY3VycmVudE1vZHVsZVN0b3JlIiwiY3VycmVudEJsb2Nrc1N0b3JlIiwiJG1vZHVsZSIsInN0YXRlIiwibW9kdWxlIiwiYWN0aW9ucyIsInVwZGF0ZU1vZHVsZSIsImJsb2NrcyIsImdldHRlcnMiLCJnZXRMaWtlQXJyYXkiLCJjdXJyZW50TW9kdWxlV29ya2VyIiwidXBkYXRlQ3VycmVudE1vZHVsZSIsImlzRmlyc3QiLCJ1cGRhdGVJc0ZpcnN0IiwidXBkYXRlTW9kdWxlRGF0YSIsImNoYW5nZU1vZHVsZSIsInVwZGF0ZSIsImNvbmZpZyIsImluaXQiLCJtb2R1bGVJbml0IiwiaGFzTW9kdWxlIiwib3V0cHV0TWVzc2FnZSIsIk91dHB1dE1lc3NhZ2UiLCJ0eXBlIiwic2VuZCIsIm1vZHVsZXMiLCJpbXBvcnRNb2R1bGUiLCIkaW1wb3J0IiwiZGVmYXVsdCIsIm1vZHVsZXNWaWV3U3RvcmUiLCJob21lIiwiaWNvbiIsImxhYmVsIiwiZnJhbWUiLCJub3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWE7QUFFYjs7OztBQUVBLE1BQU1BLGlCQUFpQixHQUFHLElBQUlDLEdBQUosRUFBMUI7O0FBRUEsTUFBTUMsYUFBTixDQUFvQjtBQUFBO0FBQUEsc0NBQ1IsSUFBSUQsR0FBSixFQURRO0FBQUE7O0FBRW5CRSxJQUFFLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQjtBQUNsQixRQUFJLEtBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkgsS0FBbEIsQ0FBSixFQUErQjtBQUM5QixVQUFJSSxXQUFXLEdBQUcsS0FBS0YsUUFBTCxDQUFjRyxHQUFkLENBQWtCTCxLQUFsQixDQUFsQjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0ksR0FBZCxDQUFrQk4sS0FBbEIsRUFBeUIsQ0FBQyxHQUFHSSxXQUFKLEVBQWlCSCxPQUFq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OztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHlsQkFBa1U7QUFDeFYsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxtbUJBQXVVO0FBQzdWLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsaWxCQUErVDtBQUNyViw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCtsQkFBc1U7QUFDNVYsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx1bEJBQWtVO0FBQ3hWLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGluaXQgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBlbWl0dGVyQ29sbGVjdGlvbiA9IG5ldyBNYXAoKTtcclxuXHJcbmNsYXNzIEV2ZW50c0VtaXR0ZXIge1xyXG5cdGhhbmRsZXJzID0gbmV3IE1hcCgpO1xyXG5cdG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcblx0XHRpZiggdGhpcy5oYW5kbGVycy5oYXMoZXZlbnQpICkge1xyXG5cdFx0XHRsZXQgb2xkSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzLmdldChldmVudCk7XHJcblx0XHRcdHRoaXMuaGFuZGxlcnMuc2V0KGV2ZW50LCBbLi4ub2xkSGFuZGxlcnMsIGhhbmRsZXJdKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5oYW5kbGVycy5zZXQoZXZlbnQsIFtoYW5kbGVyXSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRyZW1vdmUoZXZlbnQsIGhhbmRsZXIpIHtcclxuXHRcdGxldCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZ2V0KGV2ZW50KS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGhhbmRsZXIpO1xyXG5cdFx0dGhpcy5oYW5kbGVycy5zZXQoZXZlbnQsIGhhbmRsZXJzKTtcclxuXHR9XHJcblx0ZW1pdChldmVudCwgLi4uYXJncykge1xyXG5cdFx0aWYoICF0aGlzLmhhbmRsZXJzLmhhcyhldmVudCkgKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBldmVudCAnJHtldmVudH0nIGRpZG4ndCBhZGRgKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmhhbmRsZXJzLmdldChldmVudCkubWFwKChoYW5kbGVyKSA9PiB7XHJcblx0XHRcdHJldHVybiBoYW5kbGVyKC4uLmFyZ3MpXHJcblx0XHR9KSlcclxuXHR9XHJcbn1cclxuXHJcbi8qKiogaW5pdCBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGV2ZW50c0VtaXR0ZXJXb3JrZXIgPSB7XHJcblx0Y3JlYXRlRW1pdHRlcihuYW1lKSB7XHJcblx0XHRpZiggZW1pdHRlckNvbGxlY3Rpb24uaGFzKG5hbWUpICkgcmV0dXJuIGVtaXR0ZXJDb2xsZWN0aW9uLmdldChuYW1lKTtcclxuXHRcdFxyXG5cdFx0bGV0IGVtaXR0ZXIgPSBuZXcgRXZlbnRzRW1pdHRlcigpO1xyXG5cdFx0ZW1pdHRlckNvbGxlY3Rpb24uc2V0KG5hbWUsIGVtaXR0ZXIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZW1pdHRlcjtcclxuXHR9LFxyXG5cdHJlbW92ZUVtaXR0ZXIobmFtZSkge1xyXG5cdFx0aWYoICFlbWl0dGVyQ29sbGVjdGlvbi5oYXMobmFtZSkgKSByZXR1cm47XHJcblx0XHRlbWl0dGVyQ29sbGVjdGlvbi5kZWxldGUobmFtZSk7XHJcblx0fSxcclxuXHRcclxuXHRnZXRFbWl0dGVyKG5hbWUpIHtcclxuXHRcdHJldHVybiBlbWl0dGVyQ29sbGVjdGlvbi5oYXMobmFtZSkgPyBlbWl0dGVyQ29sbGVjdGlvbi5nZXQobmFtZSkgOiB0aGlzLmNyZWF0ZUVtaXR0ZXIobmFtZSlcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzRW1pdHRlcldvcmtlcjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGM1ZmU3ZTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmV0b3QtYXZhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmV0b3QtYXZhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGM1ZmU3ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkYzVmZTdlOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RjNWZlN2U4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RjNWZlN2U4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RjNWZlN2U4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRjNWZlN2U4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2RjNWZlN2U4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYXZhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYXZhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRjNWZlN2U4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYzVmZTdlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYXZhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzVmZTdlOCZzY29wZWQ9dHJ1ZSZcIiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1vZHVsZURhdGFTZXJ2aWNlKCkge1xyXG5cdGNvbnN0IGNsaWVudFN0b3JlID0gU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2NsaWVudCcpO1xyXG5cdGNvbnN0IGN1cnJlbnRNb2R1bGVTdG9yZSA9IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW1vZHVsZScpO1xyXG5cdGNvbnN0IGN1cnJlbnRCbG9ja3NTdG9yZSA9IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LWJsb2NrcycpO1xyXG5cdC8vIGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzU3RvcmUgPSBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1jYXRlZ29yaWVzJyk7XHJcblx0XHJcblx0Y29uc3Qge25hbWUsIC4uLiRtb2R1bGV9ID0gY3VycmVudE1vZHVsZVN0b3JlLnN0YXRlLm1vZHVsZTtcclxuXHRhd2FpdCBjbGllbnRTdG9yZS5hY3Rpb25zLnVwZGF0ZU1vZHVsZSh7XHJcblx0XHRuYW1lLFxyXG5cdFx0JG1vZHVsZToge1xyXG5cdFx0XHQuLi4kbW9kdWxlLFxyXG5cdFx0XHRibG9ja3M6IGN1cnJlbnRCbG9ja3NTdG9yZS5nZXR0ZXJzLmdldExpa2VBcnJheSgpLFxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVNb2R1bGVEYXRhU2VydmljZTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgT3V0cHV0TWVzc2FnZSBmcm9tICckZmV0b3Qtc2VydmljZXMvb3V0cHV0LW1lc3NhZ2UnO1xyXG5pbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG5pbXBvcnQgdXBkYXRlTW9kdWxlRGF0YSBmcm9tICcuLi9zZXJ2aWNlcy91cGRhdGUtbW9kdWxlLWRhdGEnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBjbGllbnRTdG9yZSA9IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjbGllbnQnKTtcclxuY29uc3QgY3VycmVudE1vZHVsZVN0b3JlID0gU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbW9kdWxlJyk7XHJcbi8vIGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzU3RvcmUgPSBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1jYXRlZ29yaWVzJyk7XHJcbmNvbnN0IGN1cnJlbnRCbG9ja3NTdG9yZSA9IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LWJsb2NrcycpO1xyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBjdXJyZW50TW9kdWxlV29ya2VyID0ge1xyXG5cdGFzeW5jIHVwZGF0ZUN1cnJlbnRNb2R1bGUobmFtZSkge1xyXG5cdFx0aWYoIGN1cnJlbnRNb2R1bGVTdG9yZS5nZXR0ZXJzLm5hbWUoKSA9PT0gbmFtZSApIHJldHVybiA7XHJcblx0XHRcclxuXHRcdGlmKCBjdXJyZW50TW9kdWxlU3RvcmUuc3RhdGUuaXNGaXJzdCApIGF3YWl0IGN1cnJlbnRNb2R1bGVTdG9yZS5hY3Rpb25zLnVwZGF0ZUlzRmlyc3QoKTtcclxuXHRcdGVsc2UgYXdhaXQgdXBkYXRlTW9kdWxlRGF0YSgpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBbJG1vZHVsZSwgYmxvY2tzXSA9IGF3YWl0IHRoaXMuY2hhbmdlTW9kdWxlKG5hbWUpO1xyXG5cdFx0XHJcblx0XHRjdXJyZW50QmxvY2tzU3RvcmUuYWN0aW9ucy51cGRhdGUoYmxvY2tzKTtcclxuXHRcdGN1cnJlbnRNb2R1bGVTdG9yZS5hY3Rpb25zLnVwZGF0ZSh7bmFtZSwgLi4uJG1vZHVsZX0pO1xyXG5cdFx0XHJcblx0XHQkbW9kdWxlLmNvbmZpZy5pbml0KCk7XHJcblx0fSxcclxuXHRcclxuXHRhc3luYyBjaGFuZ2VNb2R1bGUobmFtZSkge1xyXG5cdFx0Y29uc3QgbW9kdWxlSW5pdCA9IGF3YWl0IGNsaWVudFN0b3JlLmFjdGlvbnMuaGFzTW9kdWxlKG5hbWUpO1xyXG5cdFx0Y29uc3Qgb3V0cHV0TWVzc2FnZSA9IG5ldyBPdXRwdXRNZXNzYWdlKHt0eXBlOiAnY2hhbmdlLW1vZHVsZSd9KTtcclxuXHRcdFxyXG5cdFx0b3V0cHV0TWVzc2FnZS5zZXQoJyRtb2R1bGUnLCBuYW1lKTtcclxuXHRcdFxyXG5cdFx0aWYoICFtb2R1bGVJbml0ICkge1xyXG5cdFx0XHRvdXRwdXRNZXNzYWdlLnNlbmQoKTtcclxuXHRcdFx0cmV0dXJuIGNsaWVudFN0b3JlLnN0YXRlLm1vZHVsZXNbbmFtZV07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdG91dHB1dE1lc3NhZ2Uuc2V0KCdibG9ja3MnLCB0cnVlKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgY29uZmlnID0gYXdhaXQgaW1wb3J0TW9kdWxlKG5hbWUpO1xyXG5cdFx0Y29uc3Qge2Jsb2Nrc30gPSBhd2FpdCBvdXRwdXRNZXNzYWdlLnNlbmQoKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgJG1vZHVsZSA9IHsuLi5jbGllbnRTdG9yZS5zdGF0ZS5tb2R1bGVzW25hbWVdLCBjb25maWd9O1xyXG5cdFx0YXdhaXQgY2xpZW50U3RvcmUuYWN0aW9ucy51cGRhdGVNb2R1bGUoe25hbWUsICRtb2R1bGU6IHsuLi4kbW9kdWxlLCBibG9ja3N9fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBbJG1vZHVsZSwgYmxvY2tzXTtcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGltcG9ydE1vZHVsZShuYW1lKSB7XHJcblx0Y29uc3QgJGltcG9ydCA9IGF3YWl0IGltcG9ydChgLi4vLi4vbW9kdWxlcy8ke25hbWV9LmpzYCk7XHJcblx0cmV0dXJuICRpbXBvcnQuZGVmYXVsdDtcclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudE1vZHVsZVdvcmtlcjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbm90ZXMuanNcIjogW1xuXHRcdFwiLi9idWlsZC9hcHAtcGFnZS9tb2R1bGVzL25vdGVzLmpzXCIsXG5cdFx0MFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vYnVpbGQvYXBwLXBhZ2UvbW9kdWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBtb2R1bGVzVmlld1N0b3JlID0ge1xyXG5cdGhvbWU6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ05vdGVzJyxcclxuXHRcdFx0aWNvbjogJyYjeEU4MEM7JyxcclxuXHRcdFx0bGFiZWw6ICdub3RlcydcclxuXHRcdH0sXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdG5hbWU6ICdMaXN0cycsXHJcblx0XHQvLyBcdGljb246ICcmI3hFODA2OycsXHJcblx0XHQvLyBcdGxhYmVsOiAnbGlzdHMnXHJcblx0XHQvLyB9XHJcblx0XSxcclxuXHRmcmFtZToge1xyXG5cdFx0bm90ZXM6IHtcclxuXHRcdFx0aWNvbjogJyYjeEU4MEM7J1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVzVmlld1N0b3JlOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzYwNWNhZmEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FwcC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FwcC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzYwNWNhZmEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNjA1Y2FmYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM2MDVjYWZhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM2MDVjYWZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM2MDVjYWZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjA1Y2FmYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNjA1Y2FmYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2FwcC1oZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNjA1Y2FmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2MDVjYWZhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjA1Y2FmYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2xpZW50LWluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNzQ5N2ZmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2xpZW50LWluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyNzQ5N2ZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjI3NDk3ZmZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Mjc0OTdmZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Mjc0OTdmZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Mjc0OTdmZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2xpZW50LWluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNzQ5N2ZmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYyNzQ5N2ZmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc0OTdmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc0OTdmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2xpZW50LWluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNzQ5N2ZmJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZjkwNjkxMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjkwNjkxMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNmOTA2OTEyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2Y5MDY5MTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2Y5MDY5MTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2Y5MDY5MTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hhbWJ1cmdlci1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmOTA2OTEyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNmOTA2OTEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvaGFtYnVyZ2VyLWJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmOTA2OTEyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hhbWJ1cmdlci1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2Y5MDY5MTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hhbWJ1cmdlci1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmOTA2OTEyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjNiYzUzOGMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjNiYzUzOGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmM2JjNTM4Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YzYmM1MzhjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YzYmM1MzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YzYmM1MzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjNiYzUzOGMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjNiYzUzOGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvYXBwLWhvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mM2JjNTM4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mM2JjNTM4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzYmM1MzhjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZDY4MDljJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29udGVudC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4ZDY4MDljJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDhkNjgwOWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOGQ2ODA5YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOGQ2ODA5YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOGQ2ODA5YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29udGVudC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOGQ2ODA5YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOGQ2ODA5YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9jb250ZW50LXNlY3Rpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGQ2ODA5YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkNjgwOWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDhkNjgwOWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzY1NWVmNSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzY1NWVmNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFjNjU1ZWY1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWM2NTVlZjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWM2NTVlZjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWM2NTVlZjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzY1NWVmNSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzY1NWVmNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9tb2R1bGUtaXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kdWxlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kdWxlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjNjU1ZWY1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjNjU1ZWY1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2NTVlZjUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FwcC1wYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTFhNjY0MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hcHAtcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FwcC1wYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWExYTY2NDBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5YTFhNjY0MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5YTFhNjY0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5YTFhNjY0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXBwLXBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMWE2NjQwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzlhMWE2NjQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS92aWV3L2FwcC1wYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLXBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMWE2NjQwJnNjb3BlZD10cnVlJlwiIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJmZXRvdC1hdmEgYnI1MCBwciBmYyBjcFwiIDpzdHlsZT1cInNldFNpemVcIiBAY2xpY2suc3RvcD1cIiRlbWl0KCdmZXRvdC1hdmEtY2xpY2snKVwiPlxyXG4gICAge3sgc2V0Q2xpZW50TGV0dGVycyB9fVxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnZmV0b3QtYXZhJyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGZ1bGxuYW1lOiBTdHJpbmcsXHJcbiAgICAgIHNpemU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0ICAgIHNldENsaWVudExldHRlcnMoKSB7XHJcblx0ICAgIFx0bGV0IFtmaXJzdCwgc2Vjb25kXSA9IHRoaXMuZnVsbG5hbWUuc3BsaXQoJyAnKTtcclxuICAgICAgICBmaXJzdCA9IGZpcnN0ID8gZmlyc3RbMF0gOiAnJztcclxuICAgICAgICBzZWNvbmQgPSBzZWNvbmQgPyBzZWNvbmRbMF0gOiAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIChmaXJzdCArIHNlY29uZCkudG9VcHBlckNhc2UoKTtcclxuICAgICAgfSxcclxuICAgICAgc2V0U2l6ZSgpIHtcclxuXHQgICAgXHRsZXQgc2l6ZSA9IHRoaXMuc2l6ZSArICdweCc7XHJcblx0ICAgIFx0cmV0dXJuIHsgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWF2YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250OiAxOHB4ICdyb2JvdG8tbWVkaXVtJztcclxuICAgIEBpbmNsdWRlIHN0YXRpYy1zaGFkb3c7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgQGluY2x1ZGUgZnVsbC1zaXplcztcclxuICAgICAgQGluY2x1ZGUgcHNldmRvLWVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYXBwLWhlYWRlciBwclwiPlxyXG4gICAgPGhhbWJ1cmdlci1idXR0b24gOmFjdGl2ZT1cImlzQWN0aXZlXCIgQGhhbWJ1cmdlci1idXR0b24tY2xpY2s9XCJoYW1idXJnZXJCdXR0b25DbGlja0hhbmRsZXJcIi8+XHJcblxyXG4gICAgPHRyYW5zaXRpb24gbmFtZT1cImNoYW5nZS1tb2R1bGUtdGl0bGVcIiBtb2RlPVwib3V0LWluXCI+XHJcbiAgICAgIDxmZXRvdC10aXRsZT57eyBjdXJyZW50TW9kdWxlTmFtZSB9fTwvZmV0b3QtdGl0bGU+XHJcbiAgICA8L3RyYW5zaXRpb24+XHJcblxyXG4gICAgPGNsaWVudC1pbmZvPjwvY2xpZW50LWluZm8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdFRpdGxlIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvdGV4dC9mZXRvdC10aXRsZS52dWUnO1xyXG5cdGltcG9ydCBjbGllbnRJbmZvIGZyb20gJy4vY2xpZW50LWluZm8udnVlJztcclxuXHRpbXBvcnQgaGFtYnVyZ2VyQnV0dG9uIGZyb20gJy4vaGFtYnVyZ2VyLWJ1dHRvbi52dWUnO1xyXG5cclxuXHRpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdhcHAtaGVhZGVyJyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGlzQWN0aXZlOiBCb29sZWFuXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAnZmV0b3QtdGl0bGUnOiBmZXRvdFRpdGxlLFxyXG4gICAgICAnY2xpZW50LWluZm8nOiBjbGllbnRJbmZvLFxyXG5cdCAgICAnaGFtYnVyZ2VyLWJ1dHRvbic6IGhhbWJ1cmdlckJ1dHRvblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgaGFtYnVyZ2VyQnV0dG9uQ2xpY2tIYW5kbGVyKGlzQWN0aXZlKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnaGFtYnVyZ2VyLWJ1dHRvbi1jbGljaycsIGlzQWN0aXZlKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0Y3VycmVudE1vZHVsZU5hbWUoKSB7XHJcblx0XHRcdFx0Y29uc3QgbmFtZSA9IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW1vZHVsZScpLmdldHRlcnMubmFtZSgpO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlzQWN0aXZlIHx8ICFuYW1lID8gJycgOiBgJHtuYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtuYW1lLnNsaWNlKDEpfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmFwcC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gIC5mZXRvdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1jZW50ZXI7XHJcbiAgfVxyXG4gIC5oYW1idXJnZXItYnV0dG9uIHtcclxuICAgIGxlZnQ6IC03MnB4O1xyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24tdmVydC1jZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAgIGxlZnQ6IC00MnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtY2xvc2UgJiB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAuaXMtZmlyc3QtdGltZSAmIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgbGVmdDogLTIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2hhbmdlLW1vZHVsZS10aXRsZSB7XHJcbiAgICAmLWVudGVyLXRvLCAmLWxlYXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgICYtbGVhdmUtdG8sICYtZW50ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsaWVudC1pbmZvIHBhIGZhaWNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3sgY2xpZW50LmZ1bGxuYW1lIH19PC9kaXY+XHJcbiAgICA8ZmV0b3QtYXZhIEBmZXRvdC1hdmEtY2xpY2s9XCJcIiA6ZnVsbG5hbWU9XCJjbGllbnQuZnVsbG5hbWVcIiBzaXplPVwiNDZcIi8+XHJcblxyXG48IS0tICAgIDxtZW51LWNvbXBvbmVudCB2LWlmPVwiaXNNZW51T3BlblwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgIDpzdWJtZW51PVwic3VibWVudVwiIDpsaXN0PVwiYXBwTWVudVNlcnZpY2UubGlzdFwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgIEBtZW51LWV2ZW50PVwibWVudUV2ZW50SGFuZGxlclwiPi0tPlxyXG48IS0tICAgIDwvbWVudS1jb21wb25lbnQ+LS0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdEF2YSBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWUnO1xyXG5cdC8vIGltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gJy4uL21lbnUvbWVudS1jb21wb25lbnQudnVlJztcclxuXHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnY2xpZW50LWluZm8nLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjbGllbnQ6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjbGllbnQnKS5zdGF0ZS5jb25maWcsXHJcblxyXG4gICAgICAgIGlzTWVudU9wZW46IGZhbHNlLFxyXG5cdFx0XHRcdGFwcE1lbnVTZXJ2aWNlOiBudWxsLFxyXG4gICAgICAgIHN1Ym1lbnU6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnZmV0b3QtYXZhJzogZmV0b3RBdmEsXHJcbiAgICAgIC8vICdtZW51LWNvbXBvbmVudCc6IG1lbnVDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7fSxcclxuICAgIG1vdW50ZWQoKSB7fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAuY2xpZW50LWluZm8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5mZXRvdC1hdmEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIC5uYW1lIHtcclxuICAgIGNvbG9yOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgZm9udDogMThweCAncm9ib3RvLW1lZGl1bSc7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtY2xvc2UgJiB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tZW51LWNvbXBvbmVudCB7XHJcbiAgICB0b3A6IDEyNSU7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJoYW1idXJnZXItYnV0dG9uIGNwIHBhXCIgOmNsYXNzPVwiaXNBY3RpdmVcIiBAY2xpY2s9XCJjbGlja0hhbmRsZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdCBwYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0IHBjXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXQgcGFcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2hhbWJ1cmdlci1idXR0b24nLFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0YWN0aXZlOiBCb29sZWFuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdFx0XHRjbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnaGFtYnVyZ2VyLWJ1dHRvbi1jbGljaycsIHRoaXMuYWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGlzQWN0aXZlKCkge1xyXG5cdFx0XHRcdHJldHVybiB7ICdpcy1hY3RpdmUnOiB0aGlzLmFjdGl2ZSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmhhbWJ1cmdlci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIC5pdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDEpLCAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogN3B4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWJ1dHRvbiB7XHJcbiAgICAmOmhvdmVyIC5pdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICAuaXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgIGJvdHRvbTogY2FsYygxMDAlIC0gNXB4KTtcclxuICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhcHAtaG9tZSBiZy1mZmYgcGEgYnMgaG92ZXJfaG92LXNoXCIgOmNsYXNzPVwic3RhdGVzXCI+XHJcbiAgICA8YXBwLWhlYWRlciA6aXNBY3RpdmU9XCJzdGF0ZXNbJ2lzLWFjdGl2ZSddXCIgQGhhbWJ1cmdlci1idXR0b24tY2xpY2s9XCJoYW1idXJnZXJCdXR0b25DbGlja0hhbmRsZXJcIi8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImhvbWUgZmxleCBicyBwYVwiPlxyXG4gICAgICA8Y29udGVudC1zZWN0aW9uPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dGl0bGU+TW9kdWxlczwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjb250ZW50PlxyXG4gICAgICAgICAgPG1vZHVsZS1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBtb2R1bGVzVmlld1N0b3JlLmhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiIDppdGVtPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgQG1vZHVsZS1pdGVtLWNsaWNrPVwibW9kdWxlSXRlbUNsaWNrSGFuZGxlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvY29udGVudC1zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGZldG90LWNsb3NlLWJ1dHRvbiBAZmV0b3QtY2xvc2UtYnV0dG9uLWNsaWNrPVwiY2xvc2VCdXR0b25DbGlja0hhbmRsZXJcIj5jbG9zZSBob21lPC9mZXRvdC1jbG9zZS1idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBmZXRvdENsb3NlQnV0dG9uIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jbG9zZS1idXR0b24udnVlJztcclxuXHJcbiAgaW1wb3J0IGFwcEhlYWRlciBmcm9tICcuLi9hcHAtaGVhZGVyL2FwcC1oZWFkZXIudnVlJztcclxuICBpbXBvcnQgY29udGVudFNlY3Rpb24gZnJvbSAnLi9jb250ZW50LXNlY3Rpb24udnVlJztcclxuICBpbXBvcnQgbW9kdWxlSXRlbSBmcm9tICcuL21vZHVsZS1pdGVtLnZ1ZSc7XHJcblxyXG4gIGltcG9ydCBtb2R1bGVzVmlld1N0b3JlIGZyb20gJy4uLy4uL3N0b3JlL21vZHVsZXMtdmlldy1zdG9yZSc7XHJcbiAgaW1wb3J0IGN1cnJlbnRNb2R1bGVXb3JrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93b3JrZXJzL2N1cnJlbnQtbW9kdWxlLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdhcHAtaG9tZScsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXRlczoge1xyXG5cdFx0XHRcdFx0J2lzLWNsb3NlJzogZmFsc2UsXHJcblx0XHRcdFx0XHQnaXMtYWN0aXZlJzogdHJ1ZSxcclxuICAgICAgICAgICdpcy1maXJzdC10aW1lJzogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kdWxlc1ZpZXdTdG9yZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnZmV0b3QtY2xvc2UtYnV0dG9uJzogZmV0b3RDbG9zZUJ1dHRvbixcclxuXHQgICAgJ2FwcC1oZWFkZXInOiBhcHBIZWFkZXIsXHJcbiAgICAgICdtb2R1bGUtaXRlbSc6IG1vZHVsZUl0ZW0sXHJcbiAgICAgICdjb250ZW50LXNlY3Rpb24nOiBjb250ZW50U2VjdGlvblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgaGFtYnVyZ2VyQnV0dG9uQ2xpY2tIYW5kbGVyKGlzQWN0aXZlKSB7XHJcblx0ICAgIFx0aXNBY3RpdmUgPyB0aGlzLmNsb3NlSG9tZSgpIDogdGhpcy5vcGVuSG9tZSgpXHJcbiAgICAgIH0sXHJcblx0ICAgIG1vZHVsZUl0ZW1DbGlja0hhbmRsZXIobmFtZSkge1xyXG5cdFx0ICAgIGN1cnJlbnRNb2R1bGVXb3JrZXIudXBkYXRlQ3VycmVudE1vZHVsZShuYW1lKTtcclxuXHQgICAgXHR0aGlzLmNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyKCk7XHJcbiAgICAgIH0sXHJcblx0XHRcdGNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0XHRcdGlmKCB0aGlzLnN0YXRlc1snaXMtZmlyc3QtdGltZSddICkgdGhpcy5zdGF0ZXNbJ2lzLWZpcnN0LXRpbWUnXSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xvc2VIb21lKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlSG9tZSgpIHtcclxuXHQgICAgICB0aGlzLnN0YXRlc1snaXMtY2xvc2UnXSA9IHRydWU7XHJcblx0ICAgICAgdGhpcy5zdGF0ZXNbJ2lzLWFjdGl2ZSddID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5Ib21lKCkge1xyXG5cdCAgICAgIHRoaXMuc3RhdGVzWydpcy1jbG9zZSddID0gZmFsc2U7XHJcblx0ICAgICAgdGhpcy5zdGF0ZXNbJ2lzLWFjdGl2ZSddID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAuYXBwLWhvbWUge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTA2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBAaW5jbHVkZSBzdGF0aWMtc2hhZG93O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxOXB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICBwYWRkaW5nOiAzNnB4IDEyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAzNnB4IDcycHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAzNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxOXB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5pcy1maXJzdC10aW1lIC5mZXRvdC1jbG9zZS1idXR0b24ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBib3R0b206IC0yMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmlzLWNsb3NlIHtcclxuICAgICAgLmZldG90LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAuaG9tZSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgIHRvcDogLTYwdmg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaG9tZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTZweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE5MnB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsZWZ0OiAxMjhweDtcclxuICAgIHRvcDogMTU2cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDRweCk7XHJcbiAgICAgIGxlZnQ6IDcycHg7XHJcbiAgICAgIHRvcDogMTA2cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTlweCkge1xyXG4gICAgICB0b3A6IDkycHg7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1zZWN0aW9uIHByXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUgcGFcIj5cclxuICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBmbGV4IGZ1bGwgYnNcIj5cclxuICAgICAgPHNsb3QgbmFtZT1cImNvbnRlbnRcIj48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2NvbnRlbnQtc2VjdGlvbidcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAyMHB4IDA7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTlweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAkZmV0b3QtZGFyay1ncmF5O1xyXG4gICAgZm9udDogMThweCAncm9ib3RvLWJvbGQnO1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibW9kdWxlLWl0ZW0gY3AgZmNjIGJyNnB4IGhvdmVyX2hvdi1zaFwiIEBjbGljaz1cIiRlbWl0KCdtb2R1bGUtaXRlbS1jbGljaycsIGl0ZW0ubGFiZWwpXCI+XHJcbiAgICA8ZmV0b3QtaWNvbiA6aWNvbj1cIml0ZW0uaWNvblwiPjwvZmV0b3QtaWNvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3sgaXRlbS5uYW1lIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdEljb24gZnJvbSAnJGZldG90LXZpZXctY29tcG9uZW50cy9pY29ucy9mZXRvdC1pY29uLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdtb2R1bGUtaXRlbScsXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRpdGVtOiBPYmplY3RcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1pY29uJzogZmV0b3RJY29uXHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5tb2R1bGUtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICRmZXRvdC1kYXJrLWJsdWU7XHJcbiAgICBmb250OiAyNHB4ICdyb2JvdG8tbWVkaXVtJztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBAaW5jbHVkZSBib3gtc2l6aW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC5mZXRvdC1pY29uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYXBwLXBhZ2UgcHIgZnVsbFwiIHJlZj1cInBhZ2VcIj5cclxuICAgIDxhcHAtaG9tZT48L2FwcC1ob21lPlxyXG4gICAgPGNvbXBvbmVudCA6aXM9XCJjdXJyZW50TW9kdWxlQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XHJcblxyXG4gICAgPG1vZGFsLWNvbnRhaW5lciB2LWlmPVwiaXNNb2RhbE9wZW5cIiA6b3B0aW9ucz1cIm1vZGFsT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBjbG9zZS1tb2RhbC1ldmVudD1cImNsb3NlTW9kYWxFdmVudEhhbmRsZXJcIj5cclxuXHJcbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bW9kYWwtY29udGVudD5cclxuICAgICAgICA8Y29tcG9uZW50IDppcz1cIm1vZGFsQ29udGVudENvbXBvbmVudFwiPjwvY29tcG9uZW50PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDptb2RhbC1mb290ZXI+XHJcbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJtb2RhbEZvb3RlckNvbXBvbmVudFwiPjwvY29tcG9uZW50PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9tb2RhbC1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBhcHBIb21lIGZyb20gJy4vYXBwLWhvbWUvYXBwLWhvbWUudnVlJztcclxuICBpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG4gIGltcG9ydCBldmVudHNFbWl0dGVyV29ya2VyIGZyb20gJyRmZXRvdC1ldmVudHMtZW1pdHRlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdhcHAtcGFnZScsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzTW9kYWxPcGVuOiBmYWxzZSxcclxuXHJcblx0XHRcdFx0bW9kYWxPcHRpb25zOiB7fSxcclxuICAgICAgICBtb2RhbENvbnRlbnRDb21wb25lbnQ6ICcnLFxyXG4gICAgICAgIG1vZGFsRm9vdGVyQ29tcG9uZW50OiAnJyxcclxuXHJcbiAgICAgICAgYXBwRXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdhcHAnKSxcclxuXHJcbiAgICAgICAgZG9jdW1lbnRXaWR0aDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2FwcC1ob21lJzogYXBwSG9tZVxyXG5cdFx0fSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHRcdFx0b3Blbk1vZGFsRXZlbnRIYW5kbGVyKHtvcHRpb25zLCBjb250ZW50Q29tcG9uZW50LCBmb290ZXJDb21wb25lbnR9KSB7XHJcblx0XHRcdFx0dGhpcy5tb2RhbE9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0XHRcdHRoaXMubW9kYWxDb250ZW50Q29tcG9uZW50ID0gY29udGVudENvbXBvbmVudDtcclxuXHRcdFx0XHR0aGlzLm1vZGFsRm9vdGVyQ29tcG9uZW50ID0gZm9vdGVyQ29tcG9uZW50O1xyXG5cclxuXHRcdFx0XHR0aGlzLmlzTW9kYWxPcGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmFwcEV2ZW50c0VtaXR0ZXIub24oJ2Nsb3NlLW1vZGFsLWV2ZW50JywgdGhpcy5jbG9zZU1vZGFsRXZlbnRIYW5kbGVyKVxyXG4gICAgICB9LFxyXG5cdCAgICBjbG9zZU1vZGFsRXZlbnRIYW5kbGVyKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNNb2RhbE9wZW4gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmFwcEV2ZW50c0VtaXR0ZXIucmVtb3ZlKCdjbG9zZS1tb2RhbC1ldmVudCcsIHRoaXMuY2xvc2VNb2RhbEV2ZW50SGFuZGxlcilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0ICAgIGN1cnJlbnRNb2R1bGVDb21wb25lbnQoKSB7XHJcblx0ICAgIFx0cmV0dXJuIFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW1vZHVsZScpLmdldHRlcnMuY29uZmlnQnlLZXkoJ3ZpZXcnKSB8fCAnJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgIHdpbmRvdy5vbnJlc2l6ZSA9IFN0b3JlV29ya2VyLmdldFN0b3JlKCdwYWdlJykuYWN0aW9ucy51cGRhdGVEb2N1bWVudFdpZHRoO1xyXG5cdFx0XHR0aGlzLmFwcEV2ZW50c0VtaXR0ZXIub24oJ29wZW4tbW9kYWwtZXZlbnQnLCB0aGlzLm9wZW5Nb2RhbEV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5mZXRvdC1hdmFbZGF0YS12LWRjNWZlN2U4XSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA0NDY2O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250OiAxOHB4ICdyb2JvdG8tbWVkaXVtJztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDU3LCA2MiwgNzAsIDAuNCk7XFxufVxcbi5mZXRvdC1hdmFbZGF0YS12LWRjNWZlN2U4XTo6YWZ0ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uYXBwLWhlYWRlcltkYXRhLXYtMzYwNWNhZmFdIHtcXG4gIGhlaWdodDogNDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5mZXRvdC10aXRsZVtkYXRhLXYtMzYwNWNhZmFdIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5oYW1idXJnZXItYnV0dG9uW2RhdGEtdi0zNjA1Y2FmYV0ge1xcbiAgbGVmdDogLTcycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuLmhhbWJ1cmdlci1idXR0b25bZGF0YS12LTM2MDVjYWZhXSB7XFxuICAgICAgbGVmdDogLTQycHg7XFxufVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xcbi5oYW1idXJnZXItYnV0dG9uW2RhdGEtdi0zNjA1Y2FmYV0ge1xcbiAgICAgIGxlZnQ6IDA7XFxufVxcbn1cXG4uaXMtY2xvc2UgLmhhbWJ1cmdlci1idXR0b25bZGF0YS12LTM2MDVjYWZhXSB7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5pcy1maXJzdC10aW1lIC5oYW1idXJnZXItYnV0dG9uW2RhdGEtdi0zNjA1Y2FmYV0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBsZWZ0OiAtMjAwcHg7XFxufVxcbi5jaGFuZ2UtbW9kdWxlLXRpdGxlLWVudGVyLXRvW2RhdGEtdi0zNjA1Y2FmYV0sIC5jaGFuZ2UtbW9kdWxlLXRpdGxlLWxlYXZlW2RhdGEtdi0zNjA1Y2FmYV0ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmNoYW5nZS1tb2R1bGUtdGl0bGUtbGVhdmUtdG9bZGF0YS12LTM2MDVjYWZhXSwgLmNoYW5nZS1tb2R1bGUtdGl0bGUtZW50ZXJbZGF0YS12LTM2MDVjYWZhXSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmNsaWVudC1pbmZvW2RhdGEtdi02Mjc0OTdmZl0ge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5mZXRvdC1hdmFbZGF0YS12LTYyNzQ5N2ZmXSB7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG59XFxuLm5hbWVbZGF0YS12LTYyNzQ5N2ZmXSB7XFxuICBjb2xvcjogIzAwNDQ2NjtcXG4gIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xcbi5uYW1lW2RhdGEtdi02Mjc0OTdmZl0ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbn1cXG4uaXMtY2xvc2UgLm5hbWVbZGF0YS12LTYyNzQ5N2ZmXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5tZW51LWNvbXBvbmVudFtkYXRhLXYtNjI3NDk3ZmZdIHtcXG4gIHRvcDogMTI1JTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmhhbWJ1cmdlci1idXR0b25bZGF0YS12LTNmOTA2OTEyXSB7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuLml0W2RhdGEtdi0zZjkwNjkxMl0ge1xcbiAgYmFja2dyb3VuZDogIzAwNDQ2NjtcXG4gIGhlaWdodDogM3B4O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLml0W2RhdGEtdi0zZjkwNjkxMl06bnRoLWNoaWxkKDEpLCAuaXRbZGF0YS12LTNmOTA2OTEyXTpudGgtY2hpbGQoMykge1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4uaXRbZGF0YS12LTNmOTA2OTEyXTpudGgtY2hpbGQoMSkge1xcbiAgICB0b3A6IDdweDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcbi5pdFtkYXRhLXYtM2Y5MDY5MTJdOm50aC1jaGlsZCgyKSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uaXRbZGF0YS12LTNmOTA2OTEyXTpudGgtY2hpbGQoMykge1xcbiAgICBib3R0b206IDdweDtcXG4gICAgbGVmdDogMDtcXG59XFxuLmhhbWJ1cmdlci1idXR0b246aG92ZXIgLml0W2RhdGEtdi0zZjkwNjkxMl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5oYW1idXJnZXItYnV0dG9uLmlzLWFjdGl2ZSAuaXRbZGF0YS12LTNmOTA2OTEyXSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmhhbWJ1cmdlci1idXR0b24uaXMtYWN0aXZlIC5pdFtkYXRhLXYtM2Y5MDY5MTJdOm50aC1jaGlsZCgyKSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5oYW1idXJnZXItYnV0dG9uLmlzLWFjdGl2ZSAuaXRbZGF0YS12LTNmOTA2OTEyXTpudGgtY2hpbGQoMSkge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHRvcDogMnB4O1xcbiAgICByaWdodDogNXB4O1xcbn1cXG4uaGFtYnVyZ2VyLWJ1dHRvbi5pcy1hY3RpdmUgLml0W2RhdGEtdi0zZjkwNjkxMl06bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgYm90dG9tOiBjYWxjKDEwMCUgLSA1cHgpO1xcbiAgICBsZWZ0OiA1cHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uYXBwLWhvbWVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDZweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDU3LCA2MiwgNzAsIDAuNCk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxOXB4KSB7XFxuLmFwcC1ob21lW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgICAgIHBhZGRpbmc6IDEycHg7XFxufVxcbn1cXG4uYXBwLWhvbWUuaXMtYWN0aXZlW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgICBwYWRkaW5nOiAzNnB4IDEyOHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbi5hcHAtaG9tZS5pcy1hY3RpdmVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgICAgICBwYWRkaW5nOiAzNnB4IDcycHg7XFxufVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xcbi5hcHAtaG9tZS5pcy1hY3RpdmVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgICAgICBwYWRkaW5nOiAzNnB4O1xcbn1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE5cHgpIHtcXG4uYXBwLWhvbWUuaXMtYWN0aXZlW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgICAgICAgcGFkZGluZzogMjRweDtcXG59XFxufVxcbi5hcHAtaG9tZS5pcy1maXJzdC10aW1lIC5mZXRvdC1jbG9zZS1idXR0b25bZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvdHRvbTogLTIwMHB4O1xcbn1cXG4uYXBwLWhvbWUuaXMtY2xvc2UgLmZldG90LWNsb3NlLWJ1dHRvbltkYXRhLXYtZjNiYzUzOGNdIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLmFwcC1ob21lLmlzLWNsb3NlIC5ob21lW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRvcDogLTYwdmg7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5ob21lW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgcGFkZGluZy10b3A6IDMycHg7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjU2cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxOTJweCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGVmdDogMTI4cHg7XFxuICB0b3A6IDE1NnB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4uaG9tZVtkYXRhLXYtZjNiYzUzOGNdIHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTQ0cHgpO1xcbiAgICAgIGxlZnQ6IDcycHg7XFxuICAgICAgdG9wOiAxMDZweDtcXG59XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuLmhvbWVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBsZWZ0OiAyNHB4O1xcbn1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE5cHgpIHtcXG4uaG9tZVtkYXRhLXYtZjNiYzUzOGNdIHtcXG4gICAgICB0b3A6IDkycHg7XFxufVxcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmNvbnRlbnQtc2VjdGlvbltkYXRhLXYtMDhkNjgwOWNdIHtcXG4gIG1hcmdpbjogMCAxMHB4IDIwcHggMDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcXG4uY29udGVudC1zZWN0aW9uW2RhdGEtdi0wOGQ2ODA5Y10ge1xcbiAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcXG4gICAgICB3aWR0aDogMzIwcHg7XFxufVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTlweCkge1xcbi5jb250ZW50LXNlY3Rpb25bZGF0YS12LTA4ZDY4MDljXSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxufVxcbn1cXG4udGl0bGVbZGF0YS12LTA4ZDY4MDljXSB7XFxuICBjb2xvcjogIzM5M0U0NjtcXG4gIGZvbnQ6IDE4cHggJ3JvYm90by1ib2xkJztcXG4gIHRvcDogLTMwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uY29udGVudFtkYXRhLXYtMDhkNjgwOWNdIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xcbi5jb250ZW50W2RhdGEtdi0wOGQ2ODA5Y10ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLm1vZHVsZS1pdGVtW2RhdGEtdi0xYzY1NWVmNV0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDA0NDY2O1xcbiAgZm9udDogMjRweCAncm9ib3RvLW1lZGl1bSc7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuLm1vZHVsZS1pdGVtW2RhdGEtdi0xYzY1NWVmNV0ge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDY0cHg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxufVxcbi5tb2R1bGUtaXRlbSAuZmV0b3QtaWNvbltkYXRhLXYtMWM2NTVlZjVdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xcbi5tb2R1bGUtaXRlbSAuZmV0b3QtaWNvbltkYXRhLXYtMWM2NTVlZjVdIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxufVxcblwiLCBcIlwiXSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmV0b3QtYXZhIGJyNTAgcHIgZmMgY3BcIixcbiAgICAgIHN0eWxlOiBfdm0uc2V0U2l6ZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZmV0b3QtYXZhLWNsaWNrXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtfdm0uX3YoXCJcXG4gIFwiICsgX3ZtLl9zKF92bS5zZXRDbGllbnRMZXR0ZXJzKSArIFwiXFxuXCIpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwLWhlYWRlciBwclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoYW1idXJnZXItYnV0dG9uXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgYWN0aXZlOiBfdm0uaXNBY3RpdmUgfSxcbiAgICAgICAgb246IHsgXCJoYW1idXJnZXItYnV0dG9uLWNsaWNrXCI6IF92bS5oYW1idXJnZXJCdXR0b25DbGlja0hhbmRsZXIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiY2hhbmdlLW1vZHVsZS10aXRsZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgW19jKFwiZmV0b3QtdGl0bGVcIiwgW192bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnRNb2R1bGVOYW1lKSldKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjbGllbnQtaW5mb1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2xpZW50LWluZm8gcGEgZmFpY1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNsaWVudC5mdWxsbmFtZSkpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmZXRvdC1hdmFcIiwge1xuICAgICAgICBhdHRyczogeyBmdWxsbmFtZTogX3ZtLmNsaWVudC5mdWxsbmFtZSwgc2l6ZTogXCI0NlwiIH0sXG4gICAgICAgIG9uOiB7IFwiZmV0b3QtYXZhLWNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge30gfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoYW1idXJnZXItYnV0dG9uIGNwIHBhXCIsXG4gICAgICBjbGFzczogX3ZtLmlzQWN0aXZlLFxuICAgICAgb246IHsgY2xpY2s6IF92bS5jbGlja0hhbmRsZXIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdCBwYVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXQgcGNcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0IHBhXCIgfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhcHAtaG9tZSBiZy1mZmYgcGEgYnMgaG92ZXJfaG92LXNoXCIsIGNsYXNzOiBfdm0uc3RhdGVzIH0sXG4gICAgW1xuICAgICAgX2MoXCJhcHAtaGVhZGVyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaXNBY3RpdmU6IF92bS5zdGF0ZXNbXCJpcy1hY3RpdmVcIl0gfSxcbiAgICAgICAgb246IHsgXCJoYW1idXJnZXItYnV0dG9uLWNsaWNrXCI6IF92bS5oYW1idXJnZXJCdXR0b25DbGlja0hhbmRsZXIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZSBmbGV4IGJzIHBhXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiY29udGVudC1zZWN0aW9uXCIsIHtcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfdm0uX3YoXCJNb2R1bGVzXCIpXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5fbChfdm0ubW9kdWxlc1ZpZXdTdG9yZS5ob21lLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJtb2R1bGUtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJtb2R1bGUtaXRlbS1jbGlja1wiOiBfdm0ubW9kdWxlSXRlbUNsaWNrSGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZldG90LWNsb3NlLWJ1dHRvblwiLFxuICAgICAgICB7IG9uOiB7IFwiZmV0b3QtY2xvc2UtYnV0dG9uLWNsaWNrXCI6IF92bS5jbG9zZUJ1dHRvbkNsaWNrSGFuZGxlciB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJjbG9zZSBob21lXCIpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtc2VjdGlvbiBwclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHBhXCIgfSwgW192bS5fdChcInRpdGxlXCIpXSwgMiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgZmxleCBmdWxsIGJzXCIgfSwgW192bS5fdChcImNvbnRlbnRcIildLCAyKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtb2R1bGUtaXRlbSBjcCBmY2MgYnI2cHggaG92ZXJfaG92LXNoXCIsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcIm1vZHVsZS1pdGVtLWNsaWNrXCIsIF92bS5pdGVtLmxhYmVsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImZldG90LWljb25cIiwgeyBhdHRyczogeyBpY29uOiBfdm0uaXRlbS5pY29uIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubmFtZSkpXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHJlZjogXCJwYWdlXCIsIHN0YXRpY0NsYXNzOiBcImFwcC1wYWdlIHByIGZ1bGxcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiYXBwLWhvbWVcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoX3ZtLmN1cnJlbnRNb2R1bGVDb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc01vZGFsT3BlblxuICAgICAgICA/IF9jKFwibW9kYWwtY29udGFpbmVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IF92bS5tb2RhbE9wdGlvbnMgfSxcbiAgICAgICAgICAgIG9uOiB7IFwiY2xvc2UtbW9kYWwtZXZlbnRcIjogX3ZtLmNsb3NlTW9kYWxFdmVudEhhbmRsZXIgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwibW9kYWwtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKF92bS5tb2RhbENvbnRlbnRDb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwibW9kYWwtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoX3ZtLm1vZGFsRm9vdGVyQ29tcG9uZW50LCB7IHRhZzogXCJjb21wb25lbnRcIiB9KV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgIDE4NjA1NDIxODVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGM1ZmU3ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiZGU3ZDE1MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGM1ZmU3ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYzVmZTdlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2MDVjYWZhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWRhMTdmOGVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNjA1Y2FmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNjA1Y2FmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc0OTdmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZlZjhhYTc1XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyNzQ5N2ZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc0OTdmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmOTA2OTEyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjgxMDc4YzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjkwNjkxMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjkwNjkxMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mM2JjNTM4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImZhZDQ2MTk2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1ob21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYzYmM1MzhjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mM2JjNTM4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkNjgwOWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzN2VjYzNlOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkNjgwOWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGQ2ODA5YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzY1NWVmNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQ4NDQzZTgwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjNjU1ZWY1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzY1NWVmNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9