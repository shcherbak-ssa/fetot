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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'paragraph-component',

  data() {
    return {
      isActive: false,
      hasValue: false
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

    inputHandler({
      target
    }) {
      this.hasValue = target.value !== '';
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
    setInputContainerData() {
      return {
        icon: '&#xE824;',
        placeholder: 'Paragraph',
        isActive: this.isActive,
        hasValue: this.hasValue
      };
    }

  },

  mounted() {
    if (this.onFocus) this.$refs.textarea.focus();
    this.hasValue = this.text !== '';
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
/* harmony import */ var $fetot_services_true_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $fetot-services/true-type */ "./app/components/services/true-type.js");
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
    'paragraph-component': _form_components_paragraph_component_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  beforeMount() {
    switch ($fetot_services_true_type__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.item)) {
      case 'String':
        this.type = this.item[0] === 'p' ? 'paragraph' : '';
        this.data = this.item.slice(1);
        break;

      case 'Array':
        this.type = this.item[0] ? 'num-list' : 'mark-list';
        if (this.type === 'num-list') this.item.shift();
        this.data = this.item;
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'notes-frame-content-workspace',

  date() {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./build/app-page/components/modules/notes/view/form-components/paragraph-component.vue?vue&type=style&index=0&id=5a8a684e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* variables */\n/* mixins */\n/* components */\n/* functions */\n.input-container[data-v-5a8a684e] {\n  margin-bottom: 6px;\n  padding: 10px;\n}\n.fetot-input-icon[data-v-5a8a684e] {\n  font-size: 20px;\n}\n.ta[data-v-5a8a684e] {\n  resize: none;\n  background: transparent;\n  color: inherit;\n  display: block;\n  font: inherit;\n}\n", ""]);


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
  return _c("input-container", { attrs: { data: _vm.setInputContainerData } }, [
    _c(
      "textarea",
      {
        ref: "textarea",
        staticClass: "ta w100",
        on: {
          input: _vm.inputHandler,
          focus: _vm.focusHandler,
          blur: _vm.blurHandler
        }
      },
      [_vm._v(_vm._s(_vm.text))]
    )
  ])
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
        ? _c("paragraph-component", { attrs: { text: _vm.data } })
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
    [_c("notes-frame-content-workspace-item", { attrs: { item: "pText" } })],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9kcmF3LWJsb2NrLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3RydWUtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT8wOTU0Iiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzAzNDciLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWU/YzM4YSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT84NTgxIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1ZTIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/N2Q2MyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWU/ZDIxOCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2NjOWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT80ZjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2N1cnJlbnQtbm90ZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvY29tcG9uZW50cy9kcmF3LWJsb2NrLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtYmxvY2stbWVudS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtZnJhbWUtdG9vbHMtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT83ZWQwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT80MWU0Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT9iNzMwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlPzliN2QiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/ZGI4OCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ODg4OCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlPzZmYTMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT9mZjg2Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP2U5MTkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MjM4YyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT8wOTI4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT82YWE1Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/YzY1MSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT9jMTkxIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlPzAwYWQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP2U4ZTMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT9lMTc4Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/YmIyOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlPzhlY2QiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlPzFmZGUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlP2U1NWEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlP2U5ZTUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZT9lZmFhIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlPzdkNTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWU/ZGU5ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9tb2R1bGVzL25vdGVzLmpzIiwid2VicGFjazovLy9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLW1lbnUudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT8wYjJlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2M1MjAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9mYTBkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT82OGNiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZjNjNCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT8wMGJjIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/YWFmNCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2stbWVudS52dWU/OGE1OSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT82NDNhIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlPzc1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9mYTQ3Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT8xODEwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlPzI0OTIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT9mY2QzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlPzBhYTIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT84OTJjIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP2NjYTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT9lZjIwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZT9iNjhhIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWU/MzQ5OSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZT81N2I3Iiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzc1M2YiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/ZTU0MiIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2Q3NzAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlPzI4OWYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT81Y2IzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlPzkwOWIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT8zZDU0Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZT8xOGVlIl0sIm5hbWVzIjpbImxpc3RTdHlsZXMiLCJkcmF3QmxvY2siLCJjb250ZW50IiwiZ2V0UGFyYWdyYXBoIiwicGFyYWdyYXBoIiwiZ2V0TGlzdCIsImxpc3QiLCJnZXROdW1iZXJlZExpc3QiLCJnZXRNYXJrZWRMaXN0Iiwic2hpZnQiLCJwcmVwYXJpbmdMaXN0SXRlbXMiLCJtYXAiLCJpdGVtIiwiam9pbiIsImdldFRydWVUeXBlIiwid2hhdCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZ2V0Iiwic3RhdGUiLCJub3RlIiwidGl0bGUiLCJpbmZvIiwiZGF0ZSIsImdldHRlcnMiLCJtdXRhdGlvbnMiLCJVUERBVEUiLCJkYXRhIiwiVVBEQVRFX1ZBTFVFIiwia2V5IiwidmFsdWUiLCJVUERBVEVfSU5GT19WQUxVRSIsImFjdGlvbnMiLCJ1cGRhdGUiLCJjb250ZXh0IiwiY29tbWl0IiwidXBkYXRlVmFsdWUiLCJvcHRpb25zIiwidXBkYXRlSW5mb1ZhbHVlIiwiY3JlYXRlQ3VycmVudE5vdGVTdG9yZSIsIlN0b3JlV29ya2VyIiwiY3JlYXRlU3RvcmUiLCJkcmF3QmxvY2tDb250ZW50IiwicGFyc2VDb250ZW50SXRlbSIsImNvbnRlbnRJdGVtIiwidHJ1ZVR5cGUiLCJkcmF3QmxvY2tTZXJ2aWNlIiwiY3JlYXRlTm90ZU1vZGFsQ29uZmlnIiwibW9kYWxUeXBlIiwiaGVhZGVyIiwiaWNvbiIsImNvbnRlbnRDb21wb25lbnQiLCJub3RlTW9kYWxDb250ZW50Q29tcG9uZW50IiwiZm9vdGVyQ29tcG9uZW50Iiwibm90ZU1vZGFsRm9vdGVyQ29tcG9uZW50Iiwibm90ZXNNb2R1bGVDb25maWciLCJ2aWV3Iiwibm90ZXNNb2R1bGUiLCJpbml0Iiwibm90ZXNCbG9ja01lbnVTdG9yZSIsIml0ZW1zIiwibmFtZSIsImxhYmVsIiwibm90ZXNGcmFtZVRvb2xzU3RvcmUiLCJsYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBYTtBQUViOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxzQ0FBbkI7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LEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywrbUJBQWtWO0FBQ3hXLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsc0lBQXlFO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsNnJCQUFxWDtBQUMzWSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHlJQUE0RTtBQUM5RiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCtxQkFBOFc7QUFDcFksNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyx5SUFBNEU7QUFDOUYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxrcUJBQTJXO0FBQ2pZLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMseUlBQTRFO0FBQzlGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGluaXQgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBsaXN0U3R5bGVzID0gJ3BhZGRpbmctbGVmdDozMHB4O21hcmdpbi1ib3R0b206MTBweCc7XHJcblxyXG4vKioqIGluaXQgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBkcmF3QmxvY2sgPSB7XHJcblx0Y29udGVudDoge1xyXG5cdFx0Z2V0UGFyYWdyYXBoKHBhcmFncmFwaCkge1xyXG5cdFx0XHRyZXR1cm4gYDxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIj4ke3BhcmFncmFwaH08L3A+YFxyXG5cdFx0fSxcclxuXHRcdGdldExpc3QobGlzdCkge1xyXG5cdFx0XHRyZXR1cm4gKHR5cGVvZiBsaXN0WzBdID09PSAnYm9vbGVhbicgKVxyXG5cdFx0XHRcdD8gZ2V0TnVtYmVyZWRMaXN0KGxpc3QpIDogZ2V0TWFya2VkTGlzdChsaXN0KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGdldE51bWJlcmVkTGlzdChsaXN0KSB7XHJcblx0bGlzdC5zaGlmdCgpO1xyXG5cdHJldHVybiBgPG9sIHN0eWxlPVwiJHtsaXN0U3R5bGVzfVwiPiR7IHByZXBhcmluZ0xpc3RJdGVtcyhsaXN0KSB9PC9vbD5gXHJcbn1cclxuZnVuY3Rpb24gZ2V0TWFya2VkTGlzdChsaXN0KSB7XHJcblx0cmV0dXJuIGA8dWwgc3R5bGU9XCIke2xpc3RTdHlsZXN9XCI+JHsgcHJlcGFyaW5nTGlzdEl0ZW1zKGxpc3QpIH08L3VsPmBcclxufVxyXG5mdW5jdGlvbiBwcmVwYXJpbmdMaXN0SXRlbXMobGlzdCkge1xyXG5cdHJldHVybiBsaXN0Lm1hcCgoaXRlbSkgPT4gYDxsaSBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDVweDtcIj4ke2l0ZW19PC9saT5gKS5qb2luKCcnKVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmF3QmxvY2s7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gZ2V0VHJ1ZVR5cGUod2hhdCkge1xyXG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2hhdCkuc2xpY2UoOCwgLTEpXHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGdldDogZ2V0VHJ1ZVR5cGUgfTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTk4ZTIyOWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1OThlMjI5ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OThlMjI5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OThlMjI5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OThlMjI5ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1OThlMjI5ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OThlMjI5ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzViM2ViOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjNWIzZWI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjNWIzZWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjNWIzZWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNWIzZWI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNWIzZWI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNWIzZWI4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzc2ZThjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImE3NzZlOGM0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTc3NmU4YzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTc3NmU4YzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTc3NmU4YzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3NzZlOGM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E3NzZlOGM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzc2ZThjNCZzY29wZWQ9dHJ1ZSZcIiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG5cdG5vdGU6IHtcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdGNvbnRlbnQ6IFtdLFxyXG5cdFx0aW5mbzoge1xyXG5cdFx0XHRkYXRlOiAwXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZ2V0dGVycyA9IHtcclxuXHR0aXRsZShzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+IHN0YXRlLm5vdGUudGl0bGU7XHJcblx0fSxcclxuXHRjb250ZW50KHN0YXRlKSB7XHJcblx0XHRyZXR1cm4gKCkgPT4gc3RhdGUubm90ZS5jb250ZW50O1xyXG5cdH0sXHJcblx0ZGF0ZShzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+ICtzdGF0ZS5ub3RlLmluZm8uZGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBtdXRhdGlvbnMgPSB7XHJcblx0VVBEQVRFKHN0YXRlLCBkYXRhKSB7XHJcblx0XHRzdGF0ZS5ub3RlID0geyAuLi5kYXRhIH1cclxuXHR9LFxyXG5cdFVQREFURV9WQUxVRShzdGF0ZSwge2tleSwgdmFsdWV9KSB7XHJcblx0XHRzdGF0ZS5ub3RlW2tleV0gPSB2YWx1ZTtcclxuXHR9LFxyXG5cdFVQREFURV9JTkZPX1ZBTFVFKHN0YXRlLCB7a2V5LCB2YWx1ZX0pIHtcclxuXHRcdHN0YXRlLm5vdGUuaW5mb1trZXldID0gdmFsdWU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgYWN0aW9ucyA9IHtcclxuXHRhc3luYyB1cGRhdGUoY29udGV4dCwgZGF0YSkge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURScsIGRhdGEpXHJcblx0fSxcclxuXHRhc3luYyB1cGRhdGVWYWx1ZShjb250ZXh0LCBvcHRpb25zKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFX1ZBTFVFJywgb3B0aW9ucylcclxuXHR9LFxyXG5cdGFzeW5jIHVwZGF0ZUluZm9WYWx1ZShjb250ZXh0LCBvcHRpb25zKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFX0lORk9fVkFMVUUnLCBvcHRpb25zKVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogaW5pdCBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnROb3RlU3RvcmUoKSB7XHJcblx0U3RvcmVXb3JrZXIuY3JlYXRlU3RvcmUoJ2N1cnJlbnQtbm90ZScsIHsgc3RhdGUsIGdldHRlcnMsIG11dGF0aW9ucywgYWN0aW9ucyB9KVxyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IHtjcmVhdGVDdXJyZW50Tm90ZVN0b3JlfTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgdHJ1ZVR5cGUgZnJvbSAnJGZldG90LXNlcnZpY2VzL3RydWUtdHlwZSc7XHJcbmltcG9ydCBkcmF3QmxvY2tTZXJ2aWNlIGZyb20gJyRmZXRvdC1zZXJ2aWNlcy9kcmF3LWJsb2NrJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIGRyYXdCbG9ja0NvbnRlbnQoY29udGVudCkge1xyXG5cdHJldHVybiBjb250ZW50Lm1hcChwYXJzZUNvbnRlbnRJdGVtKS5qb2luKCcnKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBwYXJzZUNvbnRlbnRJdGVtKGNvbnRlbnRJdGVtKSB7XHJcblx0c3dpdGNoKCB0cnVlVHlwZS5nZXQoY29udGVudEl0ZW0pICkge1xyXG5cdFx0Y2FzZSAnU3RyaW5nJzpcclxuXHRcdFx0cmV0dXJuIGNvbnRlbnRJdGVtWzBdID09PSAncCdcclxuXHRcdFx0XHQ/IGRyYXdCbG9ja1NlcnZpY2UuY29udGVudC5nZXRQYXJhZ3JhcGgoY29udGVudEl0ZW0uc2xpY2UoMSkpIDogJyc7XHJcblx0XHRjYXNlICdBcnJheSc6XHJcblx0XHRcdHJldHVybiBkcmF3QmxvY2tTZXJ2aWNlLmNvbnRlbnQuZ2V0TGlzdChjb250ZW50SXRlbSlcclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYXdCbG9ja0NvbnRlbnQiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQge2RlZmF1bHR9IGZyb20gJy4vbm90ZXMnOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCB7Y3JlYXRlQ3VycmVudE5vdGVTdG9yZX0gZnJvbSAnLi9jb21wb25lbnRzL2N1cnJlbnQtbm90ZS1zdG9yZSc7XHJcblxyXG5pbXBvcnQgbm90ZXNNb2R1bGUgZnJvbSAnLi92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlJztcclxuXHJcbmltcG9ydCBub3RlTW9kYWxDb250ZW50Q29tcG9uZW50IGZyb20gJy4vdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBub3RlTW9kYWxGb290ZXJDb21wb25lbnQgZnJvbSAnLi92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBpbml0IFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgY3JlYXRlTm90ZU1vZGFsQ29uZmlnID0ge1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdG1vZGFsVHlwZTogJ2lzLXNtYWxsJyxcclxuXHRcdGhlYWRlcjogeyB0aXRsZTogJ05ldyBub3RlJywgaWNvbjogJyYjeEU4MEM7JyB9XHJcblx0fSxcclxuXHRjb250ZW50Q29tcG9uZW50OiBub3RlTW9kYWxDb250ZW50Q29tcG9uZW50LFxyXG5cdGZvb3RlckNvbXBvbmVudDogbm90ZU1vZGFsRm9vdGVyQ29tcG9uZW50XHJcbn07XHJcblxyXG4vKioqIGluaXQgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBub3Rlc01vZHVsZUNvbmZpZyA9IHtcclxuXHR2aWV3OiBub3Rlc01vZHVsZSxcclxuXHRjcmVhdGVOb3RlTW9kYWxDb25maWcsXHJcblx0XHJcblx0aW5pdCgpIHtcclxuXHRcdGNyZWF0ZUN1cnJlbnROb3RlU3RvcmUoKTtcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90ZXNNb2R1bGVDb25maWciLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBub3Rlc0Jsb2NrTWVudVN0b3JlID0ge1xyXG5cdGl0ZW1zOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdFZGl0IG5vdGUnLFxyXG5cdFx0XHRpY29uOiAnJiN4RTgxMTsnLFxyXG5cdFx0XHRsYWJlbDogJ2VkaXQnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnTW92ZSB0byBjYXRlZ29yeScsXHJcblx0XHRcdGljb246ICcmI3hGMjkyOycsXHJcblx0XHRcdGxhYmVsOiAnbW92ZS10by1jYXRlZ29yeSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdNb3ZlIHRvIGZvbGRlcicsXHJcblx0XHRcdGljb246ICcmI3hFODEzOycsXHJcblx0XHRcdGxhYmVsOiAnbW92ZS10by1mb2xkZXInXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnRGVsZXRlJyxcclxuXHRcdFx0aWNvbjogJyYjeEYxRjg7JyxcclxuXHRcdFx0bGFiZWw6ICdkZWxldGUnXHJcblx0XHR9XHJcblx0XVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzQmxvY2tNZW51U3RvcmU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNGcmFtZVRvb2xzU3RvcmUgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEU4MjQ7JyxcclxuXHRcdGxhYmVsOiAncGFyYWdyYXBoJyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hGMENCOycsXHJcblx0XHRsYWJlbDogJ251bS1saXN0J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYwQ0E7JyxcclxuXHRcdGxhYmVsOiAnbWFyay1saXN0JyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hFODAzOycsXHJcblx0XHRsYWJlbDogJ2ltYWdlJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYxNUM7JyxcclxuXHRcdGxhYmVsOiAnZmlsZSdcclxuXHR9XHJcbl07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90ZXNGcmFtZVRvb2xzU3RvcmU7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YThhNjg0ZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVhOGE2ODRlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWE4YTY4NGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWE4YTY4NGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWE4YTY4NGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOGE2ODRlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVhOGE2ODRlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhOGE2ODRlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOGE2ODRlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmI1MGNjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY2YjUwY2M0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZjZiNTBjYzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjZiNTBjYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjZiNTBjYzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2YjUwY2M0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y2YjUwY2M0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2YjUwY2M0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNTllMWU2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjM1OWUxZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjM1OWUxZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjM1OWUxZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjM1OWUxZTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjM1OWUxZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzU5ZTFlNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTA5NDAyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTA5NDAyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjVlMDk0MDJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNWUwOTQwMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNWUwOTQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNWUwOTQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTA5NDAyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI1ZTA5NDAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWUwOTQwMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZhODhmYmQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNmE4OGZiZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2YTg4ZmJkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2YTg4ZmJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2YTg4ZmJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNmE4OGZiZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNmE4OGZiZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2YTg4ZmJkJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjhkZWIxZGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImI4ZGViMWRhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjhkZWIxZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjhkZWIxZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjhkZWIxZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiOGRlYjFkYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAxYjNmY2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMDFiM2ZjYlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwMWIzZmNiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwMWIzZmNiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwMWIzZmNiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDFiM2ZjYiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMDFiM2ZjYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAxYjNmY2Imc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ4MGNiMmJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDgwY2IyYmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ODBjYjJiYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ODBjYjJiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ODBjYjJiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgwY2IyYmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDgwY2IyYmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay1tZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDgwY2IyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ODBjYjJiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2stbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgwY2IyYmMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNzlmYWU0YyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjc5ZmFlNGNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNzlmYWU0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNzlmYWU0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNzlmYWU0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3OWZhZTRjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y3OWZhZTRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjc5ZmFlNGMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLW1vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjgyZWVkMjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjgyZWVkMjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmODJlZWQyMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmODJlZWQyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmODJlZWQyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmODJlZWQyMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLW1vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2R1bGVzL25vdGVzJzsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZldG90LWJ1dHRvbiBicjNweCBjcCBmYyBwciBiZnItY2xpY2tcIlxyXG4gICAgICAgOnN0eWxlPVwic2V0QnV0dG9uU2l6ZVwiXHJcbiAgICAgICBAY2xpY2suc3RvcD1cIiRlbWl0KCdmZXRvdC1idXR0b24tY2xpY2snKVwiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHRuYW1lOiAnZmV0b3QtYnV0dG9uJyxcclxuICAgIHByb3BzOiB7XHJcbiAgXHRcdHNpemU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgXHRcdHNldEJ1dHRvblNpemUoKSB7XHJcbiAgXHRcdFx0cmV0dXJuIHsgd2lkdGg6IGAke3RoaXMuc2l6ZX1weGAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5mZXRvdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICBjb2xvcjogJGZldG90LWRhcmstYmx1ZTtcclxuICAgIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBAaW5jbHVkZSBzdGF0aWMtc2hhZG93O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgICBjb2xvcjogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtY29uZmlybS1idXR0b25zIGZsZXggdzEwMFwiPlxyXG4gICAgPGZldG90LWJ1dHRvbiA6c2l6ZT1cInNpemVcIiBAZmV0b3QtYnV0dG9uLWNsaWNrPVwiJGVtaXQoJ2NvbmZpcm0tZXZlbnQnLCBmYWxzZSlcIj5cclxuICAgICAgPGZldG90LWljb24gaWNvbj1cIiYjeEU4MDg7XCI+PC9mZXRvdC1pY29uPlxyXG4gICAgPC9mZXRvdC1idXR0b24+XHJcbiAgICA8ZmV0b3QtYnV0dG9uIDpzaXplPVwic2l6ZVwiIEBmZXRvdC1idXR0b24tY2xpY2s9XCIkZW1pdCgnY29uZmlybS1ldmVudCcsIHRydWUpXCI+XHJcbiAgICAgIDxmZXRvdC1pY29uIGljb249XCImI3hFODA3O1wiPjwvZmV0b3QtaWNvbj5cclxuICAgIDwvZmV0b3QtYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZmV0b3RJY29uIGZyb20gJy4uL2ljb25zL2ZldG90LWljb24udnVlJztcclxuICBpbXBvcnQgZmV0b3RCdXR0b24gZnJvbSAnLi9mZXRvdC1idXR0b24udnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2ZldG90LWNvbmZpcm0tYnV0dG9ucycsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRzaXplOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDk2XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1idXR0b24nOiBmZXRvdEJ1dHRvbixcclxuXHRcdFx0J2ZldG90LWljb24nOiBmZXRvdEljb24sXHJcblx0XHR9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWNvbmZpcm0tYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuZmV0b3QtYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtZGF0ZVwiPnt7IGRyYXdEYXRlIH19PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdmZXRvdC1kYXRlJyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGRhdGU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGRyYXdEYXRlKCkge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xyXG5cdFx0XHRcdHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LiR7ZGF0ZS5nZXRNb250aCgpICsgMX0uJHtkYXRlLmdldERhdGUoKX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWRhdGUge1xyXG4gICAgY29sb3I6ICRmZXRvdC1kYXJrLWdyYXk7XHJcbiAgICBmb250OiAxNHB4ICdyb2JvdG8tYm9sZCc7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQtY29udGFpbmVyIDpkYXRhPVwic2V0SW5wdXRDb250YWluZXJEYXRhXCI+XHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJ0YSB3MTAwXCJcclxuICAgICAgICAgICAgICByZWY9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgQGlucHV0PVwiaW5wdXRIYW5kbGVyXCJcclxuICAgICAgICAgICAgICBAZm9jdXM9XCJmb2N1c0hhbmRsZXJcIlxyXG4gICAgICAgICAgICAgIEBibHVyPVwiYmx1ckhhbmRsZXJcIj57eyB0ZXh0IH19PC90ZXh0YXJlYT5cclxuICA8L2lucHV0LWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGZldG90SW5wdXRJY29uIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvaWNvbnMvZmV0b3QtaW5wdXQtaWNvbi52dWUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAncGFyYWdyYXBoLWNvbXBvbmVudCcsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBoYXNWYWx1ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdHRleHQ6IFN0cmluZyxcclxuICAgICAgb25Gb2N1czoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2ZldG90LWlucHV0LWljb24nOiBmZXRvdElucHV0SWNvblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgZm9jdXNIYW5kbGVyKCkge1xyXG5cdCAgICBcdHRoaXMuaXNBY3RpdmUgPSB0cnVlXHJcbiAgICAgIH0sXHJcblx0XHRcdGJsdXJIYW5kbGVyKCkge1xyXG5cdCAgICBcdHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdwYXJhZ3JhcGgtYmx1cicsIHRoaXMudGV4dClcclxuICAgICAgfSxcclxuICAgICAgaW5wdXRIYW5kbGVyKHt0YXJnZXR9KSB7XHJcblx0ICAgIFx0dGhpcy5oYXNWYWx1ZSA9IHRhcmdldC52YWx1ZSAhPT0gJyc7XHJcblx0ICAgICAgdGhpcy50ZXh0YXJlYVJlc2l6ZSgpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyogc3JjICovXHJcbiAgICAgIHRleHRhcmVhUmVzaXplKCkge1xyXG4gICAgICBcdGNvbnN0IHRhID0gdGhpcy4kcmVmcy50ZXh0YXJlYTtcclxuXHJcbiAgICAgIFx0dGEuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdCAgICAgIHRhLnN0eWxlLmhlaWdodCA9IHRhLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdCAgICBzZXRJbnB1dENvbnRhaW5lckRhdGEoKSB7XHJcblx0XHQgICAgcmV0dXJuIHtcclxuXHRcdFx0ICAgIGljb246ICcmI3hFODI0OycsXHJcblx0XHRcdCAgICBwbGFjZWhvbGRlcjogJ1BhcmFncmFwaCcsXHJcblx0XHRcdCAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcclxuXHRcdFx0ICAgIGhhc1ZhbHVlOiB0aGlzLmhhc1ZhbHVlXHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuXHRcdFx0aWYoIHRoaXMub25Gb2N1cyApIHRoaXMuJHJlZnMudGV4dGFyZWEuZm9jdXMoKTtcclxuXHJcblx0XHRcdHRoaXMuaGFzVmFsdWUgPSB0aGlzLnRleHQgIT09ICcnO1xyXG5cdCAgICB0aGlzLnRleHRhcmVhUmVzaXplKCk7XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmZldG90LWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAudGEge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgQGluY2x1ZGUgZm9ybS1lbGVtZW50O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnRcIj5cclxuICAgIDxpbnB1dC10aXRsZS1jb21wb25lbnRcclxuICAgICAgICAgICAgOm9uLWZvY3VzPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIDppbnB1dD1cImlucHV0XCJcclxuICAgICAgICAgICAgQGlucHV0LXRpdGxlLWV2ZW50PVwiaW5wdXRUaXRsZUV2ZW50SGFuZGxlclwiPlxyXG4gICAgPC9pbnB1dC10aXRsZS1jb21wb25lbnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQnLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpbnB1dDoge1xyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBuZXcgbm90ZSB0aXRsZScsXHJcbiAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG5cdFx0XHRcdGN1cnJlbnROb3RlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdFx0XHRpbnB1dFRpdGxlRXZlbnRIYW5kbGVyKHZhbHVlKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50Tm90ZVN0b3JlLmFjdGlvbnMudXBkYXRlVmFsdWUoe2tleTogJ3RpdGxlJywgdmFsdWV9KVxyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50IGJzXCI+XHJcbiAgICA8ZmV0b3QtY29uZmlybS1idXR0b25zIDpzaXplPVwiMTMyXCIgQGNvbmZpcm0tZXZlbnQ9XCJjb25maXJtRXZlbnRIYW5kbGVyXCI+PC9mZXRvdC1jb25maXJtLWJ1dHRvbnM+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdENvbmZpcm1CdXR0b25zIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlJztcclxuXHRpbXBvcnQgZXZlbnRzRW1pdHRlcldvcmtlciBmcm9tICckZmV0b3QtZXZlbnRzLWVtaXR0ZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50JyxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J2ZldG90LWNvbmZpcm0tYnV0dG9ucyc6IGZldG90Q29uZmlybUJ1dHRvbnNcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNvbmZpcm1FdmVudEhhbmRsZXIobGFiZWwpIHtcclxuXHRcdFx0XHRldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ25vdGVzJykuZW1pdCgnY3JlYXRlLW5vdGUtY29uZmlybScsIGxhYmVsKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC5ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHcxMDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbmZvIHcxMDAgZmFpY1wiPlxyXG4gICAgICA8ZmV0b3QtZGF0ZSA6ZGF0ZT1cIm5vdGVEYXRlXCI+PC9mZXRvdC1kYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxpbnB1dC10aXRsZS1jb21wb25lbnRcclxuICAgICAgICAgICAgOmlucHV0PVwibm90ZVRpdGxlXCJcclxuICAgICAgICAgICAgQGlucHV0LXRpdGxlLWV2ZW50PVwiaW5wdXRUaXRsZUV2ZW50SGFuZGxlclwiPlxyXG4gICAgPC9pbnB1dC10aXRsZS1jb21wb25lbnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmZXRvdERhdGUgZnJvbSAnJGZldG90LXZpZXctY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZSc7XHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXInLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHQgICAgJ2ZldG90LWRhdGUnOiBmZXRvdERhdGVcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGlucHV0VGl0bGVFdmVudEhhbmRsZXIodmFsdWUpIHtcclxuXHQgICAgXHR0aGlzLmN1cnJlbnROb3RlU3RvcmUuYWN0aW9ucy51cGRhdGVWYWx1ZSh7IGtleTogJ3RpdGxlJywgdmFsdWUgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdG5vdGVEYXRlKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy5kYXRlKClcclxuICAgICAgfSxcclxuICAgICAgbm90ZVRpdGxlKCkge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ05vdGUgdGl0bGUnLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLnRpdGxlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG4gIC5pbmZvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbVwiPlxyXG4gICAgPHBhcmFncmFwaC1jb21wb25lbnQgdi1pZj1cInR5cGUgPT09ICdwYXJhZ3JhcGgnXCIgOnRleHQ9XCJkYXRhXCI+PC9wYXJhZ3JhcGgtY29tcG9uZW50PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcGFyYWdyYXBoQ29tcG9uZW50IGZyb20gJy4uL2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZSc7XHJcblx0aW1wb3J0IHRydWVUeXBlIGZyb20gJyRmZXRvdC1zZXJ2aWNlcy90cnVlLXR5cGUnO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbScsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHR5cGU6ICcnLFxyXG4gICAgICAgIGRhdGE6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG5cdFx0XHRpdGVtOiBbQXJyYXksIFN0cmluZ11cclxuICAgIH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdwYXJhZ3JhcGgtY29tcG9uZW50JzogcGFyYWdyYXBoQ29tcG9uZW50XHJcblx0XHR9LFxyXG4gICAgYmVmb3JlTW91bnQoKSB7XHJcblx0XHRcdHN3aXRjaCggdHJ1ZVR5cGUuZ2V0KHRoaXMuaXRlbSkgKSB7XHJcblx0XHRcdFx0Y2FzZSAnU3RyaW5nJzpcclxuXHRcdFx0XHRcdHRoaXMudHlwZSA9IHRoaXMuaXRlbVswXSA9PT0gJ3AnID8gJ3BhcmFncmFwaCcgOiAnJztcclxuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuaXRlbS5zbGljZSgxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0FycmF5JzpcclxuICAgICAgICBcdHRoaXMudHlwZSA9IHRoaXMuaXRlbVswXSA/ICdudW0tbGlzdCcgOiAnbWFyay1saXN0JztcclxuICAgICAgICBcdGlmKCB0aGlzLnR5cGUgPT09ICdudW0tbGlzdCcgKSB0aGlzLml0ZW0uc2hpZnQoKTtcclxuXHJcbiAgICAgICAgXHR0aGlzLmRhdGEgPSB0aGlzLml0ZW07XHJcblx0XHRcdH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZSB3MTAwXCI+XHJcbiAgICA8bm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbSBpdGVtPVwicFRleHRcIj48L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBub3Rlc0ZyYW1lQ29udGVudFdvcmtzcGFjZUl0ZW0gZnJvbSAnLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZSc7XHJcbiAgaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UnLFxyXG4gICAgZGF0ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0nOiBub3Rlc0ZyYW1lQ29udGVudFdvcmtzcGFjZUl0ZW1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdFx0XHRub3RlQ29udGVudCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmdldHRlcnMuY29udGVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZyYW1lLWNvbnRlbnQgYnNcIj5cclxuICAgIDxub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlcj48L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyPlxyXG4gICAgPG5vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlPjwvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2U+XHJcblxyXG4gICAgPGZyYW1lLXRvb2xzXHJcbiAgICAgICAgICAgIDp0b29scz1cInRvb2xzXCJcclxuICAgICAgICAgICAgOmlzLWFjdGl2ZT1cImlzRnJhbWVUb29sc0FjdGl2ZVwiXHJcbiAgICAgICAgICAgIEB0b29scy1pdGVtLWNsaWNrPVwidG9vbHNJdGVtQ2xpY2tIYW5kbGVyXCI+XHJcbiAgICA8L2ZyYW1lLXRvb2xzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbm90ZXNGcmFtZUNvbnRlbnRIZWFkZXIgZnJvbSAnLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWUnO1xyXG4gIGltcG9ydCBub3Rlc0ZyYW1lQ29udGVudFdvcmtzcGFjZSBmcm9tICcuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZSc7XHJcblxyXG4gIGltcG9ydCBub3Rlc0ZyYW1lVG9vbHNTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9ub3Rlcy1mcmFtZS10b29scy1zdG9yZSc7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1mcmFtZS1jb250ZW50JyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNGcmFtZVRvb2xzQWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0XHR0b29sczogbm90ZXNGcmFtZVRvb2xzU3RvcmVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyJzogbm90ZXNGcmFtZUNvbnRlbnRIZWFkZXIsXHJcbiAgICAgICdub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZSc6IG5vdGVzRnJhbWVDb250ZW50V29ya3NwYWNlXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICB0b29sc0l0ZW1DbGlja0hhbmRsZXIobGFiZWwpIHtcclxuXHQgICAgXHRjb25zb2xlLmxvZygndG9vbHMnLCBsYWJlbClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAubm90ZXMtZnJhbWUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDk2cHggNDJweDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxtZW51LWNvbnRhaW5lciBAY2xvc2UtbWVudS1ldmVudD1cIiRlbWl0KCdjbG9zZS1tZW51LWV2ZW50JylcIj5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bWVudS10aXRsZT57eyB0aXRsZSB9fTwvdGVtcGxhdGU+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDptZW51LWl0ZW1zPlxyXG4gICAgICA8bWVudS1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBtZW51SXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiIDppdGVtPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgQG1lbnUtaXRlbS1jbGljaz1cIm1lbnVJdGVtQ2xpY2tIYW5kbGVyXCI+XHJcbiAgICAgIDwvbWVudS1pdGVtPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICA8L21lbnUtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbm90ZXNCbG9ja01lbnVTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9ub3Rlcy1ibG9jay1tZW51LXN0b3JlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWJsb2NrLW1lbnUnLFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0dGl0bGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgbWVudUl0ZW1DbGlja0hhbmRsZXIoaXRlbSkge1xyXG5cdCAgICBcdGNvbnNvbGUubG9nKCdtZW51LWl0ZW0tY2xpY2snLCBpdGVtKVxyXG4gICAgICB9LFxyXG5cdCAgICBtZW51Q2xvc2VFdmVudEhhbmRsZXIoKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0bWVudUl0ZW1zKCkge1xyXG5cdFx0XHRcdHJldHVybiBub3Rlc0Jsb2NrTWVudVN0b3JlLml0ZW1zXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGJsb2NrLWNvbnRhaW5lclxyXG4gICAgICAgICAgQGJsb2NrLWNvbnRlbnQtY2xpY2s9XCJibG9ja0NvbnRlbnRDbGlja0hhbmRsZXJcIlxyXG4gICAgICAgICAgQG9wZW4tbWVudS1ldmVudD1cIm9wZW5NZW51RXZlbnRIYW5kbGVyXCI+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpibG9jay10aXRsZT57eyBibG9jay50aXRsZSB9fTwvdGVtcGxhdGU+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpibG9jay1tZW51IHYtaWY9XCJpc01lbnVPcGVuXCI+XHJcbiAgICAgIDxub3Rlcy1ibG9jay1tZW51IDp0aXRsZT1cImJsb2NrLnRpdGxlXCIgQGNsb3NlLW1lbnUtZXZlbnQ9XCJjbG9zZU1lbnVFdmVudEhhbmRsZXJcIj48L25vdGVzLWJsb2NrLW1lbnU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmxvY2stY29udGVudD5cclxuICAgICAgPGRpdiB2LWh0bWw9XCJkcmF3Q29udGVudFwiPjwvZGl2PlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OmJsb2NrLWRhdGU+XHJcbiAgICAgIDxmZXRvdC1kYXRlIDpkYXRlPVwibm90ZURhdGVcIj48L2ZldG90LWRhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Jsb2NrLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGZldG90RGF0ZSBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlJztcclxuICBpbXBvcnQgbm90ZXNCbG9ja01lbnUgZnJvbSAnLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZSc7XHJcblxyXG4gIGltcG9ydCBkcmF3QmxvY2tDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZHJhdy1ibG9jay1jb250ZW50JztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWJsb2NrJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNNZW51T3BlbjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGJsb2NrOiBPYmplY3RcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1kYXRlJzogZmV0b3REYXRlLFxyXG4gICAgICAnbm90ZXMtYmxvY2stbWVudSc6IG5vdGVzQmxvY2tNZW51XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0ZHJhd0NvbnRlbnQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRyYXdCbG9ja0NvbnRlbnQodGhpcy5ibG9jay5jb250ZW50KVxyXG4gICAgICB9LFxyXG4gICAgICBub3RlRGF0ZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ibG9jay5pbmZvLmRhdGVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgLyogbWVudSAqL1xyXG5cdFx0XHRvcGVuTWVudUV2ZW50SGFuZGxlcigpIHtcclxuXHQgICAgXHRjb25zb2xlLmxvZygnb3Blbi1tZW51LWV2ZW50Jyk7XHJcblx0ICAgIFx0dGhpcy5pc01lbnVPcGVuID0gdHJ1ZTtcclxuICAgICAgfSxcclxuXHQgICAgY2xvc2VNZW51RXZlbnRIYW5kbGVyKCkge1xyXG5cdFx0ICAgIGNvbnNvbGUubG9nKCdjbG9zZS1tZW51LWV2ZW50Jyk7XHJcblx0XHQgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcblxyXG5cdCAgICBibG9ja0NvbnRlbnRDbGlja0hhbmRsZXIoKSB7XHJcblx0ICAgIFx0Y29uc29sZS5sb2coJ2Jsb2NrLWNvbnRlbnQtY2xpY2staGFuZGxlcicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxtb2R1bGUtY29udGFpbmVyIDpoYXMtZnJhbWU9XCJoYXNGcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmZyYW1lLW9wdGlvbnM9XCJmcmFtZU9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbG9zZS1mcmFtZS1ldmVudD1cImNsb3NlRnJhbWVFdmVudEhhbmRsZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjcmVhdGUtYmxvY2stZXZlbnQ9XCJjcmVhdGVOb3RlRXZlbnRIYW5kbGVyXCI+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDptb2R1bGUtZnJhbWUtY29udGVudD5cclxuICAgICAgPG5vdGVzLWZyYW1lLWNvbnRlbnQ+PC9ub3Rlcy1mcmFtZS1jb250ZW50PlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1vZHVsZS1ibG9ja3M+XHJcbiAgICAgIDxub3Rlcy1ibG9jayB2LWZvcj1cIihibG9jaywgaW5kZXgpIGluIGN1cnJlbnRCbG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCIgOmJsb2NrPVwiYmxvY2tcIj5cclxuICAgICAgPC9ub3Rlcy1ibG9jaz5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgPC9tb2R1bGUtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgbm90ZXNGcmFtZUNvbnRlbnQgZnJvbSAnLi4vbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZSc7XHJcbiAgaW1wb3J0IG5vdGVzQmxvY2sgZnJvbSAnLi9ub3Rlcy1ibG9jay52dWUnXHJcblxyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuICBpbXBvcnQgZXZlbnRzRW1pdHRlcldvcmtlciBmcm9tICckZmV0b3QtZXZlbnRzLWVtaXR0ZXInO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbm90ZXMtbW9kdWxlJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aGFzRnJhbWU6IGZhbHNlLFxyXG5cclxuICAgICAgICBjdXJyZW50TW9kdWxlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW1vZHVsZScpLFxyXG4gICAgICAgIGN1cnJlbnROb3RlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKSxcclxuXHJcbiAgICAgICAgYXBwRXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdhcHAnKSxcclxuICAgICAgICBub3Rlc0V2ZW50c0VtaXR0ZXI6IGV2ZW50c0VtaXR0ZXJXb3JrZXIuZ2V0RW1pdHRlcignbm90ZXMnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnbm90ZXMtZnJhbWUtY29udGVudCc6IG5vdGVzRnJhbWVDb250ZW50LFxyXG5cdFx0XHQnbm90ZXMtYmxvY2snOiBub3Rlc0Jsb2NrXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdFx0XHQvKiBjcmVhdGUgbm90ZSAqL1xyXG5cdCAgICBjcmVhdGVOb3RlRXZlbnRIYW5kbGVyKCkge1xyXG5cdCAgICBcdHRoaXMuYXBwRXZlbnRzRW1pdHRlci5lbWl0KFxyXG5cdCAgICBcdFx0J29wZW4tbW9kYWwtZXZlbnQnLFxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50TW9kdWxlU3RvcmUuc3RhdGUuY29uZmlnLmNyZWF0ZU5vdGVNb2RhbENvbmZpZ1xyXG4gICAgICAgICk7XHJcblx0ICAgIFx0dGhpcy5ub3Rlc0V2ZW50c0VtaXR0ZXIub24oXHJcblx0ICAgIFx0XHQnY3JlYXRlLW5vdGUtY29uZmlybScsXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZU5vdGVDb25maXJtSGFuZGxlclxyXG4gICAgICAgIClcclxuICAgICAgfSxcclxuXHQgICAgY3JlYXRlTm90ZUNvbmZpcm1IYW5kbGVyKGxhYmVsKSB7XHJcblx0ICAgIFx0aWYoIGxhYmVsICkge1xyXG5cdFx0XHQgICAgdGhpcy5jdXJyZW50Tm90ZVN0b3JlLmFjdGlvbnMudXBkYXRlSW5mb1ZhbHVlKHsga2V5OiAnZGF0ZScsIHZhbHVlOiBuZXcgRGF0ZSgpIH0pO1xyXG5cdFx0XHQgICAgdGhpcy5vcGVuRnJhbWVIYW5kbGVyKCk7XHJcblx0XHQgICAgfVxyXG5cclxuXHQgICAgICB0aGlzLmFwcEV2ZW50c0VtaXR0ZXIuZW1pdCgnY2xvc2UtbW9kYWwtZXZlbnQnKTtcclxuXHQgICAgXHR0aGlzLm5vdGVzRXZlbnRzRW1pdHRlci5yZW1vdmUoJ2NyZWF0ZS1ub3RlLWNvbmZpcm0nLCB0aGlzLmNyZWF0ZU5vdGVDb25maXJtSGFuZGxlcik7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvKiBmcmFtZSAqL1xyXG4gICAgICBvcGVuRnJhbWVIYW5kbGVyKCkge1xyXG4gICAgICBcdHRoaXMuaGFzRnJhbWUgPSB0cnVlO1xyXG4gICAgICB9LFxyXG5cdCAgICBjbG9zZUZyYW1lRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICBcdHRoaXMuaGFzRnJhbWUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGN1cnJlbnRCbG9ja3MoKSB7XHJcblx0XHRcdFx0cmV0dXJuIFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LWJsb2NrcycpLmdldHRlcnMuZ2V0TGlrZUFycmF5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZyYW1lT3B0aW9ucygpIHtcclxuXHRcdFx0XHRjb25zdCB0aXRsZSA9IHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLnRpdGxlKCk7XHJcblx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyOiB7IHRpdGxlLCBpY29uOiAnJiN4RTgwQzsnIH0gfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkKCkge1xyXG5cdFx0XHRTdG9yZVdvcmtlci5yZW1vdmVTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmZldG90LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUY1O1xcbiAgY29sb3I6ICMwMDQ0NjY7XFxuICBmb250OiAxOHB4ICdyb2JvdG8tbWVkaXVtJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogNDJweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoNTcsIDYyLCA3MCwgMC40KTtcXG59XFxuLmZldG90LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDQ0NjY7XFxuICAgIGNvbG9yOiAjRjFGMUY1O1xcbn1cXG4uZmV0b3QtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uZmV0b3QtY29uZmlybS1idXR0b25zIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZmV0b3QtY29uZmlybS1idXR0b25zIC5mZXRvdC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5mZXRvdC1kYXRlW2RhdGEtdi1hNzc2ZThjNF0ge1xcbiAgY29sb3I6ICMzOTNFNDY7XFxuICBmb250OiAxNHB4ICdyb2JvdG8tYm9sZCc7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uaW5wdXQtY29udGFpbmVyW2RhdGEtdi01YThhNjg0ZV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmZldG90LWlucHV0LWljb25bZGF0YS12LTVhOGE2ODRlXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi50YVtkYXRhLXYtNWE4YTY4NGVdIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyW2RhdGEtdi0yNWUwOTQwMl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLmluZm9bZGF0YS12LTI1ZTA5NDAyXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLm5vdGVzLWZyYW1lLWNvbnRlbnRbZGF0YS12LTIwMWIzZmNiXSB7XFxuICBwYWRkaW5nOiAyNHB4IDk2cHggNDJweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcblwiLCBcIlwiXSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmV0b3QtYnV0dG9uIGJyM3B4IGNwIGZjIHByIGJmci1jbGlja1wiLFxuICAgICAgc3R5bGU6IF92bS5zZXRCdXR0b25TaXplLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJmZXRvdC1idXR0b24tY2xpY2tcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImZldG90LWNvbmZpcm0tYnV0dG9ucyBmbGV4IHcxMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImZldG90LWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgc2l6ZTogX3ZtLnNpemUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJmZXRvdC1idXR0b24tY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjb25maXJtLWV2ZW50XCIsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZmV0b3QtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiJiN4RTgwODtcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmZXRvdC1idXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHNpemU6IF92bS5zaXplIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiZmV0b3QtYnV0dG9uLWNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY29uZmlybS1ldmVudFwiLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZmV0b3QtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiJiN4RTgwNztcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZldG90LWRhdGVcIiB9LCBbXG4gICAgX3ZtLl92KF92bS5fcyhfdm0uZHJhd0RhdGUpKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJpbnB1dC1jb250YWluZXJcIiwgeyBhdHRyczogeyBkYXRhOiBfdm0uc2V0SW5wdXRDb250YWluZXJEYXRhIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJ0ZXh0YXJlYVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwidGV4dGFyZWFcIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidGEgdzEwMFwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBfdm0uaW5wdXRIYW5kbGVyLFxuICAgICAgICAgIGZvY3VzOiBfdm0uZm9jdXNIYW5kbGVyLFxuICAgICAgICAgIGJsdXI6IF92bS5ibHVySGFuZGxlclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRleHQpKV1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dC10aXRsZS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyBcIm9uLWZvY3VzXCI6IHRydWUsIGlucHV0OiBfdm0uaW5wdXQgfSxcbiAgICAgICAgb246IHsgXCJpbnB1dC10aXRsZS1ldmVudFwiOiBfdm0uaW5wdXRUaXRsZUV2ZW50SGFuZGxlciB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50IGJzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImZldG90LWNvbmZpcm0tYnV0dG9uc1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNpemU6IDEzMiB9LFxuICAgICAgICBvbjogeyBcImNvbmZpcm0tZXZlbnRcIjogX3ZtLmNvbmZpcm1FdmVudEhhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHcxMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8gdzEwMCBmYWljXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmV0b3QtZGF0ZVwiLCB7IGF0dHJzOiB7IGRhdGU6IF92bS5ub3RlRGF0ZSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXRlZ29yeVwiIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dC10aXRsZS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyBpbnB1dDogX3ZtLm5vdGVUaXRsZSB9LFxuICAgICAgICBvbjogeyBcImlucHV0LXRpdGxlLWV2ZW50XCI6IF92bS5pbnB1dFRpdGxlRXZlbnRIYW5kbGVyIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtXCIgfSxcbiAgICBbXG4gICAgICBfdm0udHlwZSA9PT0gXCJwYXJhZ3JhcGhcIlxuICAgICAgICA/IF9jKFwicGFyYWdyYXBoLWNvbXBvbmVudFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5kYXRhIH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UgdzEwMFwiIH0sXG4gICAgW19jKFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbVwiLCB7IGF0dHJzOiB7IGl0ZW06IFwicFRleHRcIiB9IH0pXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50IGJzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2VcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmcmFtZS10b29sc1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvb2xzOiBfdm0udG9vbHMsIFwiaXMtYWN0aXZlXCI6IF92bS5pc0ZyYW1lVG9vbHNBY3RpdmUgfSxcbiAgICAgICAgb246IHsgXCJ0b29scy1pdGVtLWNsaWNrXCI6IF92bS50b29sc0l0ZW1DbGlja0hhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJtZW51LWNvbnRhaW5lclwiLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xvc2UtbWVudS1ldmVudFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlLW1lbnUtZXZlbnRcIilcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibWVudS10aXRsZVwiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1lbnUtaXRlbXNcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdm0uX2woX3ZtLm1lbnVJdGVtcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIm1lbnUtaXRlbVwiLCB7XG4gICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfSxcbiAgICAgICAgICAgICAgb246IHsgXCJtZW51LWl0ZW0tY2xpY2tcIjogX3ZtLm1lbnVJdGVtQ2xpY2tIYW5kbGVyIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH1cbiAgICBdKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJibG9jay1jb250YWluZXJcIiwge1xuICAgIG9uOiB7XG4gICAgICBcImJsb2NrLWNvbnRlbnQtY2xpY2tcIjogX3ZtLmJsb2NrQ29udGVudENsaWNrSGFuZGxlcixcbiAgICAgIFwib3Blbi1tZW51LWV2ZW50XCI6IF92bS5vcGVuTWVudUV2ZW50SGFuZGxlclxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJibG9jay10aXRsZVwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbX3ZtLl92KF92bS5fcyhfdm0uYmxvY2sudGl0bGUpKV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF92bS5pc01lbnVPcGVuXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGtleTogXCJibG9jay1tZW51XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJub3Rlcy1ibG9jay1tZW51XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5ibG9jay50aXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBcImNsb3NlLW1lbnUtZXZlbnRcIjogX3ZtLmNsb3NlTWVudUV2ZW50SGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYmxvY2stY29udGVudFwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRyYXdDb250ZW50KSB9IH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImJsb2NrLWRhdGVcIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW19jKFwiZmV0b3QtZGF0ZVwiLCB7IGF0dHJzOiB7IGRhdGU6IF92bS5ub3RlRGF0ZSB9IH0pXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG51bGwsXG4gICAgICB0cnVlXG4gICAgKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJtb2R1bGUtY29udGFpbmVyXCIsIHtcbiAgICBhdHRyczogeyBcImhhcy1mcmFtZVwiOiBfdm0uaGFzRnJhbWUsIFwiZnJhbWUtb3B0aW9uc1wiOiBfdm0uZnJhbWVPcHRpb25zIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2UtZnJhbWUtZXZlbnRcIjogX3ZtLmNsb3NlRnJhbWVFdmVudEhhbmRsZXIsXG4gICAgICBcImNyZWF0ZS1ibG9jay1ldmVudFwiOiBfdm0uY3JlYXRlTm90ZUV2ZW50SGFuZGxlclxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2R1bGUtZnJhbWUtY29udGVudFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnRcIildXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kdWxlLWJsb2Nrc1wiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5fbChfdm0uY3VycmVudEJsb2NrcywgZnVuY3Rpb24oYmxvY2ssIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJub3Rlcy1ibG9ja1wiLCB7IGtleTogaW5kZXgsIGF0dHJzOiB7IGJsb2NrOiBibG9jayB9IH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH1cbiAgICBdKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjUwNTU5MGUxXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjczMGRlY2NhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyMDIzOWZjZFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YWJmMjI1NlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhOGE2ODRlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhOGE2ODRlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ1YzJlMzA0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTA5NDAyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMzg5ZTVkZDZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTA5NDAyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxZDE0MjQxY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwMWIzZmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwMWIzZmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLW1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDgwY2IyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyYmFjNTJjYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1ibG9jay1tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4MGNiMmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=