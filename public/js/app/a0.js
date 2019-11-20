(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/components/services/draw-block.js":
/*!***********************************************!*\
  !*** ./app/components/services/draw-block.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** init [begin] ***/

const listStyles = 'padding-left:30px;margin-bottom:10px';
/*** init [end] ***/

/*** exports [begin] ***/

const drawBlock = {
  content: {
    getParagraph(paragraph) {
      return `<p style="margin-bottom: 10px;">${paragraph}</p>`;
    },

    getList(list) {
      return typeof list[0] === 'boolean' ? getNumberedList(list) : getMarkedList(list);
    }

  }
};
/*** exports [end] ***/

/*** src [begin] ***/

function getNumberedList(list) {
  list.shift();
  return `<ol style="${listStyles}">${preparingListItems(list)}</ol>`;
}

function getMarkedList(list) {
  return `<ul style="${listStyles}">${preparingListItems(list)}</ul>`;
}

function preparingListItems(list) {
  return list.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('');
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = (drawBlock);

/***/ }),

/***/ "./app/components/services/true-type.js":
/*!**********************************************!*\
  !*** ./app/components/services/true-type.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

function getTrueType(what) {
  return Object.prototype.toString.call(what).slice(8, -1);
}
/*** exports [end] ***/


/* harmony default export */ __webpack_exports__["default"] = ({
  get: getTrueType
});

/***/ }),

/***/ "./app/view/components/buttons/fetot-button.vue":
/*!******************************************************!*\
  !*** ./app/view/components/buttons/fetot-button.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetot_button_vue_vue_type_template_id_598e229e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetot-button.vue?vue&type=template&id=598e229e& */ "./app/view/components/buttons/fetot-button.vue?vue&type=template&id=598e229e&");
/* harmony import */ var _fetot_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetot-button.vue?vue&type=script&lang=js& */ "./app/view/components/buttons/fetot-button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fetot_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetot-button.vue?vue&type=style&index=0&lang=scss& */ "./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fetot_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fetot_button_vue_vue_type_template_id_598e229e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fetot_button_vue_vue_type_template_id_598e229e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/view/components/buttons/fetot-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/view/components/buttons/fetot-button.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./app/view/components/buttons/fetot-button.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-button.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/view/components/buttons/fetot-button.vue?vue&type=template&id=598e229e&":
/*!*************************************************************************************!*\
  !*** ./app/view/components/buttons/fetot-button.vue?vue&type=template&id=598e229e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_template_id_598e229e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-button.vue?vue&type=template&id=598e229e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=template&id=598e229e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_template_id_598e229e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_button_vue_vue_type_template_id_598e229e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/view/components/buttons/fetot-confirm-buttons.vue":
/*!***************************************************************!*\
  !*** ./app/view/components/buttons/fetot-confirm-buttons.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetot_confirm_buttons_vue_vue_type_template_id_1c5b3eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8& */ "./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8&");
/* harmony import */ var _fetot_confirm_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetot-confirm-buttons.vue?vue&type=script&lang=js& */ "./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fetot_confirm_buttons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss& */ "./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fetot_confirm_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fetot_confirm_buttons_vue_vue_type_template_id_1c5b3eb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fetot_confirm_buttons_vue_vue_type_template_id_1c5b3eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/view/components/buttons/fetot-confirm-buttons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-confirm-buttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8&":
/*!**********************************************************************************************!*\
  !*** ./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_template_id_1c5b3eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_template_id_1c5b3eb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_confirm_buttons_vue_vue_type_template_id_1c5b3eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/view/components/elements/fetot-date.vue":
/*!*****************************************************!*\
  !*** ./app/view/components/elements/fetot-date.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetot_date_vue_vue_type_template_id_a776e8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true& */ "./app/view/components/elements/fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true&");
/* harmony import */ var _fetot_date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetot-date.vue?vue&type=script&lang=js& */ "./app/view/components/elements/fetot-date.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fetot_date_vue_vue_type_style_index_0_id_a776e8c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true& */ "./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fetot_date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fetot_date_vue_vue_type_template_id_a776e8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fetot_date_vue_vue_type_template_id_a776e8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a776e8c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/view/components/elements/fetot-date.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/view/components/elements/fetot-date.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./app/view/components/elements/fetot-date.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-date.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_style_index_0_id_a776e8c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_style_index_0_id_a776e8c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_style_index_0_id_a776e8c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_style_index_0_id_a776e8c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_style_index_0_id_a776e8c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_style_index_0_id_a776e8c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/view/components/elements/fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./app/view/components/elements/fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_template_id_a776e8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_template_id_a776e8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fetot_date_vue_vue_type_template_id_a776e8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/components/current-note-store.js":
/*!**********************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/components/current-note-store.js ***!
  \**********************************************************************************/
/*! exports provided: createCurrentNoteStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCurrentNoteStore", function() { return createCurrentNoteStore; });
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** init [begin] ***/

const state = {
  note: {
    title: '',
    content: [],
    info: {
      date: 0
    }
  }
};
const getters = {
  title(state) {
    return () => state.note.title;
  },

  content(state) {
    return () => state.note.content;
  },

  date(state) {
    return () => +state.note.info.date;
  }

};
const mutations = {
  UPDATE(state, data) {
    state.note = { ...data
    };
  },

  UPDATE_VALUE(state, {
    key,
    value
  }) {
    state.note[key] = value;
  },

  UPDATE_INFO_VALUE(state, {
    key,
    value
  }) {
    state.note.info[key] = value;
  }

};
const actions = {
  async update(context, data) {
    context.commit('UPDATE', data);
  },

  async updateValue(context, options) {
    context.commit('UPDATE_VALUE', options);
  },

  async updateInfoValue(context, options) {
    context.commit('UPDATE_INFO_VALUE', options);
  }

};
/*** init [end] ***/

/*** exports [begin] ***/

function createCurrentNoteStore() {
  $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__["default"].createStore('current-note', {
    state,
    getters,
    mutations,
    actions
  });
}
/*** exports [end] ***/




/***/ }),

/***/ "./build/app-page/components/modules/notes/components/draw-block-content.js":
/*!**********************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/components/draw-block-content.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_services_true_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-services/true-type */ "./app/components/services/true-type.js");
/* harmony import */ var $fetot_services_draw_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-services/draw-block */ "./app/components/services/draw-block.js");

/*** imports [begin] ***/



/*** imports [end] ***/

/*** exports [begin] ***/

function drawBlockContent(content) {
  return content.map(parseContentItem).join('');
}
/*** exports [end] ***/

/*** src [begin] ***/


function parseContentItem(contentItem) {
  switch ($fetot_services_true_type__WEBPACK_IMPORTED_MODULE_0__["default"].get(contentItem)) {
    case 'String':
      return contentItem[0] === 'p' ? $fetot_services_draw_block__WEBPACK_IMPORTED_MODULE_1__["default"].content.getParagraph(contentItem.slice(1)) : '';

    case 'Array':
      return $fetot_services_draw_block__WEBPACK_IMPORTED_MODULE_1__["default"].content.getList(contentItem);
  }
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = (drawBlockContent);

/***/ }),

/***/ "./build/app-page/components/modules/notes/index.js":
/*!**********************************************************!*\
  !*** ./build/app-page/components/modules/notes/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes */ "./build/app-page/components/modules/notes/notes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _notes__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./build/app-page/components/modules/notes/notes.js":
/*!**********************************************************!*\
  !*** ./build/app-page/components/modules/notes/notes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_current_note_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/current-note-store */ "./build/app-page/components/modules/notes/components/current-note-store.js");
/* harmony import */ var _view_notes_module_notes_module_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/notes-module/notes-module.vue */ "./build/app-page/components/modules/notes/view/notes-module/notes-module.vue");
/* harmony import */ var _view_note_modal_content_component_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/note-modal-content-component.vue */ "./build/app-page/components/modules/notes/view/note-modal-content-component.vue");
/* harmony import */ var _view_note_modal_footer_component_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/note-modal-footer-component.vue */ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue");

/*** imports [begin] ***/





/*** imports [end] ***/

/*** init [begin] ***/

const createNoteModalConfig = {
  options: {
    modalType: 'is-small',
    header: {
      title: 'New note',
      icon: '&#xE80C;'
    }
  },
  contentComponent: _view_note_modal_content_component_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  footerComponent: _view_note_modal_footer_component_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/*** init [end] ***/

/*** exports [begin] ***/

const notesModuleConfig = {
  view: _view_notes_module_notes_module_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  createNoteModalConfig,

  init() {
    Object(_components_current_note_store__WEBPACK_IMPORTED_MODULE_0__["createCurrentNoteStore"])();
  }

};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (notesModuleConfig);

/***/ }),

/***/ "./build/app-page/components/modules/notes/store/notes-block-menu-store.js":
/*!*********************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/store/notes-block-menu-store.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

const notesBlockMenuStore = {
  items: [{
    name: 'Edit note',
    icon: '&#xE811;',
    label: 'edit'
  }, {
    name: 'Move to category',
    icon: '&#xF292;',
    label: 'move-to-category'
  }, {
    name: 'Move to folder',
    icon: '&#xE813;',
    label: 'move-to-folder'
  }, {
    name: 'Delete',
    icon: '&#xF1F8;',
    label: 'delete'
  }]
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (notesBlockMenuStore);

/***/ }),

/***/ "./build/app-page/components/modules/notes/store/notes-frame-tools-store.js":
/*!**********************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/store/notes-frame-tools-store.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

const notesFrameToolsStore = [{
  icon: '&#xE824;',
  label: 'paragraph',
  last: true
}, {
  icon: '&#xF0CB;',
  label: 'num-list'
}, {
  icon: '&#xF0CA;',
  label: 'mark-list',
  last: true
}, {
  icon: '&#xE803;',
  label: 'image'
}, {
  icon: '&#xF15C;',
  label: 'file'
}];
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (notesFrameToolsStore);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue":
/*!************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paragraph_vue_vue_type_template_id_2321a05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragraph.vue?vue&type=template&id=2321a05e&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=template&id=2321a05e&scoped=true&");
/* harmony import */ var _paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paragraph.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _paragraph_vue_vue_type_style_index_0_id_2321a05e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paragraph_vue_vue_type_template_id_2321a05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paragraph_vue_vue_type_template_id_2321a05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2321a05e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/form-components/paragraph.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_id_2321a05e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_id_2321a05e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_id_2321a05e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_id_2321a05e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_id_2321a05e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_id_2321a05e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=template&id=2321a05e&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=template&id=2321a05e&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_template_id_2321a05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph.vue?vue&type=template&id=2321a05e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=template&id=2321a05e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_template_id_2321a05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_template_id_2321a05e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/note-modal-content-component.vue":
/*!***************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/note-modal-content-component.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_modal_content_component_vue_vue_type_template_id_f6b50cc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true& */ "./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true&");
/* harmony import */ var _note_modal_content_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-modal-content-component.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _note_modal_content_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _note_modal_content_component_vue_vue_type_template_id_f6b50cc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _note_modal_content_component_vue_vue_type_template_id_f6b50cc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f6b50cc4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/note-modal-content-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_content_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./note-modal-content-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_content_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_content_component_vue_vue_type_template_id_f6b50cc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_content_component_vue_vue_type_template_id_f6b50cc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_content_component_vue_vue_type_template_id_f6b50cc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue":
/*!**************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/note-modal-footer-component.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_modal_footer_component_vue_vue_type_template_id_2359e1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-modal-footer-component.vue?vue&type=template&id=2359e1e6& */ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=template&id=2359e1e6&");
/* harmony import */ var _note_modal_footer_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-modal-footer-component.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _note_modal_footer_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _note_modal_footer_component_vue_vue_type_template_id_2359e1e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _note_modal_footer_component_vue_vue_type_template_id_2359e1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/note-modal-footer-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./note-modal-footer-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=template&id=2359e1e6&":
/*!*********************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=template&id=2359e1e6& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_template_id_2359e1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./note-modal-footer-component.vue?vue&type=template&id=2359e1e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=template&id=2359e1e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_template_id_2359e1e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_template_id_2359e1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue":
/*!*********************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_frame_content_header_vue_vue_type_template_id_25e09402_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true&");
/* harmony import */ var _notes_frame_content_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-frame-content-header.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _notes_frame_content_header_vue_vue_type_style_index_0_id_25e09402_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notes_frame_content_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_frame_content_header_vue_vue_type_template_id_25e09402_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notes_frame_content_header_vue_vue_type_template_id_25e09402_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25e09402",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_style_index_0_id_25e09402_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_style_index_0_id_25e09402_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_style_index_0_id_25e09402_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_style_index_0_id_25e09402_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_style_index_0_id_25e09402_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_style_index_0_id_25e09402_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true&":
/*!****************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_template_id_25e09402_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_template_id_25e09402_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_header_vue_vue_type_template_id_25e09402_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue":
/*!************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_frame_content_workspace_vue_vue_type_template_id_b8deb1da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true&");
/* harmony import */ var _notes_frame_content_workspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-frame-content-workspace.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notes_frame_content_workspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_frame_content_workspace_vue_vue_type_template_id_b8deb1da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notes_frame_content_workspace_vue_vue_type_template_id_b8deb1da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b8deb1da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-workspace.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_vue_vue_type_template_id_b8deb1da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_vue_vue_type_template_id_b8deb1da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_vue_vue_type_template_id_b8deb1da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue":
/*!**************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_frame_content_vue_vue_type_template_id_201b3fcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true&");
/* harmony import */ var _notes_frame_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-frame-content.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _notes_frame_content_vue_vue_type_style_index_0_id_201b3fcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notes_frame_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_frame_content_vue_vue_type_template_id_201b3fcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notes_frame_content_vue_vue_type_template_id_201b3fcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "201b3fcb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_style_index_0_id_201b3fcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_style_index_0_id_201b3fcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_style_index_0_id_201b3fcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_style_index_0_id_201b3fcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_style_index_0_id_201b3fcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_style_index_0_id_201b3fcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_template_id_201b3fcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_template_id_201b3fcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_vue_vue_type_template_id_201b3fcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue":
/*!****************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_block_menu_vue_vue_type_template_id_480cb2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true&");
/* harmony import */ var _notes_block_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-block-menu.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _notes_block_menu_vue_vue_type_style_index_0_id_480cb2bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notes_block_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_block_menu_vue_vue_type_template_id_480cb2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notes_block_menu_vue_vue_type_template_id_480cb2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "480cb2bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-block-menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_style_index_0_id_480cb2bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_style_index_0_id_480cb2bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_style_index_0_id_480cb2bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_style_index_0_id_480cb2bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_style_index_0_id_480cb2bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_style_index_0_id_480cb2bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_template_id_480cb2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_template_id_480cb2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_menu_vue_vue_type_template_id_480cb2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-block.vue":
/*!***********************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-block.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_block_vue_vue_type_template_id_f79fae4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-block.vue?vue&type=template&id=f79fae4c&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=template&id=f79fae4c&scoped=true&");
/* harmony import */ var _notes_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-block.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notes_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_block_vue_vue_type_template_id_f79fae4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notes_block_vue_vue_type_template_id_f79fae4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f79fae4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/notes-module/notes-block.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-block.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=template&id=f79fae4c&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=template&id=f79fae4c&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_vue_vue_type_template_id_f79fae4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-block.vue?vue&type=template&id=f79fae4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=template&id=f79fae4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_vue_vue_type_template_id_f79fae4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_block_vue_vue_type_template_id_f79fae4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-module.vue":
/*!************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-module.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_module_vue_vue_type_template_id_f82eed22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-module.vue?vue&type=template&id=f82eed22&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=template&id=f82eed22&scoped=true&");
/* harmony import */ var _notes_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-module.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notes_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_module_vue_vue_type_template_id_f82eed22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notes_module_vue_vue_type_template_id_f82eed22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f82eed22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/notes-module/notes-module.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-module.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=template&id=f82eed22&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=template&id=f82eed22&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_module_vue_vue_type_template_id_f82eed22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-module.vue?vue&type=template&id=f82eed22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=template&id=f82eed22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_module_vue_vue_type_template_id_f82eed22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_module_vue_vue_type_template_id_f82eed22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/modules/notes.js":
/*!*****************************************!*\
  !*** ./build/app-page/modules/notes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modules_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modules/notes */ "./build/app-page/components/modules/notes/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_modules_notes__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-button.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
  name: 'fetot-button',
  props: {
    size: Number
  },
  computed: {
    setButtonSize() {
      return {
        width: `${this.size}px`
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_fetot_icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/fetot-icon.vue */ "./app/view/components/icons/fetot-icon.vue");
/* harmony import */ var _fetot_button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetot-button.vue */ "./app/view/components/buttons/fetot-button.vue");
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
  name: 'fetot-confirm-buttons',
  props: {
    size: {
      type: Number,
      default: 96
    }
  },
  components: {
    'fetot-button': _fetot_button_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'fetot-icon': _icons_fetot_icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-date.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fetot-date',
  props: {
    date: Number
  },
  computed: {
    drawDate() {
      const date = new Date(this.date);
      return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_icons_fetot_input_icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/icons/fetot-input-icon.vue */ "./app/view/components/icons/fetot-input-icon.vue");
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
  name: 'paragraph',

  data() {
    return {
      isActive: false
    };
  },

  props: {
    text: String,
    onFocus: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'fetot-input-icon': $fetot_view_components_icons_fetot_input_icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    focusHandler() {
      this.isActive = true;
    },

    blurHandler() {
      this.isActive = false;
      this.$emit('paragraph-blur', this.text);
    },

    inputHandler() {
      this.textareaResize();
    },

    /* src */
    textareaResize() {
      const ta = this.$refs.textarea;
      ta.style.height = 'auto';
      ta.style.height = ta.scrollHeight + 'px';
    }

  },
  computed: {
    setState() {
      return {
        'is-active': this.isActive
      };
    }

  },

  mounted() {
    if (this.onFocus) this.$refs.textarea.focus();
    this.textareaResize();
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
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
  name: 'note-modal-content-component',

  data() {
    return {
      input: {
        placeholder: 'Enter new note title',
        value: ''
      },
      currentNoteStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__["default"].getStore('current-note')
    };
  },

  methods: {
    inputTitleEventHandler(value) {
      this.currentNoteStore.actions.updateValue({
        key: 'title',
        value
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_buttons_fetot_confirm_buttons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/buttons/fetot-confirm-buttons.vue */ "./app/view/components/buttons/fetot-confirm-buttons.vue");
/* harmony import */ var $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-events-emitter */ "./app/components/workers/events-emitter.js");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'note-modal-footer-component',
  components: {
    'fetot-confirm-buttons': $fetot_view_components_buttons_fetot_confirm_buttons_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    confirmEventHandler(label) {
      $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].getEmitter('notes').emit('create-note-confirm', label);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_elements_fetot_date_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/elements/fetot-date.vue */ "./app/view/components/elements/fetot-date.vue");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'notes-frame-content-header',

  data() {
    return {
      currentNoteStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-note')
    };
  },

  components: {
    'fetot-date': $fetot_view_components_elements_fetot_date_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    inputTitleEventHandler(value) {
      this.currentNoteStore.actions.updateValue({
        key: 'title',
        value
      });
    }

  },
  computed: {
    noteDate() {
      return this.currentNoteStore.getters.date();
    },

    noteTitle() {
      return {
        placeholder: 'Note title',
        value: this.currentNoteStore.getters.title()
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_components_paragraph_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-components/paragraph.vue */ "./build/app-page/components/modules/notes/view/form-components/paragraph.vue");
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'notes-frame-content-workspace',

  date() {
    return {
      currentNoteStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-note')
    };
  },

  components: {
    paragraph: _form_components_paragraph_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    noteContent() {
      return this.currentNoteStore.getters.content();
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_frame_content_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-frame-content-header.vue */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue");
/* harmony import */ var _notes_frame_content_workspace_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-frame-content-workspace.vue */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue");
/* harmony import */ var _store_notes_frame_tools_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notes-frame-tools-store */ "./build/app-page/components/modules/notes/store/notes-frame-tools-store.js");
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
  name: 'notes-frame-content',

  data() {
    return {
      isFrameToolsActive: false,
      tools: _store_notes_frame_tools_store__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },

  components: {
    'notes-frame-content-header': _notes_frame_content_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'notes-frame-content-workspace': _notes_frame_content_workspace_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    toolsItemClickHandler(label) {
      console.log('tools', label);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_notes_block_menu_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/notes-block-menu-store */ "./build/app-page/components/modules/notes/store/notes-block-menu-store.js");
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
  name: 'notes-block-menu',
  props: {
    title: String
  },
  methods: {
    menuItemClickHandler(item) {
      console.log('menu-item-click', item);
    },

    menuCloseEventHandler() {}

  },
  computed: {
    menuItems() {
      return _store_notes_block_menu_store__WEBPACK_IMPORTED_MODULE_0__["default"].items;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_elements_fetot_date_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/elements/fetot-date.vue */ "./app/view/components/elements/fetot-date.vue");
/* harmony import */ var _notes_block_menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-block-menu.vue */ "./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue");
/* harmony import */ var _components_draw_block_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/draw-block-content */ "./build/app-page/components/modules/notes/components/draw-block-content.js");
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
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'notes-block',

  data() {
    return {
      isMenuOpen: false
    };
  },

  props: {
    block: Object
  },
  components: {
    'fetot-date': $fetot_view_components_elements_fetot_date_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'notes-block-menu': _notes_block_menu_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    drawContent() {
      return Object(_components_draw_block_content__WEBPACK_IMPORTED_MODULE_2__["default"])(this.block.content);
    },

    noteDate() {
      return this.block.info.date;
    }

  },
  methods: {
    /* menu */
    openMenuEventHandler() {
      console.log('open-menu-event');
      this.isMenuOpen = true;
    },

    closeMenuEventHandler() {
      console.log('close-menu-event');
      this.isMenuOpen = false;
    },

    blockContentClickHandler() {
      console.log('block-content-click-handler');
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_frame_content_notes_frame_content_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notes-frame-content/notes-frame-content.vue */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue");
/* harmony import */ var _notes_block_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-block.vue */ "./build/app-page/components/modules/notes/view/notes-module/notes-block.vue");
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
/* harmony import */ var $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $fetot-events-emitter */ "./app/components/workers/events-emitter.js");
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
  name: 'notes-module',

  data() {
    return {
      hasFrame: false,
      currentModuleStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-module'),
      currentNoteStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-note'),
      appEventsEmitter: $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].getEmitter('app'),
      notesEventsEmitter: $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].getEmitter('notes')
    };
  },

  components: {
    'notes-frame-content': _notes_frame_content_notes_frame_content_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'notes-block': _notes_block_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    /* create note */
    createNoteEventHandler() {
      this.appEventsEmitter.emit('open-modal-event', this.currentModuleStore.state.config.createNoteModalConfig);
      this.notesEventsEmitter.on('create-note-confirm', this.createNoteConfirmHandler);
    },

    createNoteConfirmHandler(label) {
      if (label) {
        this.currentNoteStore.actions.updateInfoValue({
          key: 'date',
          value: new Date()
        });
        this.openFrameHandler();
      }

      this.appEventsEmitter.emit('close-modal-event');
      this.notesEventsEmitter.remove('create-note-confirm', this.createNoteConfirmHandler);
    },

    /* frame */
    openFrameHandler() {
      this.hasFrame = true;
    },

    closeFrameEventHandler() {
      this.hasFrame = false;
    }

  },
  computed: {
    currentBlocks() {
      return $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-blocks').getters.getLikeArray();
    },

    frameOptions() {
      const title = this.currentNoteStore.getters.title();
      return {
        header: {
          title,
          icon: '&#xE80C;'
        }
      };
    }

  },

  destroyed() {
    $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].removeStore('current-note');
  }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.fetot-button {\n  background: #F1F1F5;\n  color: #004466;\n  font: 18px 'roboto-medium', sans-serif;\n  height: 42px;\n  transition: .4s;\n  user-select: none;\n  box-shadow: 0 2px 4px rgba(57, 62, 70, 0.4);\n}\n.fetot-button:hover {\n    background: #004466;\n    color: #F1F1F5;\n}\n.fetot-button:active {\n    box-shadow: none;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.fetot-confirm-buttons {\n  justify-content: space-around;\n}\n.fetot-confirm-buttons .fetot-button {\n    font-size: 24px;\n    height: 36px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.fetot-date[data-v-a776e8c4] {\n  color: #393E46;\n  font: 14px 'roboto-bold';\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.paragraph[data-v-2321a05e] {\n  color: #393E46;\n  font: 18px 'roboto-medium';\n  padding: 10px;\n  margin-bottom: 6px;\n  transition: .4s;\n  z-index: 1;\n}\n.paragraph.is-active[data-v-2321a05e], .paragraph[data-v-2321a05e]:hover {\n    box-shadow: 0 2px 4px rgba(57, 62, 70, 0.4);\n}\n.paragraph.is-active .fetot-input-icon[data-v-2321a05e], .paragraph:hover .fetot-input-icon[data-v-2321a05e] {\n      left: -28px;\n      opacity: 1;\n}\n.fetot-input-icon[data-v-2321a05e] {\n  font-size: 20px;\n}\n.ta[data-v-2321a05e] {\n  color: inherit;\n  font: inherit;\n  min-height: 42px;\n  resize: none;\n  background: transparent;\n  display: block;\n  font-size: inherit;\n  font-family: inherit;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.notes-frame-content-header[data-v-25e09402] {\n  margin-bottom: 24px;\n}\n.info[data-v-25e09402] {\n  padding-left: 10px;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.notes-frame-content[data-v-201b3fcb] {\n  padding: 24px 96px 42px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n", ""]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=template&id=598e229e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-button.vue?vue&type=template&id=598e229e& ***!
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
    {
      staticClass: "fetot-button br3px cp fc pr bfr-click",
      style: _vm.setButtonSize,
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.$emit("fetot-button-click")
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=template&id=1c5b3eb8& ***!
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
    { staticClass: "fetot-confirm-buttons flex w100" },
    [
      _c(
        "fetot-button",
        {
          attrs: { size: _vm.size },
          on: {
            "fetot-button-click": function($event) {
              return _vm.$emit("confirm-event", false)
            }
          }
        },
        [_c("fetot-icon", { attrs: { icon: "&#xE808;" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "fetot-button",
        {
          attrs: { size: _vm.size },
          on: {
            "fetot-button-click": function($event) {
              return _vm.$emit("confirm-event", true)
            }
          }
        },
        [_c("fetot-icon", { attrs: { icon: "&#xE807;" } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-date.vue?vue&type=template&id=a776e8c4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "fetot-date" }, [
    _vm._v(_vm._s(_vm.drawDate))
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=template&id=2321a05e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=template&id=2321a05e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "paragraph w100 bs pr br6px bg-fff", class: _vm.setState },
    [
      _c(
        "textarea",
        {
          ref: "textarea",
          staticClass: "ta full",
          on: {
            input: _vm.inputHandler,
            focus: _vm.focusHandler,
            blur: _vm.blurHandler
          }
        },
        [_vm._v(_vm._s(_vm.text))]
      ),
      _vm._v(" "),
      _c("fetot-input-icon", { attrs: { icon: "&#xE824;" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/note-modal-content-component.vue?vue&type=template&id=f6b50cc4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "note-modal-content-component" },
    [
      _c("input-title-component", {
        attrs: { "in-focus": true, input: _vm.input },
        on: { "input-title-event": _vm.inputTitleEventHandler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=template&id=2359e1e6&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=template&id=2359e1e6& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "note-modal-footer-component" },
    [
      _c("fetot-confirm-buttons", {
        attrs: { size: 132 },
        on: { "confirm-event": _vm.confirmEventHandler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=template&id=25e09402&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "notes-frame-content-header w100" },
    [
      _c(
        "div",
        { staticClass: "info w100 faic" },
        [
          _c("fetot-date", { attrs: { date: _vm.noteDate } }),
          _vm._v(" "),
          _c("div", { staticClass: "category" })
        ],
        1
      ),
      _vm._v(" "),
      _c("input-title-component", {
        attrs: { input: _vm.noteTitle },
        on: { "input-title-event": _vm.inputTitleEventHandler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace.vue?vue&type=template&id=b8deb1da&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "notes-frame-content-workspace w100" },
    [
      _c("paragraph", {
        attrs: {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nam?"
        }
      }),
      _vm._v(" "),
      _c("paragraph", {
        attrs: {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum ducimus ipsa iste quia quo."
        }
      }),
      _vm._v(" "),
      _c("paragraph", {
        attrs: {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque doloremque nisi odio quo veritatis."
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=template&id=201b3fcb&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "notes-frame-content bs" },
    [
      _c("notes-frame-content-header"),
      _vm._v(" "),
      _c("notes-frame-content-workspace"),
      _vm._v(" "),
      _c("frame-tools", {
        attrs: { tools: _vm.tools, "is-active": _vm.isFrameToolsActive },
        on: { "tools-item-click": _vm.toolsItemClickHandler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=template&id=480cb2bc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("menu-container", {
    on: {
      "close-menu-event": function($event) {
        return _vm.$emit("close-menu-event")
      }
    },
    scopedSlots: _vm._u([
      {
        key: "menu-title",
        fn: function() {
          return [_vm._v(_vm._s(_vm.title))]
        },
        proxy: true
      },
      {
        key: "menu-items",
        fn: function() {
          return _vm._l(_vm.menuItems, function(item, index) {
            return _c("menu-item", {
              key: index,
              attrs: { item: item },
              on: { "menu-item-click": _vm.menuItemClickHandler }
            })
          })
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=template&id=f79fae4c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=template&id=f79fae4c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("block-container", {
    on: {
      "block-content-click": _vm.blockContentClickHandler,
      "open-menu-event": _vm.openMenuEventHandler
    },
    scopedSlots: _vm._u(
      [
        {
          key: "block-title",
          fn: function() {
            return [_vm._v(_vm._s(_vm.block.title))]
          },
          proxy: true
        },
        _vm.isMenuOpen
          ? {
              key: "block-menu",
              fn: function() {
                return [
                  _c("notes-block-menu", {
                    attrs: { title: _vm.block.title },
                    on: { "close-menu-event": _vm.closeMenuEventHandler }
                  })
                ]
              },
              proxy: true
            }
          : null,
        {
          key: "block-content",
          fn: function() {
            return [
              _c("div", { domProps: { innerHTML: _vm._s(_vm.drawContent) } })
            ]
          },
          proxy: true
        },
        {
          key: "block-date",
          fn: function() {
            return [_c("fetot-date", { attrs: { date: _vm.noteDate } })]
          },
          proxy: true
        }
      ],
      null,
      true
    )
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=template&id=f82eed22&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-module.vue?vue&type=template&id=f82eed22&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("module-container", {
    attrs: { "has-frame": _vm.hasFrame, "frame-options": _vm.frameOptions },
    on: {
      "close-frame-event": _vm.closeFrameEventHandler,
      "create-block-event": _vm.createNoteEventHandler
    },
    scopedSlots: _vm._u([
      {
        key: "module-frame-content",
        fn: function() {
          return [_c("notes-frame-content")]
        },
        proxy: true
      },
      {
        key: "module-blocks",
        fn: function() {
          return _vm._l(_vm.currentBlocks, function(block, index) {
            return _c("notes-block", { key: index, attrs: { block: block } })
          })
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-button.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-button.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("505590e1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/buttons/fetot-confirm-buttons.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("730decca", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./app/view/components/elements/fetot-date.vue?vue&type=style&index=0&id=a776e8c4&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("20239fcd", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph.vue?vue&type=style&index=0&id=2321a05e&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3d0ccdac", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-header.vue?vue&type=style&index=0&id=25e09402&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("389e5dd6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content.vue?vue&type=style&index=0&id=201b3fcb&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1d14241c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block-menu.vue?vue&type=style&index=0&id=480cb2bc&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2bac52ca", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9kcmF3LWJsb2NrLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3RydWUtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT8wOTU0Iiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzAzNDciLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWU/YzM4YSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT84NTgxIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1ZTIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/N2Q2MyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWU/ZDIxOCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2NjOWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT80ZjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2N1cnJlbnQtbm90ZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvY29tcG9uZW50cy9kcmF3LWJsb2NrLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtYmxvY2stbWVudS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtZnJhbWUtdG9vbHMtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC52dWU/YjA4ZiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLnZ1ZT8yNjJmIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgudnVlPzVhZDAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/OWI3ZCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT9kYjg4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT84ODg4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZmY4NiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT9lOTE5Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlPzIzOGMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MDkyOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT9jMTkxIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlPzAwYWQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP2U4ZTMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT9lMTc4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/YmIyOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlPzhlY2QiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlPzFmZGUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlP2U1NWEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlP2U5ZTUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZT9lZmFhIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlPzdkNTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWU/ZGU5ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzBiMmUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/YzUyMCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2ZhMGQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC52dWU/N2NjOSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT8wMGJjIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/YWFmNCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWU/OGE1OSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT82NDNhIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlPzc1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9mYTQ3Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgudnVlPzIwMTIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/MjQ5MiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP2ZjZDMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MGFhMiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT9jY2ExIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/ZWYyMCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWU/YjY4YSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlPzM0OTkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWU/NTdiNyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT83NTNmIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1NDIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9kNzcwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgudnVlP2Y5MDIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/OTA5YiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlPzNkNTQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlPzE4ZWUiXSwibmFtZXMiOlsibGlzdFN0eWxlcyIsImRyYXdCbG9jayIsImNvbnRlbnQiLCJnZXRQYXJhZ3JhcGgiLCJwYXJhZ3JhcGgiLCJnZXRMaXN0IiwibGlzdCIsImdldE51bWJlcmVkTGlzdCIsImdldE1hcmtlZExpc3QiLCJzaGlmdCIsInByZXBhcmluZ0xpc3RJdGVtcyIsIm1hcCIsIml0ZW0iLCJqb2luIiwiZ2V0VHJ1ZVR5cGUiLCJ3aGF0IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJnZXQiLCJzdGF0ZSIsIm5vdGUiLCJ0aXRsZSIsImluZm8iLCJkYXRlIiwiZ2V0dGVycyIsIm11dGF0aW9ucyIsIlVQREFURSIsImRhdGEiLCJVUERBVEVfVkFMVUUiLCJrZXkiLCJ2YWx1ZSIsIlVQREFURV9JTkZPX1ZBTFVFIiwiYWN0aW9ucyIsInVwZGF0ZSIsImNvbnRleHQiLCJjb21taXQiLCJ1cGRhdGVWYWx1ZSIsIm9wdGlvbnMiLCJ1cGRhdGVJbmZvVmFsdWUiLCJjcmVhdGVDdXJyZW50Tm90ZVN0b3JlIiwiU3RvcmVXb3JrZXIiLCJjcmVhdGVTdG9yZSIsImRyYXdCbG9ja0NvbnRlbnQiLCJwYXJzZUNvbnRlbnRJdGVtIiwiY29udGVudEl0ZW0iLCJ0cnVlVHlwZSIsImRyYXdCbG9ja1NlcnZpY2UiLCJjcmVhdGVOb3RlTW9kYWxDb25maWciLCJtb2RhbFR5cGUiLCJoZWFkZXIiLCJpY29uIiwiY29udGVudENvbXBvbmVudCIsIm5vdGVNb2RhbENvbnRlbnRDb21wb25lbnQiLCJmb290ZXJDb21wb25lbnQiLCJub3RlTW9kYWxGb290ZXJDb21wb25lbnQiLCJub3Rlc01vZHVsZUNvbmZpZyIsInZpZXciLCJub3Rlc01vZHVsZSIsImluaXQiLCJub3Rlc0Jsb2NrTWVudVN0b3JlIiwiaXRlbXMiLCJuYW1lIiwibGFiZWwiLCJub3Rlc0ZyYW1lVG9vbHNTdG9yZSIsImxhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFhO0FBRWI7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLHNDQUFuQjtBQUVBOztBQUNBOztBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1JDLGdCQUFZLENBQUNDLFNBQUQsRUFBWTtB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LFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx1cEJBQW9XO0FBQzFYLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMseUlBQTRFO0FBQzlGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsNnJCQUFxWDtBQUMzWSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHlJQUE0RTtBQUM5RiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCtxQkFBOFc7QUFDcFksNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyx5SUFBNEU7QUFDOUYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxrcUJBQTJXO0FBQ2pZLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMseUlBQTRFO0FBQzlGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGluaXQgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBsaXN0U3R5bGVzID0gJ3BhZGRpbmctbGVmdDozMHB4O21hcmdpbi1ib3R0b206MTBweCc7XHJcblxyXG4vKioqIGluaXQgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBkcmF3QmxvY2sgPSB7XHJcblx0Y29udGVudDoge1xyXG5cdFx0Z2V0UGFyYWdyYXBoKHBhcmFncmFwaCkge1xyXG5cdFx0XHRyZXR1cm4gYDxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIj4ke3BhcmFncmFwaH08L3A+YFxyXG5cdFx0fSxcclxuXHRcdGdldExpc3QobGlzdCkge1xyXG5cdFx0XHRyZXR1cm4gKHR5cGVvZiBsaXN0WzBdID09PSAnYm9vbGVhbicgKVxyXG5cdFx0XHRcdD8gZ2V0TnVtYmVyZWRMaXN0KGxpc3QpIDogZ2V0TWFya2VkTGlzdChsaXN0KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGdldE51bWJlcmVkTGlzdChsaXN0KSB7XHJcblx0bGlzdC5zaGlmdCgpO1xyXG5cdHJldHVybiBgPG9sIHN0eWxlPVwiJHtsaXN0U3R5bGVzfVwiPiR7IHByZXBhcmluZ0xpc3RJdGVtcyhsaXN0KSB9PC9vbD5gXHJcbn1cclxuZnVuY3Rpb24gZ2V0TWFya2VkTGlzdChsaXN0KSB7XHJcblx0cmV0dXJuIGA8dWwgc3R5bGU9XCIke2xpc3RTdHlsZXN9XCI+JHsgcHJlcGFyaW5nTGlzdEl0ZW1zKGxpc3QpIH08L3VsPmBcclxufVxyXG5mdW5jdGlvbiBwcmVwYXJpbmdMaXN0SXRlbXMobGlzdCkge1xyXG5cdHJldHVybiBsaXN0Lm1hcCgoaXRlbSkgPT4gYDxsaSBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDVweDtcIj4ke2l0ZW19PC9saT5gKS5qb2luKCcnKVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmF3QmxvY2s7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gZ2V0VHJ1ZVR5cGUod2hhdCkge1xyXG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2hhdCkuc2xpY2UoOCwgLTEpXHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGdldDogZ2V0VHJ1ZVR5cGUgfTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTk4ZTIyOWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1OThlMjI5ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OThlMjI5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OThlMjI5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OThlMjI5ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1OThlMjI5ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OThlMjI5ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzViM2ViOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjNWIzZWI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjNWIzZWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjNWIzZWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNWIzZWI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNWIzZWI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNWIzZWI4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzc2ZThjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImE3NzZlOGM0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTc3NmU4YzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTc3NmU4YzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTc3NmU4YzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3NzZlOGM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E3NzZlOGM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzc2ZThjNCZzY29wZWQ9dHJ1ZSZcIiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG5cdG5vdGU6IHtcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdGNvbnRlbnQ6IFtdLFxyXG5cdFx0aW5mbzoge1xyXG5cdFx0XHRkYXRlOiAwXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZ2V0dGVycyA9IHtcclxuXHR0aXRsZShzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+IHN0YXRlLm5vdGUudGl0bGU7XHJcblx0fSxcclxuXHRjb250ZW50KHN0YXRlKSB7XHJcblx0XHRyZXR1cm4gKCkgPT4gc3RhdGUubm90ZS5jb250ZW50O1xyXG5cdH0sXHJcblx0ZGF0ZShzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+ICtzdGF0ZS5ub3RlLmluZm8uZGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBtdXRhdGlvbnMgPSB7XHJcblx0VVBEQVRFKHN0YXRlLCBkYXRhKSB7XHJcblx0XHRzdGF0ZS5ub3RlID0geyAuLi5kYXRhIH1cclxuXHR9LFxyXG5cdFVQREFURV9WQUxVRShzdGF0ZSwge2tleSwgdmFsdWV9KSB7XHJcblx0XHRzdGF0ZS5ub3RlW2tleV0gPSB2YWx1ZTtcclxuXHR9LFxyXG5cdFVQREFURV9JTkZPX1ZBTFVFKHN0YXRlLCB7a2V5LCB2YWx1ZX0pIHtcclxuXHRcdHN0YXRlLm5vdGUuaW5mb1trZXldID0gdmFsdWU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgYWN0aW9ucyA9IHtcclxuXHRhc3luYyB1cGRhdGUoY29udGV4dCwgZGF0YSkge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURScsIGRhdGEpXHJcblx0fSxcclxuXHRhc3luYyB1cGRhdGVWYWx1ZShjb250ZXh0LCBvcHRpb25zKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFX1ZBTFVFJywgb3B0aW9ucylcclxuXHR9LFxyXG5cdGFzeW5jIHVwZGF0ZUluZm9WYWx1ZShjb250ZXh0LCBvcHRpb25zKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFX0lORk9fVkFMVUUnLCBvcHRpb25zKVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogaW5pdCBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnROb3RlU3RvcmUoKSB7XHJcblx0U3RvcmVXb3JrZXIuY3JlYXRlU3RvcmUoJ2N1cnJlbnQtbm90ZScsIHsgc3RhdGUsIGdldHRlcnMsIG11dGF0aW9ucywgYWN0aW9ucyB9KVxyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IHtjcmVhdGVDdXJyZW50Tm90ZVN0b3JlfTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgdHJ1ZVR5cGUgZnJvbSAnJGZldG90LXNlcnZpY2VzL3RydWUtdHlwZSc7XHJcbmltcG9ydCBkcmF3QmxvY2tTZXJ2aWNlIGZyb20gJyRmZXRvdC1zZXJ2aWNlcy9kcmF3LWJsb2NrJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGRyYXdCbG9ja0NvbnRlbnQoY29udGVudCkge1xyXG5cdHJldHVybiBjb250ZW50Lm1hcChwYXJzZUNvbnRlbnRJdGVtKS5qb2luKCcnKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBwYXJzZUNvbnRlbnRJdGVtKGNvbnRlbnRJdGVtKSB7XHJcblx0c3dpdGNoKCB0cnVlVHlwZS5nZXQoY29udGVudEl0ZW0pICkge1xyXG5cdFx0Y2FzZSAnU3RyaW5nJzpcclxuXHRcdFx0cmV0dXJuIGNvbnRlbnRJdGVtWzBdID09PSAncCdcclxuXHRcdFx0XHQ/IGRyYXdCbG9ja1NlcnZpY2UuY29udGVudC5nZXRQYXJhZ3JhcGgoY29udGVudEl0ZW0uc2xpY2UoMSkpIDogJyc7XHJcblx0XHRjYXNlICdBcnJheSc6XHJcblx0XHRcdHJldHVybiBkcmF3QmxvY2tTZXJ2aWNlLmNvbnRlbnQuZ2V0TGlzdChjb250ZW50SXRlbSlcclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYXdCbG9ja0NvbnRlbnQiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHR9IGZyb20gJy4vbm90ZXMnOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCB7Y3JlYXRlQ3VycmVudE5vdGVTdG9yZX0gZnJvbSAnLi9jb21wb25lbnRzL2N1cnJlbnQtbm90ZS1zdG9yZSc7XHJcblxyXG5pbXBvcnQgbm90ZXNNb2R1bGUgZnJvbSAnLi92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlJztcclxuXHJcbmltcG9ydCBub3RlTW9kYWxDb250ZW50Q29tcG9uZW50IGZyb20gJy4vdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBub3RlTW9kYWxGb290ZXJDb21wb25lbnQgZnJvbSAnLi92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBpbml0IFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgY3JlYXRlTm90ZU1vZGFsQ29uZmlnID0ge1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdG1vZGFsVHlwZTogJ2lzLXNtYWxsJyxcclxuXHRcdGhlYWRlcjogeyB0aXRsZTogJ05ldyBub3RlJywgaWNvbjogJyYjeEU4MEM7JyB9XHJcblx0fSxcclxuXHRjb250ZW50Q29tcG9uZW50OiBub3RlTW9kYWxDb250ZW50Q29tcG9uZW50LFxyXG5cdGZvb3RlckNvbXBvbmVudDogbm90ZU1vZGFsRm9vdGVyQ29tcG9uZW50XHJcbn07XHJcblxyXG4vKioqIGluaXQgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBub3Rlc01vZHVsZUNvbmZpZyA9IHtcclxuXHR2aWV3OiBub3Rlc01vZHVsZSxcclxuXHRjcmVhdGVOb3RlTW9kYWxDb25maWcsXHJcblx0XHJcblx0aW5pdCgpIHtcclxuXHRcdGNyZWF0ZUN1cnJlbnROb3RlU3RvcmUoKTtcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90ZXNNb2R1bGVDb25maWciLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBub3Rlc0Jsb2NrTWVudVN0b3JlID0ge1xyXG5cdGl0ZW1zOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdFZGl0IG5vdGUnLFxyXG5cdFx0XHRpY29uOiAnJiN4RTgxMTsnLFxyXG5cdFx0XHRsYWJlbDogJ2VkaXQnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnTW92ZSB0byBjYXRlZ29yeScsXHJcblx0XHRcdGljb246ICcmI3hGMjkyOycsXHJcblx0XHRcdGxhYmVsOiAnbW92ZS10by1jYXRlZ29yeSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdNb3ZlIHRvIGZvbGRlcicsXHJcblx0XHRcdGljb246ICcmI3hFODEzOycsXHJcblx0XHRcdGxhYmVsOiAnbW92ZS10by1mb2xkZXInXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnRGVsZXRlJyxcclxuXHRcdFx0aWNvbjogJyYjeEYxRjg7JyxcclxuXHRcdFx0bGFiZWw6ICdkZWxldGUnXHJcblx0XHR9XHJcblx0XVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzQmxvY2tNZW51U3RvcmU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNGcmFtZVRvb2xzU3RvcmUgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEU4MjQ7JyxcclxuXHRcdGxhYmVsOiAncGFyYWdyYXBoJyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hGMENCOycsXHJcblx0XHRsYWJlbDogJ251bS1saXN0J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYwQ0E7JyxcclxuXHRcdGxhYmVsOiAnbWFyay1saXN0JyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hFODAzOycsXHJcblx0XHRsYWJlbDogJ2ltYWdlJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYxNUM7JyxcclxuXHRcdGxhYmVsOiAnZmlsZSdcclxuXHR9XHJcbl07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90ZXNGcmFtZVRvb2xzU3RvcmU7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYXJhZ3JhcGgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzMjFhMDVlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BhcmFncmFwaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BhcmFncmFwaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGFyYWdyYXBoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzMjFhMDVlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjMyMWEwNWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMzIxYTA1ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMzIxYTA1ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMzIxYTA1ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGFyYWdyYXBoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzIxYTA1ZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMzIxYTA1ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzMjFhMDVlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMzIxYTA1ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzIxYTA1ZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZiNTBjYzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmNmI1MGNjNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y2YjUwY2M0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y2YjUwY2M0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y2YjUwY2M0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmI1MGNjNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNmI1MGNjNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmI1MGNjNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzU5ZTFlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMzU5ZTFlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMzU5ZTFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMzU5ZTFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzU5ZTFlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMzU5ZTFlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNTllMWU2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlMDk0MDImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNWUwOTQwMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI1ZTA5NDAyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1ZTA5NDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1ZTA5NDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlMDk0MDImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjVlMDk0MDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTA5NDAyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjhkZWIxZGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImI4ZGViMWRhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjhkZWIxZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjhkZWIxZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjhkZWIxZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiOGRlYjFkYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAxYjNmY2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMDFiM2ZjYlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwMWIzZmNiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwMWIzZmNiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwMWIzZmNiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDFiM2ZjYiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMDFiM2ZjYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAxYjNmY2Imc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ4MGNiMmJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDgwY2IyYmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ODBjYjJiYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ODBjYjJiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ODBjYjJiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgwY2IyYmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDgwY2IyYmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDgwY2IyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ODBjYjJiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgwY2IyYmMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNzlmYWU0YyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjc5ZmFlNGNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNzlmYWU0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNzlmYWU0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNzlmYWU0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3OWZhZTRjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y3OWZhZTRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjc5ZmFlNGMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLW1vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjgyZWVkMjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjgyZWVkMjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmODJlZWQyMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmODJlZWQyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmODJlZWQyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmODJlZWQyMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLW1vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2R1bGVzL25vdGVzJzsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZldG90LWJ1dHRvbiBicjNweCBjcCBmYyBwciBiZnItY2xpY2tcIlxyXG4gICAgICAgOnN0eWxlPVwic2V0QnV0dG9uU2l6ZVwiXHJcbiAgICAgICBAY2xpY2suc3RvcD1cIiRlbWl0KCdmZXRvdC1idXR0b24tY2xpY2snKVwiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHRuYW1lOiAnZmV0b3QtYnV0dG9uJyxcclxuICAgIHByb3BzOiB7XHJcbiAgXHRcdHNpemU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgXHRcdHNldEJ1dHRvblNpemUoKSB7XHJcbiAgXHRcdFx0cmV0dXJuIHsgd2lkdGg6IGAke3RoaXMuc2l6ZX1weGAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5mZXRvdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICBjb2xvcjogJGZldG90LWRhcmstYmx1ZTtcclxuICAgIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBAaW5jbHVkZSBzdGF0aWMtc2hhZG93O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgICBjb2xvcjogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtY29uZmlybS1idXR0b25zIGZsZXggdzEwMFwiPlxyXG4gICAgPGZldG90LWJ1dHRvbiA6c2l6ZT1cInNpemVcIiBAZmV0b3QtYnV0dG9uLWNsaWNrPVwiJGVtaXQoJ2NvbmZpcm0tZXZlbnQnLCBmYWxzZSlcIj5cclxuICAgICAgPGZldG90LWljb24gaWNvbj1cIiYjeEU4MDg7XCI+PC9mZXRvdC1pY29uPlxyXG4gICAgPC9mZXRvdC1idXR0b24+XHJcbiAgICA8ZmV0b3QtYnV0dG9uIDpzaXplPVwic2l6ZVwiIEBmZXRvdC1idXR0b24tY2xpY2s9XCIkZW1pdCgnY29uZmlybS1ldmVudCcsIHRydWUpXCI+XHJcbiAgICAgIDxmZXRvdC1pY29uIGljb249XCImI3hFODA3O1wiPjwvZmV0b3QtaWNvbj5cclxuICAgIDwvZmV0b3QtYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZmV0b3RJY29uIGZyb20gJy4uL2ljb25zL2ZldG90LWljb24udnVlJztcclxuICBpbXBvcnQgZmV0b3RCdXR0b24gZnJvbSAnLi9mZXRvdC1idXR0b24udnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2ZldG90LWNvbmZpcm0tYnV0dG9ucycsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRzaXplOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDk2XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1idXR0b24nOiBmZXRvdEJ1dHRvbixcclxuXHRcdFx0J2ZldG90LWljb24nOiBmZXRvdEljb24sXHJcblx0XHR9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWNvbmZpcm0tYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuZmV0b3QtYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtZGF0ZVwiPnt7IGRyYXdEYXRlIH19PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdmZXRvdC1kYXRlJyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGRhdGU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGRyYXdEYXRlKCkge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xyXG5cdFx0XHRcdHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LiR7ZGF0ZS5nZXRNb250aCgpICsgMX0uJHtkYXRlLmdldERhdGUoKX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWRhdGUge1xyXG4gICAgY29sb3I6ICRmZXRvdC1kYXJrLWdyYXk7XHJcbiAgICBmb250OiAxNHB4ICdyb2JvdG8tYm9sZCc7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicGFyYWdyYXBoIHcxMDAgYnMgcHIgYnI2cHggYmctZmZmXCIgOmNsYXNzPVwic2V0U3RhdGVcIj5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRhIGZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJlZj1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICBAaW5wdXQ9XCJpbnB1dEhhbmRsZXJcIlxyXG4gICAgICAgICAgICAgIEBmb2N1cz1cImZvY3VzSGFuZGxlclwiXHJcbiAgICAgICAgICAgICAgQGJsdXI9XCJibHVySGFuZGxlclwiPnt7IHRleHQgfX08L3RleHRhcmVhPlxyXG5cclxuICAgIDxmZXRvdC1pbnB1dC1pY29uIGljb249XCImI3hFODI0O1wiPjwvZmV0b3QtaW5wdXQtaWNvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGZldG90SW5wdXRJY29uIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvaWNvbnMvZmV0b3QtaW5wdXQtaWNvbi52dWUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAncGFyYWdyYXBoJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0dGV4dDogU3RyaW5nLFxyXG4gICAgICBvbkZvY3VzOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnZmV0b3QtaW5wdXQtaWNvbic6IGZldG90SW5wdXRJY29uXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBmb2N1c0hhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5pc0FjdGl2ZSA9IHRydWVcclxuICAgICAgfSxcclxuXHRcdFx0Ymx1ckhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3BhcmFncmFwaC1ibHVyJywgdGhpcy50ZXh0KVxyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dEhhbmRsZXIoKSB7XHJcblx0ICAgICAgdGhpcy50ZXh0YXJlYVJlc2l6ZSgpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyogc3JjICovXHJcbiAgICAgIHRleHRhcmVhUmVzaXplKCkge1xyXG4gICAgICBcdGNvbnN0IHRhID0gdGhpcy4kcmVmcy50ZXh0YXJlYTtcclxuXHJcbiAgICAgIFx0dGEuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdCAgICAgIHRhLnN0eWxlLmhlaWdodCA9IHRhLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHRzZXRTdGF0ZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4geyAnaXMtYWN0aXZlJzogdGhpcy5pc0FjdGl2ZSB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG5cdFx0XHRpZiggdGhpcy5vbkZvY3VzICkgdGhpcy4kcmVmcy50ZXh0YXJlYS5mb2N1cygpO1xyXG5cdCAgICB0aGlzLnRleHRhcmVhUmVzaXplKCk7XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5wYXJhZ3JhcGgge1xyXG4gICAgY29sb3I6ICRmZXRvdC1kYXJrLWdyYXk7XHJcbiAgICBmb250OiAxOHB4ICdyb2JvdG8tbWVkaXVtJztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICYuaXMtYWN0aXZlLCAmOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgc3RhdGljLXNoYWRvdztcclxuXHJcbiAgICAgIC5mZXRvdC1pbnB1dC1pY29uIHtcclxuICAgICAgICBsZWZ0OiAtMjhweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mZXRvdC1pbnB1dC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLnRhIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBAaW5jbHVkZSBmb3JtLWVsZW1lbnQ7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudFwiPlxyXG4gICAgPGlucHV0LXRpdGxlLWNvbXBvbmVudFxyXG4gICAgICAgICAgICA6aW4tZm9jdXM9XCJ0cnVlXCJcclxuICAgICAgICAgICAgOmlucHV0PVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBAaW5wdXQtdGl0bGUtZXZlbnQ9XCJpbnB1dFRpdGxlRXZlbnRIYW5kbGVyXCI+XHJcbiAgICA8L2lucHV0LXRpdGxlLWNvbXBvbmVudD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudCcsXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlucHV0OiB7XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIG5ldyBub3RlIHRpdGxlJyxcclxuICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcblx0XHRcdFx0Y3VycmVudE5vdGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbm90ZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0XHRcdGlucHV0VGl0bGVFdmVudEhhbmRsZXIodmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnROb3RlU3RvcmUuYWN0aW9ucy51cGRhdGVWYWx1ZSh7a2V5OiAndGl0bGUnLCB2YWx1ZX0pXHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnRcIj5cclxuICAgIDxmZXRvdC1jb25maXJtLWJ1dHRvbnMgOnNpemU9XCIxMzJcIiBAY29uZmlybS1ldmVudD1cImNvbmZpcm1FdmVudEhhbmRsZXJcIj48L2ZldG90LWNvbmZpcm0tYnV0dG9ucz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGZldG90Q29uZmlybUJ1dHRvbnMgZnJvbSAnJGZldG90LXZpZXctY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWUnO1xyXG5cdGltcG9ydCBldmVudHNFbWl0dGVyV29ya2VyIGZyb20gJyRmZXRvdC1ldmVudHMtZW1pdHRlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQnLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHQnZmV0b3QtY29uZmlybS1idXR0b25zJzogZmV0b3RDb25maXJtQnV0dG9uc1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y29uZmlybUV2ZW50SGFuZGxlcihsYWJlbCkge1xyXG5cdFx0XHRcdGV2ZW50c0VtaXR0ZXJXb3JrZXIuZ2V0RW1pdHRlcignbm90ZXMnKS5lbWl0KCdjcmVhdGUtbm90ZS1jb25maXJtJywgbGFiZWwpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHcxMDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbmZvIHcxMDAgZmFpY1wiPlxyXG4gICAgICA8ZmV0b3QtZGF0ZSA6ZGF0ZT1cIm5vdGVEYXRlXCI+PC9mZXRvdC1kYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxpbnB1dC10aXRsZS1jb21wb25lbnRcclxuICAgICAgICAgICAgOmlucHV0PVwibm90ZVRpdGxlXCJcclxuICAgICAgICAgICAgQGlucHV0LXRpdGxlLWV2ZW50PVwiaW5wdXRUaXRsZUV2ZW50SGFuZGxlclwiPlxyXG4gICAgPC9pbnB1dC10aXRsZS1jb21wb25lbnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdERhdGUgZnJvbSAnJGZldG90LXZpZXctY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZSc7XHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXInLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHQgICAgJ2ZldG90LWRhdGUnOiBmZXRvdERhdGVcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGlucHV0VGl0bGVFdmVudEhhbmRsZXIodmFsdWUpIHtcclxuXHQgICAgXHR0aGlzLmN1cnJlbnROb3RlU3RvcmUuYWN0aW9ucy51cGRhdGVWYWx1ZSh7IGtleTogJ3RpdGxlJywgdmFsdWUgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdG5vdGVEYXRlKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy5kYXRlKClcclxuICAgICAgfSxcclxuICAgICAgbm90ZVRpdGxlKCkge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ05vdGUgdGl0bGUnLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLnRpdGxlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG4gIC5pbmZvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UgdzEwMFwiPlxyXG4gICAgPHBhcmFncmFwaCB0ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEEsIG5hbT9cIj48L3BhcmFncmFwaD5cclxuICAgIDxwYXJhZ3JhcGggdGV4dD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb25zZXF1YXR1ciBkb2xvcnVtIGR1Y2ltdXMgaXBzYSBpc3RlIHF1aWEgcXVvLlwiPjwvcGFyYWdyYXBoPlxyXG4gICAgPHBhcmFncmFwaCB0ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFwZXJpYW0gY3VtcXVlIGRvbG9yZW1xdWUgbmlzaSBvZGlvIHF1byB2ZXJpdGF0aXMuXCI+PC9wYXJhZ3JhcGg+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBwYXJhZ3JhcGggZnJvbSAnLi4vZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC52dWUnO1xyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlJyxcclxuICAgIGRhdGUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y3VycmVudE5vdGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbm90ZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdHBhcmFncmFwaFxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdG5vdGVDb250ZW50KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy5jb250ZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZXMtZnJhbWUtY29udGVudCBic1wiPlxyXG4gICAgPG5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyPjwvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXI+XHJcbiAgICA8bm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2U+PC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZT5cclxuXHJcbiAgICA8ZnJhbWUtdG9vbHNcclxuICAgICAgICAgICAgOnRvb2xzPVwidG9vbHNcIlxyXG4gICAgICAgICAgICA6aXMtYWN0aXZlPVwiaXNGcmFtZVRvb2xzQWN0aXZlXCJcclxuICAgICAgICAgICAgQHRvb2xzLWl0ZW0tY2xpY2s9XCJ0b29sc0l0ZW1DbGlja0hhbmRsZXJcIj5cclxuICAgIDwvZnJhbWUtdG9vbHM+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBub3Rlc0ZyYW1lQ29udGVudEhlYWRlciBmcm9tICcuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZSc7XHJcbiAgaW1wb3J0IG5vdGVzRnJhbWVDb250ZW50V29ya3NwYWNlIGZyb20gJy4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlJztcclxuXHJcbiAgaW1wb3J0IG5vdGVzRnJhbWVUb29sc1N0b3JlIGZyb20gJy4uLy4uL3N0b3JlL25vdGVzLWZyYW1lLXRvb2xzLXN0b3JlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWZyYW1lLWNvbnRlbnQnLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc0ZyYW1lVG9vbHNBY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRcdHRvb2xzOiBub3Rlc0ZyYW1lVG9vbHNTdG9yZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXInOiBub3Rlc0ZyYW1lQ29udGVudEhlYWRlcixcclxuICAgICAgJ25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlJzogbm90ZXNGcmFtZUNvbnRlbnRXb3Jrc3BhY2VcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIHRvb2xzSXRlbUNsaWNrSGFuZGxlcihsYWJlbCkge1xyXG5cdCAgICBcdGNvbnNvbGUubG9nKCd0b29scycsIGxhYmVsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5ub3Rlcy1mcmFtZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHggOTZweCA0MnB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPG1lbnUtY29udGFpbmVyIEBjbG9zZS1tZW51LWV2ZW50PVwiJGVtaXQoJ2Nsb3NlLW1lbnUtZXZlbnQnKVwiPlxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDptZW51LXRpdGxlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1lbnUtaXRlbXM+XHJcbiAgICAgIDxtZW51LWl0ZW0gdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG1lbnVJdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCIgOml0ZW09XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICBAbWVudS1pdGVtLWNsaWNrPVwibWVudUl0ZW1DbGlja0hhbmRsZXJcIj5cclxuICAgICAgPC9tZW51LWl0ZW0+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gIDwvbWVudS1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBub3Rlc0Jsb2NrTWVudVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL25vdGVzLWJsb2NrLW1lbnUtc3RvcmUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtYmxvY2stbWVudScsXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHR0aXRsZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBtZW51SXRlbUNsaWNrSGFuZGxlcihpdGVtKSB7XHJcblx0ICAgIFx0Y29uc29sZS5sb2coJ21lbnUtaXRlbS1jbGljaycsIGl0ZW0pXHJcbiAgICAgIH0sXHJcblx0ICAgIG1lbnVDbG9zZUV2ZW50SGFuZGxlcigpIHtcclxuXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHRtZW51SXRlbXMoKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5vdGVzQmxvY2tNZW51U3RvcmUuaXRlbXNcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8YmxvY2stY29udGFpbmVyXHJcbiAgICAgICAgICBAYmxvY2stY29udGVudC1jbGljaz1cImJsb2NrQ29udGVudENsaWNrSGFuZGxlclwiXHJcbiAgICAgICAgICBAb3Blbi1tZW51LWV2ZW50PVwib3Blbk1lbnVFdmVudEhhbmRsZXJcIj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OmJsb2NrLXRpdGxlPnt7IGJsb2NrLnRpdGxlIH19PC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OmJsb2NrLW1lbnUgdi1pZj1cImlzTWVudU9wZW5cIj5cclxuICAgICAgPG5vdGVzLWJsb2NrLW1lbnUgOnRpdGxlPVwiYmxvY2sudGl0bGVcIiBAY2xvc2UtbWVudS1ldmVudD1cImNsb3NlTWVudUV2ZW50SGFuZGxlclwiPjwvbm90ZXMtYmxvY2stbWVudT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpibG9jay1jb250ZW50PlxyXG4gICAgICA8ZGl2IHYtaHRtbD1cImRyYXdDb250ZW50XCI+PC9kaXY+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmxvY2stZGF0ZT5cclxuICAgICAgPGZldG90LWRhdGUgOmRhdGU9XCJub3RlRGF0ZVwiPjwvZmV0b3QtZGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gIDwvYmxvY2stY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZmV0b3REYXRlIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWUnO1xyXG4gIGltcG9ydCBub3Rlc0Jsb2NrTWVudSBmcm9tICcuL25vdGVzLWJsb2NrLW1lbnUudnVlJztcclxuXHJcbiAgaW1wb3J0IGRyYXdCbG9ja0NvbnRlbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kcmF3LWJsb2NrLWNvbnRlbnQnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtYmxvY2snLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc01lbnVPcGVuOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0YmxvY2s6IE9iamVjdFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2ZldG90LWRhdGUnOiBmZXRvdERhdGUsXHJcbiAgICAgICdub3Rlcy1ibG9jay1tZW51Jzogbm90ZXNCbG9ja01lbnVcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHRkcmF3Q29udGVudCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gZHJhd0Jsb2NrQ29udGVudCh0aGlzLmJsb2NrLmNvbnRlbnQpXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGVEYXRlKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmJsb2NrLmluZm8uZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICAvKiBtZW51ICovXHJcblx0XHRcdG9wZW5NZW51RXZlbnRIYW5kbGVyKCkge1xyXG5cdCAgICBcdGNvbnNvbGUubG9nKCdvcGVuLW1lbnUtZXZlbnQnKTtcclxuXHQgICAgXHR0aGlzLmlzTWVudU9wZW4gPSB0cnVlO1xyXG4gICAgICB9LFxyXG5cdCAgICBjbG9zZU1lbnVFdmVudEhhbmRsZXIoKSB7XHJcblx0XHQgICAgY29uc29sZS5sb2coJ2Nsb3NlLW1lbnUtZXZlbnQnKTtcclxuXHRcdCAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZTtcclxuICAgICAgfSxcclxuXHJcblx0ICAgIGJsb2NrQ29udGVudENsaWNrSGFuZGxlcigpIHtcclxuXHQgICAgXHRjb25zb2xlLmxvZygnYmxvY2stY29udGVudC1jbGljay1oYW5kbGVyJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPG1vZHVsZS1jb250YWluZXIgOmhhcy1mcmFtZT1cImhhc0ZyYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZnJhbWUtb3B0aW9ucz1cImZyYW1lT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsb3NlLWZyYW1lLWV2ZW50PVwiY2xvc2VGcmFtZUV2ZW50SGFuZGxlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNyZWF0ZS1ibG9jay1ldmVudD1cImNyZWF0ZU5vdGVFdmVudEhhbmRsZXJcIj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1vZHVsZS1mcmFtZS1jb250ZW50PlxyXG4gICAgICA8bm90ZXMtZnJhbWUtY29udGVudD48L25vdGVzLWZyYW1lLWNvbnRlbnQ+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bW9kdWxlLWJsb2Nrcz5cclxuICAgICAgPG5vdGVzLWJsb2NrIHYtZm9yPVwiKGJsb2NrLCBpbmRleCkgaW4gY3VycmVudEJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIiA6YmxvY2s9XCJibG9ja1wiPlxyXG4gICAgICA8L25vdGVzLWJsb2NrPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICA8L21vZHVsZS1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBub3Rlc0ZyYW1lQ29udGVudCBmcm9tICcuLi9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlJztcclxuICBpbXBvcnQgbm90ZXNCbG9jayBmcm9tICcuL25vdGVzLWJsb2NrLnZ1ZSdcclxuXHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG4gIGltcG9ydCBldmVudHNFbWl0dGVyV29ya2VyIGZyb20gJyRmZXRvdC1ldmVudHMtZW1pdHRlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1tb2R1bGUnLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRoYXNGcmFtZTogZmFsc2UsXHJcblxyXG4gICAgICAgIGN1cnJlbnRNb2R1bGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbW9kdWxlJyksXHJcbiAgICAgICAgY3VycmVudE5vdGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbm90ZScpLFxyXG5cclxuICAgICAgICBhcHBFdmVudHNFbWl0dGVyOiBldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ2FwcCcpLFxyXG4gICAgICAgIG5vdGVzRXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdub3RlcycpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdub3Rlcy1mcmFtZS1jb250ZW50Jzogbm90ZXNGcmFtZUNvbnRlbnQsXHJcblx0XHRcdCdub3Rlcy1ibG9jayc6IG5vdGVzQmxvY2tcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0XHRcdC8qIGNyZWF0ZSBub3RlICovXHJcblx0ICAgIGNyZWF0ZU5vdGVFdmVudEhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5hcHBFdmVudHNFbWl0dGVyLmVtaXQoXHJcblx0ICAgIFx0XHQnb3Blbi1tb2RhbC1ldmVudCcsXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNb2R1bGVTdG9yZS5zdGF0ZS5jb25maWcuY3JlYXRlTm90ZU1vZGFsQ29uZmlnXHJcbiAgICAgICAgKTtcclxuXHQgICAgXHR0aGlzLm5vdGVzRXZlbnRzRW1pdHRlci5vbihcclxuXHQgICAgXHRcdCdjcmVhdGUtbm90ZS1jb25maXJtJyxcclxuICAgICAgICAgIHRoaXMuY3JlYXRlTm90ZUNvbmZpcm1IYW5kbGVyXHJcbiAgICAgICAgKVxyXG4gICAgICB9LFxyXG5cdCAgICBjcmVhdGVOb3RlQ29uZmlybUhhbmRsZXIobGFiZWwpIHtcclxuXHQgICAgXHRpZiggbGFiZWwgKSB7XHJcblx0XHRcdCAgICB0aGlzLmN1cnJlbnROb3RlU3RvcmUuYWN0aW9ucy51cGRhdGVJbmZvVmFsdWUoeyBrZXk6ICdkYXRlJywgdmFsdWU6IG5ldyBEYXRlKCkgfSk7XHJcblx0XHRcdCAgICB0aGlzLm9wZW5GcmFtZUhhbmRsZXIoKTtcclxuXHRcdCAgICB9XHJcblxyXG5cdCAgICAgIHRoaXMuYXBwRXZlbnRzRW1pdHRlci5lbWl0KCdjbG9zZS1tb2RhbC1ldmVudCcpO1xyXG5cdCAgICBcdHRoaXMubm90ZXNFdmVudHNFbWl0dGVyLnJlbW92ZSgnY3JlYXRlLW5vdGUtY29uZmlybScsIHRoaXMuY3JlYXRlTm90ZUNvbmZpcm1IYW5kbGVyKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIGZyYW1lICovXHJcbiAgICAgIG9wZW5GcmFtZUhhbmRsZXIoKSB7XHJcbiAgICAgIFx0dGhpcy5oYXNGcmFtZSA9IHRydWU7XHJcbiAgICAgIH0sXHJcblx0ICAgIGNsb3NlRnJhbWVFdmVudEhhbmRsZXIoKSB7XHJcbiAgICAgIFx0dGhpcy5oYXNGcmFtZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0Y3VycmVudEJsb2NrcygpIHtcclxuXHRcdFx0XHRyZXR1cm4gU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtYmxvY2tzJykuZ2V0dGVycy5nZXRMaWtlQXJyYXkoKTtcclxuICAgICAgfSxcclxuICAgICAgZnJhbWVPcHRpb25zKCkge1xyXG5cdFx0XHRcdGNvbnN0IHRpdGxlID0gdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmdldHRlcnMudGl0bGUoKTtcclxuXHRcdFx0XHRyZXR1cm4geyBoZWFkZXI6IHsgdGl0bGUsIGljb246ICcmI3hFODBDOycgfSB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZXN0cm95ZWQoKSB7XHJcblx0XHRcdFN0b3JlV29ya2VyLnJlbW92ZVN0b3JlKCdjdXJyZW50LW5vdGUnKVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uZmV0b3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjU7XFxuICBjb2xvcjogIzAwNDQ2NjtcXG4gIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSg1NywgNjIsIDcwLCAwLjQpO1xcbn1cXG4uZmV0b3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwNDQ2NjtcXG4gICAgY29sb3I6ICNGMUYxRjU7XFxufVxcbi5mZXRvdC1idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5mZXRvdC1jb25maXJtLWJ1dHRvbnMge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5mZXRvdC1jb25maXJtLWJ1dHRvbnMgLmZldG90LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmZldG90LWRhdGVbZGF0YS12LWE3NzZlOGM0XSB7XFxuICBjb2xvcjogIzM5M0U0NjtcXG4gIGZvbnQ6IDE0cHggJ3JvYm90by1ib2xkJztcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5wYXJhZ3JhcGhbZGF0YS12LTIzMjFhMDVlXSB7XFxuICBjb2xvcjogIzM5M0U0NjtcXG4gIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wYXJhZ3JhcGguaXMtYWN0aXZlW2RhdGEtdi0yMzIxYTA1ZV0sIC5wYXJhZ3JhcGhbZGF0YS12LTIzMjFhMDVlXTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDU3LCA2MiwgNzAsIDAuNCk7XFxufVxcbi5wYXJhZ3JhcGguaXMtYWN0aXZlIC5mZXRvdC1pbnB1dC1pY29uW2RhdGEtdi0yMzIxYTA1ZV0sIC5wYXJhZ3JhcGg6aG92ZXIgLmZldG90LWlucHV0LWljb25bZGF0YS12LTIzMjFhMDVlXSB7XFxuICAgICAgbGVmdDogLTI4cHg7XFxuICAgICAgb3BhY2l0eTogMTtcXG59XFxuLmZldG90LWlucHV0LWljb25bZGF0YS12LTIzMjFhMDVlXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi50YVtkYXRhLXYtMjMyMWEwNWVdIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIG1pbi1oZWlnaHQ6IDQycHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4ubm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXJbZGF0YS12LTI1ZTA5NDAyXSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4uaW5mb1tkYXRhLXYtMjVlMDk0MDJdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4ubm90ZXMtZnJhbWUtY29udGVudFtkYXRhLXYtMjAxYjNmY2JdIHtcXG4gIHBhZGRpbmc6IDI0cHggOTZweCA0MnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuXCIsIFwiXCJdKTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmZXRvdC1idXR0b24gYnIzcHggY3AgZmMgcHIgYmZyLWNsaWNrXCIsXG4gICAgICBzdHlsZTogX3ZtLnNldEJ1dHRvblNpemUsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImZldG90LWJ1dHRvbi1jbGlja1wiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZmV0b3QtY29uZmlybS1idXR0b25zIGZsZXggdzEwMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZmV0b3QtYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBzaXplOiBfdm0uc2l6ZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImZldG90LWJ1dHRvbi1jbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNvbmZpcm0tZXZlbnRcIiwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJmZXRvdC1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCImI3hFODA4O1wiIH0gfSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZldG90LWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgc2l6ZTogX3ZtLnNpemUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJmZXRvdC1idXR0b24tY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjb25maXJtLWV2ZW50XCIsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJmZXRvdC1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCImI3hFODA3O1wiIH0gfSldLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmV0b3QtZGF0ZVwiIH0sIFtcbiAgICBfdm0uX3YoX3ZtLl9zKF92bS5kcmF3RGF0ZSkpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFyYWdyYXBoIHcxMDAgYnMgcHIgYnI2cHggYmctZmZmXCIsIGNsYXNzOiBfdm0uc2V0U3RhdGUgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGEgZnVsbFwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogX3ZtLmlucHV0SGFuZGxlcixcbiAgICAgICAgICAgIGZvY3VzOiBfdm0uZm9jdXNIYW5kbGVyLFxuICAgICAgICAgICAgYmx1cjogX3ZtLmJsdXJIYW5kbGVyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udGV4dCkpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZldG90LWlucHV0LWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcIiYjeEU4MjQ7XCIgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dC10aXRsZS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyBcImluLWZvY3VzXCI6IHRydWUsIGlucHV0OiBfdm0uaW5wdXQgfSxcbiAgICAgICAgb246IHsgXCJpbnB1dC10aXRsZS1ldmVudFwiOiBfdm0uaW5wdXRUaXRsZUV2ZW50SGFuZGxlciB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImZldG90LWNvbmZpcm0tYnV0dG9uc1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNpemU6IDEzMiB9LFxuICAgICAgICBvbjogeyBcImNvbmZpcm0tZXZlbnRcIjogX3ZtLmNvbmZpcm1FdmVudEhhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHcxMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8gdzEwMCBmYWljXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmV0b3QtZGF0ZVwiLCB7IGF0dHJzOiB7IGRhdGU6IF92bS5ub3RlRGF0ZSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXRlZ29yeVwiIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dC10aXRsZS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyBpbnB1dDogX3ZtLm5vdGVUaXRsZSB9LFxuICAgICAgICBvbjogeyBcImlucHV0LXRpdGxlLWV2ZW50XCI6IF92bS5pbnB1dFRpdGxlRXZlbnRIYW5kbGVyIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZSB3MTAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInBhcmFncmFwaFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEEsIG5hbT9cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBhcmFncmFwaFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbnNlcXVhdHVyIGRvbG9ydW0gZHVjaW11cyBpcHNhIGlzdGUgcXVpYSBxdW8uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwYXJhZ3JhcGhcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBcGVyaWFtIGN1bXF1ZSBkb2xvcmVtcXVlIG5pc2kgb2RpbyBxdW8gdmVyaXRhdGlzLlwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50IGJzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2VcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmcmFtZS10b29sc1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvb2xzOiBfdm0udG9vbHMsIFwiaXMtYWN0aXZlXCI6IF92bS5pc0ZyYW1lVG9vbHNBY3RpdmUgfSxcbiAgICAgICAgb246IHsgXCJ0b29scy1pdGVtLWNsaWNrXCI6IF92bS50b29sc0l0ZW1DbGlja0hhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJtZW51LWNvbnRhaW5lclwiLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xvc2UtbWVudS1ldmVudFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlLW1lbnUtZXZlbnRcIilcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibWVudS10aXRsZVwiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1lbnUtaXRlbXNcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdm0uX2woX3ZtLm1lbnVJdGVtcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIm1lbnUtaXRlbVwiLCB7XG4gICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfSxcbiAgICAgICAgICAgICAgb246IHsgXCJtZW51LWl0ZW0tY2xpY2tcIjogX3ZtLm1lbnVJdGVtQ2xpY2tIYW5kbGVyIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH1cbiAgICBdKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJibG9jay1jb250YWluZXJcIiwge1xuICAgIG9uOiB7XG4gICAgICBcImJsb2NrLWNvbnRlbnQtY2xpY2tcIjogX3ZtLmJsb2NrQ29udGVudENsaWNrSGFuZGxlcixcbiAgICAgIFwib3Blbi1tZW51LWV2ZW50XCI6IF92bS5vcGVuTWVudUV2ZW50SGFuZGxlclxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJibG9jay10aXRsZVwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbX3ZtLl92KF92bS5fcyhfdm0uYmxvY2sudGl0bGUpKV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF92bS5pc01lbnVPcGVuXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGtleTogXCJibG9jay1tZW51XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJub3Rlcy1ibG9jay1tZW51XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5ibG9jay50aXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBcImNsb3NlLW1lbnUtZXZlbnRcIjogX3ZtLmNsb3NlTWVudUV2ZW50SGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYmxvY2stY29udGVudFwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRyYXdDb250ZW50KSB9IH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImJsb2NrLWRhdGVcIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW19jKFwiZmV0b3QtZGF0ZVwiLCB7IGF0dHJzOiB7IGRhdGU6IF92bS5ub3RlRGF0ZSB9IH0pXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG51bGwsXG4gICAgICB0cnVlXG4gICAgKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJtb2R1bGUtY29udGFpbmVyXCIsIHtcbiAgICBhdHRyczogeyBcImhhcy1mcmFtZVwiOiBfdm0uaGFzRnJhbWUsIFwiZnJhbWUtb3B0aW9uc1wiOiBfdm0uZnJhbWVPcHRpb25zIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2UtZnJhbWUtZXZlbnRcIjogX3ZtLmNsb3NlRnJhbWVFdmVudEhhbmRsZXIsXG4gICAgICBcImNyZWF0ZS1ibG9jay1ldmVudFwiOiBfdm0uY3JlYXRlTm90ZUV2ZW50SGFuZGxlclxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2R1bGUtZnJhbWUtY29udGVudFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnRcIildXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kdWxlLWJsb2Nrc1wiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5fbChfdm0uY3VycmVudEJsb2NrcywgZnVuY3Rpb24oYmxvY2ssIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJub3Rlcy1ibG9ja1wiLCB7IGtleTogaW5kZXgsIGF0dHJzOiB7IGJsb2NrOiBibG9jayB9IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH1cbiAgICBdKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjUwNTU5MGUxXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjczMGRlY2NhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyMDIzOWZjZFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMzIxYTA1ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNkMGNjZGFjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMzIxYTA1ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzMjFhMDVlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTA5NDAyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMzg5ZTVkZDZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTA5NDAyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxZDE0MjQxY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwMWIzZmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwMWIzZmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDgwY2IyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyYmFjNTJjYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=