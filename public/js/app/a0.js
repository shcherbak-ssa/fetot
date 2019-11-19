(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/components/events-emitter.js":
/*!******************************************!*\
  !*** ./app/components/events-emitter.js ***!
  \******************************************/
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

/*** imports [begin] ***/



/*** imports [end] ***/

/*** src [begin] ***/

const clientStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('client');
const currentModuleStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-module');
const currentCategoriesStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-categories');
const currentBlocksStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-blocks');
/*** src [end] ***/

/*** exports [begin] ***/

const currentModuleWorker = {
  async updateCurrentModule(name) {
    if (currentModuleStore.state.name === name) return;
    const {
      categories,
      config,
      blocks
    } = await this.changeModule(name);
    currentModuleStore.actions.update({
      name,
      config
    });
    currentCategoriesStore.actions.update(categories);
    currentBlocksStore.actions.update(blocks);
    config.init();
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
    const {
      categories
    } = clientStore.state.modules[name];
    const config = await importModule(name);
    const {
      blocks
    } = await outputMessage.send();
    const $module = {
      categories,
      config,
      blocks
    };
    await clientStore.actions.updateModule({
      name,
      $module
    });
    return $module;
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
		1
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
      const name = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_3__["default"].getStore('current-module').state.name;
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
/* harmony import */ var $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $fetot-events-emitter */ "./app/components/events-emitter.js");
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
      appEventsEmitter: $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].getEmitter('app')
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
      return $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-module').state.config.view || '';
    }

  },

  mounted() {
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
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.module-item[data-v-1c655ef5] {\n  background: #fff;\n  color: #004466;\n  font: 24px 'roboto-medium';\n  width: 100px;\n  height: 100px;\n  margin: 0 20px 20px 0;\n  justify-content: center;\n  transition: .2s;\n  box-shadow: 0 2px 4px rgba(57, 62, 70, 0.4);\n}\n@media screen and (max-width: 670px) {\n.module-item[data-v-1c655ef5] {\n      font-size: 20px;\n      width: 100%;\n      height: 64px;\n      flex-direction: row;\n      justify-content: left;\n      padding: 15px;\n      margin-right: 0;\n      box-sizing: border-box;\n}\n}\n.module-item .fetot-icon[data-v-1c655ef5] {\n    margin-bottom: 5px;\n}\n@media screen and (max-width: 670px) {\n.module-item .fetot-icon[data-v-1c655ef5] {\n        margin: 0 10px 0 0;\n        font-size: 20px;\n}\n}\n", ""]);


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
    { staticClass: "app-page pr full" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9ldmVudHMtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1hdmEudnVlPzFhNGYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1hdmEudnVlP2VkNmIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1hdmEudnVlPzc1ODMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy93b3JrZXJzL2N1cnJlbnQtbW9kdWxlLXdvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9tb2R1bGVzIGxhenkgXlxcLlxcLy4qXFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvc3RvcmUvbW9kdWxlcy12aWV3LXN0b3JlLmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvYXBwLWhlYWRlci52dWU/OGFmOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvYXBwLWhlYWRlci52dWU/MGRmMCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvYXBwLWhlYWRlci52dWU/MWZlYyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9jbGllbnQtaW5mby52dWU/NjU2YiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlPzNmYmUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2NsaWVudC1pbmZvLnZ1ZT9mM2FkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9oYW1idXJnZXItYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvaGFtYnVyZ2VyLWJ1dHRvbi52dWU/NzNmNSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvaGFtYnVyZ2VyLWJ1dHRvbi52dWU/ZDJhMSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvaGFtYnVyZ2VyLWJ1dHRvbi52dWU/ODJhYiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2FwcC1ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2FwcC1ob21lLnZ1ZT8wZjc0Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvYXBwLWhvbWUudnVlP2E5NzUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9hcHAtaG9tZS52dWU/YzY5NiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9jb250ZW50LXNlY3Rpb24udnVlP2U3OGYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9jb250ZW50LXNlY3Rpb24udnVlPzM3NjkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9jb250ZW50LXNlY3Rpb24udnVlP2U1MmMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9tb2R1bGUtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9tb2R1bGUtaXRlbS52dWU/YjM5YiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL21vZHVsZS1pdGVtLnZ1ZT9lOWQzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvbW9kdWxlLWl0ZW0udnVlP2IxYWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtcGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtcGFnZS52dWU/MGY1MyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1wYWdlLnZ1ZT9mYmU1Iiwid2VicGFjazovLy9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2NsaWVudC1pbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2hhbWJ1cmdlci1idXR0b24udnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2FwcC1ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9jb250ZW50LXNlY3Rpb24udnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL21vZHVsZS1pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtcGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1hdmEudnVlPzliMjEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2FwcC1oZWFkZXIudnVlP2ZlMWIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2NsaWVudC1pbmZvLnZ1ZT9kYzRhIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9oYW1idXJnZXItYnV0dG9uLnZ1ZT82ZjQwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvYXBwLWhvbWUudnVlPzBkMTIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9jb250ZW50LXNlY3Rpb24udnVlP2MxN2IiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9tb2R1bGUtaXRlbS52dWU/ZDA5YyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWU/Nzk5YyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvYXBwLWhlYWRlci52dWU/YWJhNiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1oZWFkZXIvY2xpZW50LWluZm8udnVlPzM5ZTIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2hhbWJ1cmdlci1idXR0b24udnVlPzFmOTIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9hcHAtaG9tZS52dWU/NzMxYyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2NvbnRlbnQtc2VjdGlvbi52dWU/YTUyOSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL21vZHVsZS1pdGVtLnZ1ZT9hOTFlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLXBhZ2UudnVlPzNlNDgiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1hdmEudnVlPzBiZTkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2FwcC1oZWFkZXIudnVlP2Q0MDYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2NsaWVudC1pbmZvLnZ1ZT8yYmZkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9oYW1idXJnZXItYnV0dG9uLnZ1ZT83OTM1Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvYXBwLWhvbWUudnVlPzQyZDYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9jb250ZW50LXNlY3Rpb24udnVlP2FkYjkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaG9tZS9tb2R1bGUtaXRlbS52dWU/Y2U2NSJdLCJuYW1lcyI6WyJlbWl0dGVyQ29sbGVjdGlvbiIsIk1hcCIsIkV2ZW50c0VtaXR0ZXIiLCJvbiIsImV2ZW50IiwiaGFuZGxlciIsImhhbmRsZXJzIiwiaGFzIiwib2xkSGFuZGxlcnMiLCJnZXQiLCJzZXQiLCJyZW1vdmUiLCJmaWx0ZXIiLCJpdGVtIiwiZW1pdCIsImFyZ3MiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJhbGwiLCJtYXAiLCJldmVudHNFbWl0dGVyV29ya2VyIiwiY3JlYXRlRW1pdHRlciIsIm5hbWUiLCJlbWl0dGVyIiwiZ2V0RW1pdHRlciIsImNsaWVudFN0b3JlIiwiU3RvcmVXb3JrZXIiLCJnZXRTdG9yZSIsImN1cnJlbnRNb2R1bGVTdG9yZSIsImN1cnJlbnRDYXRlZ29yaWVzU3RvcmUiLCJjdXJyZW50QmxvY2tzU3RvcmUiLCJjdXJyZW50TW9kdWxlV29ya2VyIiwidXBkYXRlQ3VycmVudE1vZHVsZSIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImNvbmZpZyIsImJsb2NrcyIsImNoYW5nZU1vZHVsZSIsImFjdGlvbnMiLCJ1cGRhdGUiLCJpbml0IiwibW9kdWxlSW5pdCIsImhhc01vZHVsZSIsIm91dHB1dE1lc3NhZ2UiLCJPdXRwdXRNZXNzYWdlIiwidHlwZSIsInNlbmQiLCJtb2R1bGVzIiwiaW1wb3J0TW9kdWxlIiwiJG1vZHVsZSIsInVwZGF0ZU1vZHVsZSIsIiRpbXBvcnQiLCJkZWZhdWx0IiwibW9kdWxlc1ZpZXdTdG9yZSIsImhvbWUiLCJpY29uIiwibGFiZWwiLCJmcmFtZSIsIm5vdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBYTtBQUViOzs7O0FBRUEsTUFBTUEsaUJBQWlCLEdBQUcsSUFBSUMsR0FBSixFQUExQjs7QUFFQSxNQUFNQyxhQUFOLENBQW9CO0FBQUE7QUFBQSxzQ0FDUixJQUFJRCxHQUFKLEVBRFE7QUFBQTs7QUFFbkJFLElBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCO0FBQ2xCLFFBQUksS0FBS0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCSCxLQUFsQixDQUFKLEVBQStCO0FBQzlCLFVBQUlJLFdBQVcsR0FBRyxLQUFLRixRQUFMLENBQWNHLEdBQWQsQ0FBa0JMLEtBQWxCLENBQWxCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjSSxHQUFkLENBQWtCTixLQUFsQixFQUF5QixDQUFDLEdBQUdJLFdBQUosRUFBaUJILE9BQWpCLENBQXpCO0FBQ0EsS0FIRCxNQUdPO0FBQ04sV0FBS0MsUUFBTCxDQUFjSSxHQUFkLENBQWtCTixLQUFsQixFQUF5QixDQUFDQyxPQUFELENBQXpCO0FBQ0E7O0FBRUQsV0FBTyxJQUFQO0FBQ0E7O0FBQ0RNLFFBQU0sQ0FBQ1AsS0FBRCxFQUFRQyxPQUFSLEVBQWlCO0FBQ3RCLFFBQUlDLFFBQVEsR0FB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LG1CQUFPLENBQUMseWxCQUFrVTtBQUN4Viw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLG1tQkFBdVU7QUFDN1YsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxpbEJBQStUO0FBQ3JWLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsK2xCQUFzVTtBQUM1Viw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHVsQkFBa1U7QUFDeFYsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJhMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGVtaXR0ZXJDb2xsZWN0aW9uID0gbmV3IE1hcCgpO1xyXG5cclxuY2xhc3MgRXZlbnRzRW1pdHRlciB7XHJcblx0aGFuZGxlcnMgPSBuZXcgTWFwKCk7XHJcblx0b24oZXZlbnQsIGhhbmRsZXIpIHtcclxuXHRcdGlmKCB0aGlzLmhhbmRsZXJzLmhhcyhldmVudCkgKSB7XHJcblx0XHRcdGxldCBvbGRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZ2V0KGV2ZW50KTtcclxuXHRcdFx0dGhpcy5oYW5kbGVycy5zZXQoZXZlbnQsIFsuLi5vbGRIYW5kbGVycywgaGFuZGxlcl0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmhhbmRsZXJzLnNldChldmVudCwgW2hhbmRsZXJdKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHJlbW92ZShldmVudCwgaGFuZGxlcikge1xyXG5cdFx0bGV0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycy5nZXQoZXZlbnQpLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gaGFuZGxlcik7XHJcblx0XHR0aGlzLmhhbmRsZXJzLnNldChldmVudCwgaGFuZGxlcnMpO1xyXG5cdH1cclxuXHRlbWl0KGV2ZW50LCAuLi5hcmdzKSB7XHJcblx0XHRpZiggIXRoaXMuaGFuZGxlcnMuaGFzKGV2ZW50KSApXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYGV2ZW50ICcke2V2ZW50fScgZGlkbid0IGFkZGApKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHRoaXMuaGFuZGxlcnMuZ2V0KGV2ZW50KS5tYXAoKGhhbmRsZXIpID0+IHtcclxuXHRcdFx0cmV0dXJuIGhhbmRsZXIoLi4uYXJncylcclxuXHRcdH0pKVxyXG5cdH1cclxufVxyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgZXZlbnRzRW1pdHRlcldvcmtlciA9IHtcclxuXHRjcmVhdGVFbWl0dGVyKG5hbWUpIHtcclxuXHRcdGlmKCBlbWl0dGVyQ29sbGVjdGlvbi5oYXMobmFtZSkgKSByZXR1cm4gZW1pdHRlckNvbGxlY3Rpb24uZ2V0KG5hbWUpO1xyXG5cdFx0XHJcblx0XHRsZXQgZW1pdHRlciA9IG5ldyBFdmVudHNFbWl0dGVyKCk7XHJcblx0XHRlbWl0dGVyQ29sbGVjdGlvbi5zZXQobmFtZSwgZW1pdHRlcik7XHJcblx0XHRcclxuXHRcdHJldHVybiBlbWl0dGVyO1xyXG5cdH0sXHJcblx0Z2V0RW1pdHRlcihuYW1lKSB7XHJcblx0XHRyZXR1cm4gZW1pdHRlckNvbGxlY3Rpb24uaGFzKG5hbWUpID8gZW1pdHRlckNvbGxlY3Rpb24uZ2V0KG5hbWUpIDogdGhpcy5jcmVhdGVFbWl0dGVyKG5hbWUpXHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50c0VtaXR0ZXJXb3JrZXI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRjNWZlN2U4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmV0b3QtYXZhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRjNWZlN2U4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZGM1ZmU3ZThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkYzVmZTdlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkYzVmZTdlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkYzVmZTdlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmV0b3QtYXZhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzVmZTdlOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkYzVmZTdlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1hdmEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYzVmZTdlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGM1ZmU3ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGM1ZmU3ZTgmc2NvcGVkPXRydWUmXCIiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgT3V0cHV0TWVzc2FnZSBmcm9tICckZmV0b3Qtc2VydmljZXMvb3V0cHV0LW1lc3NhZ2UnO1xyXG5pbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNsaWVudFN0b3JlID0gU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2NsaWVudCcpO1xyXG5jb25zdCBjdXJyZW50TW9kdWxlU3RvcmUgPSBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1tb2R1bGUnKTtcclxuY29uc3QgY3VycmVudENhdGVnb3JpZXNTdG9yZSA9IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LWNhdGVnb3JpZXMnKTtcclxuY29uc3QgY3VycmVudEJsb2Nrc1N0b3JlID0gU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtYmxvY2tzJyk7XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGN1cnJlbnRNb2R1bGVXb3JrZXIgPSB7XHJcblx0YXN5bmMgdXBkYXRlQ3VycmVudE1vZHVsZShuYW1lKSB7XHJcblx0XHRpZiggY3VycmVudE1vZHVsZVN0b3JlLnN0YXRlLm5hbWUgPT09IG5hbWUgKSByZXR1cm4gO1xyXG5cdFx0XHJcblx0XHRjb25zdCB7Y2F0ZWdvcmllcywgY29uZmlnLCBibG9ja3N9ID0gYXdhaXQgdGhpcy5jaGFuZ2VNb2R1bGUobmFtZSk7XHJcblx0XHRcclxuXHRcdGN1cnJlbnRNb2R1bGVTdG9yZS5hY3Rpb25zLnVwZGF0ZSh7bmFtZSwgY29uZmlnfSk7XHJcblx0XHRjdXJyZW50Q2F0ZWdvcmllc1N0b3JlLmFjdGlvbnMudXBkYXRlKGNhdGVnb3JpZXMpO1xyXG5cdFx0Y3VycmVudEJsb2Nrc1N0b3JlLmFjdGlvbnMudXBkYXRlKGJsb2Nrcyk7XHJcblx0XHRcclxuXHRcdGNvbmZpZy5pbml0KCk7XHJcblx0fSxcclxuXHRcclxuXHRhc3luYyBjaGFuZ2VNb2R1bGUobmFtZSkge1xyXG5cdFx0Y29uc3QgbW9kdWxlSW5pdCA9IGF3YWl0IGNsaWVudFN0b3JlLmFjdGlvbnMuaGFzTW9kdWxlKG5hbWUpO1xyXG5cdFx0Y29uc3Qgb3V0cHV0TWVzc2FnZSA9IG5ldyBPdXRwdXRNZXNzYWdlKHt0eXBlOiAnY2hhbmdlLW1vZHVsZSd9KTtcclxuXHRcdFxyXG5cdFx0b3V0cHV0TWVzc2FnZS5zZXQoJyRtb2R1bGUnLCBuYW1lKTtcclxuXHRcdFxyXG5cdFx0aWYoICFtb2R1bGVJbml0ICkge1xyXG5cdFx0XHRvdXRwdXRNZXNzYWdlLnNlbmQoKTtcclxuXHRcdFx0cmV0dXJuIGNsaWVudFN0b3JlLnN0YXRlLm1vZHVsZXNbbmFtZV07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdG91dHB1dE1lc3NhZ2Uuc2V0KCdibG9ja3MnLCB0cnVlKTtcclxuXHRcdFxyXG5cdFx0Y29uc3Qge2NhdGVnb3JpZXN9ID0gY2xpZW50U3RvcmUuc3RhdGUubW9kdWxlc1tuYW1lXTtcclxuXHRcdGNvbnN0IGNvbmZpZyA9IGF3YWl0IGltcG9ydE1vZHVsZShuYW1lKTtcclxuXHRcdGNvbnN0IHtibG9ja3N9ID0gYXdhaXQgb3V0cHV0TWVzc2FnZS5zZW5kKCk7XHJcblx0XHRcclxuXHRcdGNvbnN0ICRtb2R1bGUgPSB7Y2F0ZWdvcmllcywgY29uZmlnLCBibG9ja3N9O1xyXG5cdFx0YXdhaXQgY2xpZW50U3RvcmUuYWN0aW9ucy51cGRhdGVNb2R1bGUoe25hbWUsICRtb2R1bGV9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuICRtb2R1bGU7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRNb2R1bGUobmFtZSkge1xyXG5cdGNvbnN0ICRpbXBvcnQgPSBhd2FpdCBpbXBvcnQoYC4uLy4uL21vZHVsZXMvJHtuYW1lfS5qc2ApO1xyXG5cdHJldHVybiAkaW1wb3J0LmRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRNb2R1bGVXb3JrZXI7IiwidmFyIG1hcCA9IHtcblx0XCIuL25vdGVzLmpzXCI6IFtcblx0XHRcIi4vYnVpbGQvYXBwLXBhZ2UvbW9kdWxlcy9ub3Rlcy5qc1wiLFxuXHRcdDFcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL2J1aWxkL2FwcC1wYWdlL21vZHVsZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgbW9kdWxlc1ZpZXdTdG9yZSA9IHtcclxuXHRob21lOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdOb3RlcycsXHJcblx0XHRcdGljb246ICcmI3hFODBDOycsXHJcblx0XHRcdGxhYmVsOiAnbm90ZXMnXHJcblx0XHR9LFxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRuYW1lOiAnTGlzdHMnLFxyXG5cdFx0Ly8gXHRpY29uOiAnJiN4RTgwNjsnLFxyXG5cdFx0Ly8gXHRsYWJlbDogJ2xpc3RzJ1xyXG5cdFx0Ly8gfVxyXG5cdF0sXHJcblx0ZnJhbWU6IHtcclxuXHRcdG5vdGVzOiB7XHJcblx0XHRcdGljb246ICcmI3hFODBDOydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlc1ZpZXdTdG9yZTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FwcC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2MDVjYWZhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FwcC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2MDVjYWZhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzYwNWNhZmFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjA1Y2FmYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjA1Y2FmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjA1Y2FmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzYwNWNhZmEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzYwNWNhZmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhlYWRlci9hcHAtaGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzYwNWNhZmEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNjA1Y2FmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzYwNWNhZmEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc0OTdmZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc0OTdmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYyNzQ5N2ZmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjI3NDk3ZmYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjI3NDk3ZmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjI3NDk3ZmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc0OTdmZiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2Mjc0OTdmZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2NsaWVudC1pbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2xpZW50LWluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjI3NDk3ZmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2xpZW50LWluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjI3NDk3ZmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc0OTdmZiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Y5MDY5MTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hhbWJ1cmdlci1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2hhbWJ1cmdlci1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2Y5MDY5MTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZjkwNjkxMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNmOTA2OTEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNmOTA2OTEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNmOTA2OTEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZjkwNjkxMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZjkwNjkxMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtaGVhZGVyL2hhbWJ1cmdlci1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hhbWJ1cmdlci1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjkwNjkxMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmOTA2OTEyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZjkwNjkxMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzYmM1MzhjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FwcC1ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FwcC1ob21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYzYmM1MzhjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjNiYzUzOGNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmM2JjNTM4YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmM2JjNTM4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmM2JjNTM4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzYmM1MzhjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YzYmM1MzhjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS92aWV3L2FwcC1ob21lL2FwcC1ob21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjNiYzUzOGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjNiYzUzOGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1ob21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mM2JjNTM4YyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29udGVudC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOGQ2ODA5YyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGQ2ODA5YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA4ZDY4MDljXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDhkNjgwOWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDhkNjgwOWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDhkNjgwOWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDhkNjgwOWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDhkNjgwOWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvY29udGVudC1zZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkNjgwOWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA4ZDY4MDljJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4ZDY4MDljJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2NTVlZjUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9kdWxlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbW9kdWxlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWM2NTVlZjUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYzY1NWVmNVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjNjU1ZWY1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjNjU1ZWY1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjNjU1ZWY1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2NTVlZjUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWM2NTVlZjUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL3ZpZXcvYXBwLWhvbWUvbW9kdWxlLWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzY1NWVmNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzY1NWVmNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kdWxlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjU1ZWY1JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcHAtcGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWExYTY2NDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXBwLXBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHAtcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjlhMWE2NjQwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWExYTY2NDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWExYTY2NDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWExYTY2NDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FwcC1wYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTFhNjY0MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5YTFhNjY0MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2Uvdmlldy9hcHAtcGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLXBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLXBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1wYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTFhNjY0MCZzY29wZWQ9dHJ1ZSZcIiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtYXZhIGJyNTAgcHIgZmMgY3BcIiA6c3R5bGU9XCJzZXRTaXplXCIgQGNsaWNrLnN0b3A9XCIkZW1pdCgnZmV0b3QtYXZhLWNsaWNrJylcIj5cclxuICAgIHt7IHNldENsaWVudExldHRlcnMgfX1cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2ZldG90LWF2YScsXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRmdWxsbmFtZTogU3RyaW5nLFxyXG4gICAgICBzaXplOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdCAgICBzZXRDbGllbnRMZXR0ZXJzKCkge1xyXG5cdCAgICBcdGxldCBbZmlyc3QsIHNlY29uZF0gPSB0aGlzLmZ1bGxuYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgZmlyc3QgPSBmaXJzdCA/IGZpcnN0WzBdIDogJyc7XHJcbiAgICAgICAgc2Vjb25kID0gc2Vjb25kID8gc2Vjb25kWzBdIDogJyc7XHJcblxyXG4gICAgICAgIHJldHVybiAoZmlyc3QgKyBzZWNvbmQpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldFNpemUoKSB7XHJcblx0ICAgIFx0bGV0IHNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xyXG5cdCAgICBcdHJldHVybiB7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5mZXRvdC1hdmEge1xyXG4gICAgYmFja2dyb3VuZDogJGZldG90LWRhcmstYmx1ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udDogMThweCAncm9ib3RvLW1lZGl1bSc7XHJcbiAgICBAaW5jbHVkZSBzdGF0aWMtc2hhZG93O1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIEBpbmNsdWRlIGZ1bGwtc2l6ZXM7XHJcbiAgICAgIEBpbmNsdWRlIHBzZXZkby1lbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFwcC1oZWFkZXIgcHJcIj5cclxuICAgIDxoYW1idXJnZXItYnV0dG9uIDphY3RpdmU9XCJpc0FjdGl2ZVwiIEBoYW1idXJnZXItYnV0dG9uLWNsaWNrPVwiaGFtYnVyZ2VyQnV0dG9uQ2xpY2tIYW5kbGVyXCIvPlxyXG5cclxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJjaGFuZ2UtbW9kdWxlLXRpdGxlXCIgbW9kZT1cIm91dC1pblwiPlxyXG4gICAgICA8ZmV0b3QtdGl0bGU+e3sgY3VycmVudE1vZHVsZU5hbWUgfX08L2ZldG90LXRpdGxlPlxyXG4gICAgPC90cmFuc2l0aW9uPlxyXG5cclxuICAgIDxjbGllbnQtaW5mbz48L2NsaWVudC1pbmZvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZmV0b3RUaXRsZSBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL3RleHQvZmV0b3QtdGl0bGUudnVlJztcclxuXHRpbXBvcnQgY2xpZW50SW5mbyBmcm9tICcuL2NsaWVudC1pbmZvLnZ1ZSc7XHJcblx0aW1wb3J0IGhhbWJ1cmdlckJ1dHRvbiBmcm9tICcuL2hhbWJ1cmdlci1idXR0b24udnVlJztcclxuXHJcblx0aW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnYXBwLWhlYWRlcicsXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRpc0FjdGl2ZTogQm9vbGVhblxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgJ2ZldG90LXRpdGxlJzogZmV0b3RUaXRsZSxcclxuICAgICAgJ2NsaWVudC1pbmZvJzogY2xpZW50SW5mbyxcclxuXHQgICAgJ2hhbWJ1cmdlci1idXR0b24nOiBoYW1idXJnZXJCdXR0b25cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGhhbWJ1cmdlckJ1dHRvbkNsaWNrSGFuZGxlcihpc0FjdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2hhbWJ1cmdlci1idXR0b24tY2xpY2snLCBpc0FjdGl2ZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGN1cnJlbnRNb2R1bGVOYW1lKCkge1xyXG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1tb2R1bGUnKS5zdGF0ZS5uYW1lO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlzQWN0aXZlIHx8ICFuYW1lID8gJycgOiBgJHtuYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtuYW1lLnNsaWNlKDEpfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmFwcC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gIC5mZXRvdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1jZW50ZXI7XHJcbiAgfVxyXG4gIC5oYW1idXJnZXItYnV0dG9uIHtcclxuICAgIGxlZnQ6IC03MnB4O1xyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24tdmVydC1jZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAgIGxlZnQ6IC00MnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtY2xvc2UgJiB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAuaXMtZmlyc3QtdGltZSAmIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgbGVmdDogLTIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2hhbmdlLW1vZHVsZS10aXRsZSB7XHJcbiAgICAmLWVudGVyLXRvLCAmLWxlYXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgICYtbGVhdmUtdG8sICYtZW50ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsaWVudC1pbmZvIHBhIGZhaWNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3sgY2xpZW50LmZ1bGxuYW1lIH19PC9kaXY+XHJcbiAgICA8ZmV0b3QtYXZhIEBmZXRvdC1hdmEtY2xpY2s9XCJcIiA6ZnVsbG5hbWU9XCJjbGllbnQuZnVsbG5hbWVcIiBzaXplPVwiNDZcIi8+XHJcblxyXG48IS0tICAgIDxtZW51LWNvbXBvbmVudCB2LWlmPVwiaXNNZW51T3BlblwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgIDpzdWJtZW51PVwic3VibWVudVwiIDpsaXN0PVwiYXBwTWVudVNlcnZpY2UubGlzdFwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgIEBtZW51LWV2ZW50PVwibWVudUV2ZW50SGFuZGxlclwiPi0tPlxyXG48IS0tICAgIDwvbWVudS1jb21wb25lbnQ+LS0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdEF2YSBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWF2YS52dWUnO1xyXG5cdC8vIGltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gJy4uL21lbnUvbWVudS1jb21wb25lbnQudnVlJztcclxuXHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnY2xpZW50LWluZm8nLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjbGllbnQ6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjbGllbnQnKS5zdGF0ZS5jb25maWcsXHJcblxyXG4gICAgICAgIGlzTWVudU9wZW46IGZhbHNlLFxyXG5cdFx0XHRcdGFwcE1lbnVTZXJ2aWNlOiBudWxsLFxyXG4gICAgICAgIHN1Ym1lbnU6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnZmV0b3QtYXZhJzogZmV0b3RBdmEsXHJcbiAgICAgIC8vICdtZW51LWNvbXBvbmVudCc6IG1lbnVDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7fSxcclxuICAgIG1vdW50ZWQoKSB7fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAuY2xpZW50LWluZm8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5mZXRvdC1hdmEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIC5uYW1lIHtcclxuICAgIGNvbG9yOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgZm9udDogMThweCAncm9ib3RvLW1lZGl1bSc7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaXMtY2xvc2UgJiB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tZW51LWNvbXBvbmVudCB7XHJcbiAgICB0b3A6IDEyNSU7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJoYW1idXJnZXItYnV0dG9uIGNwIHBhXCIgOmNsYXNzPVwiaXNBY3RpdmVcIiBAY2xpY2s9XCJjbGlja0hhbmRsZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdCBwYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0IHBjXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXQgcGFcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2hhbWJ1cmdlci1idXR0b24nLFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0YWN0aXZlOiBCb29sZWFuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdFx0XHRjbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnaGFtYnVyZ2VyLWJ1dHRvbi1jbGljaycsIHRoaXMuYWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGlzQWN0aXZlKCkge1xyXG5cdFx0XHRcdHJldHVybiB7ICdpcy1hY3RpdmUnOiB0aGlzLmFjdGl2ZSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmhhbWJ1cmdlci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIC5pdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDEpLCAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogN3B4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWJ1dHRvbiB7XHJcbiAgICAmOmhvdmVyIC5pdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICAuaXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgIGJvdHRvbTogY2FsYygxMDAlIC0gNXB4KTtcclxuICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhcHAtaG9tZSBiZy1mZmYgcGEgYnMgaG92ZXJfaG92LXNoXCIgOmNsYXNzPVwic3RhdGVzXCI+XHJcbiAgICA8YXBwLWhlYWRlciA6aXNBY3RpdmU9XCJzdGF0ZXNbJ2lzLWFjdGl2ZSddXCIgQGhhbWJ1cmdlci1idXR0b24tY2xpY2s9XCJoYW1idXJnZXJCdXR0b25DbGlja0hhbmRsZXJcIi8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImhvbWUgZmxleCBicyBwYVwiPlxyXG4gICAgICA8Y29udGVudC1zZWN0aW9uPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dGl0bGU+TW9kdWxlczwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjb250ZW50PlxyXG4gICAgICAgICAgPG1vZHVsZS1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBtb2R1bGVzVmlld1N0b3JlLmhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiIDppdGVtPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgQG1vZHVsZS1pdGVtLWNsaWNrPVwibW9kdWxlSXRlbUNsaWNrSGFuZGxlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvY29udGVudC1zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGZldG90LWNsb3NlLWJ1dHRvbiBAZmV0b3QtY2xvc2UtYnV0dG9uLWNsaWNrPVwiY2xvc2VCdXR0b25DbGlja0hhbmRsZXJcIj5jbG9zZSBob21lPC9mZXRvdC1jbG9zZS1idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBmZXRvdENsb3NlQnV0dG9uIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jbG9zZS1idXR0b24udnVlJztcclxuXHJcbiAgaW1wb3J0IGFwcEhlYWRlciBmcm9tICcuLi9hcHAtaGVhZGVyL2FwcC1oZWFkZXIudnVlJztcclxuICBpbXBvcnQgY29udGVudFNlY3Rpb24gZnJvbSAnLi9jb250ZW50LXNlY3Rpb24udnVlJztcclxuICBpbXBvcnQgbW9kdWxlSXRlbSBmcm9tICcuL21vZHVsZS1pdGVtLnZ1ZSc7XHJcblxyXG4gIGltcG9ydCBtb2R1bGVzVmlld1N0b3JlIGZyb20gJy4uLy4uL3N0b3JlL21vZHVsZXMtdmlldy1zdG9yZSc7XHJcbiAgaW1wb3J0IGN1cnJlbnRNb2R1bGVXb3JrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93b3JrZXJzL2N1cnJlbnQtbW9kdWxlLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdhcHAtaG9tZScsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXRlczoge1xyXG5cdFx0XHRcdFx0J2lzLWNsb3NlJzogZmFsc2UsXHJcblx0XHRcdFx0XHQnaXMtYWN0aXZlJzogdHJ1ZSxcclxuICAgICAgICAgICdpcy1maXJzdC10aW1lJzogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kdWxlc1ZpZXdTdG9yZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnZmV0b3QtY2xvc2UtYnV0dG9uJzogZmV0b3RDbG9zZUJ1dHRvbixcclxuXHQgICAgJ2FwcC1oZWFkZXInOiBhcHBIZWFkZXIsXHJcbiAgICAgICdtb2R1bGUtaXRlbSc6IG1vZHVsZUl0ZW0sXHJcbiAgICAgICdjb250ZW50LXNlY3Rpb24nOiBjb250ZW50U2VjdGlvblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgaGFtYnVyZ2VyQnV0dG9uQ2xpY2tIYW5kbGVyKGlzQWN0aXZlKSB7XHJcblx0ICAgIFx0aXNBY3RpdmUgPyB0aGlzLmNsb3NlSG9tZSgpIDogdGhpcy5vcGVuSG9tZSgpXHJcbiAgICAgIH0sXHJcblx0ICAgIG1vZHVsZUl0ZW1DbGlja0hhbmRsZXIobmFtZSkge1xyXG5cdCAgICBcdGN1cnJlbnRNb2R1bGVXb3JrZXIudXBkYXRlQ3VycmVudE1vZHVsZShuYW1lKTtcclxuXHQgICAgXHR0aGlzLmNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyKCk7XHJcbiAgICAgIH0sXHJcblx0XHRcdGNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0XHRcdGlmKCB0aGlzLnN0YXRlc1snaXMtZmlyc3QtdGltZSddICkgdGhpcy5zdGF0ZXNbJ2lzLWZpcnN0LXRpbWUnXSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xvc2VIb21lKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlSG9tZSgpIHtcclxuXHQgICAgICB0aGlzLnN0YXRlc1snaXMtY2xvc2UnXSA9IHRydWU7XHJcblx0ICAgICAgdGhpcy5zdGF0ZXNbJ2lzLWFjdGl2ZSddID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5Ib21lKCkge1xyXG5cdCAgICAgIHRoaXMuc3RhdGVzWydpcy1jbG9zZSddID0gZmFsc2U7XHJcblx0ICAgICAgdGhpcy5zdGF0ZXNbJ2lzLWFjdGl2ZSddID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAuYXBwLWhvbWUge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTA2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBAaW5jbHVkZSBzdGF0aWMtc2hhZG93O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxOXB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICBwYWRkaW5nOiAzNnB4IDEyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAzNnB4IDcycHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAzNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxOXB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5pcy1maXJzdC10aW1lIC5mZXRvdC1jbG9zZS1idXR0b24ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBib3R0b206IC0yMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmlzLWNsb3NlIHtcclxuICAgICAgLmZldG90LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAuaG9tZSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgIHRvcDogLTYwdmg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaG9tZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTZweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE5MnB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsZWZ0OiAxMjhweDtcclxuICAgIHRvcDogMTU2cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDRweCk7XHJcbiAgICAgIGxlZnQ6IDcycHg7XHJcbiAgICAgIHRvcDogMTA2cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTlweCkge1xyXG4gICAgICB0b3A6IDkycHg7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1zZWN0aW9uIHByXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUgcGFcIj5cclxuICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBmbGV4IGZ1bGwgYnNcIj5cclxuICAgICAgPHNsb3QgbmFtZT1cImNvbnRlbnRcIj48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2NvbnRlbnQtc2VjdGlvbidcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAyMHB4IDA7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTlweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAkZmV0b3QtZGFyay1ncmF5O1xyXG4gICAgZm9udDogMThweCAncm9ib3RvLWJvbGQnO1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibW9kdWxlLWl0ZW0gY3AgZmNjIGJyNnB4IGhvdmVyX2hvdi1zaFwiIEBjbGljaz1cIiRlbWl0KCdtb2R1bGUtaXRlbS1jbGljaycsIGl0ZW0ubGFiZWwpXCI+XHJcbiAgICA8ZmV0b3QtaWNvbiA6aWNvbj1cIml0ZW0uaWNvblwiPjwvZmV0b3QtaWNvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3sgaXRlbS5uYW1lIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdEljb24gZnJvbSAnJGZldG90LXZpZXctY29tcG9uZW50cy9pY29ucy9mZXRvdC1pY29uLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdtb2R1bGUtaXRlbScsXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRpdGVtOiBPYmplY3RcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1pY29uJzogZmV0b3RJY29uXHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5tb2R1bGUtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICRmZXRvdC1kYXJrLWJsdWU7XHJcbiAgICBmb250OiAyNHB4ICdyb2JvdG8tbWVkaXVtJztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIEBpbmNsdWRlIHN0YXRpYy1zaGFkb3c7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgQGluY2x1ZGUgYm94LXNpemluZztcclxuICAgIH1cclxuXHJcbiAgICAuZmV0b3QtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFwcC1wYWdlIHByIGZ1bGxcIj5cclxuICAgIDxhcHAtaG9tZT48L2FwcC1ob21lPlxyXG4gICAgPGNvbXBvbmVudCA6aXM9XCJjdXJyZW50TW9kdWxlQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XHJcblxyXG4gICAgPG1vZGFsLWNvbnRhaW5lciB2LWlmPVwiaXNNb2RhbE9wZW5cIiA6b3B0aW9ucz1cIm1vZGFsT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBjbG9zZS1tb2RhbC1ldmVudD1cImNsb3NlTW9kYWxFdmVudEhhbmRsZXJcIj5cclxuXHJcbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bW9kYWwtY29udGVudD5cclxuICAgICAgICA8Y29tcG9uZW50IDppcz1cIm1vZGFsQ29udGVudENvbXBvbmVudFwiPjwvY29tcG9uZW50PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDptb2RhbC1mb290ZXI+XHJcbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJtb2RhbEZvb3RlckNvbXBvbmVudFwiPjwvY29tcG9uZW50PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9tb2RhbC1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBhcHBIb21lIGZyb20gJy4vYXBwLWhvbWUvYXBwLWhvbWUudnVlJztcclxuICBpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG4gIGltcG9ydCBldmVudHNFbWl0dGVyV29ya2VyIGZyb20gJyRmZXRvdC1ldmVudHMtZW1pdHRlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdhcHAtcGFnZScsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzTW9kYWxPcGVuOiBmYWxzZSxcclxuXHRcdFx0XHRtb2RhbE9wdGlvbnM6IHt9LFxyXG4gICAgICAgIG1vZGFsQ29udGVudENvbXBvbmVudDogJycsXHJcbiAgICAgICAgbW9kYWxGb290ZXJDb21wb25lbnQ6ICcnLFxyXG5cclxuICAgICAgICBhcHBFdmVudHNFbWl0dGVyOiBldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ2FwcCcpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdhcHAtaG9tZSc6IGFwcEhvbWVcclxuXHRcdH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0XHRcdG9wZW5Nb2RhbEV2ZW50SGFuZGxlcih7b3B0aW9ucywgY29udGVudENvbXBvbmVudCwgZm9vdGVyQ29tcG9uZW50fSkge1xyXG5cdFx0XHRcdHRoaXMubW9kYWxPcHRpb25zID0gb3B0aW9ucztcclxuXHRcdFx0XHR0aGlzLm1vZGFsQ29udGVudENvbXBvbmVudCA9IGNvbnRlbnRDb21wb25lbnQ7XHJcblx0XHRcdFx0dGhpcy5tb2RhbEZvb3RlckNvbXBvbmVudCA9IGZvb3RlckNvbXBvbmVudDtcclxuXHJcblx0XHRcdFx0dGhpcy5pc01vZGFsT3BlbiA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5hcHBFdmVudHNFbWl0dGVyLm9uKCdjbG9zZS1tb2RhbC1ldmVudCcsIHRoaXMuY2xvc2VNb2RhbEV2ZW50SGFuZGxlcilcclxuICAgICAgfSxcclxuXHQgICAgY2xvc2VNb2RhbEV2ZW50SGFuZGxlcigpIHtcclxuXHRcdFx0XHR0aGlzLmlzTW9kYWxPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5hcHBFdmVudHNFbWl0dGVyLnJlbW92ZSgnY2xvc2UtbW9kYWwtZXZlbnQnLCB0aGlzLmNsb3NlTW9kYWxFdmVudEhhbmRsZXIpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdCAgICBjdXJyZW50TW9kdWxlQ29tcG9uZW50KCkge1xyXG5cdCAgICBcdHJldHVybiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1tb2R1bGUnKS5zdGF0ZS5jb25maWcudmlldyB8fCAnJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuYXBwRXZlbnRzRW1pdHRlci5vbignb3Blbi1tb2RhbC1ldmVudCcsIHRoaXMub3Blbk1vZGFsRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmZldG90LWF2YVtkYXRhLXYtZGM1ZmU3ZThdIHtcXG4gIGJhY2tncm91bmQ6ICMwMDQ0NjY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoNTcsIDYyLCA3MCwgMC40KTtcXG59XFxuLmZldG90LWF2YVtkYXRhLXYtZGM1ZmU3ZThdOjphZnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5hcHAtaGVhZGVyW2RhdGEtdi0zNjA1Y2FmYV0ge1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLmZldG90LXRpdGxlW2RhdGEtdi0zNjA1Y2FmYV0ge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmhhbWJ1cmdlci1idXR0b25bZGF0YS12LTM2MDVjYWZhXSB7XFxuICBsZWZ0OiAtNzJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4uaGFtYnVyZ2VyLWJ1dHRvbltkYXRhLXYtMzYwNWNhZmFdIHtcXG4gICAgICBsZWZ0OiAtNDJweDtcXG59XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuLmhhbWJ1cmdlci1idXR0b25bZGF0YS12LTM2MDVjYWZhXSB7XFxuICAgICAgbGVmdDogMDtcXG59XFxufVxcbi5pcy1jbG9zZSAuaGFtYnVyZ2VyLWJ1dHRvbltkYXRhLXYtMzYwNWNhZmFdIHtcXG4gICAgbGVmdDogMDtcXG59XFxuLmlzLWZpcnN0LXRpbWUgLmhhbWJ1cmdlci1idXR0b25bZGF0YS12LTM2MDVjYWZhXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGxlZnQ6IC0yMDBweDtcXG59XFxuLmNoYW5nZS1tb2R1bGUtdGl0bGUtZW50ZXItdG9bZGF0YS12LTM2MDVjYWZhXSwgLmNoYW5nZS1tb2R1bGUtdGl0bGUtbGVhdmVbZGF0YS12LTM2MDVjYWZhXSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uY2hhbmdlLW1vZHVsZS10aXRsZS1sZWF2ZS10b1tkYXRhLXYtMzYwNWNhZmFdLCAuY2hhbmdlLW1vZHVsZS10aXRsZS1lbnRlcltkYXRhLXYtMzYwNWNhZmFdIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uY2xpZW50LWluZm9bZGF0YS12LTYyNzQ5N2ZmXSB7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuLmZldG90LWF2YVtkYXRhLXYtNjI3NDk3ZmZdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbn1cXG4ubmFtZVtkYXRhLXYtNjI3NDk3ZmZdIHtcXG4gIGNvbG9yOiAjMDA0NDY2O1xcbiAgZm9udDogMThweCAncm9ib3RvLW1lZGl1bSc7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuLm5hbWVbZGF0YS12LTYyNzQ5N2ZmXSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG59XFxufVxcbi5pcy1jbG9zZSAubmFtZVtkYXRhLXYtNjI3NDk3ZmZdIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLm1lbnUtY29tcG9uZW50W2RhdGEtdi02Mjc0OTdmZl0ge1xcbiAgdG9wOiAxMjUlO1xcbiAgcmlnaHQ6IDA7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uaGFtYnVyZ2VyLWJ1dHRvbltkYXRhLXYtM2Y5MDY5MTJdIHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4uaXRbZGF0YS12LTNmOTA2OTEyXSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA0NDY2O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uaXRbZGF0YS12LTNmOTA2OTEyXTpudGgtY2hpbGQoMSksIC5pdFtkYXRhLXYtM2Y5MDY5MTJdOm50aC1jaGlsZCgzKSB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbi5pdFtkYXRhLXYtM2Y5MDY5MTJdOm50aC1jaGlsZCgxKSB7XFxuICAgIHRvcDogN3B4O1xcbiAgICByaWdodDogMDtcXG59XFxuLml0W2RhdGEtdi0zZjkwNjkxMl06bnRoLWNoaWxkKDIpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5pdFtkYXRhLXYtM2Y5MDY5MTJdOm50aC1jaGlsZCgzKSB7XFxuICAgIGJvdHRvbTogN3B4O1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4uaGFtYnVyZ2VyLWJ1dHRvbjpob3ZlciAuaXRbZGF0YS12LTNmOTA2OTEyXSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmhhbWJ1cmdlci1idXR0b24uaXMtYWN0aXZlIC5pdFtkYXRhLXYtM2Y5MDY5MTJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaGFtYnVyZ2VyLWJ1dHRvbi5pcy1hY3RpdmUgLml0W2RhdGEtdi0zZjkwNjkxMl06bnRoLWNoaWxkKDIpIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLmhhbWJ1cmdlci1idXR0b24uaXMtYWN0aXZlIC5pdFtkYXRhLXYtM2Y5MDY5MTJdOm50aC1jaGlsZCgxKSB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgdG9wOiAycHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxufVxcbi5oYW1idXJnZXItYnV0dG9uLmlzLWFjdGl2ZSAuaXRbZGF0YS12LTNmOTA2OTEyXTpudGgtY2hpbGQoMykge1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBib3R0b206IGNhbGMoMTAwJSAtIDVweCk7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5hcHAtaG9tZVtkYXRhLXYtZjNiYzUzOGNdIHtcXG4gIHBhZGRpbmc6IDEycHggMjRweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwNnB4O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoNTcsIDYyLCA3MCwgMC40KTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE5cHgpIHtcXG4uYXBwLWhvbWVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgICAgcGFkZGluZzogMTJweDtcXG59XFxufVxcbi5hcHAtaG9tZS5pcy1hY3RpdmVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgIHBhZGRpbmc6IDM2cHggMTI4cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuLmFwcC1ob21lLmlzLWFjdGl2ZVtkYXRhLXYtZjNiYzUzOGNdIHtcXG4gICAgICAgIHBhZGRpbmc6IDM2cHggNzJweDtcXG59XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuLmFwcC1ob21lLmlzLWFjdGl2ZVtkYXRhLXYtZjNiYzUzOGNdIHtcXG4gICAgICAgIHBhZGRpbmc6IDM2cHg7XFxufVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTlweCkge1xcbi5hcHAtaG9tZS5pcy1hY3RpdmVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgICAgICBwYWRkaW5nOiAyNHB4O1xcbn1cXG59XFxuLmFwcC1ob21lLmlzLWZpcnN0LXRpbWUgLmZldG90LWNsb3NlLWJ1dHRvbltkYXRhLXYtZjNiYzUzOGNdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm90dG9tOiAtMjAwcHg7XFxufVxcbi5hcHAtaG9tZS5pcy1jbG9zZSAuZmV0b3QtY2xvc2UtYnV0dG9uW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4uYXBwLWhvbWUuaXMtY2xvc2UgLmhvbWVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgdG9wOiAtNjB2aDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLmhvbWVbZGF0YS12LWYzYmM1MzhjXSB7XFxuICBwYWRkaW5nLXRvcDogMzJweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTZweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE5MnB4KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsZWZ0OiAxMjhweDtcXG4gIHRvcDogMTU2cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbi5ob21lW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDRweCk7XFxuICAgICAgbGVmdDogNzJweDtcXG4gICAgICB0b3A6IDEwNnB4O1xcbn1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcXG4uaG9tZVtkYXRhLXYtZjNiYzUzOGNdIHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGxlZnQ6IDI0cHg7XFxufVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTlweCkge1xcbi5ob21lW2RhdGEtdi1mM2JjNTM4Y10ge1xcbiAgICAgIHRvcDogOTJweDtcXG59XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uY29udGVudC1zZWN0aW9uW2RhdGEtdi0wOGQ2ODA5Y10ge1xcbiAgbWFyZ2luOiAwIDEwcHggMjBweCAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xcbi5jb250ZW50LXNlY3Rpb25bZGF0YS12LTA4ZDY4MDljXSB7XFxuICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xcbiAgICAgIHdpZHRoOiAzMjBweDtcXG59XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxOXB4KSB7XFxuLmNvbnRlbnQtc2VjdGlvbltkYXRhLXYtMDhkNjgwOWNdIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG59XFxufVxcbi50aXRsZVtkYXRhLXYtMDhkNjgwOWNdIHtcXG4gIGNvbG9yOiAjMzkzRTQ2O1xcbiAgZm9udDogMThweCAncm9ib3RvLWJvbGQnO1xcbiAgdG9wOiAtMzBweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcbi5jb250ZW50W2RhdGEtdi0wOGQ2ODA5Y10ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuLmNvbnRlbnRbZGF0YS12LTA4ZDY4MDljXSB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4ubW9kdWxlLWl0ZW1bZGF0YS12LTFjNjU1ZWY1XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDQ0NjY7XFxuICBmb250OiAyNHB4ICdyb2JvdG8tbWVkaXVtJztcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IC4ycztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDU3LCA2MiwgNzAsIDAuNCk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuLm1vZHVsZS1pdGVtW2RhdGEtdi0xYzY1NWVmNV0ge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDY0cHg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxufVxcbi5tb2R1bGUtaXRlbSAuZmV0b3QtaWNvbltkYXRhLXYtMWM2NTVlZjVdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xcbi5tb2R1bGUtaXRlbSAuZmV0b3QtaWNvbltkYXRhLXYtMWM2NTVlZjVdIHtcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxufVxcblwiLCBcIlwiXSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmV0b3QtYXZhIGJyNTAgcHIgZmMgY3BcIixcbiAgICAgIHN0eWxlOiBfdm0uc2V0U2l6ZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZmV0b3QtYXZhLWNsaWNrXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtfdm0uX3YoXCJcXG4gIFwiICsgX3ZtLl9zKF92bS5zZXRDbGllbnRMZXR0ZXJzKSArIFwiXFxuXCIpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwLWhlYWRlciBwclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoYW1idXJnZXItYnV0dG9uXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgYWN0aXZlOiBfdm0uaXNBY3RpdmUgfSxcbiAgICAgICAgb246IHsgXCJoYW1idXJnZXItYnV0dG9uLWNsaWNrXCI6IF92bS5oYW1idXJnZXJCdXR0b25DbGlja0hhbmRsZXIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiY2hhbmdlLW1vZHVsZS10aXRsZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgW19jKFwiZmV0b3QtdGl0bGVcIiwgW192bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnRNb2R1bGVOYW1lKSldKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjbGllbnQtaW5mb1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2xpZW50LWluZm8gcGEgZmFpY1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNsaWVudC5mdWxsbmFtZSkpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmZXRvdC1hdmFcIiwge1xuICAgICAgICBhdHRyczogeyBmdWxsbmFtZTogX3ZtLmNsaWVudC5mdWxsbmFtZSwgc2l6ZTogXCI0NlwiIH0sXG4gICAgICAgIG9uOiB7IFwiZmV0b3QtYXZhLWNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge30gfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoYW1idXJnZXItYnV0dG9uIGNwIHBhXCIsXG4gICAgICBjbGFzczogX3ZtLmlzQWN0aXZlLFxuICAgICAgb246IHsgY2xpY2s6IF92bS5jbGlja0hhbmRsZXIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdCBwYVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXQgcGNcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0IHBhXCIgfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhcHAtaG9tZSBiZy1mZmYgcGEgYnMgaG92ZXJfaG92LXNoXCIsIGNsYXNzOiBfdm0uc3RhdGVzIH0sXG4gICAgW1xuICAgICAgX2MoXCJhcHAtaGVhZGVyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaXNBY3RpdmU6IF92bS5zdGF0ZXNbXCJpcy1hY3RpdmVcIl0gfSxcbiAgICAgICAgb246IHsgXCJoYW1idXJnZXItYnV0dG9uLWNsaWNrXCI6IF92bS5oYW1idXJnZXJCdXR0b25DbGlja0hhbmRsZXIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZSBmbGV4IGJzIHBhXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiY29udGVudC1zZWN0aW9uXCIsIHtcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfdm0uX3YoXCJNb2R1bGVzXCIpXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5fbChfdm0ubW9kdWxlc1ZpZXdTdG9yZS5ob21lLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJtb2R1bGUtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJtb2R1bGUtaXRlbS1jbGlja1wiOiBfdm0ubW9kdWxlSXRlbUNsaWNrSGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZldG90LWNsb3NlLWJ1dHRvblwiLFxuICAgICAgICB7IG9uOiB7IFwiZmV0b3QtY2xvc2UtYnV0dG9uLWNsaWNrXCI6IF92bS5jbG9zZUJ1dHRvbkNsaWNrSGFuZGxlciB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJjbG9zZSBob21lXCIpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtc2VjdGlvbiBwclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHBhXCIgfSwgW192bS5fdChcInRpdGxlXCIpXSwgMiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgZmxleCBmdWxsIGJzXCIgfSwgW192bS5fdChcImNvbnRlbnRcIildLCAyKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtb2R1bGUtaXRlbSBjcCBmY2MgYnI2cHggaG92ZXJfaG92LXNoXCIsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcIm1vZHVsZS1pdGVtLWNsaWNrXCIsIF92bS5pdGVtLmxhYmVsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImZldG90LWljb25cIiwgeyBhdHRyczogeyBpY29uOiBfdm0uaXRlbS5pY29uIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubmFtZSkpXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC1wYWdlIHByIGZ1bGxcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiYXBwLWhvbWVcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoX3ZtLmN1cnJlbnRNb2R1bGVDb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc01vZGFsT3BlblxuICAgICAgICA/IF9jKFwibW9kYWwtY29udGFpbmVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IF92bS5tb2RhbE9wdGlvbnMgfSxcbiAgICAgICAgICAgIG9uOiB7IFwiY2xvc2UtbW9kYWwtZXZlbnRcIjogX3ZtLmNsb3NlTW9kYWxFdmVudEhhbmRsZXIgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwibW9kYWwtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKF92bS5tb2RhbENvbnRlbnRDb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwibW9kYWwtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoX3ZtLm1vZGFsRm9vdGVyQ29tcG9uZW50LCB7IHRhZzogXCJjb21wb25lbnRcIiB9KV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgIDE4NjA1NDIxODVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGM1ZmU3ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiZGU3ZDE1MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1hdmEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGM1ZmU3ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWF2YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYzVmZTdlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2MDVjYWZhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWRhMTdmOGVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNjA1Y2FmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNjA1Y2FmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc0OTdmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZlZjhhYTc1XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NsaWVudC1pbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyNzQ5N2ZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jbGllbnQtaW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc0OTdmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oYW1idXJnZXItYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmOTA2OTEyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjgxMDc4YzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjkwNjkxMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFtYnVyZ2VyLWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjkwNjkxMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mM2JjNTM4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImZhZDQ2MTk2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcC1ob21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYzYmM1MzhjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAtaG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mM2JjNTM4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkNjgwOWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzN2VjYzNlOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDhkNjgwOWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOGQ2ODA5YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzY1NWVmNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQ4NDQzZTgwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZS1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjNjU1ZWY1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGUtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzY1NWVmNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9