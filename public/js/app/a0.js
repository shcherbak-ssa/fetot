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
    id: '0',
    title: '',
    content: [],
    info: {
      date: 0
    }
  }
};
const getters = {
  note(state) {
    return () => {
      const note = state.note;
      note.info.date = +note.info.date;
      return note;
    };
  },

  title(state) {
    return () => state.note.title;
  },

  content(state) {
    return () => state.note.content;
  },

  date(state) {
    return () => state.note.info.date;
  }

};
const mutations = {
  UPDATE(state, data) {
    state.note = { ...data
    };
  },

  UPDATE_FOR_CREATE(state, {
    date
  }) {
    const title = state.note.title;
    state.note = {
      id: '0',
      title,
      content: [],
      info: {
        date: +date
      }
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

  async updateForCreate(context, data) {
    context.commit('UPDATE_FOR_CREATE', data);
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
    name: 'Delete note',
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
      currentBlocksStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_1__["default"].getStore('current-blocks'),
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
      const noteID = this.currentNoteStore.state.note.id;
      if (noteID !== 0) this.currentBlocksStore.actions.updateBlockTitle({
        id: noteID,
        title: value
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/notes-module/notes-block.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_view_components_elements_fetot_date_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-view-components/elements/fetot-date.vue */ "./app/view/components/elements/fetot-date.vue");
/* harmony import */ var $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-events-emitter */ "./app/components/workers/events-emitter.js");
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");
/* harmony import */ var _store_notes_block_menu_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/notes-block-menu-store */ "./build/app-page/components/modules/notes/store/notes-block-menu-store.js");
/* harmony import */ var _components_draw_block_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/draw-block-content */ "./build/app-page/components/modules/notes/components/draw-block-content.js");
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
      isMenuOpen: false,
      pageStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('page'),
      currentNoteStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-note'),
      currentModuleStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-module'),
      appEventsEmitter: $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].getEmitter('app'),
      notesEventsEmitter: $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].getEmitter('notes')
    };
  },

  props: {
    block: Object,
    index: Number
  },
  components: {
    'fetot-date': $fetot_view_components_elements_fetot_date_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    drawContent() {
      return Object(_components_draw_block_content__WEBPACK_IMPORTED_MODULE_4__["default"])(this.block.content);
    },

    noteDate() {
      return this.block.info.date;
    },

    /* block container props */
    blocksSizeType() {
      return $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-module').getters.settingsByKey('blocksSizeType');
    },

    blockPosition() {
      if (this.pageStore.state.blocksPositions === null) return {
        index: this.index
      };
      return this.pageStore.state.blocksPositions[this.index + 1];
    },

    /* menu */
    menuItems() {
      return _store_notes_block_menu_store__WEBPACK_IMPORTED_MODULE_3__["default"].items;
    }

  },
  methods: {
    /* menu */
    openMenuEventHandler() {
      this.isMenuOpen = true;
      this.setCurrentNoteStore();
      this.appEventsEmitter.emit('force-update-notes');
    },

    closeMenuEventHandler() {
      this.isMenuOpen = false;
      this.appEventsEmitter.emit('force-update-notes');
    },

    menuItemClickHandler(item) {
      switch (item.label) {
        case 'edit':
          this.editNoteEventHandler();
          break;

        case 'delete':
          this.deleteNoteEventHandler();
      }
    },

    /* menu event */
    editNoteEventHandler() {
      this.closeMenuEventHandler();
      this.setCurrentNoteStore();
      this.notesEventsEmitter.emit('edit-note-event');
    },

    deleteNoteEventHandler() {
      this.closeMenuEventHandler();
      this.notesEventsEmitter.emit('delete-note-event', this.block.id);
    },

    /* src */
    setCurrentNoteStore() {
      this.currentNoteStore.actions.update(this.block);
    },

    forceUpdateNote() {
      this.$forceUpdate();
    }

  },

  mounted() {
    this.appEventsEmitter.on('force-update-notes', this.forceUpdateNote);
  },

  destroyed() {
    this.appEventsEmitter.remove('force-update-notes', this.forceUpdateNote);
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
      currentFrameIsForCreate: false,
      lastBlocksSizeType: 0,
      pageStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('page'),
      currentBlocksStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-blocks'),
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
      this.appEventsEmitter.emit('open-modal-event', this.currentModuleStore.getters.configByKey('createNoteModalConfig'));
      this.notesEventsEmitter.on('create-note-confirm', this.createNoteConfirmHandler);
    },

    createNoteConfirmHandler(label) {
      if (label) {
        this.currentNoteStore.actions.updateForCreate({
          date: new Date()
        });
        this.currentFrameIsForCreate = true;
        this.openFrameHandler();
      }

      this.appEventsEmitter.emit('close-modal-event');
      this.notesEventsEmitter.remove('create-note-confirm', this.createNoteConfirmHandler);
    },

    /* frame */
    openFrameHandler() {
      this.hasFrame = true;
      this.lastBlocksSizeType = this.currentModuleStore.getters.settingsByKey('blocksSizeType');
      this.currentModuleStore.actions.updateSettingsByKey({
        key: 'blocksSizeType',
        value: 2,
        sendToServer: false
      });
      this.pageStore.actions.removeBlocksPositions();
      this.appEventsEmitter.emit('force-update-notes');
    },

    async closeFrameEventHandler(toSaveNote = true) {
      if (!toSaveNote) return;

      if (this.currentFrameIsForCreate) {
        const currentNote = this.currentNoteStore.getters.note();
        await this.currentBlocksStore.actions.createBlock(currentNote);
      }

      await this.currentModuleStore.actions.updateSettingsByKey({
        key: 'blocksSizeType',
        value: this.lastBlocksSizeType,
        sendToServer: false
      });
      this.hasFrame = false;
      this.currentFrameIsForCreate = false;
      this.updateBlocksPositions();
      this.appEventsEmitter.emit('force-update-notes');
    },

    /* note handlers */
    async editNoteEventHandler() {
      this.openFrameHandler();
    },

    async deleteNoteEventHandler(id) {
      await this.currentBlocksStore.actions.deleteBlock(id);
    },

    /* others */
    changeSizeTypeEventHandler(sizeType) {
      this.currentModuleStore.actions.updateSettingsByKey({
        key: 'blocksSizeType',
        value: sizeType
      });
    },

    updateBlocksPositions() {
      this.pageStore.state.documentWidth < 1280 ? this.pageStore.actions.removeBlocksPositions() : this.pageStore.actions.updateBlocksPositions();
    }

  },
  computed: {
    /* module */
    currentSizeType() {
      return this.currentModuleStore.getters.settingsByKey('blocksSizeType');
    },

    /* frame */
    frameState() {
      return this.pageStore.state.frameState;
    },

    frameOptions() {
      const title = this.currentNoteStore.getters.title();
      return {
        header: {
          title,
          icon: '&#xE80C;'
        }
      };
    },

    /* blocks */
    currentBlocks() {
      return this.currentBlocksStore.getters.getLikeArray();
    }

  },

  beforeMount() {
    this.updateBlocksPositions();
  },

  mounted() {
    this.notesEventsEmitter.on('edit-note-event', this.editNoteEventHandler).on('delete-note-event', this.deleteNoteEventHandler);
  },

  destroyed() {
    $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].removeStore('current-note');
    $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].removeEmitter('notes');
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
    attrs: {
      title: _vm.block.title,
      "is-menu-open": _vm.isMenuOpen,
      "size-type": _vm.blocksSizeType,
      position: _vm.blockPosition
    },
    on: {
      "block-content-click": _vm.editNoteEventHandler,
      "open-menu-event": _vm.openMenuEventHandler,
      "close-menu-event": _vm.closeMenuEventHandler
    },
    scopedSlots: _vm._u([
      {
        key: "block-menu-items",
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
      },
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
    ])
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
    attrs: { "has-frame": _vm.hasFrame, "size-type": _vm.currentSizeType },
    on: {
      "create-block-event": _vm.createNoteEventHandler,
      "change-size-type-event": _vm.changeSizeTypeEventHandler
    },
    scopedSlots: _vm._u([
      {
        key: "module-frame",
        fn: function() {
          return [
            _vm.hasFrame
              ? _c(
                  "frame-container",
                  {
                    attrs: {
                      "frame-state": _vm.frameState,
                      options: _vm.frameOptions
                    },
                    on: { "close-frame-event": _vm.closeFrameEventHandler }
                  },
                  [_c("notes-frame-content")],
                  1
                )
              : _vm._e()
          ]
        },
        proxy: true
      },
      {
        key: "module-blocks",
        fn: function() {
          return _vm._l(_vm.currentBlocks, function(block, index) {
            return _c("notes-block", {
              key: index,
              attrs: { index: index, block: block }
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9kcmF3LWJsb2NrLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3RydWUtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT8wOTU0Iiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzAzNDciLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWU/YzM4YSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT84NTgxIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1ZTIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/N2Q2MyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWU/ZDIxOCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2NjOWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT80ZjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2N1cnJlbnQtbm90ZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvY29tcG9uZW50cy9kcmF3LWJsb2NrLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtYmxvY2stbWVudS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtZnJhbWUtdG9vbHMtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT82NGVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9kNzM2Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9mZDBiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LnZ1ZT83NjFmIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/MGExNyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQudnVlPzkwNjYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT83ZWQwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT80MWU0Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT9iNzMwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LW1peGluLmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/ODA1OSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/MWYwZCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/OGRjZCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT85YjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP2RiODgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlPzg4ODgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT82ZmEzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZmY4NiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT9lOTE5Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlPzIzOGMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MDkyOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/NmFhNSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP2M2NTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/YzE5MSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT8wMGFkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT9lOGUzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/ZTE3OCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP2JiMjgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlP2U5ZTUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZT9lZmFhIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlPzdkNTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWU/ZGU5ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzBiMmUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/YzUyMCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2ZhMGQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlPzI4ZjQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LnZ1ZT8xMzgzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT82OGNiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT85M2Y4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZjNjNCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT8wMGJjIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/YWFmNCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT82NDNhIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlPzc1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9mYTQ3Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9lZTYzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/YzViMyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/MTgxMCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/M2JhOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT8yNDkyIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZmNkMyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT8wYWEyIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/ODkyYyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT9jY2ExIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/ZWYyMCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlPzM0OTkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWU/NTdiNyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT83NTNmIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1NDIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9kNzcwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT8xMDJlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/ZjNjYSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/Mjg5ZiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/ZTVkOSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlPzVjYjMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/OTA5YiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlPzNkNTQiXSwibmFtZXMiOlsibGlzdFN0eWxlcyIsImRyYXdCbG9jayIsImNvbnRlbnQiLCJnZXRQYXJhZ3JhcGgiLCJwYXJhZ3JhcGgiLCJnZXRMaXN0IiwibGlzdCIsImdldE51bWJlcmVkTGlzdCIsImdldE1hcmtlZExpc3QiLCJzaGlmdCIsInByZXBhcmluZ0xpc3RJdGVtcyIsIm1hcCIsIml0ZW0iLCJqb2luIiwiZ2V0VHJ1ZVR5cGUiLCJ3aGF0IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJnZXQiLCJzdGF0ZSIsIm5vdGUiLCJpZCIsInRpdGxlIiwiaW5mbyIsImRhdGUiLCJnZXR0ZXJzIiwibXV0YXRpb25zIiwiVVBEQVRFIiwiZGF0YSIsIlVQREFURV9GT1JfQ1JFQVRFIiwiVVBEQVRFX1ZBTFVFIiwia2V5IiwidmFsdWUiLCJVUERBVEVfSU5GT19WQUxVRSIsImFjdGlvbnMiLCJ1cGRhdGUiLCJjb250ZXh0IiwiY29tbWl0IiwidXBkYXRlRm9yQ3JlYXRlIiwidXBkYXRlVmFsdWUiLCJvcHRpb25zIiwidXBkYXRlSW5mb1ZhbHVlIiwiY3JlYXRlQ3VycmVudE5vdGVTdG9yZSIsIlN0b3JlV29ya2VyIiwiY3JlYXRlU3RvcmUiLCJkcmF3QmxvY2tDb250ZW50IiwicGFyc2VDb250ZW50SXRlbSIsImNvbnRlbnRJdGVtIiwidHJ1ZVR5cGUiLCJkcmF3QmxvY2tTZXJ2aWNlIiwiY3JlYXRlTm90ZU1vZGFsQ29uZmlnIiwibW9kYWxUeXBlIiwiaGVhZGVyIiwiaWNvbiIsImNvbnRlbnRDb21wb25lbnQiLCJub3RlTW9kYWxDb250ZW50Q29tcG9uZW50IiwiZm9vdGVyQ29tcG9uZW50Iiwibm90ZU1vZGFsRm9vdGVyQ29tcG9uZW50Iiwibm90ZXNNb2R1bGVDb25maWciLCJ2aWV3Iiwibm90ZXNNb2R1bGUiLCJpbml0Iiwibm90ZXNCbG9ja01lbnVTdG9yZSIsIml0ZW1zIiwibmFtZSIsImxhYmVsIiwibm90ZXNGcmFtZVRvb2xzU3RvcmUiLCJsYXN0IiwidGV4dGFyZWFDb21wb25lbnRNaXhpbiIsImlzQWN0aXZlIiwiaGFzVmFsdWUiLCJwcm9wcyIsIlN0cmluZyIsIm9uRm9jdXMiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJjb21wb25lbnRzIiwidGV4dGFyZWFDb21wb25lbnQiLCJtZXRob2RzIiwiaW5wdXRIYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiYmx1ckhhbmRsZXIiLCIkZW1pdCIsIm1vdW50ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFhO0FBRWI7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLHNDQUFuQjtBQUVBOztBQUNBOztBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1JDLGdCQUFZLENBQUNDLFNBQUQsRUFBWTtBQUN2QixhQUFRLG1DQUFrQ0EsU0FBVSxNQUFwRDtBQUNBLEtBSE87O0FBSVJDLFdBQU8sQ0FBQ0MsSUFBRCxFQUFPO0FBQ2IsYUFBUSxPQUFPQSxJQUFJLENBQUMsQ0FBRCxDQUFYLEtBQW1CLFNBQXBCLEdBQ0pDLGVBQWUsQ0FBQ0QsSUFBRCxDQURYLEdBQ29CRSxhQUFhLENBQUNGLElBQUQsQ0FEeEM7QUFFQTs7QUFQTztBQURRLENBQWxCO0FBWUE7O0FBQ0E7O0FBRUEsU0FBU0MsZUFBVCxDQUF5QkQsSUFBekIsRUFBK0I7QUFDOUJBLE1BQUksQ0FBQ0csS0FBTDtBQUNBLFNBQVEsY0FBYVQsVUFBVyxLQUFLVSxrQkFBa0IsQ0FBQ0osSUFBRCxDQUFRLE9BQS9EO0FBQ0E7O0FBQ0QsU0FBU0UsYUFBVCxDQUF1QkYsSUFBdkIsRUFBNkI7QUFDNUIsU0FBUSxjQUFhTixVQUFXLEtBQUtVLGtCQUFrQixDQUFDSixJQUFELENBQVEsT0FBL0Q7QUFDQTs7QUFDRCxTQUFTSSxrQkFBVCxDQUE0QkosSUFBNUIsRUFBa0M7QUFDakMsU0FBT0EsSUFBSSxDQUFDSyxHQUFMLENBQVVDLElBQUQsSUFBVyxtQ0FBa0NBLElBQUssT0FBM0QsRUFBbUVDLElBQW5FLENBQXdFLEVBQXhFLENBQVA7QUFDQTtBQUVEOzs7QUFFZVosd0VBQWYs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LCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMseW9CQUFpVztBQUN2WCw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDRJQUErRTtBQUNqRywrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCttQkFBa1Y7QUFDeFcsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxzSUFBeUU7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw2ckJBQXFYO0FBQzNZLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMseUlBQTRFO0FBQzlGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsK3FCQUE4VztBQUNwWSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHlJQUE0RTtBQUM5RiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbml0IFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgbGlzdFN0eWxlcyA9ICdwYWRkaW5nLWxlZnQ6MzBweDttYXJnaW4tYm90dG9tOjEwcHgnO1xyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgZHJhd0Jsb2NrID0ge1xyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGdldFBhcmFncmFwaChwYXJhZ3JhcGgpIHtcclxuXHRcdFx0cmV0dXJuIGA8cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7XCI+JHtwYXJhZ3JhcGh9PC9wPmBcclxuXHRcdH0sXHJcblx0XHRnZXRMaXN0KGxpc3QpIHtcclxuXHRcdFx0cmV0dXJuICh0eXBlb2YgbGlzdFswXSA9PT0gJ2Jvb2xlYW4nIClcclxuXHRcdFx0XHQ/IGdldE51bWJlcmVkTGlzdChsaXN0KSA6IGdldE1hcmtlZExpc3QobGlzdCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBnZXROdW1iZXJlZExpc3QobGlzdCkge1xyXG5cdGxpc3Quc2hpZnQoKTtcclxuXHRyZXR1cm4gYDxvbCBzdHlsZT1cIiR7bGlzdFN0eWxlc31cIj4keyBwcmVwYXJpbmdMaXN0SXRlbXMobGlzdCkgfTwvb2w+YFxyXG59XHJcbmZ1bmN0aW9uIGdldE1hcmtlZExpc3QobGlzdCkge1xyXG5cdHJldHVybiBgPHVsIHN0eWxlPVwiJHtsaXN0U3R5bGVzfVwiPiR7IHByZXBhcmluZ0xpc3RJdGVtcyhsaXN0KSB9PC91bD5gXHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyaW5nTGlzdEl0ZW1zKGxpc3QpIHtcclxuXHRyZXR1cm4gbGlzdC5tYXAoKGl0ZW0pID0+IGA8bGkgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCI+JHtpdGVtfTwvbGk+YCkuam9pbignJylcclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJhd0Jsb2NrOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRydWVUeXBlKHdoYXQpIHtcclxuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdoYXQpLnNsaWNlKDgsIC0xKVxyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBnZXQ6IGdldFRydWVUeXBlIH07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5OGUyMjllJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTk4ZTIyOWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTk4ZTIyOWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTk4ZTIyOWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTk4ZTIyOWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTk4ZTIyOWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTk4ZTIyOWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM1YjNlYjgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzViM2ViOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzViM2ViOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzViM2ViOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzViM2ViOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzViM2ViOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzViM2ViOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc3NmU4YzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhNzc2ZThjNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E3NzZlOGM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E3NzZlOGM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E3NzZlOGM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzc2ZThjNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNzc2ZThjNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc3NmU4YzQmc2NvcGVkPXRydWUmXCIiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGluaXQgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuXHRub3RlOiB7XHJcblx0XHRpZDogJzAnLFxyXG5cdFx0dGl0bGU6ICcnLFxyXG5cdFx0Y29udGVudDogW10sXHJcblx0XHRpbmZvOiB7XHJcblx0XHRcdGRhdGU6IDBcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBnZXR0ZXJzID0ge1xyXG5cdG5vdGUoc3RhdGUpIHtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IG5vdGUgPSBzdGF0ZS5ub3RlO1xyXG5cdFx0XHRub3RlLmluZm8uZGF0ZSA9ICtub3RlLmluZm8uZGF0ZTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBub3RlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dGl0bGUoc3RhdGUpIHtcclxuXHRcdHJldHVybiAoKSA9PiBzdGF0ZS5ub3RlLnRpdGxlO1xyXG5cdH0sXHJcblx0Y29udGVudChzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+IHN0YXRlLm5vdGUuY29udGVudDtcclxuXHR9LFxyXG5cdGRhdGUoc3RhdGUpIHtcclxuXHRcdHJldHVybiAoKSA9PiBzdGF0ZS5ub3RlLmluZm8uZGF0ZTtcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgbXV0YXRpb25zID0ge1xyXG5cdFVQREFURShzdGF0ZSwgZGF0YSkge1xyXG5cdFx0c3RhdGUubm90ZSA9IHsgLi4uZGF0YSB9XHJcblx0fSxcclxuXHRVUERBVEVfRk9SX0NSRUFURShzdGF0ZSwge2RhdGV9KSB7XHJcblx0XHRjb25zdCB0aXRsZSA9IHN0YXRlLm5vdGUudGl0bGU7XHJcblx0XHRzdGF0ZS5ub3RlID0ge2lkOiAnMCcsIHRpdGxlLCBjb250ZW50OiBbXSwgaW5mbzogeyBkYXRlOiArZGF0ZSB9fVxyXG5cdH0sXHJcblx0XHJcblx0VVBEQVRFX1ZBTFVFKHN0YXRlLCB7a2V5LCB2YWx1ZX0pIHtcclxuXHRcdHN0YXRlLm5vdGVba2V5XSA9IHZhbHVlO1xyXG5cdH0sXHJcblx0VVBEQVRFX0lORk9fVkFMVUUoc3RhdGUsIHtrZXksIHZhbHVlfSkge1xyXG5cdFx0c3RhdGUubm90ZS5pbmZvW2tleV0gPSB2YWx1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG5cdGFzeW5jIHVwZGF0ZShjb250ZXh0LCBkYXRhKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFJywgZGF0YSlcclxuXHR9LFxyXG5cdGFzeW5jIHVwZGF0ZUZvckNyZWF0ZShjb250ZXh0LCBkYXRhKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFX0ZPUl9DUkVBVEUnLCBkYXRhKVxyXG5cdH0sXHJcblx0XHJcblx0YXN5bmMgdXBkYXRlVmFsdWUoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURV9WQUxVRScsIG9wdGlvbnMpXHJcblx0fSxcclxuXHRhc3luYyB1cGRhdGVJbmZvVmFsdWUoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURV9JTkZPX1ZBTFVFJywgb3B0aW9ucylcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGluaXQgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50Tm90ZVN0b3JlKCkge1xyXG5cdFN0b3JlV29ya2VyLmNyZWF0ZVN0b3JlKCdjdXJyZW50LW5vdGUnLCB7IHN0YXRlLCBnZXR0ZXJzLCBtdXRhdGlvbnMsIGFjdGlvbnMgfSlcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ3VycmVudE5vdGVTdG9yZX07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IHRydWVUeXBlIGZyb20gJyRmZXRvdC1zZXJ2aWNlcy90cnVlLXR5cGUnO1xyXG5pbXBvcnQgZHJhd0Jsb2NrU2VydmljZSBmcm9tICckZmV0b3Qtc2VydmljZXMvZHJhdy1ibG9jayc7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBkcmF3QmxvY2tDb250ZW50KGNvbnRlbnQpIHtcclxuXHRyZXR1cm4gY29udGVudC5tYXAocGFyc2VDb250ZW50SXRlbSkuam9pbignJyk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gcGFyc2VDb250ZW50SXRlbShjb250ZW50SXRlbSkge1xyXG5cdHN3aXRjaCggdHJ1ZVR5cGUuZ2V0KGNvbnRlbnRJdGVtKSApIHtcclxuXHRcdGNhc2UgJ1N0cmluZyc6XHJcblx0XHRcdHJldHVybiBjb250ZW50SXRlbVswXSA9PT0gJ3AnXHJcblx0XHRcdFx0PyBkcmF3QmxvY2tTZXJ2aWNlLmNvbnRlbnQuZ2V0UGFyYWdyYXBoKGNvbnRlbnRJdGVtLnNsaWNlKDEpKSA6ICcnO1xyXG5cdFx0Y2FzZSAnQXJyYXknOlxyXG5cdFx0XHRyZXR1cm4gZHJhd0Jsb2NrU2VydmljZS5jb250ZW50LmdldExpc3QoY29udGVudEl0ZW0pXHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmF3QmxvY2tDb250ZW50IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL25vdGVzJzsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQge2NyZWF0ZUN1cnJlbnROb3RlU3RvcmV9IGZyb20gJy4vY29tcG9uZW50cy9jdXJyZW50LW5vdGUtc3RvcmUnO1xyXG5cclxuaW1wb3J0IG5vdGVzTW9kdWxlIGZyb20gJy4vdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZSc7XHJcblxyXG5pbXBvcnQgbm90ZU1vZGFsQ29udGVudENvbXBvbmVudCBmcm9tICcuL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgbm90ZU1vZGFsRm9vdGVyQ29tcG9uZW50IGZyb20gJy4vdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNyZWF0ZU5vdGVNb2RhbENvbmZpZyA9IHtcclxuXHRvcHRpb25zOiB7XHJcblx0XHRtb2RhbFR5cGU6ICdpcy1zbWFsbCcsXHJcblx0XHRoZWFkZXI6IHsgdGl0bGU6ICdOZXcgbm90ZScsIGljb246ICcmI3hFODBDOycgfVxyXG5cdH0sXHJcblx0Y29udGVudENvbXBvbmVudDogbm90ZU1vZGFsQ29udGVudENvbXBvbmVudCxcclxuXHRmb290ZXJDb21wb25lbnQ6IG5vdGVNb2RhbEZvb3RlckNvbXBvbmVudFxyXG59O1xyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNNb2R1bGVDb25maWcgPSB7XHJcblx0dmlldzogbm90ZXNNb2R1bGUsXHJcblx0Y3JlYXRlTm90ZU1vZGFsQ29uZmlnLFxyXG5cdFxyXG5cdGluaXQoKSB7XHJcblx0XHRjcmVhdGVDdXJyZW50Tm90ZVN0b3JlKCk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzTW9kdWxlQ29uZmlnIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNCbG9ja01lbnVTdG9yZSA9IHtcclxuXHRpdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnRWRpdCBub3RlJyxcclxuXHRcdFx0aWNvbjogJyYjeEU4MTE7JyxcclxuXHRcdFx0bGFiZWw6ICdlZGl0J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ01vdmUgdG8gY2F0ZWdvcnknLFxyXG5cdFx0XHRpY29uOiAnJiN4RjI5MjsnLFxyXG5cdFx0XHRsYWJlbDogJ21vdmUtdG8tY2F0ZWdvcnknXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnTW92ZSB0byBmb2xkZXInLFxyXG5cdFx0XHRpY29uOiAnJiN4RTgxMzsnLFxyXG5cdFx0XHRsYWJlbDogJ21vdmUtdG8tZm9sZGVyJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ0RlbGV0ZSBub3RlJyxcclxuXHRcdFx0aWNvbjogJyYjeEYxRjg7JyxcclxuXHRcdFx0bGFiZWw6ICdkZWxldGUnXHJcblx0XHR9XHJcblx0XVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzQmxvY2tNZW51U3RvcmU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNGcmFtZVRvb2xzU3RvcmUgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEU4MjQ7JyxcclxuXHRcdGxhYmVsOiAncGFyYWdyYXBoJyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hGMENCOycsXHJcblx0XHRsYWJlbDogJ251bS1saXN0J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYwQ0E7JyxcclxuXHRcdGxhYmVsOiAnbWFyay1saXN0JyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hFODAzOycsXHJcblx0XHRsYWJlbDogJ2ltYWdlJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYxNUM7JyxcclxuXHRcdGxhYmVsOiAnZmlsZSdcclxuXHR9XHJcbl07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90ZXNGcmFtZVRvb2xzU3RvcmU7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Njc1MjllMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Njc1MjllMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2NzUyOWUyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzY3NTI5ZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzY3NTI5ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzY3NTI5ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2NzUyOWUyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2NzUyOWUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQtaXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2NzUyOWUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3NTI5ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2NzUyOWUyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWY0OGVjNjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWY0OGVjNjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhZjQ4ZWM2NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2FmNDhlYzY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2FmNDhlYzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2FmNDhlYzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWY0OGVjNjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWY0OGVjNjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFmNDhlYzY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFmNDhlYzY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWY0OGVjNjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOGE2ODRlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhOGE2ODRlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWE4YTY4NGVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YThhNjg0ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YThhNjg0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YThhNjg0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE4YTY4NGUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWE4YTY4NGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE4YTY4NGUmc2NvcGVkPXRydWUmXCIiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgdGV4dGFyZWFDb21wb25lbnQgZnJvbSAnLi90ZXh0YXJlYS1jb21wb25lbnQudnVlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IHRleHRhcmVhQ29tcG9uZW50TWl4aW4gPSB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0aGFzVmFsdWU6IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRwcm9wczoge1xyXG5cdFx0dmFsdWU6IFN0cmluZyxcclxuXHRcdG9uRm9jdXM6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdCd0ZXh0YXJlYS1jb21wb25lbnQnOiB0ZXh0YXJlYUNvbXBvbmVudFxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aW5wdXRIYW5kbGVyKHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuaGFzVmFsdWUgPSB2YWx1ZSAhPT0gJyc7XHJcblx0XHR9LFxyXG5cdFx0Zm9jdXNIYW5kbGVyKCkge1xyXG5cdFx0XHR0aGlzLmlzQWN0aXZlID0gdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdGJsdXJIYW5kbGVyKHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy4kZW1pdCgnYmx1ci1ldmVudCcsIHZhbHVlKVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuaGFzVmFsdWUgPSB0aGlzLnZhbHVlICE9PSAnJztcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGV4dGFyZWFDb21wb25lbnRNaXhpbjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ5NGFiZjUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNDk0YWJmNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNDk0YWJmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNDk0YWJmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDk0YWJmNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNDk0YWJmNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3NyYy90ZXh0YXJlYS1jb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ5NGFiZjUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2YjUwY2M0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjZiNTBjYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNmI1MGNjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNmI1MGNjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNmI1MGNjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZiNTBjYzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjZiNTBjYzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZiNTBjYzQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjM1OWUxZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMzU5ZTFlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMzU5ZTFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMzU5ZTFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzU5ZTFlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMzU5ZTFlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNTllMWU2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlMDk0MDImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNWUwOTQwMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI1ZTA5NDAyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1ZTA5NDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1ZTA5NDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlMDk0MDImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjVlMDk0MDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTA5NDAyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNmE4OGZiZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI2YTg4ZmJkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjZhODhmYmQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjZhODhmYmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjZhODhmYmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2YTg4ZmJkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI2YTg4ZmJkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZhODhmYmQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjhkZWIxZGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiOGRlYjFkYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiOGRlYjFkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiOGRlYjFkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZGViMWRhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I4ZGViMWRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZGViMWRhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDFiM2ZjYiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIwMWIzZmNiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjAxYjNmY2InKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjAxYjNmY2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjAxYjNmY2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMWIzZmNiJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwMWIzZmNiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwMWIzZmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDFiM2ZjYiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3OWZhZTRjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmNzlmYWU0Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y3OWZhZTRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y3OWZhZTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y3OWZhZTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjc5ZmFlNGMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjc5ZmFlNGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNzlmYWU0YyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmODJlZWQyMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y4MmVlZDIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y4MmVlZDIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y4MmVlZDIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY4MmVlZDIyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y4MmVlZDIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY4MmVlZDIyJnNjb3BlZD10cnVlJlwiIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuLi9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMnOyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtYnV0dG9uIGJyM3B4IGNwIGZjIHByIGJmci1jbGlja1wiXHJcbiAgICAgICA6c3R5bGU9XCJzZXRCdXR0b25TaXplXCJcclxuICAgICAgIEBjbGljay5zdG9wPVwiJGVtaXQoJ2ZldG90LWJ1dHRvbi1jbGljaycpXCI+XHJcbiAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdG5hbWU6ICdmZXRvdC1idXR0b24nLFxyXG4gICAgcHJvcHM6IHtcclxuICBcdFx0c2l6ZTogTnVtYmVyXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICBcdFx0c2V0QnV0dG9uU2l6ZSgpIHtcclxuICBcdFx0XHRyZXR1cm4geyB3aWR0aDogYCR7dGhpcy5zaXplfXB4YCB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtbGlnaHQtZ3JheTtcclxuICAgIGNvbG9yOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgZm9udDogMThweCAncm9ib3RvLW1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIEBpbmNsdWRlIHN0YXRpYy1zaGFkb3c7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRmZXRvdC1kYXJrLWJsdWU7XHJcbiAgICAgIGNvbG9yOiAkZmV0b3QtbGlnaHQtZ3JheTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJmZXRvdC1jb25maXJtLWJ1dHRvbnMgZmxleCB3MTAwXCI+XHJcbiAgICA8ZmV0b3QtYnV0dG9uIDpzaXplPVwic2l6ZVwiIEBmZXRvdC1idXR0b24tY2xpY2s9XCIkZW1pdCgnY29uZmlybS1ldmVudCcsIGZhbHNlKVwiPlxyXG4gICAgICA8ZmV0b3QtaWNvbiBpY29uPVwiJiN4RTgwODtcIj48L2ZldG90LWljb24+XHJcbiAgICA8L2ZldG90LWJ1dHRvbj5cclxuICAgIDxmZXRvdC1idXR0b24gOnNpemU9XCJzaXplXCIgQGZldG90LWJ1dHRvbi1jbGljaz1cIiRlbWl0KCdjb25maXJtLWV2ZW50JywgdHJ1ZSlcIj5cclxuICAgICAgPGZldG90LWljb24gaWNvbj1cIiYjeEU4MDc7XCI+PC9mZXRvdC1pY29uPlxyXG4gICAgPC9mZXRvdC1idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBmZXRvdEljb24gZnJvbSAnLi4vaWNvbnMvZmV0b3QtaWNvbi52dWUnO1xyXG4gIGltcG9ydCBmZXRvdEJ1dHRvbiBmcm9tICcuL2ZldG90LWJ1dHRvbi52dWUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnZmV0b3QtY29uZmlybS1idXR0b25zJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogOTZcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2ZldG90LWJ1dHRvbic6IGZldG90QnV0dG9uLFxyXG5cdFx0XHQnZmV0b3QtaWNvbic6IGZldG90SWNvbixcclxuXHRcdH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAuZmV0b3QtY29uZmlybS1idXR0b25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgIC5mZXRvdC1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJmZXRvdC1kYXRlXCI+e3sgZHJhd0RhdGUgfX08L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2ZldG90LWRhdGUnLFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0ZGF0ZTogTnVtYmVyXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0ZHJhd0RhdGUoKSB7XHJcblx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XHJcblx0XHRcdFx0cmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0uJHtkYXRlLmdldE1vbnRoKCkgKyAxfS4ke2RhdGUuZ2V0RGF0ZSgpfWBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAuZmV0b3QtZGF0ZSB7XHJcbiAgICBjb2xvcjogJGZldG90LWRhcmstZ3JheTtcclxuICAgIGZvbnQ6IDE0cHggJ3JvYm90by1ib2xkJztcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxpbnB1dC1jb250YWluZXIgOmRhdGE9XCJzZXRJbnB1dENvbnRhaW5lckRhdGFcIj5cclxuICAgIDx0ZXh0YXJlYS1jb21wb25lbnRcclxuICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxyXG4gICAgICAgICAgICA6b24tZm9jdXM9XCJvbkZvY3VzXCJcclxuICAgICAgICAgICAgQHRleHRhcmVhLWZvY3VzPVwiZm9jdXNIYW5kbGVyXCJcclxuICAgICAgICAgICAgQHRleHRhcmVhLWJsdXI9XCJibHVySGFuZGxlclwiXHJcbiAgICAgICAgICAgIEB0ZXh0YXJlYS1pbnB1dD1cImlucHV0SGFuZGxlclwiPlxyXG4gICAgPC90ZXh0YXJlYS1jb21wb25lbnQ+XHJcbiAgPC9pbnB1dC1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB0ZXh0YXJlYUNvbXBvbmVudE1peGluIGZyb20gJy4vc3JjL3RleHRhcmVhLWNvbXBvbmVudC1taXhpbic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdsaXN0LWNvbXBvbmVudC1pdGVtJyxcclxuXHRcdG1peGluczogW3RleHRhcmVhQ29tcG9uZW50TWl4aW5dLFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0c2V0SW5wdXRDb250YWluZXJEYXRhKCkge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRpY29uOiAnJyxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnTGlzdCBpdGVtJyxcclxuXHRcdFx0XHRcdGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxyXG5cdFx0XHRcdFx0aGFzVmFsdWU6IHRoaXMuaGFzVmFsdWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGlucHV0LWNvbnRhaW5lciA6ZGF0YT1cInNldElucHV0Q29udGFpbmVyRGF0YVwiPlxyXG4gICAgPHVsIGNsYXNzPVwibGlzdC1jb21wb25lbnQgYnNcIj5cclxuICAgICAgPGxpIGNsYXNzPVwicHJcIiB2LWZvcj1cIih2YWx1ZSwgaW5kZXgpIGluIGxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtLWxhYmVsIGJyNTAgcGEgZmNcIiA6Y2xhc3M9XCJsaXN0VHlwZVwiPnt7IGlzTnVtID8gaW5kZXggKyAxIDogJycgfX08L2Rpdj5cclxuICAgICAgICA8bGlzdC1jb21wb25lbnQtaXRlbSA6dmFsdWU9XCJ2YWx1ZVwiIEBibHVyLWV2ZW50PVwiYmx1ckV2ZW50SGFuZGxlclwiPjwvbGlzdC1jb21wb25lbnQtaXRlbT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9pbnB1dC1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBsaXN0Q29tcG9uZW50SXRlbSBmcm9tICcuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2xpc3QtY29tcG9uZW50JyxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRpc051bTogQm9vbGVhbixcclxuICAgICAgbGlzdDogQXJyYXlcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdsaXN0LWNvbXBvbmVudC1pdGVtJzogbGlzdENvbXBvbmVudEl0ZW1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGJsdXJFdmVudEhhbmRsZXIodmFsdWUpIHt9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHQgICAgc2V0SW5wdXRDb250YWluZXJEYXRhKCkge1xyXG5cdFx0ICAgIHJldHVybiB7XHJcblx0XHRcdCAgICBpY29uOiB0aGlzLmlzTnVtID8gJyYjeEYwQ0I7JyA6ICcmI3hGMENBOycsXHJcblx0XHRcdCAgICBwbGFjZWhvbGRlcjogJycsXHJcblx0XHRcdCAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcclxuXHRcdFx0ICAgIGhhc1ZhbHVlOiBmYWxzZVxyXG5cdFx0ICAgIH1cclxuXHQgICAgfSxcclxuICAgICAgbGlzdFR5cGUoKSB7XHJcblx0ICAgIFx0cmV0dXJuIHsgJ2lzLW1hcmstbGlzdCc6ICF0aGlzLmlzTnVtIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcbiAgLmxpc3QtY29tcG9uZW50IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMycHg7XHJcbiAgfVxyXG4gIC5saXN0LWl0ZW0tbGFiZWwge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAtMjJweDtcclxuXHJcbiAgICAmLmlzLW1hcmstbGlzdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRmZXRvdC1kYXJrLWdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQtY29udGFpbmVyIDpkYXRhPVwic2V0SW5wdXRDb250YWluZXJEYXRhXCI+XHJcbiAgICA8dGV4dGFyZWEtY29tcG9uZW50XHJcbiAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcclxuICAgICAgICAgICAgOm9uLWZvY3VzPVwib25Gb2N1c1wiXHJcbiAgICAgICAgICAgIEB0ZXh0YXJlYS1mb2N1cz1cImZvY3VzSGFuZGxlclwiXHJcbiAgICAgICAgICAgIEB0ZXh0YXJlYS1ibHVyPVwiYmx1ckhhbmRsZXJcIlxyXG4gICAgICAgICAgICBAdGV4dGFyZWEtaW5wdXQ9XCJpbnB1dEhhbmRsZXJcIj5cclxuICAgIDwvdGV4dGFyZWEtY29tcG9uZW50PlxyXG4gIDwvaW5wdXQtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgdGV4dGFyZWFDb21wb25lbnRNaXhpbiBmcm9tICcuL3NyYy90ZXh0YXJlYS1jb21wb25lbnQtbWl4aW4nO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAncGFyYWdyYXBoLWNvbXBvbmVudCcsXHJcblx0XHRtaXhpbnM6IFt0ZXh0YXJlYUNvbXBvbmVudE1peGluXSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0ICAgIHNldElucHV0Q29udGFpbmVyRGF0YSgpIHtcclxuXHRcdCAgICByZXR1cm4ge1xyXG5cdFx0XHQgICAgaWNvbjogJyYjeEU4MjQ7JyxcclxuXHRcdFx0ICAgIHBsYWNlaG9sZGVyOiAnUGFyYWdyYXBoJyxcclxuXHRcdFx0ICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxyXG5cdFx0XHQgICAgaGFzVmFsdWU6IHRoaXMuaGFzVmFsdWVcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuZmV0b3QtaW5wdXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8dGV4dGFyZWEgY2xhc3M9XCJ0ZXh0YXJlYS1jb21wb25lbnQgdzEwMFwiXHJcbiAgICAgICAgICAgIHJlZj1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgQGlucHV0LnN0b3A9XCJpbnB1dEhhbmRsZXJcIlxyXG4gICAgICAgICAgICBAZm9jdXMuc3RvcD1cIiRlbWl0KCd0ZXh0YXJlYS1mb2N1cycpXCJcclxuICAgICAgICAgICAgQGJsdXIuc3RvcD1cIiRlbWl0KCd0ZXh0YXJlYS1ibHVyJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIj57eyB2YWx1ZSB9fTwvdGV4dGFyZWE+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICd0ZXh0YXJlYS1jb21wb25lbnQnLFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0dmFsdWU6IFN0cmluZyxcclxuXHRcdFx0b25Gb2N1czogQm9vbGVhblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgaW5wdXRIYW5kbGVyKHt0YXJnZXR9KSB7XHJcblx0XHQgICAgdGhpcy50ZXh0YXJlYVJlc2l6ZSgpO1xyXG5cdFx0ICAgIHRoaXMuJGVtaXQoJ3RleHRhcmVhLWlucHV0JywgdGFyZ2V0LnZhbHVlKVxyXG5cdCAgICB9LFxyXG5cdCAgICB0ZXh0YXJlYVJlc2l6ZSgpIHtcclxuXHRcdCAgICBjb25zdCB0YSA9IHRoaXMuJHJlZnMudGV4dGFyZWE7XHJcblxyXG5cdFx0ICAgIHRhLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHRcdCAgICB0YS5zdHlsZS5oZWlnaHQgPSB0YS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdCAgICB9XHJcbiAgICB9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0aWYoIHRoaXMub25Gb2N1cyApIHRoaXMuJHJlZnMudGV4dGFyZWEuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy50ZXh0YXJlYVJlc2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC50ZXh0YXJlYS1jb21wb25lbnQge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgQGluY2x1ZGUgZm9ybS1lbGVtZW50O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnRcIj5cclxuICAgIDxpbnB1dC10aXRsZS1jb21wb25lbnRcclxuICAgICAgICAgICAgOm9uLWZvY3VzPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIDppbnB1dD1cImlucHV0XCJcclxuICAgICAgICAgICAgQGlucHV0LXRpdGxlLWV2ZW50PVwiaW5wdXRUaXRsZUV2ZW50SGFuZGxlclwiPlxyXG4gICAgPC9pbnB1dC10aXRsZS1jb21wb25lbnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQnLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpbnB1dDoge1xyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBuZXcgbm90ZSB0aXRsZScsXHJcbiAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG5cdFx0XHRcdGN1cnJlbnROb3RlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdFx0XHRpbnB1dFRpdGxlRXZlbnRIYW5kbGVyKHZhbHVlKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50Tm90ZVN0b3JlLmFjdGlvbnMudXBkYXRlVmFsdWUoe2tleTogJ3RpdGxlJywgdmFsdWV9KVxyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50IGJzXCI+XHJcbiAgICA8ZmV0b3QtY29uZmlybS1idXR0b25zIDpzaXplPVwiMTMyXCIgQGNvbmZpcm0tZXZlbnQ9XCJjb25maXJtRXZlbnRIYW5kbGVyXCI+PC9mZXRvdC1jb25maXJtLWJ1dHRvbnM+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdENvbmZpcm1CdXR0b25zIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlJztcclxuXHRpbXBvcnQgZXZlbnRzRW1pdHRlcldvcmtlciBmcm9tICckZmV0b3QtZXZlbnRzLWVtaXR0ZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50JyxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2ZldG90LWNvbmZpcm0tYnV0dG9ucyc6IGZldG90Q29uZmlybUJ1dHRvbnNcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNvbmZpcm1FdmVudEhhbmRsZXIobGFiZWwpIHtcclxuXHRcdFx0XHRldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ25vdGVzJykuZW1pdCgnY3JlYXRlLW5vdGUtY29uZmlybScsIGxhYmVsKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC5ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHcxMDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbmZvIHcxMDAgZmFpY1wiPlxyXG4gICAgICA8ZmV0b3QtZGF0ZSA6ZGF0ZT1cIm5vdGVEYXRlXCI+PC9mZXRvdC1kYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxpbnB1dC10aXRsZS1jb21wb25lbnRcclxuICAgICAgICAgICAgOmlucHV0PVwibm90ZVRpdGxlXCJcclxuICAgICAgICAgICAgQGlucHV0LXRpdGxlLWV2ZW50PVwiaW5wdXRUaXRsZUV2ZW50SGFuZGxlclwiPlxyXG4gICAgPC9pbnB1dC10aXRsZS1jb21wb25lbnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdERhdGUgZnJvbSAnJGZldG90LXZpZXctY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZSc7XHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXInLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjdXJyZW50QmxvY2tzU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LWJsb2NrcycpLFxyXG5cdFx0XHRcdGN1cnJlbnROb3RlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdCAgICAnZmV0b3QtZGF0ZSc6IGZldG90RGF0ZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgaW5wdXRUaXRsZUV2ZW50SGFuZGxlcih2YWx1ZSkge1xyXG5cdCAgICBcdHRoaXMuY3VycmVudE5vdGVTdG9yZS5hY3Rpb25zLnVwZGF0ZVZhbHVlKHsga2V5OiAndGl0bGUnLCB2YWx1ZSB9KTtcclxuXHJcblx0ICAgIFx0Y29uc3Qgbm90ZUlEID0gdGhpcy5jdXJyZW50Tm90ZVN0b3JlLnN0YXRlLm5vdGUuaWQ7XHJcblx0ICAgIFx0aWYoIG5vdGVJRCAhPT0gMCApIHRoaXMuY3VycmVudEJsb2Nrc1N0b3JlLmFjdGlvbnMudXBkYXRlQmxvY2tUaXRsZSh7XHJcbiAgICAgICAgICBpZDogbm90ZUlELCB0aXRsZTogdmFsdWVcclxuXHQgICAgXHR9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0bm90ZURhdGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLmRhdGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBub3RlVGl0bGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnTm90ZSB0aXRsZScsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmdldHRlcnMudGl0bGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAubm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcbiAgLmluZm8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtXCI+XHJcbiAgICA8cGFyYWdyYXBoLWNvbXBvbmVudFxyXG4gICAgICAgICAgICB2LWlmPVwidHlwZSA9PT0gJ3BhcmFncmFwaCdcIiA6dmFsdWU9XCJkYXRhXCJcclxuICAgICAgICAgICAgQGJsdXItZXZlbnQ9XCJwYXJhZ3JhcGhCbHVyRXZlbnRIYW5kbGVyXCI+XHJcbiAgICA8L3BhcmFncmFwaC1jb21wb25lbnQ+XHJcblxyXG4gICAgPGxpc3QtY29tcG9uZW50XHJcbiAgICAgICAgICAgIHYtZWxzZS1pZj1cInR5cGUgPT09ICdudW0tbGlzdCdcIlxyXG4gICAgICAgICAgICA6aXMtbnVtPVwidHJ1ZVwiIDpsaXN0PVwiZGF0YVwiPlxyXG4gICAgPC9saXN0LWNvbXBvbmVudD5cclxuXHJcbiAgICA8bGlzdC1jb21wb25lbnRcclxuICAgICAgICAgICAgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ21hcmstbGlzdCdcIlxyXG4gICAgICAgICAgICA6aXMtbnVtPVwiZmFsc2VcIiA6bGlzdD1cImRhdGFcIj5cclxuICAgIDwvbGlzdC1jb21wb25lbnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBwYXJhZ3JhcGhDb21wb25lbnQgZnJvbSAnLi4vZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlJztcclxuXHRpbXBvcnQgbGlzdENvbXBvbmVudCBmcm9tICcuLi9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQudnVlJztcclxuXHJcblx0aW1wb3J0IHRydWVUeXBlIGZyb20gJyRmZXRvdC1zZXJ2aWNlcy90cnVlLXR5cGUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbScsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHR5cGU6ICcnLFxyXG4gICAgICAgIGRhdGE6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRpdGVtOiBbQXJyYXksIFN0cmluZ11cclxuICAgIH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdwYXJhZ3JhcGgtY29tcG9uZW50JzogcGFyYWdyYXBoQ29tcG9uZW50LFxyXG4gICAgICAnbGlzdC1jb21wb25lbnQnOiBsaXN0Q29tcG9uZW50XHJcblx0XHR9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBwYXJhZ3JhcGhCbHVyRXZlbnRIYW5kbGVyKHZhbHVlKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlTW91bnQoKSB7XHJcblx0XHRcdHN3aXRjaCggdHJ1ZVR5cGUuZ2V0KHRoaXMuaXRlbSkgKSB7XHJcblx0XHRcdFx0Y2FzZSAnU3RyaW5nJzpcclxuXHRcdFx0XHRcdHRoaXMudHlwZSA9IHRoaXMuaXRlbVswXSA9PT0gJ3AnID8gJ3BhcmFncmFwaCcgOiAnJztcclxuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuaXRlbS5zbGljZSgxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0FycmF5JzpcclxuICAgICAgICBcdHRoaXMudHlwZSA9IHR5cGVvZiB0aGlzLml0ZW1bMF0gPT09ICdib29sZWFuJyA/ICdudW0tbGlzdCcgOiAnbWFyay1saXN0JztcclxuICAgICAgICBcdHRoaXMuZGF0YSA9IHRoaXMudHlwZSA9PT0gJ251bS1saXN0JyA/IHRoaXMuaXRlbS5maWx0ZXIoKGl0LCBpKSA9PiBpICE9PSAwKSA6IHRoaXMuaXRlbTtcclxuXHRcdFx0fVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlIHcxMDBcIj5cclxuICAgIDxub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtXHJcbiAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBub3RlQ29udGVudFwiXHJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiIDppdGVtPVwiaXRlbVwiPlxyXG4gICAgPC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbm90ZXNGcmFtZUNvbnRlbnRXb3Jrc3BhY2VJdGVtIGZyb20gJy4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWUnO1xyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y3VycmVudE5vdGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbm90ZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtJzogbm90ZXNGcmFtZUNvbnRlbnRXb3Jrc3BhY2VJdGVtXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0bm90ZUNvbnRlbnQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLmNvbnRlbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3Rlcy1mcmFtZS1jb250ZW50IGJzXCI+XHJcbiAgICA8bm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXI+PC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlcj5cclxuICAgIDxub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZT48L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlPlxyXG5cclxuICAgIDxmcmFtZS10b29sc1xyXG4gICAgICAgICAgICA6dG9vbHM9XCJ0b29sc1wiXHJcbiAgICAgICAgICAgIDppcy1hY3RpdmU9XCJpc0ZyYW1lVG9vbHNBY3RpdmVcIlxyXG4gICAgICAgICAgICBAdG9vbHMtaXRlbS1jbGljaz1cInRvb2xzSXRlbUNsaWNrSGFuZGxlclwiPlxyXG4gICAgPC9mcmFtZS10b29scz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IG5vdGVzRnJhbWVDb250ZW50SGVhZGVyIGZyb20gJy4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlJztcclxuICBpbXBvcnQgbm90ZXNGcmFtZUNvbnRlbnRXb3Jrc3BhY2UgZnJvbSAnLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWUnO1xyXG5cclxuICBpbXBvcnQgbm90ZXNGcmFtZVRvb2xzU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvbm90ZXMtZnJhbWUtdG9vbHMtc3RvcmUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudCcsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzRnJhbWVUb29sc0FjdGl2ZTogZmFsc2UsXHJcblx0XHRcdFx0dG9vbHM6IG5vdGVzRnJhbWVUb29sc1N0b3JlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlcic6IG5vdGVzRnJhbWVDb250ZW50SGVhZGVyLFxyXG4gICAgICAnbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UnOiBub3Rlc0ZyYW1lQ29udGVudFdvcmtzcGFjZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgdG9vbHNJdGVtQ2xpY2tIYW5kbGVyKGxhYmVsKSB7XHJcblx0ICAgIFx0Y29uc29sZS5sb2coJ3Rvb2xzJywgbGFiZWwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLm5vdGVzLWZyYW1lLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjRweCA5NnB4IDQycHg7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8YmxvY2stY29udGFpbmVyXHJcbiAgICAgICAgICA6dGl0bGU9XCJibG9jay50aXRsZVwiXHJcbiAgICAgICAgICA6aXMtbWVudS1vcGVuPVwiaXNNZW51T3BlblwiXHJcbiAgICAgICAgICA6c2l6ZS10eXBlPVwiYmxvY2tzU2l6ZVR5cGVcIlxyXG4gICAgICAgICAgOnBvc2l0aW9uPVwiYmxvY2tQb3NpdGlvblwiXHJcbiAgICAgICAgICBAYmxvY2stY29udGVudC1jbGljaz1cImVkaXROb3RlRXZlbnRIYW5kbGVyXCJcclxuICAgICAgICAgIEBvcGVuLW1lbnUtZXZlbnQ9XCJvcGVuTWVudUV2ZW50SGFuZGxlclwiXHJcbiAgICAgICAgICBAY2xvc2UtbWVudS1ldmVudD1cImNsb3NlTWVudUV2ZW50SGFuZGxlclwiPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmxvY2stbWVudS1pdGVtcz5cclxuICAgICAgPG1lbnUtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbWVudUl0ZW1zXCJcclxuICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIiA6aXRlbT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgIEBtZW51LWl0ZW0tY2xpY2s9XCJtZW51SXRlbUNsaWNrSGFuZGxlclwiPlxyXG4gICAgICA8L21lbnUtaXRlbT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpibG9jay1jb250ZW50PlxyXG4gICAgICA8ZGl2IHYtaHRtbD1cImRyYXdDb250ZW50XCI+PC9kaXY+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmxvY2stZGF0ZT5cclxuICAgICAgPGZldG90LWRhdGUgOmRhdGU9XCJub3RlRGF0ZVwiPjwvZmV0b3QtZGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gIDwvYmxvY2stY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZmV0b3REYXRlIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWUnO1xyXG5cclxuICBpbXBvcnQgZXZlbnRzRW1pdHRlcldvcmtlciBmcm9tICckZmV0b3QtZXZlbnRzLWVtaXR0ZXInO1xyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcbiAgaW1wb3J0IG5vdGVzQmxvY2tNZW51U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvbm90ZXMtYmxvY2stbWVudS1zdG9yZSc7XHJcbiAgaW1wb3J0IGRyYXdCbG9ja0NvbnRlbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kcmF3LWJsb2NrLWNvbnRlbnQnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtYmxvY2snLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc01lbnVPcGVuOiBmYWxzZSxcclxuXHJcblx0XHRcdFx0cGFnZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgncGFnZScpLFxyXG4gICAgICAgIGN1cnJlbnROb3RlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKSxcclxuICAgICAgICBjdXJyZW50TW9kdWxlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW1vZHVsZScpLFxyXG5cclxuXHRcdFx0XHRhcHBFdmVudHNFbWl0dGVyOiBldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ2FwcCcpLFxyXG4gICAgICAgIG5vdGVzRXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdub3RlcycpLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0YmxvY2s6IE9iamVjdCxcclxuICAgICAgaW5kZXg6IE51bWJlcixcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1kYXRlJzogZmV0b3REYXRlXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0ZHJhd0NvbnRlbnQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRyYXdCbG9ja0NvbnRlbnQodGhpcy5ibG9jay5jb250ZW50KVxyXG4gICAgICB9LFxyXG4gICAgICBub3RlRGF0ZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ibG9jay5pbmZvLmRhdGVcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIGJsb2NrIGNvbnRhaW5lciBwcm9wcyAqL1xyXG4gICAgICBibG9ja3NTaXplVHlwZSgpIHtcclxuXHQgICAgICByZXR1cm4gU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbW9kdWxlJykuZ2V0dGVycy5zZXR0aW5nc0J5S2V5KCdibG9ja3NTaXplVHlwZScpXHJcbiAgICAgIH0sXHJcblx0ICAgIGJsb2NrUG9zaXRpb24oKSB7XHJcbiAgICAgIFx0aWYoIHRoaXMucGFnZVN0b3JlLnN0YXRlLmJsb2Nrc1Bvc2l0aW9ucyA9PT0gbnVsbCApIHJldHVybiB7IGluZGV4OiB0aGlzLmluZGV4IH07XHJcblx0XHQgICAgcmV0dXJuIHRoaXMucGFnZVN0b3JlLnN0YXRlLmJsb2Nrc1Bvc2l0aW9uc1sgdGhpcy5pbmRleCArIDEgXVxyXG5cdCAgICB9LFxyXG5cclxuICAgICAgLyogbWVudSAqL1xyXG5cdCAgICBtZW51SXRlbXMoKSB7XHJcblx0XHQgICAgcmV0dXJuIG5vdGVzQmxvY2tNZW51U3RvcmUuaXRlbXNcclxuXHQgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgLyogbWVudSAqL1xyXG5cdFx0XHRvcGVuTWVudUV2ZW50SGFuZGxlcigpIHtcclxuXHQgICAgXHR0aGlzLmlzTWVudU9wZW4gPSB0cnVlO1xyXG5cdCAgICBcdHRoaXMuc2V0Q3VycmVudE5vdGVTdG9yZSgpO1xyXG5cclxuXHRcdFx0XHR0aGlzLmFwcEV2ZW50c0VtaXR0ZXIuZW1pdCgnZm9yY2UtdXBkYXRlLW5vdGVzJyk7XHJcbiAgICAgIH0sXHJcblx0ICAgIGNsb3NlTWVudUV2ZW50SGFuZGxlcigpIHtcclxuXHRcdCAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZTtcclxuXHRcdCAgICB0aGlzLmFwcEV2ZW50c0VtaXR0ZXIuZW1pdCgnZm9yY2UtdXBkYXRlLW5vdGVzJyk7XHJcbiAgICAgIH0sXHJcblx0ICAgIG1lbnVJdGVtQ2xpY2tIYW5kbGVyKGl0ZW0pIHtcclxuXHRcdCAgICBzd2l0Y2goIGl0ZW0ubGFiZWwgKSB7XHJcblx0XHRcdCAgICBjYXNlICdlZGl0JzpcclxuXHRcdFx0XHQgICAgdGhpcy5lZGl0Tm90ZUV2ZW50SGFuZGxlcigpO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0ICAgIGNhc2UgJ2RlbGV0ZSc6XHJcblx0XHRcdCAgICBcdHRoaXMuZGVsZXRlTm90ZUV2ZW50SGFuZGxlcigpXHJcblx0XHQgICAgfVxyXG5cdCAgICB9LFxyXG5cclxuICAgICAgLyogbWVudSBldmVudCAqL1xyXG5cdCAgICBlZGl0Tm90ZUV2ZW50SGFuZGxlcigpIHtcclxuXHQgICAgXHR0aGlzLmNsb3NlTWVudUV2ZW50SGFuZGxlcigpO1xyXG5cdCAgICBcdHRoaXMuc2V0Q3VycmVudE5vdGVTdG9yZSgpO1xyXG5cclxuXHQgICAgXHR0aGlzLm5vdGVzRXZlbnRzRW1pdHRlci5lbWl0KCdlZGl0LW5vdGUtZXZlbnQnKTtcclxuICAgICAgfSxcclxuXHQgICAgZGVsZXRlTm90ZUV2ZW50SGFuZGxlcigpIHtcclxuXHQgICAgXHR0aGlzLmNsb3NlTWVudUV2ZW50SGFuZGxlcigpO1xyXG5cdFx0ICAgIHRoaXMubm90ZXNFdmVudHNFbWl0dGVyLmVtaXQoJ2RlbGV0ZS1ub3RlLWV2ZW50JywgdGhpcy5ibG9jay5pZCk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvKiBzcmMgKi9cclxuICAgICAgc2V0Q3VycmVudE5vdGVTdG9yZSgpIHtcclxuICAgICAgXHR0aGlzLmN1cnJlbnROb3RlU3RvcmUuYWN0aW9ucy51cGRhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcmNlVXBkYXRlTm90ZSgpIHtcclxuICAgICAgXHR0aGlzLiRmb3JjZVVwZGF0ZSgpXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5hcHBFdmVudHNFbWl0dGVyLm9uKCdmb3JjZS11cGRhdGUtbm90ZXMnLCB0aGlzLmZvcmNlVXBkYXRlTm90ZSk7XHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkKCkge1xyXG5cdFx0XHR0aGlzLmFwcEV2ZW50c0VtaXR0ZXIucmVtb3ZlKCdmb3JjZS11cGRhdGUtbm90ZXMnLCB0aGlzLmZvcmNlVXBkYXRlTm90ZSk7XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPG1vZHVsZS1jb250YWluZXJcclxuICAgICAgICAgIDpoYXMtZnJhbWU9XCJoYXNGcmFtZVwiXHJcbiAgICAgICAgICA6c2l6ZS10eXBlPVwiY3VycmVudFNpemVUeXBlXCJcclxuICAgICAgICAgIEBjcmVhdGUtYmxvY2stZXZlbnQ9XCJjcmVhdGVOb3RlRXZlbnRIYW5kbGVyXCJcclxuICAgICAgICAgIEBjaGFuZ2Utc2l6ZS10eXBlLWV2ZW50PVwiY2hhbmdlU2l6ZVR5cGVFdmVudEhhbmRsZXJcIj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1vZHVsZS1mcmFtZT5cclxuICAgICAgPGZyYW1lLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHYtaWY9XCJoYXNGcmFtZVwiXHJcbiAgICAgICAgICAgICAgOmZyYW1lLXN0YXRlPVwiZnJhbWVTdGF0ZVwiXHJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJmcmFtZU9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIEBjbG9zZS1mcmFtZS1ldmVudD1cImNsb3NlRnJhbWVFdmVudEhhbmRsZXJcIj5cclxuICAgICAgICA8bm90ZXMtZnJhbWUtY29udGVudD48L25vdGVzLWZyYW1lLWNvbnRlbnQ+XHJcbiAgICAgIDwvZnJhbWUtY29udGFpbmVyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1vZHVsZS1ibG9ja3M+XHJcbiAgICAgIDxub3Rlcy1ibG9ja1xyXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGJsb2NrLCBpbmRleCkgaW4gY3VycmVudEJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImluZGV4XCIgOmluZGV4PVwiaW5kZXhcIiA6YmxvY2s9XCJibG9ja1wiPlxyXG4gICAgICA8L25vdGVzLWJsb2NrPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgPC9tb2R1bGUtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgbm90ZXNGcmFtZUNvbnRlbnQgZnJvbSAnLi4vbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZSc7XHJcblx0aW1wb3J0IG5vdGVzQmxvY2sgZnJvbSAnLi9ub3Rlcy1ibG9jay52dWUnXHJcblxyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuICBpbXBvcnQgZXZlbnRzRW1pdHRlcldvcmtlciBmcm9tICckZmV0b3QtZXZlbnRzLWVtaXR0ZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtbW9kdWxlJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aGFzRnJhbWU6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRGcmFtZUlzRm9yQ3JlYXRlOiBmYWxzZSxcclxuICAgICAgICBsYXN0QmxvY2tzU2l6ZVR5cGU6IDAsXHJcblxyXG4gICAgICAgIHBhZ2VTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ3BhZ2UnKSxcclxuICAgICAgICBjdXJyZW50QmxvY2tzU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LWJsb2NrcycpLFxyXG4gICAgICAgIGN1cnJlbnRNb2R1bGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbW9kdWxlJyksXHJcbiAgICAgICAgY3VycmVudE5vdGVTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbm90ZScpLFxyXG5cclxuICAgICAgICBhcHBFdmVudHNFbWl0dGVyOiBldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ2FwcCcpLFxyXG5cdFx0XHRcdG5vdGVzRXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdub3RlcycpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdub3Rlcy1mcmFtZS1jb250ZW50Jzogbm90ZXNGcmFtZUNvbnRlbnQsXHJcblx0ICAgICdub3Rlcy1ibG9jayc6IG5vdGVzQmxvY2tcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0XHRcdC8qIGNyZWF0ZSBub3RlICovXHJcblx0ICAgIGNyZWF0ZU5vdGVFdmVudEhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5hcHBFdmVudHNFbWl0dGVyLmVtaXQoXHJcblx0ICAgIFx0XHQnb3Blbi1tb2RhbC1ldmVudCcsXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNb2R1bGVTdG9yZS5nZXR0ZXJzLmNvbmZpZ0J5S2V5KCdjcmVhdGVOb3RlTW9kYWxDb25maWcnKVxyXG4gICAgICAgICk7XHJcblx0ICAgIFx0dGhpcy5ub3Rlc0V2ZW50c0VtaXR0ZXIub24oXHJcblx0ICAgIFx0XHQnY3JlYXRlLW5vdGUtY29uZmlybScsXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZU5vdGVDb25maXJtSGFuZGxlclxyXG4gICAgICAgIClcclxuICAgICAgfSxcclxuXHQgICAgY3JlYXRlTm90ZUNvbmZpcm1IYW5kbGVyKGxhYmVsKSB7XHJcblx0ICAgIFx0aWYoIGxhYmVsICkge1xyXG5cdFx0XHQgICAgdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmFjdGlvbnMudXBkYXRlRm9yQ3JlYXRlKHtkYXRlOiBuZXcgRGF0ZSgpfSk7XHJcblxyXG5cdFx0XHQgICAgdGhpcy5jdXJyZW50RnJhbWVJc0ZvckNyZWF0ZSA9IHRydWU7XHJcblx0XHRcdCAgICB0aGlzLm9wZW5GcmFtZUhhbmRsZXIoKTtcclxuXHRcdCAgICB9XHJcblxyXG5cdCAgICAgIHRoaXMuYXBwRXZlbnRzRW1pdHRlci5lbWl0KCdjbG9zZS1tb2RhbC1ldmVudCcpO1xyXG5cdCAgICBcdHRoaXMubm90ZXNFdmVudHNFbWl0dGVyLnJlbW92ZSgnY3JlYXRlLW5vdGUtY29uZmlybScsIHRoaXMuY3JlYXRlTm90ZUNvbmZpcm1IYW5kbGVyKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIGZyYW1lICovXHJcbiAgICAgIG9wZW5GcmFtZUhhbmRsZXIoKSB7XHJcbiAgICAgIFx0dGhpcy5oYXNGcmFtZSA9IHRydWU7XHJcblxyXG4gICAgICBcdHRoaXMubGFzdEJsb2Nrc1NpemVUeXBlID0gdGhpcy5jdXJyZW50TW9kdWxlU3RvcmUuZ2V0dGVycy5zZXR0aW5nc0J5S2V5KCdibG9ja3NTaXplVHlwZScpO1xyXG4gICAgICBcdHRoaXMuY3VycmVudE1vZHVsZVN0b3JlLmFjdGlvbnMudXBkYXRlU2V0dGluZ3NCeUtleSh7XHJcbiAgICAgICAgICBrZXk6ICdibG9ja3NTaXplVHlwZScsIHZhbHVlOiAyLCBzZW5kVG9TZXJ2ZXI6IGZhbHNlXHJcbiAgICAgIFx0fSk7XHJcblxyXG5cdCAgICAgIHRoaXMucGFnZVN0b3JlLmFjdGlvbnMucmVtb3ZlQmxvY2tzUG9zaXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5hcHBFdmVudHNFbWl0dGVyLmVtaXQoJ2ZvcmNlLXVwZGF0ZS1ub3RlcycpXHJcbiAgICAgIH0sXHJcblx0ICAgIGFzeW5jIGNsb3NlRnJhbWVFdmVudEhhbmRsZXIodG9TYXZlTm90ZSA9IHRydWUpIHtcclxuICAgICAgXHRpZiggIXRvU2F2ZU5vdGUgKSByZXR1cm47XHJcblxyXG4gICAgICBcdGlmKCB0aGlzLmN1cnJlbnRGcmFtZUlzRm9yQ3JlYXRlICkge1xyXG5cdFx0ICAgICAgY29uc3QgY3VycmVudE5vdGUgPSB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy5ub3RlKCk7XHJcblx0XHQgICAgICBhd2FpdCB0aGlzLmN1cnJlbnRCbG9ja3NTdG9yZS5hY3Rpb25zLmNyZWF0ZUJsb2NrKGN1cnJlbnROb3RlKTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0ICAgIGF3YWl0IHRoaXMuY3VycmVudE1vZHVsZVN0b3JlLmFjdGlvbnMudXBkYXRlU2V0dGluZ3NCeUtleSh7XHJcblx0XHRcdCAgICBrZXk6ICdibG9ja3NTaXplVHlwZScsIHZhbHVlOiB0aGlzLmxhc3RCbG9ja3NTaXplVHlwZSwgc2VuZFRvU2VydmVyOiBmYWxzZVxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICB0aGlzLmhhc0ZyYW1lID0gZmFsc2U7XHJcblx0XHQgICAgdGhpcy5jdXJyZW50RnJhbWVJc0ZvckNyZWF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdCAgICB0aGlzLnVwZGF0ZUJsb2Nrc1Bvc2l0aW9ucygpO1xyXG5cdFx0ICAgIHRoaXMuYXBwRXZlbnRzRW1pdHRlci5lbWl0KCdmb3JjZS11cGRhdGUtbm90ZXMnKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIG5vdGUgaGFuZGxlcnMgKi9cclxuXHQgICAgYXN5bmMgZWRpdE5vdGVFdmVudEhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5vcGVuRnJhbWVIYW5kbGVyKCk7XHJcblx0ICAgIH0sXHJcblx0ICAgIGFzeW5jIGRlbGV0ZU5vdGVFdmVudEhhbmRsZXIoaWQpIHtcclxuXHQgICAgXHRhd2FpdCB0aGlzLmN1cnJlbnRCbG9ja3NTdG9yZS5hY3Rpb25zLmRlbGV0ZUJsb2NrKGlkKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIG90aGVycyAqL1xyXG5cdCAgICBjaGFuZ2VTaXplVHlwZUV2ZW50SGFuZGxlcihzaXplVHlwZSkge1xyXG5cdCAgICBcdHRoaXMuY3VycmVudE1vZHVsZVN0b3JlLmFjdGlvbnMudXBkYXRlU2V0dGluZ3NCeUtleSh7a2V5OiAnYmxvY2tzU2l6ZVR5cGUnLCB2YWx1ZTogc2l6ZVR5cGV9KVxyXG5cdCAgICB9LFxyXG4gICAgICB1cGRhdGVCbG9ja3NQb3NpdGlvbnMoKSB7XHJcblx0ICAgICAgdGhpcy5wYWdlU3RvcmUuc3RhdGUuZG9jdW1lbnRXaWR0aCA8IDEyODBcclxuXHRcdCAgICAgID8gdGhpcy5wYWdlU3RvcmUuYWN0aW9ucy5yZW1vdmVCbG9ja3NQb3NpdGlvbnMoKVxyXG5cdFx0ICAgICAgOiB0aGlzLnBhZ2VTdG9yZS5hY3Rpb25zLnVwZGF0ZUJsb2Nrc1Bvc2l0aW9ucygpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHQvKiBtb2R1bGUgKi9cclxuICAgICAgY3VycmVudFNpemVUeXBlKCkge1xyXG4gICAgICBcdHJldHVybiB0aGlzLmN1cnJlbnRNb2R1bGVTdG9yZS5nZXR0ZXJzLnNldHRpbmdzQnlLZXkoJ2Jsb2Nrc1NpemVUeXBlJyk7XHJcbiAgICAgIH0sXHJcblxyXG5cdFx0XHQvKiBmcmFtZSAqL1xyXG5cdCAgICBmcmFtZVN0YXRlKCkge1xyXG5cdCAgICBcdHJldHVybiB0aGlzLnBhZ2VTdG9yZS5zdGF0ZS5mcmFtZVN0YXRlXHJcbiAgICAgIH0sXHJcbiAgICAgIGZyYW1lT3B0aW9ucygpIHtcclxuXHRcdFx0XHRjb25zdCB0aXRsZSA9IHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLnRpdGxlKCk7XHJcblx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyOiB7IHRpdGxlLCBpY29uOiAnJiN4RTgwQzsnIH0gfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyogYmxvY2tzICovXHJcbiAgICAgIGN1cnJlbnRCbG9ja3MoKSB7XHJcbiAgICAgIFx0cmV0dXJuIHRoaXMuY3VycmVudEJsb2Nrc1N0b3JlLmdldHRlcnMuZ2V0TGlrZUFycmF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYmVmb3JlTW91bnQoKSB7XHJcblx0ICAgIHRoaXMudXBkYXRlQmxvY2tzUG9zaXRpb25zKClcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLm5vdGVzRXZlbnRzRW1pdHRlclxyXG4gICAgICAgIC5vbignZWRpdC1ub3RlLWV2ZW50JywgdGhpcy5lZGl0Tm90ZUV2ZW50SGFuZGxlcilcclxuICAgICAgICAub24oJ2RlbGV0ZS1ub3RlLWV2ZW50JywgdGhpcy5kZWxldGVOb3RlRXZlbnRIYW5kbGVyKVxyXG4gICAgfSxcclxuICAgIGRlc3Ryb3llZCgpIHtcclxuXHRcdFx0U3RvcmVXb3JrZXIucmVtb3ZlU3RvcmUoJ2N1cnJlbnQtbm90ZScpO1xyXG5cdFx0XHRldmVudHNFbWl0dGVyV29ya2VyLnJlbW92ZUVtaXR0ZXIoJ25vdGVzJyk7XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uZmV0b3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjU7XFxuICBjb2xvcjogIzAwNDQ2NjtcXG4gIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSg1NywgNjIsIDcwLCAwLjQpO1xcbn1cXG4uZmV0b3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwNDQ2NjtcXG4gICAgY29sb3I6ICNGMUYxRjU7XFxufVxcbi5mZXRvdC1idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5mZXRvdC1jb25maXJtLWJ1dHRvbnMge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5mZXRvdC1jb25maXJtLWJ1dHRvbnMgLmZldG90LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmZldG90LWRhdGVbZGF0YS12LWE3NzZlOGM0XSB7XFxuICBjb2xvcjogIzM5M0U0NjtcXG4gIGZvbnQ6IDE0cHggJ3JvYm90by1ib2xkJztcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5pbnB1dC1jb250YWluZXJbZGF0YS12LTc2NzUyOWUyXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmlucHV0LWNvbnRhaW5lcltkYXRhLXYtYWY0OGVjNjRdIHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLmxpc3QtY29tcG9uZW50W2RhdGEtdi1hZjQ4ZWM2NF0ge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzJweDtcXG59XFxuLmxpc3QtaXRlbS1sYWJlbFtkYXRhLXYtYWY0OGVjNjRdIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogLTIycHg7XFxufVxcbi5saXN0LWl0ZW0tbGFiZWwuaXMtbWFyay1saXN0W2RhdGEtdi1hZjQ4ZWM2NF0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzkzRTQ2O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmlucHV0LWNvbnRhaW5lcltkYXRhLXYtNWE4YTY4NGVdIHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5mZXRvdC1pbnB1dC1pY29uW2RhdGEtdi01YThhNjg0ZV0ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLnRleHRhcmVhLWNvbXBvbmVudCB7XFxuICByZXNpemU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50IHtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlcltkYXRhLXYtMjVlMDk0MDJdIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5pbmZvW2RhdGEtdi0yNWUwOTQwMl0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5ub3Rlcy1mcmFtZS1jb250ZW50W2RhdGEtdi0yMDFiM2ZjYl0ge1xcbiAgcGFkZGluZzogMjRweCA5NnB4IDQycHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmV0b3QtYnV0dG9uIGJyM3B4IGNwIGZjIHByIGJmci1jbGlja1wiLFxuICAgICAgc3R5bGU6IF92bS5zZXRCdXR0b25TaXplLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJmZXRvdC1idXR0b24tY2xpY2tcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImZldG90LWNvbmZpcm0tYnV0dG9ucyBmbGV4IHcxMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImZldG90LWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgc2l6ZTogX3ZtLnNpemUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJmZXRvdC1idXR0b24tY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjb25maXJtLWV2ZW50XCIsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZmV0b3QtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiJiN4RTgwODtcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmZXRvdC1idXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHNpemU6IF92bS5zaXplIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiZmV0b3QtYnV0dG9uLWNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY29uZmlybS1ldmVudFwiLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZmV0b3QtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiJiN4RTgwNztcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZldG90LWRhdGVcIiB9LCBbXG4gICAgX3ZtLl92KF92bS5fcyhfdm0uZHJhd0RhdGUpKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJpbnB1dC1jb250YWluZXJcIixcbiAgICB7IGF0dHJzOiB7IGRhdGE6IF92bS5zZXRJbnB1dENvbnRhaW5lckRhdGEgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidGV4dGFyZWEtY29tcG9uZW50XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdmFsdWU6IF92bS52YWx1ZSwgXCJvbi1mb2N1c1wiOiBfdm0ub25Gb2N1cyB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwidGV4dGFyZWEtZm9jdXNcIjogX3ZtLmZvY3VzSGFuZGxlcixcbiAgICAgICAgICBcInRleHRhcmVhLWJsdXJcIjogX3ZtLmJsdXJIYW5kbGVyLFxuICAgICAgICAgIFwidGV4dGFyZWEtaW5wdXRcIjogX3ZtLmlucHV0SGFuZGxlclxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImlucHV0LWNvbnRhaW5lclwiLCB7IGF0dHJzOiB7IGRhdGE6IF92bS5zZXRJbnB1dENvbnRhaW5lckRhdGEgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtY29tcG9uZW50IGJzXCIgfSxcbiAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJwclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWl0ZW0tbGFiZWwgYnI1MCBwYSBmY1wiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ubGlzdFR5cGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmlzTnVtID8gaW5kZXggKyAxIDogXCJcIikpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpc3QtY29tcG9uZW50LWl0ZW1cIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogdmFsdWUgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJibHVyLWV2ZW50XCI6IF92bS5ibHVyRXZlbnRIYW5kbGVyIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaW5wdXQtY29udGFpbmVyXCIsXG4gICAgeyBhdHRyczogeyBkYXRhOiBfdm0uc2V0SW5wdXRDb250YWluZXJEYXRhIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInRleHRhcmVhLWNvbXBvbmVudFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHZhbHVlOiBfdm0udmFsdWUsIFwib24tZm9jdXNcIjogX3ZtLm9uRm9jdXMgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInRleHRhcmVhLWZvY3VzXCI6IF92bS5mb2N1c0hhbmRsZXIsXG4gICAgICAgICAgXCJ0ZXh0YXJlYS1ibHVyXCI6IF92bS5ibHVySGFuZGxlcixcbiAgICAgICAgICBcInRleHRhcmVhLWlucHV0XCI6IF92bS5pbnB1dEhhbmRsZXJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0ZXh0YXJlYVwiLFxuICAgIHtcbiAgICAgIHJlZjogXCJ0ZXh0YXJlYVwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dGFyZWEtY29tcG9uZW50IHcxMDBcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICByZXR1cm4gX3ZtLmlucHV0SGFuZGxlcigkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwidGV4dGFyZWEtZm9jdXNcIilcbiAgICAgICAgfSxcbiAgICAgICAgYmx1cjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInRleHRhcmVhLWJsdXJcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdihfdm0uX3MoX3ZtLnZhbHVlKSldXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0LXRpdGxlLWNvbXBvbmVudFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IFwib24tZm9jdXNcIjogdHJ1ZSwgaW5wdXQ6IF92bS5pbnB1dCB9LFxuICAgICAgICBvbjogeyBcImlucHV0LXRpdGxlLWV2ZW50XCI6IF92bS5pbnB1dFRpdGxlRXZlbnRIYW5kbGVyIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQgYnNcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZmV0b3QtY29uZmlybS1idXR0b25zXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc2l6ZTogMTMyIH0sXG4gICAgICAgIG9uOiB7IFwiY29uZmlybS1ldmVudFwiOiBfdm0uY29uZmlybUV2ZW50SGFuZGxlciB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIgdzEwMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5mbyB3MTAwIGZhaWNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmZXRvdC1kYXRlXCIsIHsgYXR0cnM6IHsgZGF0ZTogX3ZtLm5vdGVEYXRlIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhdGVnb3J5XCIgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0LXRpdGxlLWNvbXBvbmVudFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGlucHV0OiBfdm0ubm90ZVRpdGxlIH0sXG4gICAgICAgIG9uOiB7IFwiaW5wdXQtdGl0bGUtZXZlbnRcIjogX3ZtLmlucHV0VGl0bGVFdmVudEhhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW1cIiB9LFxuICAgIFtcbiAgICAgIF92bS50eXBlID09PSBcInBhcmFncmFwaFwiXG4gICAgICAgID8gX2MoXCJwYXJhZ3JhcGgtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBfdm0uZGF0YSB9LFxuICAgICAgICAgICAgb246IHsgXCJibHVyLWV2ZW50XCI6IF92bS5wYXJhZ3JhcGhCbHVyRXZlbnRIYW5kbGVyIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS50eXBlID09PSBcIm51bS1saXN0XCJcbiAgICAgICAgPyBfYyhcImxpc3QtY29tcG9uZW50XCIsIHsgYXR0cnM6IHsgXCJpcy1udW1cIjogdHJ1ZSwgbGlzdDogX3ZtLmRhdGEgfSB9KVxuICAgICAgICA6IF92bS50eXBlID09PSBcIm1hcmstbGlzdFwiXG4gICAgICAgID8gX2MoXCJsaXN0LWNvbXBvbmVudFwiLCB7IGF0dHJzOiB7IFwiaXMtbnVtXCI6IGZhbHNlLCBsaXN0OiBfdm0uZGF0YSB9IH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlIHcxMDBcIiB9LFxuICAgIF92bS5fbChfdm0ubm90ZUNvbnRlbnQsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gX2MoXCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtXCIsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9XG4gICAgICB9KVxuICAgIH0pLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVzLWZyYW1lLWNvbnRlbnQgYnNcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZVwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZyYW1lLXRvb2xzXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdG9vbHM6IF92bS50b29scywgXCJpcy1hY3RpdmVcIjogX3ZtLmlzRnJhbWVUb29sc0FjdGl2ZSB9LFxuICAgICAgICBvbjogeyBcInRvb2xzLWl0ZW0tY2xpY2tcIjogX3ZtLnRvb2xzSXRlbUNsaWNrSGFuZGxlciB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImJsb2NrLWNvbnRhaW5lclwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIHRpdGxlOiBfdm0uYmxvY2sudGl0bGUsXG4gICAgICBcImlzLW1lbnUtb3BlblwiOiBfdm0uaXNNZW51T3BlbixcbiAgICAgIFwic2l6ZS10eXBlXCI6IF92bS5ibG9ja3NTaXplVHlwZSxcbiAgICAgIHBvc2l0aW9uOiBfdm0uYmxvY2tQb3NpdGlvblxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiYmxvY2stY29udGVudC1jbGlja1wiOiBfdm0uZWRpdE5vdGVFdmVudEhhbmRsZXIsXG4gICAgICBcIm9wZW4tbWVudS1ldmVudFwiOiBfdm0ub3Blbk1lbnVFdmVudEhhbmRsZXIsXG4gICAgICBcImNsb3NlLW1lbnUtZXZlbnRcIjogX3ZtLmNsb3NlTWVudUV2ZW50SGFuZGxlclxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJibG9jay1tZW51LWl0ZW1zXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLl9sKF92bS5tZW51SXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJtZW51LWl0ZW1cIiwge1xuICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgIG9uOiB7IFwibWVudS1pdGVtLWNsaWNrXCI6IF92bS5tZW51SXRlbUNsaWNrSGFuZGxlciB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiYmxvY2stY29udGVudFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRyYXdDb250ZW50KSB9IH0pXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImJsb2NrLWRhdGVcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbX2MoXCJmZXRvdC1kYXRlXCIsIHsgYXR0cnM6IHsgZGF0ZTogX3ZtLm5vdGVEYXRlIH0gfSldXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlXG4gICAgICB9XG4gICAgXSlcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwibW9kdWxlLWNvbnRhaW5lclwiLCB7XG4gICAgYXR0cnM6IHsgXCJoYXMtZnJhbWVcIjogX3ZtLmhhc0ZyYW1lLCBcInNpemUtdHlwZVwiOiBfdm0uY3VycmVudFNpemVUeXBlIH0sXG4gICAgb246IHtcbiAgICAgIFwiY3JlYXRlLWJsb2NrLWV2ZW50XCI6IF92bS5jcmVhdGVOb3RlRXZlbnRIYW5kbGVyLFxuICAgICAgXCJjaGFuZ2Utc2l6ZS10eXBlLWV2ZW50XCI6IF92bS5jaGFuZ2VTaXplVHlwZUV2ZW50SGFuZGxlclxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2R1bGUtZnJhbWVcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uaGFzRnJhbWVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZnJhbWUtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZS1zdGF0ZVwiOiBfdm0uZnJhbWVTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZnJhbWVPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IFwiY2xvc2UtZnJhbWUtZXZlbnRcIjogX3ZtLmNsb3NlRnJhbWVFdmVudEhhbmRsZXIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnRcIildLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2R1bGUtYmxvY2tzXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLl9sKF92bS5jdXJyZW50QmxvY2tzLCBmdW5jdGlvbihibG9jaywgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIm5vdGVzLWJsb2NrXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaW5kZXg6IGluZGV4LCBibG9jazogYmxvY2sgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTA1NTkwZTFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzMwZGVjY2FcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIwMjM5ZmNkXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Njc1MjllMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjlhN2YxYmM0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3NTI5ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3NTI5ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWY0OGVjNjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJmMjE3ZmNhOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZjQ4ZWM2NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWY0OGVjNjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjRhYmYyMjU2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOTVmYzc0ZDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDVjMmUzMDRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzODllNWRkNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFkMTQyNDFjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==