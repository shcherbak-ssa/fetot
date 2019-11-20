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
    id: '',
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

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue":
/*!**********************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component-item.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_component_item_vue_vue_type_template_id_767529e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-component-item.vue?vue&type=template&id=767529e2&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=template&id=767529e2&scoped=true&");
/* harmony import */ var _list_component_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-component-item.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_component_item_vue_vue_type_style_index_0_id_767529e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_component_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_component_item_vue_vue_type_template_id_767529e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_component_item_vue_vue_type_template_id_767529e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "767529e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/form-components/list-component-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_style_index_0_id_767529e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_style_index_0_id_767529e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_style_index_0_id_767529e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_style_index_0_id_767529e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_style_index_0_id_767529e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_style_index_0_id_767529e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=template&id=767529e2&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=template&id=767529e2&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_template_id_767529e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component-item.vue?vue&type=template&id=767529e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=template&id=767529e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_template_id_767529e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_item_vue_vue_type_template_id_767529e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component.vue":
/*!*****************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_component_vue_vue_type_template_id_af48ec64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-component.vue?vue&type=template&id=af48ec64&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=template&id=af48ec64&scoped=true&");
/* harmony import */ var _list_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-component.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_component_vue_vue_type_style_index_0_id_af48ec64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_component_vue_vue_type_template_id_af48ec64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_component_vue_vue_type_template_id_af48ec64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "af48ec64",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/form-components/list-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_style_index_0_id_af48ec64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_style_index_0_id_af48ec64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_style_index_0_id_af48ec64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_style_index_0_id_af48ec64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_style_index_0_id_af48ec64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_style_index_0_id_af48ec64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=template&id=af48ec64&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=template&id=af48ec64&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_template_id_af48ec64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component.vue?vue&type=template&id=af48ec64&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=template&id=af48ec64&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_template_id_af48ec64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_component_vue_vue_type_template_id_af48ec64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue":
/*!**********************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paragraph_component_vue_vue_type_template_id_5a8a684e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true&");
/* harmony import */ var _paragraph_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paragraph-component.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _paragraph_component_vue_vue_type_style_index_0_id_5a8a684e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true& */ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _paragraph_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paragraph_component_vue_vue_type_template_id_5a8a684e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paragraph_component_vue_vue_type_template_id_5a8a684e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a8a684e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/form-components/paragraph-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_style_index_0_id_5a8a684e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_style_index_0_id_5a8a684e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_style_index_0_id_5a8a684e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_style_index_0_id_5a8a684e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_style_index_0_id_5a8a684e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_style_index_0_id_5a8a684e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_template_id_5a8a684e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_template_id_5a8a684e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_component_vue_vue_type_template_id_5a8a684e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component-mixin.js":
/*!******************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/src/textarea-component-mixin.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textarea_component_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea-component.vue */ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** exports [begin] ***/

const textareaComponentMixin = {
  data() {
    return {
      isActive: false,
      hasValue: false
    };
  },

  props: {
    value: String,
    onFocus: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'textarea-component': _textarea_component_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    inputHandler(value) {
      this.hasValue = value !== '';
    },

    focusHandler() {
      this.isActive = true;
    },

    blurHandler(value) {
      this.isActive = false;
      this.$emit('blur-event', value);
    }

  },

  mounted() {
    this.hasValue = this.value !== '';
  }

};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (textareaComponentMixin);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue":
/*!*************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textarea_component_vue_vue_type_template_id_1494abf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea-component.vue?vue&type=template&id=1494abf5& */ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=template&id=1494abf5&");
/* harmony import */ var _textarea_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea-component.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _textarea_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea-component.vue?vue&type=style&index=0&lang=scss& */ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _textarea_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _textarea_component_vue_vue_type_template_id_1494abf5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _textarea_component_vue_vue_type_template_id_1494abf5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea-component.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=template&id=1494abf5&":
/*!********************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=template&id=1494abf5& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_template_id_1494abf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea-component.vue?vue&type=template&id=1494abf5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=template&id=1494abf5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_template_id_1494abf5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_component_vue_vue_type_template_id_1494abf5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* empty/unused harmony star reexport *//* harmony import */ var _note_modal_footer_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-modal-footer-component.vue?vue&type=style&index=0&lang=scss& */ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./note-modal-footer-component.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_note_modal_footer_component_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue":
/*!*****************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes_frame_content_workspace_item_vue_vue_type_template_id_26a88fbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true&");
/* harmony import */ var _notes_frame_content_workspace_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-frame-content-workspace-item.vue?vue&type=script&lang=js& */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notes_frame_content_workspace_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notes_frame_content_workspace_item_vue_vue_type_template_id_26a88fbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notes_frame_content_workspace_item_vue_vue_type_template_id_26a88fbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26a88fbd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-workspace-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true&":
/*!************************************************************************************************************************************************************!*\
  !*** ./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_item_vue_vue_type_template_id_26a88fbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_item_vue_vue_type_template_id_26a88fbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_frame_content_workspace_item_vue_vue_type_template_id_26a88fbd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_textarea_component_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/textarea-component-mixin */ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component-mixin.js");
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
  name: 'list-component-item',
  mixins: [_src_textarea_component_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    setInputContainerData() {
      return {
        icon: '',
        placeholder: 'List item',
        isActive: this.isActive,
        hasValue: this.hasValue
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_component_item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-component-item.vue */ "./build/app-page/components/modules/notes/view/form-components/list-component-item.vue");
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
  name: 'list-component',

  data() {
    return {
      isActive: false
    };
  },

  props: {
    isNum: Boolean,
    list: Array
  },
  components: {
    'list-component-item': _list_component_item_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    blurEventHandler(value) {}

  },
  computed: {
    setInputContainerData() {
      return {
        icon: this.isNum ? '&#xF0CB;' : '&#xF0CA;',
        placeholder: '',
        isActive: this.isActive,
        hasValue: false
      };
    },

    listType() {
      return {
        'is-mark-list': !this.isNum
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_textarea_component_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/textarea-component-mixin */ "./build/app-page/components/modules/notes/view/form-components/src/textarea-component-mixin.js");
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
  name: 'paragraph-component',
  mixins: [_src_textarea_component_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    setInputContainerData() {
      return {
        icon: '&#xE824;',
        placeholder: 'Paragraph',
        isActive: this.isActive,
        hasValue: this.hasValue
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
  name: 'textarea-component',
  props: {
    value: String,
    onFocus: Boolean
  },
  methods: {
    inputHandler({
      target
    }) {
      this.textareaResize();
      this.$emit('textarea-input', target.value);
    },

    textareaResize() {
      const ta = this.$refs.textarea;
      ta.style.height = 'auto';
      ta.style.height = ta.scrollHeight + 'px';
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_components_paragraph_component_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-components/paragraph-component.vue */ "./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue");
/* harmony import */ var _form_components_list_component_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-components/list-component.vue */ "./build/app-page/components/modules/notes/view/form-components/list-component.vue");
/* harmony import */ var $fetot_services_true_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $fetot-services/true-type */ "./app/components/services/true-type.js");
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
  name: 'notes-frame-content-workspace-item',

  data() {
    return {
      type: '',
      data: ''
    };
  },

  props: {
    item: [Array, String]
  },
  components: {
    'paragraph-component': _form_components_paragraph_component_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'list-component': _form_components_list_component_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    paragraphBlurEventHandler(value) {}

  },

  beforeMount() {
    switch ($fetot_services_true_type__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.item)) {
      case 'String':
        this.type = this.item[0] === 'p' ? 'paragraph' : '';
        this.data = this.item.slice(1);
        break;

      case 'Array':
        this.type = typeof this.item[0] === 'boolean' ? 'num-list' : 'mark-list';
        this.data = this.type === 'num-list' ? this.item.filter((it, i) => i !== 0) : this.item;
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
/* harmony import */ var _notes_frame_content_workspace_item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-frame-content-workspace-item.vue */ "./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'notes-frame-content-workspace',

  data() {
    return {
      currentNoteStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-note')
    };
  },

  components: {
    'notes-frame-content-workspace-item': _notes_frame_content_workspace_item_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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
      this.isMenuOpen = true;
      this.setCurrentNoteStore();
    },

    closeMenuEventHandler() {
      this.isMenuOpen = false;
    },

    /* block */
    blockContentClickHandler() {
      this.setCurrentNoteStore();
      this.$emit('block-click-event');
    },

    /* src */
    setCurrentNoteStore() {
      $fetot_store_worker__WEBPACK_IMPORTED_MODULE_3__["default"].getStore('current-note').actions.update(this.block);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.input-container[data-v-767529e2] {\n  padding-left: 10px;\n  margin-bottom: 10px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.input-container[data-v-af48ec64] {\n  margin-bottom: 6px;\n}\n.list-component[data-v-af48ec64] {\n  list-style-type: none;\n  padding: 10px 10px 10px 32px;\n}\n.list-item-label[data-v-af48ec64] {\n  color: inherit;\n  font: inherit;\n  width: 12px;\n  height: 12px;\n  top: 10px;\n  left: -22px;\n}\n.list-item-label.is-mark-list[data-v-af48ec64] {\n    background: #393E46;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.input-container[data-v-5a8a684e] {\n  margin-bottom: 6px;\n  padding: 10px;\n}\n.fetot-input-icon[data-v-5a8a684e] {\n  font-size: 20px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.textarea-component {\n  resize: none;\n  background: transparent;\n  color: inherit;\n  display: block;\n  font: inherit;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".note-modal-footer-component {\n  padding: 0 16px;\n}\n", ""]);


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=template&id=767529e2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=template&id=767529e2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    "input-container",
    { attrs: { data: _vm.setInputContainerData } },
    [
      _c("textarea-component", {
        attrs: { value: _vm.value, "on-focus": _vm.onFocus },
        on: {
          "textarea-focus": _vm.focusHandler,
          "textarea-blur": _vm.blurHandler,
          "textarea-input": _vm.inputHandler
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=template&id=af48ec64&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=template&id=af48ec64&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("input-container", { attrs: { data: _vm.setInputContainerData } }, [
    _c(
      "ul",
      { staticClass: "list-component bs" },
      _vm._l(_vm.list, function(value, index) {
        return _c(
          "li",
          { key: index, staticClass: "pr" },
          [
            _c(
              "div",
              {
                staticClass: "list-item-label br50 pa fc",
                class: _vm.listType
              },
              [_vm._v(_vm._s(_vm.isNum ? index + 1 : ""))]
            ),
            _vm._v(" "),
            _c("list-component-item", {
              attrs: { value: value },
              on: { "blur-event": _vm.blurEventHandler }
            })
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=template&id=5a8a684e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    "input-container",
    { attrs: { data: _vm.setInputContainerData } },
    [
      _c("textarea-component", {
        attrs: { value: _vm.value, "on-focus": _vm.onFocus },
        on: {
          "textarea-focus": _vm.focusHandler,
          "textarea-blur": _vm.blurHandler,
          "textarea-input": _vm.inputHandler
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=template&id=1494abf5&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=template&id=1494abf5& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    "textarea",
    {
      ref: "textarea",
      staticClass: "textarea-component w100",
      on: {
        input: function($event) {
          $event.stopPropagation()
          return _vm.inputHandler($event)
        },
        focus: function($event) {
          $event.stopPropagation()
          return _vm.$emit("textarea-focus")
        },
        blur: function($event) {
          $event.stopPropagation()
          return _vm.$emit("textarea-blur", $event.target.value)
        }
      }
    },
    [_vm._v(_vm._s(_vm.value))]
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
        attrs: { "on-focus": true, input: _vm.input },
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
    { staticClass: "note-modal-footer-component bs" },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-frame-content/notes-frame-content-workspace-item.vue?vue&type=template&id=26a88fbd&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "notes-frame-content-workspace-item" },
    [
      _vm.type === "paragraph"
        ? _c("paragraph-component", {
            attrs: { value: _vm.data },
            on: { "blur-event": _vm.paragraphBlurEventHandler }
          })
        : _vm.type === "num-list"
        ? _c("list-component", { attrs: { "is-num": true, list: _vm.data } })
        : _vm.type === "mark-list"
        ? _c("list-component", { attrs: { "is-num": false, list: _vm.data } })
        : _vm._e()
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
    _vm._l(_vm.noteContent, function(item, index) {
      return _c("notes-frame-content-workspace-item", {
        key: index,
        attrs: { item: item }
      })
    }),
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
            return _c("notes-block", {
              key: index,
              attrs: { block: block },
              on: { "block-click-event": _vm.openFrameHandler }
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component-item.vue?vue&type=style&index=0&id=767529e2&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9a7f1bc4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/list-component.vue?vue&type=style&index=0&id=af48ec64&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f217fca8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4abf2256", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea-component.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/src/textarea-component.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("95fc74d2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./note-modal-footer-component.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/note-modal-footer-component.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("45c2e304", content, false, {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9kcmF3LWJsb2NrLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3RydWUtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT8wOTU0Iiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzAzNDciLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWU/YzM4YSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT84NTgxIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1ZTIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/N2Q2MyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWU/ZDIxOCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2NjOWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT80ZjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2N1cnJlbnQtbm90ZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvY29tcG9uZW50cy9kcmF3LWJsb2NrLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtYmxvY2stbWVudS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtZnJhbWUtdG9vbHMtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT82NGVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9kNzM2Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9mZDBiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LnZ1ZT83NjFmIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/MGExNyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQudnVlPzkwNjYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT83ZWQwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT80MWU0Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT9iNzMwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LW1peGluLmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/ODA1OSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/MWYwZCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/OGRjZCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT85YjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP2RiODgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlPzg4ODgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT82ZmEzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZmY4NiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT9lOTE5Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlPzIzOGMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MDkyOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/NmFhNSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP2M2NTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/YzE5MSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT8wMGFkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT9lOGUzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/ZTE3OCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP2JiMjgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZT84ZWNkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZT8xZmRlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZT9lNTVhIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZT9lOWU1Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWU/ZWZhYSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZT83ZDUxIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlP2RlOWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvbW9kdWxlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlIiwid2VicGFjazovLy9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3NyYy90ZXh0YXJlYS1jb21wb25lbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzBiMmUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/YzUyMCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2ZhMGQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlPzI4ZjQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LnZ1ZT8xMzgzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT82OGNiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT85M2Y4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZjNjNCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT8wMGJjIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/YWFmNCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWU/OGE1OSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT82NDNhIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlPzc1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9mYTQ3Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9lZTYzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/YzViMyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/MTgxMCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/M2JhOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT8yNDkyIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZmNkMyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT8wYWEyIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/ODkyYyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT9jY2ExIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/ZWYyMCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWU/YjY4YSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlPzM0OTkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWU/NTdiNyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT83NTNmIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1NDIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9kNzcwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT8xMDJlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/ZjNjYSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/Mjg5ZiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/ZTVkOSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlPzVjYjMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/OTA5YiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlPzNkNTQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlPzE4ZWUiXSwibmFtZXMiOlsibGlzdFN0eWxlcyIsImRyYXdCbG9jayIsImNvbnRlbnQiLCJnZXRQYXJhZ3JhcGgiLCJwYXJhZ3JhcGgiLCJnZXRMaXN0IiwibGlzdCIsImdldE51bWJlcmVkTGlzdCIsImdldE1hcmtlZExpc3QiLCJzaGlmdCIsInByZXBhcmluZ0xpc3RJdGVtcyIsIm1hcCIsIml0ZW0iLCJqb2luIiwiZ2V0VHJ1ZVR5cGUiLCJ3aGF0IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJnZXQiLCJzdGF0ZSIsIm5vdGUiLCJpZCIsInRpdGxlIiwiaW5mbyIsImRhdGUiLCJnZXR0ZXJzIiwibXV0YXRpb25zIiwiVVBEQVRFIiwiZGF0YSIsIlVQREFURV9WQUxVRSIsImtleSIsInZhbHVlIiwiVVBEQVRFX0lORk9fVkFMVUUiLCJhY3Rpb25zIiwidXBkYXRlIiwiY29udGV4dCIsImNvbW1pdCIsInVwZGF0ZVZhbHVlIiwib3B0aW9ucyIsInVwZGF0ZUluZm9WYWx1ZSIsImNyZWF0ZUN1cnJlbnROb3RlU3RvcmUiLCJTdG9yZVdvcmtlciIsImNyZWF0ZVN0b3JlIiwiZHJhd0Jsb2NrQ29udGVudCIsInBhcnNlQ29udGVudEl0ZW0iLCJjb250ZW50SXRlbSIsInRydWVUeXBlIiwiZHJhd0Jsb2NrU2VydmljZSIsImNyZWF0ZU5vdGVNb2RhbENvbmZpZyIsIm1vZGFsVHlwZSIsImhlYWRlciIsImljb24iLCJjb250ZW50Q29tcG9uZW50Iiwibm90ZU1vZGFsQ29udGVudENvbXBvbmVudCIsImZvb3RlckNvbXBvbmVudCIsIm5vdGVNb2RhbEZvb3RlckNvbXBvbmVudCIsIm5vdGVzTW9kdWxlQ29uZmlnIiwidmlldyIsIm5vdGVzTW9kdWxlIiwiaW5pdCIsIm5vdGVzQmxvY2tNZW51U3RvcmUiLCJpdGVtcyIsIm5hbWUiLCJsYWJlbCIsIm5vdGVzRnJhbWVUb29sc1N0b3JlIiwibGFzdCIsInRleHRhcmVhQ29tcG9uZW50TWl4aW4iLCJpc0FjdGl2ZSIsImhhc1ZhbHVlIiwicHJvcHMiLCJTdHJpbmciLCJvbkZvY3VzIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiY29tcG9uZW50cyIsInRleHRhcmVhQ29tcG9uZW50IiwibWV0aG9kcyIsImlucHV0SGFuZGxlciIsImZvY3VzSGFuZGxlciIsImJsdXJIYW5kbGVy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c291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbml0IFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgbGlzdFN0eWxlcyA9ICdwYWRkaW5nLWxlZnQ6MzBweDttYXJnaW4tYm90dG9tOjEwcHgnO1xyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgZHJhd0Jsb2NrID0ge1xyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGdldFBhcmFncmFwaChwYXJhZ3JhcGgpIHtcclxuXHRcdFx0cmV0dXJuIGA8cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7XCI+JHtwYXJhZ3JhcGh9PC9wPmBcclxuXHRcdH0sXHJcblx0XHRnZXRMaXN0KGxpc3QpIHtcclxuXHRcdFx0cmV0dXJuICh0eXBlb2YgbGlzdFswXSA9PT0gJ2Jvb2xlYW4nIClcclxuXHRcdFx0XHQ/IGdldE51bWJlcmVkTGlzdChsaXN0KSA6IGdldE1hcmtlZExpc3QobGlzdCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBnZXROdW1iZXJlZExpc3QobGlzdCkge1xyXG5cdGxpc3Quc2hpZnQoKTtcclxuXHRyZXR1cm4gYDxvbCBzdHlsZT1cIiR7bGlzdFN0eWxlc31cIj4keyBwcmVwYXJpbmdMaXN0SXRlbXMobGlzdCkgfTwvb2w+YFxyXG59XHJcbmZ1bmN0aW9uIGdldE1hcmtlZExpc3QobGlzdCkge1xyXG5cdHJldHVybiBgPHVsIHN0eWxlPVwiJHtsaXN0U3R5bGVzfVwiPiR7IHByZXBhcmluZ0xpc3RJdGVtcyhsaXN0KSB9PC91bD5gXHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyaW5nTGlzdEl0ZW1zKGxpc3QpIHtcclxuXHRyZXR1cm4gbGlzdC5tYXAoKGl0ZW0pID0+IGA8bGkgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCI+JHtpdGVtfTwvbGk+YCkuam9pbignJylcclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJhd0Jsb2NrOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRydWVUeXBlKHdoYXQpIHtcclxuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdoYXQpLnNsaWNlKDgsIC0xKVxyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBnZXQ6IGdldFRydWVUeXBlIH07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5OGUyMjllJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTk4ZTIyOWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTk4ZTIyOWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTk4ZTIyOWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTk4ZTIyOWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTk4ZTIyOWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTk4ZTIyOWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM1YjNlYjgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzViM2ViOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzViM2ViOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzViM2ViOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzViM2ViOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzViM2ViOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzViM2ViOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc3NmU4YzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhNzc2ZThjNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E3NzZlOGM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E3NzZlOGM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E3NzZlOGM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzc2ZThjNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNzc2ZThjNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc3NmU4YzQmc2NvcGVkPXRydWUmXCIiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGluaXQgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuXHRub3RlOiB7XHJcblx0XHRpZDogJycsXHJcblx0XHR0aXRsZTogJycsXHJcblx0XHRjb250ZW50OiBbXSxcclxuXHRcdGluZm86IHtcclxuXHRcdFx0ZGF0ZTogMFxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGdldHRlcnMgPSB7XHJcblx0dGl0bGUoc3RhdGUpIHtcclxuXHRcdHJldHVybiAoKSA9PiBzdGF0ZS5ub3RlLnRpdGxlO1xyXG5cdH0sXHJcblx0Y29udGVudChzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+IHN0YXRlLm5vdGUuY29udGVudDtcclxuXHR9LFxyXG5cdGRhdGUoc3RhdGUpIHtcclxuXHRcdHJldHVybiAoKSA9PiArc3RhdGUubm90ZS5pbmZvLmRhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG5cdFVQREFURShzdGF0ZSwgZGF0YSkge1xyXG5cdFx0c3RhdGUubm90ZSA9IHsgLi4uZGF0YSB9XHJcblx0fSxcclxuXHRVUERBVEVfVkFMVUUoc3RhdGUsIHtrZXksIHZhbHVlfSkge1xyXG5cdFx0c3RhdGUubm90ZVtrZXldID0gdmFsdWU7XHJcblx0fSxcclxuXHRVUERBVEVfSU5GT19WQUxVRShzdGF0ZSwge2tleSwgdmFsdWV9KSB7XHJcblx0XHRzdGF0ZS5ub3RlLmluZm9ba2V5XSA9IHZhbHVlO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcblx0YXN5bmMgdXBkYXRlKGNvbnRleHQsIGRhdGEpIHtcclxuXHRcdGNvbnRleHQuY29tbWl0KCdVUERBVEUnLCBkYXRhKVxyXG5cdH0sXHJcblx0YXN5bmMgdXBkYXRlVmFsdWUoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURV9WQUxVRScsIG9wdGlvbnMpXHJcblx0fSxcclxuXHRhc3luYyB1cGRhdGVJbmZvVmFsdWUoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURV9JTkZPX1ZBTFVFJywgb3B0aW9ucylcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGluaXQgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50Tm90ZVN0b3JlKCkge1xyXG5cdFN0b3JlV29ya2VyLmNyZWF0ZVN0b3JlKCdjdXJyZW50LW5vdGUnLCB7IHN0YXRlLCBnZXR0ZXJzLCBtdXRhdGlvbnMsIGFjdGlvbnMgfSlcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ3VycmVudE5vdGVTdG9yZX07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IHRydWVUeXBlIGZyb20gJyRmZXRvdC1zZXJ2aWNlcy90cnVlLXR5cGUnO1xyXG5pbXBvcnQgZHJhd0Jsb2NrU2VydmljZSBmcm9tICckZmV0b3Qtc2VydmljZXMvZHJhdy1ibG9jayc7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBkcmF3QmxvY2tDb250ZW50KGNvbnRlbnQpIHtcclxuXHRyZXR1cm4gY29udGVudC5tYXAocGFyc2VDb250ZW50SXRlbSkuam9pbignJyk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gcGFyc2VDb250ZW50SXRlbShjb250ZW50SXRlbSkge1xyXG5cdHN3aXRjaCggdHJ1ZVR5cGUuZ2V0KGNvbnRlbnRJdGVtKSApIHtcclxuXHRcdGNhc2UgJ1N0cmluZyc6XHJcblx0XHRcdHJldHVybiBjb250ZW50SXRlbVswXSA9PT0gJ3AnXHJcblx0XHRcdFx0PyBkcmF3QmxvY2tTZXJ2aWNlLmNvbnRlbnQuZ2V0UGFyYWdyYXBoKGNvbnRlbnRJdGVtLnNsaWNlKDEpKSA6ICcnO1xyXG5cdFx0Y2FzZSAnQXJyYXknOlxyXG5cdFx0XHRyZXR1cm4gZHJhd0Jsb2NrU2VydmljZS5jb250ZW50LmdldExpc3QoY29udGVudEl0ZW0pXHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmF3QmxvY2tDb250ZW50IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL25vdGVzJzsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQge2NyZWF0ZUN1cnJlbnROb3RlU3RvcmV9IGZyb20gJy4vY29tcG9uZW50cy9jdXJyZW50LW5vdGUtc3RvcmUnO1xyXG5cclxuaW1wb3J0IG5vdGVzTW9kdWxlIGZyb20gJy4vdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZSc7XHJcblxyXG5pbXBvcnQgbm90ZU1vZGFsQ29udGVudENvbXBvbmVudCBmcm9tICcuL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgbm90ZU1vZGFsRm9vdGVyQ29tcG9uZW50IGZyb20gJy4vdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNyZWF0ZU5vdGVNb2RhbENvbmZpZyA9IHtcclxuXHRvcHRpb25zOiB7XHJcblx0XHRtb2RhbFR5cGU6ICdpcy1zbWFsbCcsXHJcblx0XHRoZWFkZXI6IHsgdGl0bGU6ICdOZXcgbm90ZScsIGljb246ICcmI3hFODBDOycgfVxyXG5cdH0sXHJcblx0Y29udGVudENvbXBvbmVudDogbm90ZU1vZGFsQ29udGVudENvbXBvbmVudCxcclxuXHRmb290ZXJDb21wb25lbnQ6IG5vdGVNb2RhbEZvb3RlckNvbXBvbmVudFxyXG59O1xyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNNb2R1bGVDb25maWcgPSB7XHJcblx0dmlldzogbm90ZXNNb2R1bGUsXHJcblx0Y3JlYXRlTm90ZU1vZGFsQ29uZmlnLFxyXG5cdFxyXG5cdGluaXQoKSB7XHJcblx0XHRjcmVhdGVDdXJyZW50Tm90ZVN0b3JlKCk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzTW9kdWxlQ29uZmlnIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNCbG9ja01lbnVTdG9yZSA9IHtcclxuXHRpdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnRWRpdCBub3RlJyxcclxuXHRcdFx0aWNvbjogJyYjeEU4MTE7JyxcclxuXHRcdFx0bGFiZWw6ICdlZGl0J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ01vdmUgdG8gY2F0ZWdvcnknLFxyXG5cdFx0XHRpY29uOiAnJiN4RjI5MjsnLFxyXG5cdFx0XHRsYWJlbDogJ21vdmUtdG8tY2F0ZWdvcnknXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnTW92ZSB0byBmb2xkZXInLFxyXG5cdFx0XHRpY29uOiAnJiN4RTgxMzsnLFxyXG5cdFx0XHRsYWJlbDogJ21vdmUtdG8tZm9sZGVyJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ0RlbGV0ZScsXHJcblx0XHRcdGljb246ICcmI3hGMUY4OycsXHJcblx0XHRcdGxhYmVsOiAnZGVsZXRlJ1xyXG5cdFx0fVxyXG5cdF1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3Rlc0Jsb2NrTWVudVN0b3JlOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IG5vdGVzRnJhbWVUb29sc1N0b3JlID0gW1xyXG5cdHtcclxuXHRcdGljb246ICcmI3hFODI0OycsXHJcblx0XHRsYWJlbDogJ3BhcmFncmFwaCcsXHJcblx0XHRsYXN0OiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnJiN4RjBDQjsnLFxyXG5cdFx0bGFiZWw6ICdudW0tbGlzdCdcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hGMENBOycsXHJcblx0XHRsYWJlbDogJ21hcmstbGlzdCcsXHJcblx0XHRsYXN0OiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnJiN4RTgwMzsnLFxyXG5cdFx0bGFiZWw6ICdpbWFnZSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hGMTVDOycsXHJcblx0XHRsYWJlbDogJ2ZpbGUnXHJcblx0fVxyXG5dO1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzRnJhbWVUb29sc1N0b3JlOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY3NTI5ZTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3NTI5ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3Njc1MjllMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2NzUyOWUyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2NzUyOWUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2NzUyOWUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Njc1MjllMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3Njc1MjllMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Njc1MjllMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2NzUyOWUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Njc1MjllMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFmNDhlYzY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFmNDhlYzY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYWY0OGVjNjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhZjQ4ZWM2NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhZjQ4ZWM2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhZjQ4ZWM2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFmNDhlYzY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2FmNDhlYzY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZjQ4ZWM2NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZjQ4ZWM2NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFmNDhlYzY0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YThhNjg0ZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVhOGE2ODRlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWE4YTY4NGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWE4YTY4NGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWE4YTY4NGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOGE2ODRlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVhOGE2ODRlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhOGE2ODRlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOGE2ODRlJnNjb3BlZD10cnVlJlwiIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IHRleHRhcmVhQ29tcG9uZW50IGZyb20gJy4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZSc7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCB0ZXh0YXJlYUNvbXBvbmVudE1peGluID0ge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpc0FjdGl2ZTogZmFsc2UsXHJcblx0XHRcdGhhc1ZhbHVlOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0cHJvcHM6IHtcclxuXHRcdHZhbHVlOiBTdHJpbmcsXHJcblx0XHRvbkZvY3VzOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHQndGV4dGFyZWEtY29tcG9uZW50JzogdGV4dGFyZWFDb21wb25lbnRcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGlucHV0SGFuZGxlcih2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLmhhc1ZhbHVlID0gdmFsdWUgIT09ICcnO1xyXG5cdFx0fSxcclxuXHRcdGZvY3VzSGFuZGxlcigpIHtcclxuXHRcdFx0dGhpcy5pc0FjdGl2ZSA9IHRydWVcclxuXHRcdH0sXHJcblx0XHRibHVySGFuZGxlcih2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuJGVtaXQoJ2JsdXItZXZlbnQnLCB2YWx1ZSlcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLmhhc1ZhbHVlID0gdGhpcy52YWx1ZSAhPT0gJyc7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRleHRhcmVhQ29tcG9uZW50TWl4aW47IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0OTRhYmY1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ5NGFiZjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ5NGFiZjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ5NGFiZjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ5NGFiZjUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTQ5NGFiZjUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0OTRhYmY1JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmI1MGNjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY2YjUwY2M0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZjZiNTBjYzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjZiNTBjYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjZiNTBjYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2YjUwY2M0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y2YjUwY2M0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2YjUwY2M0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNTllMWU2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjM1OWUxZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjM1OWUxZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjM1OWUxZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjM1OWUxZTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjM1OWUxZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzU5ZTFlNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTA5NDAyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTA5NDAyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjVlMDk0MDJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNWUwOTQwMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNWUwOTQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNWUwOTQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTA5NDAyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI1ZTA5NDAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWUwOTQwMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZhODhmYmQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNmE4OGZiZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2YTg4ZmJkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2YTg4ZmJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2YTg4ZmJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNmE4OGZiZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNmE4OGZiZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2YTg4ZmJkJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjhkZWIxZGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImI4ZGViMWRhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjhkZWIxZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjhkZWIxZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjhkZWIxZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiOGRlYjFkYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAxYjNmY2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMDFiM2ZjYlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwMWIzZmNiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwMWIzZmNiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwMWIzZmNiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDFiM2ZjYiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMDFiM2ZjYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAxYjNmY2Imc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ4MGNiMmJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDgwY2IyYmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ODBjYjJiYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ODBjYjJiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ODBjYjJiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgwY2IyYmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDgwY2IyYmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDgwY2IyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ODBjYjJiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgwY2IyYmMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNzlmYWU0YyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjc5ZmFlNGNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNzlmYWU0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNzlmYWU0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNzlmYWU0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3OWZhZTRjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y3OWZhZTRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjc5ZmFlNGMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLW1vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjgyZWVkMjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjgyZWVkMjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmODJlZWQyMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmODJlZWQyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmODJlZWQyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmODJlZWQyMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLW1vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2R1bGVzL25vdGVzJzsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZldG90LWJ1dHRvbiBicjNweCBjcCBmYyBwciBiZnItY2xpY2tcIlxyXG4gICAgICAgOnN0eWxlPVwic2V0QnV0dG9uU2l6ZVwiXHJcbiAgICAgICBAY2xpY2suc3RvcD1cIiRlbWl0KCdmZXRvdC1idXR0b24tY2xpY2snKVwiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHRuYW1lOiAnZmV0b3QtYnV0dG9uJyxcclxuICAgIHByb3BzOiB7XHJcbiAgXHRcdHNpemU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgXHRcdHNldEJ1dHRvblNpemUoKSB7XHJcbiAgXHRcdFx0cmV0dXJuIHsgd2lkdGg6IGAke3RoaXMuc2l6ZX1weGAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5mZXRvdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICBjb2xvcjogJGZldG90LWRhcmstYmx1ZTtcclxuICAgIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBAaW5jbHVkZSBzdGF0aWMtc2hhZG93O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgICBjb2xvcjogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtY29uZmlybS1idXR0b25zIGZsZXggdzEwMFwiPlxyXG4gICAgPGZldG90LWJ1dHRvbiA6c2l6ZT1cInNpemVcIiBAZmV0b3QtYnV0dG9uLWNsaWNrPVwiJGVtaXQoJ2NvbmZpcm0tZXZlbnQnLCBmYWxzZSlcIj5cclxuICAgICAgPGZldG90LWljb24gaWNvbj1cIiYjeEU4MDg7XCI+PC9mZXRvdC1pY29uPlxyXG4gICAgPC9mZXRvdC1idXR0b24+XHJcbiAgICA8ZmV0b3QtYnV0dG9uIDpzaXplPVwic2l6ZVwiIEBmZXRvdC1idXR0b24tY2xpY2s9XCIkZW1pdCgnY29uZmlybS1ldmVudCcsIHRydWUpXCI+XHJcbiAgICAgIDxmZXRvdC1pY29uIGljb249XCImI3hFODA3O1wiPjwvZmV0b3QtaWNvbj5cclxuICAgIDwvZmV0b3QtYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZmV0b3RJY29uIGZyb20gJy4uL2ljb25zL2ZldG90LWljb24udnVlJztcclxuICBpbXBvcnQgZmV0b3RCdXR0b24gZnJvbSAnLi9mZXRvdC1idXR0b24udnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2ZldG90LWNvbmZpcm0tYnV0dG9ucycsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRzaXplOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDk2XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1idXR0b24nOiBmZXRvdEJ1dHRvbixcclxuXHRcdFx0J2ZldG90LWljb24nOiBmZXRvdEljb24sXHJcblx0XHR9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWNvbmZpcm0tYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuZmV0b3QtYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtZGF0ZVwiPnt7IGRyYXdEYXRlIH19PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdmZXRvdC1kYXRlJyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGRhdGU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGRyYXdEYXRlKCkge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xyXG5cdFx0XHRcdHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LiR7ZGF0ZS5nZXRNb250aCgpICsgMX0uJHtkYXRlLmdldERhdGUoKX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWRhdGUge1xyXG4gICAgY29sb3I6ICRmZXRvdC1kYXJrLWdyYXk7XHJcbiAgICBmb250OiAxNHB4ICdyb2JvdG8tYm9sZCc7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQtY29udGFpbmVyIDpkYXRhPVwic2V0SW5wdXRDb250YWluZXJEYXRhXCI+XHJcbiAgICA8dGV4dGFyZWEtY29tcG9uZW50XHJcbiAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcclxuICAgICAgICAgICAgOm9uLWZvY3VzPVwib25Gb2N1c1wiXHJcbiAgICAgICAgICAgIEB0ZXh0YXJlYS1mb2N1cz1cImZvY3VzSGFuZGxlclwiXHJcbiAgICAgICAgICAgIEB0ZXh0YXJlYS1ibHVyPVwiYmx1ckhhbmRsZXJcIlxyXG4gICAgICAgICAgICBAdGV4dGFyZWEtaW5wdXQ9XCJpbnB1dEhhbmRsZXJcIj5cclxuICAgIDwvdGV4dGFyZWEtY29tcG9uZW50PlxyXG4gIDwvaW5wdXQtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdGV4dGFyZWFDb21wb25lbnRNaXhpbiBmcm9tICcuL3NyYy90ZXh0YXJlYS1jb21wb25lbnQtbWl4aW4nO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbGlzdC1jb21wb25lbnQtaXRlbScsXHJcblx0XHRtaXhpbnM6IFt0ZXh0YXJlYUNvbXBvbmVudE1peGluXSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHNldElucHV0Q29udGFpbmVyRGF0YSgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0aWNvbjogJycsXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ0xpc3QgaXRlbScsXHJcblx0XHRcdFx0XHRpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcclxuXHRcdFx0XHRcdGhhc1ZhbHVlOiB0aGlzLmhhc1ZhbHVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxpbnB1dC1jb250YWluZXIgOmRhdGE9XCJzZXRJbnB1dENvbnRhaW5lckRhdGFcIj5cclxuICAgIDx1bCBjbGFzcz1cImxpc3QtY29tcG9uZW50IGJzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInByXCIgdi1mb3I9XCIodmFsdWUsIGluZGV4KSBpbiBsaXN0XCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbS1sYWJlbCBicjUwIHBhIGZjXCIgOmNsYXNzPVwibGlzdFR5cGVcIj57eyBpc051bSA/IGluZGV4ICsgMSA6ICcnIH19PC9kaXY+XHJcbiAgICAgICAgPGxpc3QtY29tcG9uZW50LWl0ZW0gOnZhbHVlPVwidmFsdWVcIiBAYmx1ci1ldmVudD1cImJsdXJFdmVudEhhbmRsZXJcIj48L2xpc3QtY29tcG9uZW50LWl0ZW0+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvaW5wdXQtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbGlzdENvbXBvbmVudEl0ZW0gZnJvbSAnLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZSc7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdsaXN0LWNvbXBvbmVudCcsXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzQWN0aXZlOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0aXNOdW06IEJvb2xlYW4sXHJcbiAgICAgIGxpc3Q6IEFycmF5XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnbGlzdC1jb21wb25lbnQtaXRlbSc6IGxpc3RDb21wb25lbnRJdGVtXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBibHVyRXZlbnRIYW5kbGVyKHZhbHVlKSB7fVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0ICAgIHNldElucHV0Q29udGFpbmVyRGF0YSgpIHtcclxuXHRcdCAgICByZXR1cm4ge1xyXG5cdFx0XHQgICAgaWNvbjogdGhpcy5pc051bSA/ICcmI3hGMENCOycgOiAnJiN4RjBDQTsnLFxyXG5cdFx0XHQgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG5cdFx0XHQgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXHJcblx0XHRcdCAgICBoYXNWYWx1ZTogZmFsc2VcclxuXHRcdCAgICB9XHJcblx0ICAgIH0sXHJcbiAgICAgIGxpc3RUeXBlKCkge1xyXG5cdCAgICBcdHJldHVybiB7ICdpcy1tYXJrLWxpc3QnOiAhdGhpcy5pc051bSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG4gIC5saXN0LWNvbXBvbmVudCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMnB4O1xyXG4gIH1cclxuICAubGlzdC1pdGVtLWxhYmVsIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLTIycHg7XHJcblxyXG4gICAgJi5pcy1tYXJrLWxpc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGlucHV0LWNvbnRhaW5lciA6ZGF0YT1cInNldElucHV0Q29udGFpbmVyRGF0YVwiPlxyXG4gICAgPHRleHRhcmVhLWNvbXBvbmVudFxyXG4gICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIDpvbi1mb2N1cz1cIm9uRm9jdXNcIlxyXG4gICAgICAgICAgICBAdGV4dGFyZWEtZm9jdXM9XCJmb2N1c0hhbmRsZXJcIlxyXG4gICAgICAgICAgICBAdGV4dGFyZWEtYmx1cj1cImJsdXJIYW5kbGVyXCJcclxuICAgICAgICAgICAgQHRleHRhcmVhLWlucHV0PVwiaW5wdXRIYW5kbGVyXCI+XHJcbiAgICA8L3RleHRhcmVhLWNvbXBvbmVudD5cclxuICA8L2lucHV0LWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHRleHRhcmVhQ29tcG9uZW50TWl4aW4gZnJvbSAnLi9zcmMvdGV4dGFyZWEtY29tcG9uZW50LW1peGluJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3BhcmFncmFwaC1jb21wb25lbnQnLFxyXG5cdFx0bWl4aW5zOiBbdGV4dGFyZWFDb21wb25lbnRNaXhpbl0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdCAgICBzZXRJbnB1dENvbnRhaW5lckRhdGEoKSB7XHJcblx0XHQgICAgcmV0dXJuIHtcclxuXHRcdFx0ICAgIGljb246ICcmI3hFODI0OycsXHJcblx0XHRcdCAgICBwbGFjZWhvbGRlcjogJ1BhcmFncmFwaCcsXHJcblx0XHRcdCAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcclxuXHRcdFx0ICAgIGhhc1ZhbHVlOiB0aGlzLmhhc1ZhbHVlXHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmZldG90LWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPHRleHRhcmVhIGNsYXNzPVwidGV4dGFyZWEtY29tcG9uZW50IHcxMDBcIlxyXG4gICAgICAgICAgICByZWY9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIEBpbnB1dC5zdG9wPVwiaW5wdXRIYW5kbGVyXCJcclxuICAgICAgICAgICAgQGZvY3VzLnN0b3A9XCIkZW1pdCgndGV4dGFyZWEtZm9jdXMnKVwiXHJcbiAgICAgICAgICAgIEBibHVyLnN0b3A9XCIkZW1pdCgndGV4dGFyZWEtYmx1cicsICRldmVudC50YXJnZXQudmFsdWUpXCI+e3sgdmFsdWUgfX08L3RleHRhcmVhPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndGV4dGFyZWEtY29tcG9uZW50JyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdHZhbHVlOiBTdHJpbmcsXHJcblx0XHRcdG9uRm9jdXM6IEJvb2xlYW5cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGlucHV0SGFuZGxlcih7dGFyZ2V0fSkge1xyXG5cdFx0ICAgIHRoaXMudGV4dGFyZWFSZXNpemUoKTtcclxuXHRcdCAgICB0aGlzLiRlbWl0KCd0ZXh0YXJlYS1pbnB1dCcsIHRhcmdldC52YWx1ZSlcclxuXHQgICAgfSxcclxuXHQgICAgdGV4dGFyZWFSZXNpemUoKSB7XHJcblx0XHQgICAgY29uc3QgdGEgPSB0aGlzLiRyZWZzLnRleHRhcmVhO1xyXG5cclxuXHRcdCAgICB0YS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblx0XHQgICAgdGEuc3R5bGUuaGVpZ2h0ID0gdGEuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHQgICAgfVxyXG4gICAgfSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGlmKCB0aGlzLm9uRm9jdXMgKSB0aGlzLiRyZWZzLnRleHRhcmVhLmZvY3VzKCk7XHJcblx0XHRcdHRoaXMudGV4dGFyZWFSZXNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAudGV4dGFyZWEtY29tcG9uZW50IHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIEBpbmNsdWRlIGZvcm0tZWxlbWVudDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50XCI+XHJcbiAgICA8aW5wdXQtdGl0bGUtY29tcG9uZW50XHJcbiAgICAgICAgICAgIDpvbi1mb2N1cz1cInRydWVcIlxyXG4gICAgICAgICAgICA6aW5wdXQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIEBpbnB1dC10aXRsZS1ldmVudD1cImlucHV0VGl0bGVFdmVudEhhbmRsZXJcIj5cclxuICAgIDwvaW5wdXQtdGl0bGUtY29tcG9uZW50PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50JyxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aW5wdXQ6IHtcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgbmV3IG5vdGUgdGl0bGUnLFxyXG4gICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuXHRcdFx0XHRjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHRcdFx0aW5wdXRUaXRsZUV2ZW50SGFuZGxlcih2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudE5vdGVTdG9yZS5hY3Rpb25zLnVwZGF0ZVZhbHVlKHtrZXk6ICd0aXRsZScsIHZhbHVlfSlcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudCBic1wiPlxyXG4gICAgPGZldG90LWNvbmZpcm0tYnV0dG9ucyA6c2l6ZT1cIjEzMlwiIEBjb25maXJtLWV2ZW50PVwiY29uZmlybUV2ZW50SGFuZGxlclwiPjwvZmV0b3QtY29uZmlybS1idXR0b25zPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZmV0b3RDb25maXJtQnV0dG9ucyBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZSc7XHJcblx0aW1wb3J0IGV2ZW50c0VtaXR0ZXJXb3JrZXIgZnJvbSAnJGZldG90LWV2ZW50cy1lbWl0dGVyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudCcsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1jb25maXJtLWJ1dHRvbnMnOiBmZXRvdENvbmZpcm1CdXR0b25zXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjb25maXJtRXZlbnRIYW5kbGVyKGxhYmVsKSB7XHJcblx0XHRcdFx0ZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdub3RlcycpLmVtaXQoJ2NyZWF0ZS1ub3RlLWNvbmZpcm0nLCBsYWJlbClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICAubm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlciB3MTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5mbyB3MTAwIGZhaWNcIj5cclxuICAgICAgPGZldG90LWRhdGUgOmRhdGU9XCJub3RlRGF0ZVwiPjwvZmV0b3QtZGF0ZT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXQtdGl0bGUtY29tcG9uZW50XHJcbiAgICAgICAgICAgIDppbnB1dD1cIm5vdGVUaXRsZVwiXHJcbiAgICAgICAgICAgIEBpbnB1dC10aXRsZS1ldmVudD1cImlucHV0VGl0bGVFdmVudEhhbmRsZXJcIj5cclxuICAgIDwvaW5wdXQtdGl0bGUtY29tcG9uZW50PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZmV0b3REYXRlIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWUnO1xyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y3VycmVudE5vdGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbm90ZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0ICAgICdmZXRvdC1kYXRlJzogZmV0b3REYXRlXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBpbnB1dFRpdGxlRXZlbnRIYW5kbGVyKHZhbHVlKSB7XHJcblx0ICAgIFx0dGhpcy5jdXJyZW50Tm90ZVN0b3JlLmFjdGlvbnMudXBkYXRlVmFsdWUoeyBrZXk6ICd0aXRsZScsIHZhbHVlIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHRub3RlRGF0ZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmdldHRlcnMuZGF0ZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGVUaXRsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdOb3RlIHRpdGxlJyxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy50aXRsZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuICAuaW5mbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW1cIj5cclxuICAgIDxwYXJhZ3JhcGgtY29tcG9uZW50XHJcbiAgICAgICAgICAgIHYtaWY9XCJ0eXBlID09PSAncGFyYWdyYXBoJ1wiIDp2YWx1ZT1cImRhdGFcIlxyXG4gICAgICAgICAgICBAYmx1ci1ldmVudD1cInBhcmFncmFwaEJsdXJFdmVudEhhbmRsZXJcIj5cclxuICAgIDwvcGFyYWdyYXBoLWNvbXBvbmVudD5cclxuXHJcbiAgICA8bGlzdC1jb21wb25lbnRcclxuICAgICAgICAgICAgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ251bS1saXN0J1wiXHJcbiAgICAgICAgICAgIDppcy1udW09XCJ0cnVlXCIgOmxpc3Q9XCJkYXRhXCI+XHJcbiAgICA8L2xpc3QtY29tcG9uZW50PlxyXG5cclxuICAgIDxsaXN0LWNvbXBvbmVudFxyXG4gICAgICAgICAgICB2LWVsc2UtaWY9XCJ0eXBlID09PSAnbWFyay1saXN0J1wiXHJcbiAgICAgICAgICAgIDppcy1udW09XCJmYWxzZVwiIDpsaXN0PVwiZGF0YVwiPlxyXG4gICAgPC9saXN0LWNvbXBvbmVudD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHBhcmFncmFwaENvbXBvbmVudCBmcm9tICcuLi9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWUnO1xyXG5cdGltcG9ydCBsaXN0Q29tcG9uZW50IGZyb20gJy4uL2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWUnO1xyXG5cclxuXHRpbXBvcnQgdHJ1ZVR5cGUgZnJvbSAnJGZldG90LXNlcnZpY2VzL3RydWUtdHlwZSc7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dHlwZTogJycsXHJcbiAgICAgICAgZGF0YTogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGl0ZW06IFtBcnJheSwgU3RyaW5nXVxyXG4gICAgfSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J3BhcmFncmFwaC1jb21wb25lbnQnOiBwYXJhZ3JhcGhDb21wb25lbnQsXHJcbiAgICAgICdsaXN0LWNvbXBvbmVudCc6IGxpc3RDb21wb25lbnRcclxuXHRcdH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIHBhcmFncmFwaEJsdXJFdmVudEhhbmRsZXIodmFsdWUpIHtcclxuXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZWZvcmVNb3VudCgpIHtcclxuXHRcdFx0c3dpdGNoKCB0cnVlVHlwZS5nZXQodGhpcy5pdGVtKSApIHtcclxuXHRcdFx0XHRjYXNlICdTdHJpbmcnOlxyXG5cdFx0XHRcdFx0dGhpcy50eXBlID0gdGhpcy5pdGVtWzBdID09PSAncCcgPyAncGFyYWdyYXBoJyA6ICcnO1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5pdGVtLnNsaWNlKDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyYXknOlxyXG4gICAgICAgIFx0dGhpcy50eXBlID0gdHlwZW9mIHRoaXMuaXRlbVswXSA9PT0gJ2Jvb2xlYW4nID8gJ251bS1saXN0JyA6ICdtYXJrLWxpc3QnO1xyXG4gICAgICAgIFx0dGhpcy5kYXRhID0gdGhpcy50eXBlID09PSAnbnVtLWxpc3QnID8gdGhpcy5pdGVtLmZpbHRlcigoaXQsIGkpID0+IGkgIT09IDApIDogdGhpcy5pdGVtO1xyXG5cdFx0XHR9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UgdzEwMFwiPlxyXG4gICAgPG5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW1cclxuICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG5vdGVDb250ZW50XCJcclxuICAgICAgICAgICAgOmtleT1cImluZGV4XCIgOml0ZW09XCJpdGVtXCI+XHJcbiAgICA8L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBub3Rlc0ZyYW1lQ29udGVudFdvcmtzcGFjZUl0ZW0gZnJvbSAnLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZSc7XHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UnLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0nOiBub3Rlc0ZyYW1lQ29udGVudFdvcmtzcGFjZUl0ZW1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHRub3RlQ29udGVudCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmdldHRlcnMuY29udGVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZyYW1lLWNvbnRlbnQgYnNcIj5cclxuICAgIDxub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlcj48L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyPlxyXG4gICAgPG5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlPjwvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2U+XHJcblxyXG4gICAgPGZyYW1lLXRvb2xzXHJcbiAgICAgICAgICAgIDp0b29scz1cInRvb2xzXCJcclxuICAgICAgICAgICAgOmlzLWFjdGl2ZT1cImlzRnJhbWVUb29sc0FjdGl2ZVwiXHJcbiAgICAgICAgICAgIEB0b29scy1pdGVtLWNsaWNrPVwidG9vbHNJdGVtQ2xpY2tIYW5kbGVyXCI+XHJcbiAgICA8L2ZyYW1lLXRvb2xzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbm90ZXNGcmFtZUNvbnRlbnRIZWFkZXIgZnJvbSAnLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWUnO1xyXG4gIGltcG9ydCBub3Rlc0ZyYW1lQ29udGVudFdvcmtzcGFjZSBmcm9tICcuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZSc7XHJcblxyXG4gIGltcG9ydCBub3Rlc0ZyYW1lVG9vbHNTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9ub3Rlcy1mcmFtZS10b29scy1zdG9yZSc7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1mcmFtZS1jb250ZW50JyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNGcmFtZVRvb2xzQWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0XHR0b29sczogbm90ZXNGcmFtZVRvb2xzU3RvcmVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyJzogbm90ZXNGcmFtZUNvbnRlbnRIZWFkZXIsXHJcbiAgICAgICdub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZSc6IG5vdGVzRnJhbWVDb250ZW50V29ya3NwYWNlXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICB0b29sc0l0ZW1DbGlja0hhbmRsZXIobGFiZWwpIHtcclxuXHQgICAgXHRjb25zb2xlLmxvZygndG9vbHMnLCBsYWJlbClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAubm90ZXMtZnJhbWUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDk2cHggNDJweDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxtZW51LWNvbnRhaW5lciBAY2xvc2UtbWVudS1ldmVudD1cIiRlbWl0KCdjbG9zZS1tZW51LWV2ZW50JylcIj5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bWVudS10aXRsZT57eyB0aXRsZSB9fTwvdGVtcGxhdGU+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDptZW51LWl0ZW1zPlxyXG4gICAgICA8bWVudS1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBtZW51SXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiIDppdGVtPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgQG1lbnUtaXRlbS1jbGljaz1cIm1lbnVJdGVtQ2xpY2tIYW5kbGVyXCI+XHJcbiAgICAgIDwvbWVudS1pdGVtPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICA8L21lbnUtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbm90ZXNCbG9ja01lbnVTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9ub3Rlcy1ibG9jay1tZW51LXN0b3JlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWJsb2NrLW1lbnUnLFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0dGl0bGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgbWVudUl0ZW1DbGlja0hhbmRsZXIoaXRlbSkge1xyXG5cdCAgICBcdGNvbnNvbGUubG9nKCdtZW51LWl0ZW0tY2xpY2snLCBpdGVtKVxyXG4gICAgICB9LFxyXG5cdCAgICBtZW51Q2xvc2VFdmVudEhhbmRsZXIoKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0bWVudUl0ZW1zKCkge1xyXG5cdFx0XHRcdHJldHVybiBub3Rlc0Jsb2NrTWVudVN0b3JlLml0ZW1zXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGJsb2NrLWNvbnRhaW5lclxyXG4gICAgICAgICAgQGJsb2NrLWNvbnRlbnQtY2xpY2s9XCJibG9ja0NvbnRlbnRDbGlja0hhbmRsZXJcIlxyXG4gICAgICAgICAgQG9wZW4tbWVudS1ldmVudD1cIm9wZW5NZW51RXZlbnRIYW5kbGVyXCI+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpibG9jay10aXRsZT57eyBibG9jay50aXRsZSB9fTwvdGVtcGxhdGU+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpibG9jay1tZW51IHYtaWY9XCJpc01lbnVPcGVuXCI+XHJcbiAgICAgIDxub3Rlcy1ibG9jay1tZW51IDp0aXRsZT1cImJsb2NrLnRpdGxlXCIgQGNsb3NlLW1lbnUtZXZlbnQ9XCJjbG9zZU1lbnVFdmVudEhhbmRsZXJcIj48L25vdGVzLWJsb2NrLW1lbnU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmxvY2stY29udGVudD5cclxuICAgICAgPGRpdiB2LWh0bWw9XCJkcmF3Q29udGVudFwiPjwvZGl2PlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OmJsb2NrLWRhdGU+XHJcbiAgICAgIDxmZXRvdC1kYXRlIDpkYXRlPVwibm90ZURhdGVcIj48L2ZldG90LWRhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Jsb2NrLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGZldG90RGF0ZSBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlJztcclxuICBpbXBvcnQgbm90ZXNCbG9ja01lbnUgZnJvbSAnLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZSc7XHJcblxyXG4gIGltcG9ydCBkcmF3QmxvY2tDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZHJhdy1ibG9jay1jb250ZW50JztcclxuICBpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1ibG9jaycsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzTWVudU9wZW46IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRibG9jazogT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnZmV0b3QtZGF0ZSc6IGZldG90RGF0ZSxcclxuICAgICAgJ25vdGVzLWJsb2NrLW1lbnUnOiBub3Rlc0Jsb2NrTWVudVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGRyYXdDb250ZW50KCkge1xyXG5cdFx0XHRcdHJldHVybiBkcmF3QmxvY2tDb250ZW50KHRoaXMuYmxvY2suY29udGVudClcclxuICAgICAgfSxcclxuICAgICAgbm90ZURhdGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuYmxvY2suaW5mby5kYXRlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIC8qIG1lbnUgKi9cclxuXHRcdFx0b3Blbk1lbnVFdmVudEhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5pc01lbnVPcGVuID0gdHJ1ZTtcclxuXHQgICAgXHR0aGlzLnNldEN1cnJlbnROb3RlU3RvcmUoKTtcclxuICAgICAgfSxcclxuXHQgICAgY2xvc2VNZW51RXZlbnRIYW5kbGVyKCkge1xyXG5cdFx0ICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyogYmxvY2sgKi9cclxuXHQgICAgYmxvY2tDb250ZW50Q2xpY2tIYW5kbGVyKCkge1xyXG5cdCAgICBcdHRoaXMuc2V0Q3VycmVudE5vdGVTdG9yZSgpO1xyXG5cdCAgICBcdHRoaXMuJGVtaXQoJ2Jsb2NrLWNsaWNrLWV2ZW50JylcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIHNyYyAqL1xyXG4gICAgICBzZXRDdXJyZW50Tm90ZVN0b3JlKCkge1xyXG4gICAgICBcdFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKS5hY3Rpb25zLnVwZGF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPG1vZHVsZS1jb250YWluZXJcclxuICAgICAgICAgIDpoYXMtZnJhbWU9XCJoYXNGcmFtZVwiXHJcbiAgICAgICAgICA6ZnJhbWUtb3B0aW9ucz1cImZyYW1lT3B0aW9uc1wiXHJcbiAgICAgICAgICBAY2xvc2UtZnJhbWUtZXZlbnQ9XCJjbG9zZUZyYW1lRXZlbnRIYW5kbGVyXCJcclxuICAgICAgICAgIEBjcmVhdGUtYmxvY2stZXZlbnQ9XCJjcmVhdGVOb3RlRXZlbnRIYW5kbGVyXCI+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDptb2R1bGUtZnJhbWUtY29udGVudD5cclxuICAgICAgPG5vdGVzLWZyYW1lLWNvbnRlbnQ+PC9ub3Rlcy1mcmFtZS1jb250ZW50PlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1vZHVsZS1ibG9ja3M+XHJcbiAgICAgIDxub3Rlcy1ibG9ja1xyXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGJsb2NrLCBpbmRleCkgaW4gY3VycmVudEJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImluZGV4XCIgOmJsb2NrPVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIEBibG9jay1jbGljay1ldmVudD1cIm9wZW5GcmFtZUhhbmRsZXJcIj5cclxuICAgICAgPC9ub3Rlcy1ibG9jaz5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgPC9tb2R1bGUtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgbm90ZXNGcmFtZUNvbnRlbnQgZnJvbSAnLi4vbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZSc7XHJcbiAgaW1wb3J0IG5vdGVzQmxvY2sgZnJvbSAnLi9ub3Rlcy1ibG9jay52dWUnXHJcblxyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuICBpbXBvcnQgZXZlbnRzRW1pdHRlcldvcmtlciBmcm9tICckZmV0b3QtZXZlbnRzLWVtaXR0ZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtbW9kdWxlJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aGFzRnJhbWU6IGZhbHNlLFxyXG5cclxuICAgICAgICBjdXJyZW50TW9kdWxlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW1vZHVsZScpLFxyXG4gICAgICAgIGN1cnJlbnROb3RlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKSxcclxuXHJcbiAgICAgICAgYXBwRXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdhcHAnKSxcclxuICAgICAgICBub3Rlc0V2ZW50c0VtaXR0ZXI6IGV2ZW50c0VtaXR0ZXJXb3JrZXIuZ2V0RW1pdHRlcignbm90ZXMnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnbm90ZXMtZnJhbWUtY29udGVudCc6IG5vdGVzRnJhbWVDb250ZW50LFxyXG5cdFx0XHQnbm90ZXMtYmxvY2snOiBub3Rlc0Jsb2NrXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdFx0XHQvKiBjcmVhdGUgbm90ZSAqL1xyXG5cdCAgICBjcmVhdGVOb3RlRXZlbnRIYW5kbGVyKCkge1xyXG5cdCAgICBcdHRoaXMuYXBwRXZlbnRzRW1pdHRlci5lbWl0KFxyXG5cdCAgICBcdFx0J29wZW4tbW9kYWwtZXZlbnQnLFxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50TW9kdWxlU3RvcmUuc3RhdGUuY29uZmlnLmNyZWF0ZU5vdGVNb2RhbENvbmZpZ1xyXG4gICAgICAgICk7XHJcblx0ICAgIFx0dGhpcy5ub3Rlc0V2ZW50c0VtaXR0ZXIub24oXHJcblx0ICAgIFx0XHQnY3JlYXRlLW5vdGUtY29uZmlybScsXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZU5vdGVDb25maXJtSGFuZGxlclxyXG4gICAgICAgIClcclxuICAgICAgfSxcclxuXHQgICAgY3JlYXRlTm90ZUNvbmZpcm1IYW5kbGVyKGxhYmVsKSB7XHJcblx0ICAgIFx0aWYoIGxhYmVsICkge1xyXG5cdFx0XHQgICAgdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmFjdGlvbnMudXBkYXRlSW5mb1ZhbHVlKHsga2V5OiAnZGF0ZScsIHZhbHVlOiBuZXcgRGF0ZSgpIH0pO1xyXG5cdFx0XHQgICAgdGhpcy5vcGVuRnJhbWVIYW5kbGVyKCk7XHJcblx0XHQgICAgfVxyXG5cclxuXHQgICAgICB0aGlzLmFwcEV2ZW50c0VtaXR0ZXIuZW1pdCgnY2xvc2UtbW9kYWwtZXZlbnQnKTtcclxuXHQgICAgXHR0aGlzLm5vdGVzRXZlbnRzRW1pdHRlci5yZW1vdmUoJ2NyZWF0ZS1ub3RlLWNvbmZpcm0nLCB0aGlzLmNyZWF0ZU5vdGVDb25maXJtSGFuZGxlcik7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvKiBmcmFtZSAqL1xyXG4gICAgICBvcGVuRnJhbWVIYW5kbGVyKCkge1xyXG4gICAgICBcdHRoaXMuaGFzRnJhbWUgPSB0cnVlO1xyXG4gICAgICB9LFxyXG5cdCAgICBjbG9zZUZyYW1lRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICBcdHRoaXMuaGFzRnJhbWUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGN1cnJlbnRCbG9ja3MoKSB7XHJcblx0XHRcdFx0cmV0dXJuIFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LWJsb2NrcycpLmdldHRlcnMuZ2V0TGlrZUFycmF5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZyYW1lT3B0aW9ucygpIHtcclxuXHRcdFx0XHRjb25zdCB0aXRsZSA9IHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLnRpdGxlKCk7XHJcblx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyOiB7IHRpdGxlLCBpY29uOiAnJiN4RTgwQzsnIH0gfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkKCkge1xyXG5cdFx0XHRTdG9yZVdvcmtlci5yZW1vdmVTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmZldG90LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUY1O1xcbiAgY29sb3I6ICMwMDQ0NjY7XFxuICBmb250OiAxOHB4ICdyb2JvdG8tbWVkaXVtJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogNDJweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoNTcsIDYyLCA3MCwgMC40KTtcXG59XFxuLmZldG90LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDQ0NjY7XFxuICAgIGNvbG9yOiAjRjFGMUY1O1xcbn1cXG4uZmV0b3QtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uZmV0b3QtY29uZmlybS1idXR0b25zIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZmV0b3QtY29uZmlybS1idXR0b25zIC5mZXRvdC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5mZXRvdC1kYXRlW2RhdGEtdi1hNzc2ZThjNF0ge1xcbiAgY29sb3I6ICMzOTNFNDY7XFxuICBmb250OiAxNHB4ICdyb2JvdG8tYm9sZCc7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uaW5wdXQtY29udGFpbmVyW2RhdGEtdi03Njc1MjllMl0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5pbnB1dC1jb250YWluZXJbZGF0YS12LWFmNDhlYzY0XSB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5saXN0LWNvbXBvbmVudFtkYXRhLXYtYWY0OGVjNjRdIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMycHg7XFxufVxcbi5saXN0LWl0ZW0tbGFiZWxbZGF0YS12LWFmNDhlYzY0XSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IC0yMnB4O1xcbn1cXG4ubGlzdC1pdGVtLWxhYmVsLmlzLW1hcmstbGlzdFtkYXRhLXYtYWY0OGVjNjRdIHtcXG4gICAgYmFja2dyb3VuZDogIzM5M0U0NjtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5pbnB1dC1jb250YWluZXJbZGF0YS12LTVhOGE2ODRlXSB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uZmV0b3QtaW5wdXQtaWNvbltkYXRhLXYtNWE4YTY4NGVdIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi50ZXh0YXJlYS1jb21wb25lbnQge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudCB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4ubm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXJbZGF0YS12LTI1ZTA5NDAyXSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4uaW5mb1tkYXRhLXYtMjVlMDk0MDJdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4ubm90ZXMtZnJhbWUtY29udGVudFtkYXRhLXYtMjAxYjNmY2JdIHtcXG4gIHBhZGRpbmc6IDI0cHggOTZweCA0MnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuXCIsIFwiXCJdKTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmZXRvdC1idXR0b24gYnIzcHggY3AgZmMgcHIgYmZyLWNsaWNrXCIsXG4gICAgICBzdHlsZTogX3ZtLnNldEJ1dHRvblNpemUsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImZldG90LWJ1dHRvbi1jbGlja1wiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZmV0b3QtY29uZmlybS1idXR0b25zIGZsZXggdzEwMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZmV0b3QtYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBzaXplOiBfdm0uc2l6ZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImZldG90LWJ1dHRvbi1jbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNvbmZpcm0tZXZlbnRcIiwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJmZXRvdC1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCImI3hFODA4O1wiIH0gfSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZldG90LWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgc2l6ZTogX3ZtLnNpemUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJmZXRvdC1idXR0b24tY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjb25maXJtLWV2ZW50XCIsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJmZXRvdC1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCImI3hFODA3O1wiIH0gfSldLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmV0b3QtZGF0ZVwiIH0sIFtcbiAgICBfdm0uX3YoX3ZtLl9zKF92bS5kcmF3RGF0ZSkpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImlucHV0LWNvbnRhaW5lclwiLFxuICAgIHsgYXR0cnM6IHsgZGF0YTogX3ZtLnNldElucHV0Q29udGFpbmVyRGF0YSB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ0ZXh0YXJlYS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyB2YWx1ZTogX3ZtLnZhbHVlLCBcIm9uLWZvY3VzXCI6IF92bS5vbkZvY3VzIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJ0ZXh0YXJlYS1mb2N1c1wiOiBfdm0uZm9jdXNIYW5kbGVyLFxuICAgICAgICAgIFwidGV4dGFyZWEtYmx1clwiOiBfdm0uYmx1ckhhbmRsZXIsXG4gICAgICAgICAgXCJ0ZXh0YXJlYS1pbnB1dFwiOiBfdm0uaW5wdXRIYW5kbGVyXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiaW5wdXQtY29udGFpbmVyXCIsIHsgYXR0cnM6IHsgZGF0YTogX3ZtLnNldElucHV0Q29udGFpbmVyRGF0YSB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1jb21wb25lbnQgYnNcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInByXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaXRlbS1sYWJlbCBicjUwIHBhIGZjXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5saXN0VHlwZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaXNOdW0gPyBpbmRleCArIDEgOiBcIlwiKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlzdC1jb21wb25lbnQtaXRlbVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiB2YWx1ZSB9LFxuICAgICAgICAgICAgICBvbjogeyBcImJsdXItZXZlbnRcIjogX3ZtLmJsdXJFdmVudEhhbmRsZXIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJpbnB1dC1jb250YWluZXJcIixcbiAgICB7IGF0dHJzOiB7IGRhdGE6IF92bS5zZXRJbnB1dENvbnRhaW5lckRhdGEgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidGV4dGFyZWEtY29tcG9uZW50XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdmFsdWU6IF92bS52YWx1ZSwgXCJvbi1mb2N1c1wiOiBfdm0ub25Gb2N1cyB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwidGV4dGFyZWEtZm9jdXNcIjogX3ZtLmZvY3VzSGFuZGxlcixcbiAgICAgICAgICBcInRleHRhcmVhLWJsdXJcIjogX3ZtLmJsdXJIYW5kbGVyLFxuICAgICAgICAgIFwidGV4dGFyZWEtaW5wdXRcIjogX3ZtLmlucHV0SGFuZGxlclxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRleHRhcmVhXCIsXG4gICAge1xuICAgICAgcmVmOiBcInRleHRhcmVhXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0YXJlYS1jb21wb25lbnQgdzEwMFwiLFxuICAgICAgb246IHtcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHJldHVybiBfdm0uaW5wdXRIYW5kbGVyKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJ0ZXh0YXJlYS1mb2N1c1wiKVxuICAgICAgICB9LFxuICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwidGV4dGFyZWEtYmx1clwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbX3ZtLl92KF92bS5fcyhfdm0udmFsdWUpKV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXQtdGl0bGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgXCJvbi1mb2N1c1wiOiB0cnVlLCBpbnB1dDogX3ZtLmlucHV0IH0sXG4gICAgICAgIG9uOiB7IFwiaW5wdXQtdGl0bGUtZXZlbnRcIjogX3ZtLmlucHV0VGl0bGVFdmVudEhhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudCBic1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJmZXRvdC1jb25maXJtLWJ1dHRvbnNcIiwge1xuICAgICAgICBhdHRyczogeyBzaXplOiAxMzIgfSxcbiAgICAgICAgb246IHsgXCJjb25maXJtLWV2ZW50XCI6IF92bS5jb25maXJtRXZlbnRIYW5kbGVyIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlciB3MTAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmZvIHcxMDAgZmFpY1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZldG90LWRhdGVcIiwgeyBhdHRyczogeyBkYXRlOiBfdm0ubm90ZURhdGUgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2F0ZWdvcnlcIiB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXQtdGl0bGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaW5wdXQ6IF92bS5ub3RlVGl0bGUgfSxcbiAgICAgICAgb246IHsgXCJpbnB1dC10aXRsZS1ldmVudFwiOiBfdm0uaW5wdXRUaXRsZUV2ZW50SGFuZGxlciB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbVwiIH0sXG4gICAgW1xuICAgICAgX3ZtLnR5cGUgPT09IFwicGFyYWdyYXBoXCJcbiAgICAgICAgPyBfYyhcInBhcmFncmFwaC1jb21wb25lbnRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IF92bS5kYXRhIH0sXG4gICAgICAgICAgICBvbjogeyBcImJsdXItZXZlbnRcIjogX3ZtLnBhcmFncmFwaEJsdXJFdmVudEhhbmRsZXIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLnR5cGUgPT09IFwibnVtLWxpc3RcIlxuICAgICAgICA/IF9jKFwibGlzdC1jb21wb25lbnRcIiwgeyBhdHRyczogeyBcImlzLW51bVwiOiB0cnVlLCBsaXN0OiBfdm0uZGF0YSB9IH0pXG4gICAgICAgIDogX3ZtLnR5cGUgPT09IFwibWFyay1saXN0XCJcbiAgICAgICAgPyBfYyhcImxpc3QtY29tcG9uZW50XCIsIHsgYXR0cnM6IHsgXCJpcy1udW1cIjogZmFsc2UsIGxpc3Q6IF92bS5kYXRhIH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UgdzEwMFwiIH0sXG4gICAgX3ZtLl9sKF92bS5ub3RlQ29udGVudCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW1cIiwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH1cbiAgICAgIH0pXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZXMtZnJhbWUtY29udGVudCBic1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZnJhbWUtdG9vbHNcIiwge1xuICAgICAgICBhdHRyczogeyB0b29sczogX3ZtLnRvb2xzLCBcImlzLWFjdGl2ZVwiOiBfdm0uaXNGcmFtZVRvb2xzQWN0aXZlIH0sXG4gICAgICAgIG9uOiB7IFwidG9vbHMtaXRlbS1jbGlja1wiOiBfdm0udG9vbHNJdGVtQ2xpY2tIYW5kbGVyIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwibWVudS1jb250YWluZXJcIiwge1xuICAgIG9uOiB7XG4gICAgICBcImNsb3NlLW1lbnUtZXZlbnRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZS1tZW51LWV2ZW50XCIpXG4gICAgICB9XG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1lbnUtdGl0bGVcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtZW51LWl0ZW1zXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLl9sKF92bS5tZW51SXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJtZW51LWl0ZW1cIiwge1xuICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgIG9uOiB7IFwibWVudS1pdGVtLWNsaWNrXCI6IF92bS5tZW51SXRlbUNsaWNrSGFuZGxlciB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlXG4gICAgICB9XG4gICAgXSlcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiYmxvY2stY29udGFpbmVyXCIsIHtcbiAgICBvbjoge1xuICAgICAgXCJibG9jay1jb250ZW50LWNsaWNrXCI6IF92bS5ibG9ja0NvbnRlbnRDbGlja0hhbmRsZXIsXG4gICAgICBcIm9wZW4tbWVudS1ldmVudFwiOiBfdm0ub3Blbk1lbnVFdmVudEhhbmRsZXJcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYmxvY2stdGl0bGVcIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW192bS5fdihfdm0uX3MoX3ZtLmJsb2NrLnRpdGxlKSldXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfdm0uaXNNZW51T3BlblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBrZXk6IFwiYmxvY2stbWVudVwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibm90ZXMtYmxvY2stbWVudVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uYmxvY2sudGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgXCJjbG9zZS1tZW51LWV2ZW50XCI6IF92bS5jbG9zZU1lbnVFdmVudEhhbmRsZXIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImJsb2NrLWNvbnRlbnRcIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5kcmF3Q29udGVudCkgfSB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJibG9jay1kYXRlXCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtfYyhcImZldG90LWRhdGVcIiwgeyBhdHRyczogeyBkYXRlOiBfdm0ubm90ZURhdGUgfSB9KV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBudWxsLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwibW9kdWxlLWNvbnRhaW5lclwiLCB7XG4gICAgYXR0cnM6IHsgXCJoYXMtZnJhbWVcIjogX3ZtLmhhc0ZyYW1lLCBcImZyYW1lLW9wdGlvbnNcIjogX3ZtLmZyYW1lT3B0aW9ucyB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlLWZyYW1lLWV2ZW50XCI6IF92bS5jbG9zZUZyYW1lRXZlbnRIYW5kbGVyLFxuICAgICAgXCJjcmVhdGUtYmxvY2stZXZlbnRcIjogX3ZtLmNyZWF0ZU5vdGVFdmVudEhhbmRsZXJcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kdWxlLWZyYW1lLWNvbnRlbnRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbX2MoXCJub3Rlcy1mcmFtZS1jb250ZW50XCIpXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1vZHVsZS1ibG9ja3NcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdm0uX2woX3ZtLmN1cnJlbnRCbG9ja3MsIGZ1bmN0aW9uKGJsb2NrLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibm90ZXMtYmxvY2tcIiwge1xuICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICBhdHRyczogeyBibG9jazogYmxvY2sgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJibG9jay1jbGljay1ldmVudFwiOiBfdm0ub3BlbkZyYW1lSGFuZGxlciB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlXG4gICAgICB9XG4gICAgXSlcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1MDU1OTBlMVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3MzBkZWNjYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjAyMzlmY2RcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2NzUyOWUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOWE3ZjFiYzRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Njc1MjllMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Njc1MjllMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZjQ4ZWM2NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImYyMTdmY2E4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFmNDhlYzY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZjQ4ZWM2NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhOGE2ODRlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGFiZjIyNTZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI5NWZjNzRkMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0NWMyZTMwNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM4OWU1ZGQ2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTA5NDAyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwMWIzZmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWQxNDI0MWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmJhYzUyY2FcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ODBjYjJiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ODBjYjJiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9