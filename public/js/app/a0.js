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
    id: 0,
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
      id: 0,
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

/***/ "./build/app-page/components/workers/blocks-positions-worker.js":
/*!**********************************************************************!*\
  !*** ./build/app-page/components/workers/blocks-positions-worker.js ***!
  \**********************************************************************/
/*! exports provided: blocksPositions, updateBlocksPositions, removeBlocksPositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocksPositions", function() { return blocksPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlocksPositions", function() { return updateBlocksPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlocksPositions", function() { return removeBlocksPositions; });
/* harmony import */ var $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-store-worker */ "./app/components/workers/store-worker.js");

/*
*   current module use when screen width < 1280px
*
*   block width - 360px
*   margin size - 24px
*
* */

/*** imports [begin] ***/


/*** imports [end] ***/

/*** init [begin] ***/

const currentModuleStore = $fetot_store_worker__WEBPACK_IMPORTED_MODULE_0__["default"].getStore('current-module');
let blocksPositions = null;
/*** init [end] ***/

/*** exports [begin] ***/

function removeBlocksPositions() {
  blocksPositions = null;
}

function updateBlocksPositions() {
  const blocksCount = currentModuleStore.getters.settingsByKey('blocksCount');
  const blocksHeight = getCurrentBlockHeightByCurrentBlockSizeType(currentModuleStore.getters.settingsByKey('blocksSizeType')); // console.log('blocks-count:', blocksCount);
  // console.log('blocks-height:', blocksHeight);

  const blocksConfigs = getBlocksConfigs(blocksCount);
  const topPositionIncrement = blocksHeight === undefined ? undefined : blocksHeight + 24; // console.log('blocks-config:', blocksConfigs);
  // console.log('topPositionIncrement:', topPositionIncrement);

  const blocksPositionsList = new Array(blocksCount + 1);
  blocksConfigs.forEach(({
    left,
    indexList
  }) => {
    indexList.forEach((index, i) => {
      blocksPositionsList[index] = {
        left: left + 'px',
        top: topPositionIncrement * i + 'px'
      }; // just do it
    });
  });
  blocksPositions = blocksPositionsList;
}
/*** exports [end] ***/

/*** src [begin] ***/


function getCurrentBlockHeightByCurrentBlockSizeType(sizeType) {
  return [222, // is-normal
  122, // is-small
  80 // is-list
  ][sizeType];
}

function getBlocksConfigs(blocksCount) {
  const remains = blocksCount % 3;
  const full = (blocksCount - remains) / 3;
  const optionalParams = remains !== 0 && remains === 1 ? [1] : [1, 1];
  return preparingBlocksConfig(full, ...optionalParams);
}
/* preparing blocks configs */


function preparingBlocksConfig(full, leftSideRemain = 0, centerRemain = 0) {
  return [preparingLeftSideBlocksConfig(full + leftSideRemain), preparingCenterBlocksConfig(full + centerRemain), preparingRightSideBlocksConfig(full)];
}

function preparingLeftSideBlocksConfig(count) {
  return {
    left: 0,
    indexList: createIndexList(count, 1)
  };
}

function preparingCenterBlocksConfig(count) {
  return {
    left: 384,
    indexList: createIndexList(count, 2)
  };
}

function preparingRightSideBlocksConfig(count) {
  return {
    left: 768,
    indexList: createIndexList(count, 3)
  };
}
/* create index list */


function createIndexList(count, number) {
  const indexList = [];

  for (let i = 0; i < count; i += 1) indexList[i] = 3 * i + number;

  return indexList;
}
/*** src [end] ***/




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
/* harmony import */ var _workers_blocks_positions_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../workers/blocks-positions-worker */ "./build/app-page/components/workers/blocks-positions-worker.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      currentNoteStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-note'),
      currentModuleStore: $fetot_store_worker__WEBPACK_IMPORTED_MODULE_2__["default"].getStore('current-module'),
      notesEventsEmitter: $fetot_events_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].getEmitter('notes')
    };
  },

  props: {
    block: Object
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
      if (_workers_blocks_positions_worker__WEBPACK_IMPORTED_MODULE_5__["blocksPositions"] === null) return {};
      const positions = this.currentModuleStore.getters.positions();
      const currentBlockPositionIndex = positions.findIndex(item => item === this.block.id);
      return _workers_blocks_positions_worker__WEBPACK_IMPORTED_MODULE_5__["blocksPositions"][currentBlockPositionIndex + 1];
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
    },

    closeMenuEventHandler() {
      this.isMenuOpen = false;
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
/* harmony import */ var _workers_blocks_positions_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../workers/blocks-positions-worker */ "./build/app-page/components/workers/blocks-positions-worker.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        value: 2
      });
    },

    closeFrameEventHandler(toSaveNote = true) {
      this.hasFrame = false;
      this.currentModuleStore.actions.updateSettingsByKey({
        key: 'blocksSizeType',
        value: this.lastBlocksSizeType
      });
      if (!toSaveNote) return;

      if (this.currentFrameIsForCreate) {
        const currentNote = this.currentNoteStore.getters.note();
        this.currentBlocksStore.actions.createBlock(currentNote);
      }

      this.currentFrameIsForCreate = false;
    },

    /* note handlers */
    async editNoteEventHandler() {
      this.openFrameHandler();
    },

    async deleteNoteEventHandler(id) {
      await this.currentBlocksStore.actions.deleteBlock(id);
    }

  },
  computed: {
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
    this.pageStore.state.documentWidth < 1280 ? Object(_workers_blocks_positions_worker__WEBPACK_IMPORTED_MODULE_4__["removeBlocksPositions"])() : Object(_workers_blocks_positions_worker__WEBPACK_IMPORTED_MODULE_4__["updateBlocksPositions"])();
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
    attrs: { "has-frame": _vm.hasFrame },
    on: { "create-block-event": _vm.createNoteEventHandler },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9kcmF3LWJsb2NrLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3RydWUtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT8wOTU0Iiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1idXR0b24udnVlPzAzNDciLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWU/YzM4YSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT84NTgxIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2U1ZTIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/N2Q2MyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWU/ZDIxOCIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlP2NjOWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT80ZjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2N1cnJlbnQtbm90ZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvY29tcG9uZW50cy9kcmF3LWJsb2NrLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtYmxvY2stbWVudS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvc3RvcmUvbm90ZXMtZnJhbWUtdG9vbHMtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT82NGVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9kNzM2Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT9mZDBiIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LnZ1ZT83NjFmIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/MGExNyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQudnVlPzkwNjYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT83ZWQwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT80MWU0Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT9iNzMwIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LW1peGluLmpzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9zcmMvdGV4dGFyZWEtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/ODA1OSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/MWYwZCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/OGRjZCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT85YjdkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP2RiODgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlPzg4ODgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT82ZmEzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/ZmY4NiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT9lOTE5Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlPzIzOGMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MDkyOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/NmFhNSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP2M2NTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/YzE5MSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT8wMGFkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT9lOGUzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWU/ZTE3OCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP2JiMjgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlP2U5ZTUiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZT9lZmFhIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlPzdkNTEiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLW1vZHVsZS52dWU/ZGU5ZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL3dvcmtlcnMvYmxvY2tzLXBvc2l0aW9ucy13b3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvbW9kdWxlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlIiwid2VicGFjazovLy9hcHAvdmlldy9jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3NyYy90ZXh0YXJlYS1jb21wb25lbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtYmxvY2sudnVlIiwid2VicGFjazovLy9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZT8wYjJlIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP2M1MjAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9lbGVtZW50cy9mZXRvdC1kYXRlLnZ1ZT9mYTBkIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT8yOGY0Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWU/MTM4MyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/NjhjYiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvc3JjL3RleHRhcmVhLWNvbXBvbmVudC52dWU/OTNmOCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP2YzYzQiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MDBiYyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP2FhZjQiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWU/NjQzYSIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT83NWNkIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWU/ZmE0NyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQtaXRlbS52dWU/ZWU2MyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQudnVlP2M1YjMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlPzE4MTAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3NyYy90ZXh0YXJlYS1jb21wb25lbnQudnVlPzNiYTgiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/MjQ5MiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP2ZjZDMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/MGFhMiIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlPzg5MmMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/Y2NhMSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP2VmMjAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtbW9kdWxlL25vdGVzLWJsb2NrLnZ1ZT8zNDk5Iiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1tb2R1bGUudnVlPzU3YjciLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXcvY29tcG9uZW50cy9idXR0b25zL2ZldG90LWJ1dHRvbi52dWU/NzUzZiIsIndlYnBhY2s6Ly8vLi9hcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT9lNTQyIiwid2VicGFjazovLy8uL2FwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWU/ZDc3MCIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQtaXRlbS52dWU/MTAyZSIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQudnVlP2YzY2EiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3BhcmFncmFwaC1jb21wb25lbnQudnVlPzI4OWYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3NyYy90ZXh0YXJlYS1jb21wb25lbnQudnVlP2U1ZDkiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT81Y2IzIiwid2VicGFjazovLy8uL2J1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlPzkwOWIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZXMtZnJhbWUtY29udGVudC9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT8zZDU0Il0sIm5hbWVzIjpbImxpc3RTdHlsZXMiLCJkcmF3QmxvY2siLCJjb250ZW50IiwiZ2V0UGFyYWdyYXBoIiwicGFyYWdyYXBoIiwiZ2V0TGlzdCIsImxpc3QiLCJnZXROdW1iZXJlZExpc3QiLCJnZXRNYXJrZWRMaXN0Iiwic2hpZnQiLCJwcmVwYXJpbmdMaXN0SXRlbXMiLCJtYXAiLCJpdGVtIiwiam9pbiIsImdldFRydWVUeXBlIiwid2hhdCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZ2V0Iiwic3RhdGUiLCJub3RlIiwiaWQiLCJ0aXRsZSIsImluZm8iLCJkYXRlIiwiZ2V0dGVycyIsIm11dGF0aW9ucyIsIlVQREFURSIsImRhdGEiLCJVUERBVEVfRk9SX0NSRUFURSIsIlVQREFURV9WQUxVRSIsImtleSIsInZhbHVlIiwiVVBEQVRFX0lORk9fVkFMVUUiLCJhY3Rpb25zIiwidXBkYXRlIiwiY29udGV4dCIsImNvbW1pdCIsInVwZGF0ZUZvckNyZWF0ZSIsInVwZGF0ZVZhbHVlIiwib3B0aW9ucyIsInVwZGF0ZUluZm9WYWx1ZSIsImNyZWF0ZUN1cnJlbnROb3RlU3RvcmUiLCJTdG9yZVdvcmtlciIsImNyZWF0ZVN0b3JlIiwiZHJhd0Jsb2NrQ29udGVudCIsInBhcnNlQ29udGVudEl0ZW0iLCJjb250ZW50SXRlbSIsInRydWVUeXBlIiwiZHJhd0Jsb2NrU2VydmljZSIsImNyZWF0ZU5vdGVNb2RhbENvbmZpZyIsIm1vZGFsVHlwZSIsImhlYWRlciIsImljb24iLCJjb250ZW50Q29tcG9uZW50Iiwibm90ZU1vZGFsQ29udGVudENvbXBvbmVudCIsImZvb3RlckNvbXBvbmVudCIsIm5vdGVNb2RhbEZvb3RlckNvbXBvbmVudCIsIm5vdGVzTW9kdWxlQ29uZmlnIiwidmlldyIsIm5vdGVzTW9kdWxlIiwiaW5pdCIsIm5vdGVzQmxvY2tNZW51U3RvcmUiLCJpdGVtcyIsIm5hbWUiLCJsYWJlbCIsIm5vdGVzRnJhbWVUb29sc1N0b3JlIiwibGFzdCIsInRleHRhcmVhQ29tcG9uZW50TWl4aW4iLCJpc0FjdGl2ZSIsImhhc1ZhbHVlIiwicHJvcHMiLCJTdHJpbmciLCJvbkZvY3VzIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiY29tcG9uZW50cyIsInRleHRhcmVhQ29tcG9uZW50IiwibWV0aG9kcyIsImlucHV0SGFuZGxlciIsImZvY3VzSGFuZGxlciIsImJsdXJIYW5kbGVyIiwiJGVtaXQiLCJtb3VudGVkIiwiY3VycmVudE1vZHVsZVN0b3JlIiwiZ2V0U3RvcmUiLCJibG9ja3NQb3NpdGlvbnMiLCJyZW1vdmVCbG9ja3NQb3NpdGlvbnMiLCJ1cGRhdGVCbG9ja3NQb3NpdGlvbnMiLCJibG9ja3NDb3VudCIsInNldHRpbmdzQnlLZXkiLCJibG9ja3NIZWlnaHQiLCJnZXRDdXJyZW50QmxvY2tIZWlnaHRCeUN1cnJlbnRCbG9ja1NpemVUeXBlIiwiYmxvY2tzQ29uZmlncyIsImdldEJsb2Nrc0NvbmZpZ3MiLCJ0b3BQb3NpdGlvbkluY3JlbWVudCIsInVuZGVmaW5lZCIsImJsb2Nrc1Bvc2l0aW9uc0xpc3QiLCJBcnJheSIsImZvckVhY2giLCJsZWZ0IiwiaW5kZXhMaXN0IiwiaW5kZXgiLCJpIiwidG9wIiwic2l6ZVR5cGUiLCJyZW1haW5zIiwiZnVsbCIsIm9wdGlvbmFsUGFyYW1zIiwicHJlcGFyaW5nQmxvY2tzQ29uZmlnIiwibGVmdFNpZGVSZW1haW4iLCJjZW50ZXJSZW1haW4iLCJwcmVwYXJpbmdMZWZ0U2lkZUJsb2Nrc0NvbmZpZyIsInByZXBhcmluZ0NlbnRlckJsb2Nrc0NvbmZpZyIsInByZXBhcmluZ1JpZ2h0U2lkZUJsb2Nrc0NvbmZpZyIsImNvdW50IiwiY3JlYXRlSW5kZXhMaXN0IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBYTtBQUViOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxzQ0FBbkI7QUFFQTs7QUFDQTs7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QkFBTyxDQUFDLHlvQkFBaVc7QUFDdlgsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw0SUFBK0U7QUFDakcsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywrbUJBQWtWO0FBQ3hXLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsc0lBQXlFO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsNnJCQUFxWDtBQUMzWSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHlJQUE0RTtBQUM5RiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCtxQkFBOFc7QUFDcFksNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyx5SUFBNEU7QUFDOUYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJhMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGxpc3RTdHlsZXMgPSAncGFkZGluZy1sZWZ0OjMwcHg7bWFyZ2luLWJvdHRvbToxMHB4JztcclxuXHJcbi8qKiogaW5pdCBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGRyYXdCbG9jayA9IHtcclxuXHRjb250ZW50OiB7XHJcblx0XHRnZXRQYXJhZ3JhcGgocGFyYWdyYXBoKSB7XHJcblx0XHRcdHJldHVybiBgPHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiPiR7cGFyYWdyYXBofTwvcD5gXHJcblx0XHR9LFxyXG5cdFx0Z2V0TGlzdChsaXN0KSB7XHJcblx0XHRcdHJldHVybiAodHlwZW9mIGxpc3RbMF0gPT09ICdib29sZWFuJyApXHJcblx0XHRcdFx0PyBnZXROdW1iZXJlZExpc3QobGlzdCkgOiBnZXRNYXJrZWRMaXN0KGxpc3QpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gZ2V0TnVtYmVyZWRMaXN0KGxpc3QpIHtcclxuXHRsaXN0LnNoaWZ0KCk7XHJcblx0cmV0dXJuIGA8b2wgc3R5bGU9XCIke2xpc3RTdHlsZXN9XCI+JHsgcHJlcGFyaW5nTGlzdEl0ZW1zKGxpc3QpIH08L29sPmBcclxufVxyXG5mdW5jdGlvbiBnZXRNYXJrZWRMaXN0KGxpc3QpIHtcclxuXHRyZXR1cm4gYDx1bCBzdHlsZT1cIiR7bGlzdFN0eWxlc31cIj4keyBwcmVwYXJpbmdMaXN0SXRlbXMobGlzdCkgfTwvdWw+YFxyXG59XHJcbmZ1bmN0aW9uIHByZXBhcmluZ0xpc3RJdGVtcyhsaXN0KSB7XHJcblx0cmV0dXJuIGxpc3QubWFwKChpdGVtKSA9PiBgPGxpIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNXB4O1wiPiR7aXRlbX08L2xpPmApLmpvaW4oJycpXHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYXdCbG9jazsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBnZXRUcnVlVHlwZSh3aGF0KSB7XHJcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aGF0KS5zbGljZSg4LCAtMSlcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0OiBnZXRUcnVlVHlwZSB9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OThlMjI5ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ZldG90LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU5OGUyMjllJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU5OGUyMjllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU5OGUyMjllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5OGUyMjllJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU5OGUyMjllJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvdmlldy9jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5OGUyMjllJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNWIzZWI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWM1YjNlYjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWM1YjNlYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWM1YjNlYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM1YjNlYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWM1YjNlYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFwcC92aWV3L2NvbXBvbmVudHMvYnV0dG9ucy9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWNvbmZpcm0tYnV0dG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM1YjNlYjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3NzZlOGM0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTc3NmU4YzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhNzc2ZThjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhNzc2ZThjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhNzc2ZThjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc3NmU4YzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTc3NmU4YzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFwcC92aWV3L2NvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1kYXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3NzZlOGM0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3NzZlOGM0JnNjb3BlZD10cnVlJlwiIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IFN0b3JlV29ya2VyIGZyb20gJyRmZXRvdC1zdG9yZS13b3JrZXInO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBpbml0IFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgc3RhdGUgPSB7XHJcblx0bm90ZToge1xyXG5cdFx0aWQ6IDAsXHJcblx0XHR0aXRsZTogJycsXHJcblx0XHRjb250ZW50OiBbXSxcclxuXHRcdGluZm86IHtcclxuXHRcdFx0ZGF0ZTogMFxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGdldHRlcnMgPSB7XHJcblx0bm90ZShzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0Y29uc3Qgbm90ZSA9IHN0YXRlLm5vdGU7XHJcblx0XHRcdG5vdGUuaW5mby5kYXRlID0gK25vdGUuaW5mby5kYXRlO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIG5vdGU7XHJcblx0XHR9XHJcblx0fSxcclxuXHR0aXRsZShzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+IHN0YXRlLm5vdGUudGl0bGU7XHJcblx0fSxcclxuXHRjb250ZW50KHN0YXRlKSB7XHJcblx0XHRyZXR1cm4gKCkgPT4gc3RhdGUubm90ZS5jb250ZW50O1xyXG5cdH0sXHJcblx0ZGF0ZShzdGF0ZSkge1xyXG5cdFx0cmV0dXJuICgpID0+IHN0YXRlLm5vdGUuaW5mby5kYXRlO1xyXG5cdH0sXHJcbn07XHJcblxyXG5jb25zdCBtdXRhdGlvbnMgPSB7XHJcblx0VVBEQVRFKHN0YXRlLCBkYXRhKSB7XHJcblx0XHRzdGF0ZS5ub3RlID0geyAuLi5kYXRhIH1cclxuXHR9LFxyXG5cdFVQREFURV9GT1JfQ1JFQVRFKHN0YXRlLCB7ZGF0ZX0pIHtcclxuXHRcdGNvbnN0IHRpdGxlID0gc3RhdGUubm90ZS50aXRsZTtcclxuXHRcdHN0YXRlLm5vdGUgPSB7aWQ6IDAsIHRpdGxlLCBjb250ZW50OiBbXSwgaW5mbzogeyBkYXRlOiArZGF0ZSB9fVxyXG5cdH0sXHJcblx0XHJcblx0VVBEQVRFX1ZBTFVFKHN0YXRlLCB7a2V5LCB2YWx1ZX0pIHtcclxuXHRcdHN0YXRlLm5vdGVba2V5XSA9IHZhbHVlO1xyXG5cdH0sXHJcblx0VVBEQVRFX0lORk9fVkFMVUUoc3RhdGUsIHtrZXksIHZhbHVlfSkge1xyXG5cdFx0c3RhdGUubm90ZS5pbmZvW2tleV0gPSB2YWx1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG5cdGFzeW5jIHVwZGF0ZShjb250ZXh0LCBkYXRhKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFJywgZGF0YSlcclxuXHR9LFxyXG5cdGFzeW5jIHVwZGF0ZUZvckNyZWF0ZShjb250ZXh0LCBkYXRhKSB7XHJcblx0XHRjb250ZXh0LmNvbW1pdCgnVVBEQVRFX0ZPUl9DUkVBVEUnLCBkYXRhKVxyXG5cdH0sXHJcblx0XHJcblx0YXN5bmMgdXBkYXRlVmFsdWUoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURV9WQUxVRScsIG9wdGlvbnMpXHJcblx0fSxcclxuXHRhc3luYyB1cGRhdGVJbmZvVmFsdWUoY29udGV4dCwgb3B0aW9ucykge1xyXG5cdFx0Y29udGV4dC5jb21taXQoJ1VQREFURV9JTkZPX1ZBTFVFJywgb3B0aW9ucylcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGluaXQgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50Tm90ZVN0b3JlKCkge1xyXG5cdFN0b3JlV29ya2VyLmNyZWF0ZVN0b3JlKCdjdXJyZW50LW5vdGUnLCB7IHN0YXRlLCBnZXR0ZXJzLCBtdXRhdGlvbnMsIGFjdGlvbnMgfSlcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ3VycmVudE5vdGVTdG9yZX07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IHRydWVUeXBlIGZyb20gJyRmZXRvdC1zZXJ2aWNlcy90cnVlLXR5cGUnO1xyXG5pbXBvcnQgZHJhd0Jsb2NrU2VydmljZSBmcm9tICckZmV0b3Qtc2VydmljZXMvZHJhdy1ibG9jayc7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBkcmF3QmxvY2tDb250ZW50KGNvbnRlbnQpIHtcclxuXHRyZXR1cm4gY29udGVudC5tYXAocGFyc2VDb250ZW50SXRlbSkuam9pbignJyk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gcGFyc2VDb250ZW50SXRlbShjb250ZW50SXRlbSkge1xyXG5cdHN3aXRjaCggdHJ1ZVR5cGUuZ2V0KGNvbnRlbnRJdGVtKSApIHtcclxuXHRcdGNhc2UgJ1N0cmluZyc6XHJcblx0XHRcdHJldHVybiBjb250ZW50SXRlbVswXSA9PT0gJ3AnXHJcblx0XHRcdFx0PyBkcmF3QmxvY2tTZXJ2aWNlLmNvbnRlbnQuZ2V0UGFyYWdyYXBoKGNvbnRlbnRJdGVtLnNsaWNlKDEpKSA6ICcnO1xyXG5cdFx0Y2FzZSAnQXJyYXknOlxyXG5cdFx0XHRyZXR1cm4gZHJhd0Jsb2NrU2VydmljZS5jb250ZW50LmdldExpc3QoY29udGVudEl0ZW0pXHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmF3QmxvY2tDb250ZW50IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL25vdGVzJzsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQge2NyZWF0ZUN1cnJlbnROb3RlU3RvcmV9IGZyb20gJy4vY29tcG9uZW50cy9jdXJyZW50LW5vdGUtc3RvcmUnO1xyXG5cclxuaW1wb3J0IG5vdGVzTW9kdWxlIGZyb20gJy4vdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZSc7XHJcblxyXG5pbXBvcnQgbm90ZU1vZGFsQ29udGVudENvbXBvbmVudCBmcm9tICcuL3ZpZXcvbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgbm90ZU1vZGFsRm9vdGVyQ29tcG9uZW50IGZyb20gJy4vdmlldy9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNyZWF0ZU5vdGVNb2RhbENvbmZpZyA9IHtcclxuXHRvcHRpb25zOiB7XHJcblx0XHRtb2RhbFR5cGU6ICdpcy1zbWFsbCcsXHJcblx0XHRoZWFkZXI6IHsgdGl0bGU6ICdOZXcgbm90ZScsIGljb246ICcmI3hFODBDOycgfVxyXG5cdH0sXHJcblx0Y29udGVudENvbXBvbmVudDogbm90ZU1vZGFsQ29udGVudENvbXBvbmVudCxcclxuXHRmb290ZXJDb21wb25lbnQ6IG5vdGVNb2RhbEZvb3RlckNvbXBvbmVudFxyXG59O1xyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNNb2R1bGVDb25maWcgPSB7XHJcblx0dmlldzogbm90ZXNNb2R1bGUsXHJcblx0Y3JlYXRlTm90ZU1vZGFsQ29uZmlnLFxyXG5cdFxyXG5cdGluaXQoKSB7XHJcblx0XHRjcmVhdGVDdXJyZW50Tm90ZVN0b3JlKCk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzTW9kdWxlQ29uZmlnIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNCbG9ja01lbnVTdG9yZSA9IHtcclxuXHRpdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnRWRpdCBub3RlJyxcclxuXHRcdFx0aWNvbjogJyYjeEU4MTE7JyxcclxuXHRcdFx0bGFiZWw6ICdlZGl0J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ01vdmUgdG8gY2F0ZWdvcnknLFxyXG5cdFx0XHRpY29uOiAnJiN4RjI5MjsnLFxyXG5cdFx0XHRsYWJlbDogJ21vdmUtdG8tY2F0ZWdvcnknXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnTW92ZSB0byBmb2xkZXInLFxyXG5cdFx0XHRpY29uOiAnJiN4RTgxMzsnLFxyXG5cdFx0XHRsYWJlbDogJ21vdmUtdG8tZm9sZGVyJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ0RlbGV0ZSBub3RlJyxcclxuXHRcdFx0aWNvbjogJyYjeEYxRjg7JyxcclxuXHRcdFx0bGFiZWw6ICdkZWxldGUnXHJcblx0XHR9XHJcblx0XVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGVzQmxvY2tNZW51U3RvcmU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNGcmFtZVRvb2xzU3RvcmUgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEU4MjQ7JyxcclxuXHRcdGxhYmVsOiAncGFyYWdyYXBoJyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hGMENCOycsXHJcblx0XHRsYWJlbDogJ251bS1saXN0J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYwQ0E7JyxcclxuXHRcdGxhYmVsOiAnbWFyay1saXN0JyxcclxuXHRcdGxhc3Q6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICcmI3hFODAzOycsXHJcblx0XHRsYWJlbDogJ2ltYWdlJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJyYjeEYxNUM7JyxcclxuXHRcdGxhYmVsOiAnZmlsZSdcclxuXHR9XHJcbl07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90ZXNGcmFtZVRvb2xzU3RvcmU7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Njc1MjllMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Njc1MjllMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2NzUyOWUyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzY3NTI5ZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzY3NTI5ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzY3NTI5ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2NzUyOWUyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2NzUyOWUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9mb3JtLWNvbXBvbmVudHMvbGlzdC1jb21wb25lbnQtaXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2NzUyOWUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3NTI5ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2NzUyOWUyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWY0OGVjNjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWY0OGVjNjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhZjQ4ZWM2NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2FmNDhlYzY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2FmNDhlYzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2FmNDhlYzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWY0OGVjNjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWY0OGVjNjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9saXN0LWNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFmNDhlYzY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFmNDhlYzY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWY0OGVjNjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOGE2ODRlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhOGE2ODRlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWE4YTY4NGVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YThhNjg0ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YThhNjg0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YThhNjg0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE4YTY4NGUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWE4YTY4NGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE4YTY4NGUmc2NvcGVkPXRydWUmXCIiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgdGV4dGFyZWFDb21wb25lbnQgZnJvbSAnLi90ZXh0YXJlYS1jb21wb25lbnQudnVlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IHRleHRhcmVhQ29tcG9uZW50TWl4aW4gPSB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0aGFzVmFsdWU6IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRwcm9wczoge1xyXG5cdFx0dmFsdWU6IFN0cmluZyxcclxuXHRcdG9uRm9jdXM6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdCd0ZXh0YXJlYS1jb21wb25lbnQnOiB0ZXh0YXJlYUNvbXBvbmVudFxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aW5wdXRIYW5kbGVyKHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuaGFzVmFsdWUgPSB2YWx1ZSAhPT0gJyc7XHJcblx0XHR9LFxyXG5cdFx0Zm9jdXNIYW5kbGVyKCkge1xyXG5cdFx0XHR0aGlzLmlzQWN0aXZlID0gdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdGJsdXJIYW5kbGVyKHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy4kZW1pdCgnYmx1ci1ldmVudCcsIHZhbHVlKVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuaGFzVmFsdWUgPSB0aGlzLnZhbHVlICE9PSAnJztcclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGV4dGFyZWFDb21wb25lbnRNaXhpbjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ5NGFiZjUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNDk0YWJmNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNDk0YWJmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNDk0YWJmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDk0YWJmNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNDk0YWJmNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvZm9ybS1jb21wb25lbnRzL3NyYy90ZXh0YXJlYS1jb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRhcmVhLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ5NGFiZjUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2YjUwY2M0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjZiNTBjYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNmI1MGNjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNmI1MGNjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNmI1MGNjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZiNTBjYzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjZiNTBjYzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGUtbW9kYWwtY29udGVudC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZiNTBjYzQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjM1OWUxZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMzU5ZTFlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMzU5ZTFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMzU5ZTFlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMzU5ZTFlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMzU5ZTFlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9tb2R1bGVzL25vdGVzL3ZpZXcvbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNTllMWU2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlMDk0MDImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNWUwOTQwMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI1ZTA5NDAyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1ZTA5NDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1ZTA5NDAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlMDk0MDImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjVlMDk0MDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTA5NDAyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNmE4OGZiZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI2YTg4ZmJkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjZhODhmYmQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjZhODhmYmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjZhODhmYmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2YTg4ZmJkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI2YTg4ZmJkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZhODhmYmQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGRlYjFkYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjhkZWIxZGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxGcmllbmRzXFxcXGZldG90XFxcXGNsaWVudFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiOGRlYjFkYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiOGRlYjFkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiOGRlYjFkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZGViMWRhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I4ZGViMWRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZGViMWRhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDFiM2ZjYiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIwMWIzZmNiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRnJpZW5kc1xcXFxmZXRvdFxcXFxjbGllbnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjAxYjNmY2InKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjAxYjNmY2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjAxYjNmY2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMWIzZmNiJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwMWIzZmNiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1mcmFtZS1jb250ZW50L25vdGVzLWZyYW1lLWNvbnRlbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwMWIzZmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDFiM2ZjYiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3OWZhZTRjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmNzlmYWU0Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y3OWZhZTRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y3OWZhZTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y3OWZhZTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1ibG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjc5ZmFlNGMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjc5ZmFlNGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImJ1aWxkL2FwcC1wYWdlL2NvbXBvbmVudHMvbW9kdWxlcy9ub3Rlcy92aWV3L25vdGVzLW1vZHVsZS9ub3Rlcy1ibG9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtYmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNzlmYWU0YyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODJlZWQyMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmODJlZWQyMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEZyaWVuZHNcXFxcZmV0b3RcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y4MmVlZDIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y4MmVlZDIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y4MmVlZDIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY4MmVlZDIyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y4MmVlZDIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJidWlsZC9hcHAtcGFnZS9jb21wb25lbnRzL21vZHVsZXMvbm90ZXMvdmlldy9ub3Rlcy1tb2R1bGUvbm90ZXMtbW9kdWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtbW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1tb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY4MmVlZDIyJnNjb3BlZD10cnVlJlwiIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLypcclxuKiAgIGN1cnJlbnQgbW9kdWxlIHVzZSB3aGVuIHNjcmVlbiB3aWR0aCA8IDEyODBweFxyXG4qXHJcbiogICBibG9jayB3aWR0aCAtIDM2MHB4XHJcbiogICBtYXJnaW4gc2l6ZSAtIDI0cHhcclxuKlxyXG4qICovXHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGluaXQgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBjdXJyZW50TW9kdWxlU3RvcmUgPSBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1tb2R1bGUnKTtcclxuXHJcbmxldCBibG9ja3NQb3NpdGlvbnMgPSBudWxsO1xyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQmxvY2tzUG9zaXRpb25zKCkge1xyXG5cdGJsb2Nrc1Bvc2l0aW9ucyA9IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlQmxvY2tzUG9zaXRpb25zKCkge1xyXG5cdGNvbnN0IGJsb2Nrc0NvdW50ID0gY3VycmVudE1vZHVsZVN0b3JlLmdldHRlcnMuc2V0dGluZ3NCeUtleSgnYmxvY2tzQ291bnQnKTtcclxuXHRjb25zdCBibG9ja3NIZWlnaHQgPSBnZXRDdXJyZW50QmxvY2tIZWlnaHRCeUN1cnJlbnRCbG9ja1NpemVUeXBlKFxyXG5cdFx0Y3VycmVudE1vZHVsZVN0b3JlLmdldHRlcnMuc2V0dGluZ3NCeUtleSgnYmxvY2tzU2l6ZVR5cGUnKVxyXG5cdCk7XHJcblx0XHJcblx0Ly8gY29uc29sZS5sb2coJ2Jsb2Nrcy1jb3VudDonLCBibG9ja3NDb3VudCk7XHJcblx0Ly8gY29uc29sZS5sb2coJ2Jsb2Nrcy1oZWlnaHQ6JywgYmxvY2tzSGVpZ2h0KTtcclxuXHRcclxuXHRjb25zdCBibG9ja3NDb25maWdzID0gZ2V0QmxvY2tzQ29uZmlncyhibG9ja3NDb3VudCk7XHJcblx0Y29uc3QgdG9wUG9zaXRpb25JbmNyZW1lbnQgPSBibG9ja3NIZWlnaHQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGJsb2Nrc0hlaWdodCArIDI0O1xyXG5cdFxyXG5cdC8vIGNvbnNvbGUubG9nKCdibG9ja3MtY29uZmlnOicsIGJsb2Nrc0NvbmZpZ3MpO1xyXG5cdC8vIGNvbnNvbGUubG9nKCd0b3BQb3NpdGlvbkluY3JlbWVudDonLCB0b3BQb3NpdGlvbkluY3JlbWVudCk7XHJcblx0XHJcblx0Y29uc3QgYmxvY2tzUG9zaXRpb25zTGlzdCA9IG5ldyBBcnJheShibG9ja3NDb3VudCArIDEpO1xyXG5cdGJsb2Nrc0NvbmZpZ3MuZm9yRWFjaCgoe2xlZnQsIGluZGV4TGlzdH0pID0+IHtcclxuXHRcdGluZGV4TGlzdC5mb3JFYWNoKChpbmRleCwgaSkgPT4ge1xyXG5cdFx0XHRibG9ja3NQb3NpdGlvbnNMaXN0W2luZGV4XSA9IHtcclxuXHRcdFx0XHRsZWZ0OiBsZWZ0ICsgJ3B4JyxcclxuXHRcdFx0XHR0b3A6IHRvcFBvc2l0aW9uSW5jcmVtZW50ICogaSArICdweCcgfSAvLyBqdXN0IGRvIGl0XHJcblx0XHR9KVxyXG5cdH0pO1xyXG5cdFxyXG5cdGJsb2Nrc1Bvc2l0aW9ucyA9IGJsb2Nrc1Bvc2l0aW9uc0xpc3Q7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudEJsb2NrSGVpZ2h0QnlDdXJyZW50QmxvY2tTaXplVHlwZShzaXplVHlwZSkge1xyXG5cdHJldHVybiBbXHJcblx0XHQyMjIsIC8vIGlzLW5vcm1hbFxyXG5cdFx0MTIyLCAvLyBpcy1zbWFsbFxyXG5cdFx0ODAgICAvLyBpcy1saXN0XHJcblx0XVtzaXplVHlwZV1cclxufVxyXG5mdW5jdGlvbiBnZXRCbG9ja3NDb25maWdzKGJsb2Nrc0NvdW50KSB7XHJcblx0Y29uc3QgcmVtYWlucyA9IGJsb2Nrc0NvdW50ICUgMztcclxuXHRjb25zdCBmdWxsID0gKGJsb2Nrc0NvdW50IC0gcmVtYWlucykgLyAzO1xyXG5cdFxyXG5cdGNvbnN0IG9wdGlvbmFsUGFyYW1zID0gcmVtYWlucyAhPT0gMCAmJiAocmVtYWlucyA9PT0gMSkgPyBbMV0gOiBbMSwgMV07XHJcblx0cmV0dXJuIHByZXBhcmluZ0Jsb2Nrc0NvbmZpZyhmdWxsLCAgLi4ub3B0aW9uYWxQYXJhbXMpO1xyXG59XHJcblxyXG4vKiBwcmVwYXJpbmcgYmxvY2tzIGNvbmZpZ3MgKi9cclxuZnVuY3Rpb24gcHJlcGFyaW5nQmxvY2tzQ29uZmlnKGZ1bGwsIGxlZnRTaWRlUmVtYWluID0gMCwgY2VudGVyUmVtYWluID0gMCkge1xyXG5cdHJldHVybiBbXHJcblx0XHRwcmVwYXJpbmdMZWZ0U2lkZUJsb2Nrc0NvbmZpZyhmdWxsICsgbGVmdFNpZGVSZW1haW4pLFxyXG5cdFx0cHJlcGFyaW5nQ2VudGVyQmxvY2tzQ29uZmlnKGZ1bGwgKyBjZW50ZXJSZW1haW4pLFxyXG5cdFx0cHJlcGFyaW5nUmlnaHRTaWRlQmxvY2tzQ29uZmlnKGZ1bGwpXHJcblx0XVxyXG59XHJcbmZ1bmN0aW9uIHByZXBhcmluZ0xlZnRTaWRlQmxvY2tzQ29uZmlnKGNvdW50KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGxlZnQ6IDAsXHJcblx0XHRpbmRleExpc3Q6IGNyZWF0ZUluZGV4TGlzdChjb3VudCwgMSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyaW5nQ2VudGVyQmxvY2tzQ29uZmlnKGNvdW50KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGxlZnQ6IDM4NCxcclxuXHRcdGluZGV4TGlzdDogY3JlYXRlSW5kZXhMaXN0KGNvdW50LCAyKVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBwcmVwYXJpbmdSaWdodFNpZGVCbG9ja3NDb25maWcoY291bnQpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0bGVmdDogNzY4LFxyXG5cdFx0aW5kZXhMaXN0OiBjcmVhdGVJbmRleExpc3QoY291bnQsIDMpXHJcblx0fVxyXG59XHJcblxyXG4vKiBjcmVhdGUgaW5kZXggbGlzdCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVJbmRleExpc3QoY291bnQsIG51bWJlcikge1xyXG5cdGNvbnN0IGluZGV4TGlzdCA9IFtdO1xyXG5cdFxyXG5cdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSApXHJcblx0XHRpbmRleExpc3RbaV0gPSAzICogaSArIG51bWJlcjtcclxuXHRcclxuXHRyZXR1cm4gaW5kZXhMaXN0O1xyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQge2Jsb2Nrc1Bvc2l0aW9ucywgdXBkYXRlQmxvY2tzUG9zaXRpb25zLCByZW1vdmVCbG9ja3NQb3NpdGlvbnN9OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2R1bGVzL25vdGVzJzsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZldG90LWJ1dHRvbiBicjNweCBjcCBmYyBwciBiZnItY2xpY2tcIlxyXG4gICAgICAgOnN0eWxlPVwic2V0QnV0dG9uU2l6ZVwiXHJcbiAgICAgICBAY2xpY2suc3RvcD1cIiRlbWl0KCdmZXRvdC1idXR0b24tY2xpY2snKVwiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHRuYW1lOiAnZmV0b3QtYnV0dG9uJyxcclxuICAgIHByb3BzOiB7XHJcbiAgXHRcdHNpemU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgXHRcdHNldEJ1dHRvblNpemUoKSB7XHJcbiAgXHRcdFx0cmV0dXJuIHsgd2lkdGg6IGAke3RoaXMuc2l6ZX1weGAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5mZXRvdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICBjb2xvcjogJGZldG90LWRhcmstYmx1ZTtcclxuICAgIGZvbnQ6IDE4cHggJ3JvYm90by1tZWRpdW0nLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBAaW5jbHVkZSBzdGF0aWMtc2hhZG93O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ibHVlO1xyXG4gICAgICBjb2xvcjogJGZldG90LWxpZ2h0LWdyYXk7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtY29uZmlybS1idXR0b25zIGZsZXggdzEwMFwiPlxyXG4gICAgPGZldG90LWJ1dHRvbiA6c2l6ZT1cInNpemVcIiBAZmV0b3QtYnV0dG9uLWNsaWNrPVwiJGVtaXQoJ2NvbmZpcm0tZXZlbnQnLCBmYWxzZSlcIj5cclxuICAgICAgPGZldG90LWljb24gaWNvbj1cIiYjeEU4MDg7XCI+PC9mZXRvdC1pY29uPlxyXG4gICAgPC9mZXRvdC1idXR0b24+XHJcbiAgICA8ZmV0b3QtYnV0dG9uIDpzaXplPVwic2l6ZVwiIEBmZXRvdC1idXR0b24tY2xpY2s9XCIkZW1pdCgnY29uZmlybS1ldmVudCcsIHRydWUpXCI+XHJcbiAgICAgIDxmZXRvdC1pY29uIGljb249XCImI3hFODA3O1wiPjwvZmV0b3QtaWNvbj5cclxuICAgIDwvZmV0b3QtYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZmV0b3RJY29uIGZyb20gJy4uL2ljb25zL2ZldG90LWljb24udnVlJztcclxuICBpbXBvcnQgZmV0b3RCdXR0b24gZnJvbSAnLi9mZXRvdC1idXR0b24udnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ2ZldG90LWNvbmZpcm0tYnV0dG9ucycsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRzaXplOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDk2XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1idXR0b24nOiBmZXRvdEJ1dHRvbixcclxuXHRcdFx0J2ZldG90LWljb24nOiBmZXRvdEljb24sXHJcblx0XHR9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWNvbmZpcm0tYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuZmV0b3QtYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmV0b3QtZGF0ZVwiPnt7IGRyYXdEYXRlIH19PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdmZXRvdC1kYXRlJyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGRhdGU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdGRyYXdEYXRlKCkge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xyXG5cdFx0XHRcdHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LiR7ZGF0ZS5nZXRNb250aCgpICsgMX0uJHtkYXRlLmdldERhdGUoKX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmZldG90LWRhdGUge1xyXG4gICAgY29sb3I6ICRmZXRvdC1kYXJrLWdyYXk7XHJcbiAgICBmb250OiAxNHB4ICdyb2JvdG8tYm9sZCc7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQtY29udGFpbmVyIDpkYXRhPVwic2V0SW5wdXRDb250YWluZXJEYXRhXCI+XHJcbiAgICA8dGV4dGFyZWEtY29tcG9uZW50XHJcbiAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcclxuICAgICAgICAgICAgOm9uLWZvY3VzPVwib25Gb2N1c1wiXHJcbiAgICAgICAgICAgIEB0ZXh0YXJlYS1mb2N1cz1cImZvY3VzSGFuZGxlclwiXHJcbiAgICAgICAgICAgIEB0ZXh0YXJlYS1ibHVyPVwiYmx1ckhhbmRsZXJcIlxyXG4gICAgICAgICAgICBAdGV4dGFyZWEtaW5wdXQ9XCJpbnB1dEhhbmRsZXJcIj5cclxuICAgIDwvdGV4dGFyZWEtY29tcG9uZW50PlxyXG4gIDwvaW5wdXQtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdGV4dGFyZWFDb21wb25lbnRNaXhpbiBmcm9tICcuL3NyYy90ZXh0YXJlYS1jb21wb25lbnQtbWl4aW4nO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnbGlzdC1jb21wb25lbnQtaXRlbScsXHJcblx0XHRtaXhpbnM6IFt0ZXh0YXJlYUNvbXBvbmVudE1peGluXSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHNldElucHV0Q29udGFpbmVyRGF0YSgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0aWNvbjogJycsXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ0xpc3QgaXRlbScsXHJcblx0XHRcdFx0XHRpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcclxuXHRcdFx0XHRcdGhhc1ZhbHVlOiB0aGlzLmhhc1ZhbHVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxpbnB1dC1jb250YWluZXIgOmRhdGE9XCJzZXRJbnB1dENvbnRhaW5lckRhdGFcIj5cclxuICAgIDx1bCBjbGFzcz1cImxpc3QtY29tcG9uZW50IGJzXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInByXCIgdi1mb3I9XCIodmFsdWUsIGluZGV4KSBpbiBsaXN0XCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbS1sYWJlbCBicjUwIHBhIGZjXCIgOmNsYXNzPVwibGlzdFR5cGVcIj57eyBpc051bSA/IGluZGV4ICsgMSA6ICcnIH19PC9kaXY+XHJcbiAgICAgICAgPGxpc3QtY29tcG9uZW50LWl0ZW0gOnZhbHVlPVwidmFsdWVcIiBAYmx1ci1ldmVudD1cImJsdXJFdmVudEhhbmRsZXJcIj48L2xpc3QtY29tcG9uZW50LWl0ZW0+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvaW5wdXQtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbGlzdENvbXBvbmVudEl0ZW0gZnJvbSAnLi9saXN0LWNvbXBvbmVudC1pdGVtLnZ1ZSc7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdsaXN0LWNvbXBvbmVudCcsXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzQWN0aXZlOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0aXNOdW06IEJvb2xlYW4sXHJcbiAgICAgIGxpc3Q6IEFycmF5XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnbGlzdC1jb21wb25lbnQtaXRlbSc6IGxpc3RDb21wb25lbnRJdGVtXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBibHVyRXZlbnRIYW5kbGVyKHZhbHVlKSB7fVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0ICAgIHNldElucHV0Q29udGFpbmVyRGF0YSgpIHtcclxuXHRcdCAgICByZXR1cm4ge1xyXG5cdFx0XHQgICAgaWNvbjogdGhpcy5pc051bSA/ICcmI3hGMENCOycgOiAnJiN4RjBDQTsnLFxyXG5cdFx0XHQgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG5cdFx0XHQgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXHJcblx0XHRcdCAgICBoYXNWYWx1ZTogZmFsc2VcclxuXHRcdCAgICB9XHJcblx0ICAgIH0sXHJcbiAgICAgIGxpc3RUeXBlKCkge1xyXG5cdCAgICBcdHJldHVybiB7ICdpcy1tYXJrLWxpc3QnOiAhdGhpcy5pc051bSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG4gIC5saXN0LWNvbXBvbmVudCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMnB4O1xyXG4gIH1cclxuICAubGlzdC1pdGVtLWxhYmVsIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLTIycHg7XHJcblxyXG4gICAgJi5pcy1tYXJrLWxpc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZmV0b3QtZGFyay1ncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGlucHV0LWNvbnRhaW5lciA6ZGF0YT1cInNldElucHV0Q29udGFpbmVyRGF0YVwiPlxyXG4gICAgPHRleHRhcmVhLWNvbXBvbmVudFxyXG4gICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIDpvbi1mb2N1cz1cIm9uRm9jdXNcIlxyXG4gICAgICAgICAgICBAdGV4dGFyZWEtZm9jdXM9XCJmb2N1c0hhbmRsZXJcIlxyXG4gICAgICAgICAgICBAdGV4dGFyZWEtYmx1cj1cImJsdXJIYW5kbGVyXCJcclxuICAgICAgICAgICAgQHRleHRhcmVhLWlucHV0PVwiaW5wdXRIYW5kbGVyXCI+XHJcbiAgICA8L3RleHRhcmVhLWNvbXBvbmVudD5cclxuICA8L2lucHV0LWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHRleHRhcmVhQ29tcG9uZW50TWl4aW4gZnJvbSAnLi9zcmMvdGV4dGFyZWEtY29tcG9uZW50LW1peGluJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3BhcmFncmFwaC1jb21wb25lbnQnLFxyXG5cdFx0bWl4aW5zOiBbdGV4dGFyZWFDb21wb25lbnRNaXhpbl0sXHJcbiAgICBjb21wdXRlZDoge1xyXG5cdCAgICBzZXRJbnB1dENvbnRhaW5lckRhdGEoKSB7XHJcblx0XHQgICAgcmV0dXJuIHtcclxuXHRcdFx0ICAgIGljb246ICcmI3hFODI0OycsXHJcblx0XHRcdCAgICBwbGFjZWhvbGRlcjogJ1BhcmFncmFwaCcsXHJcblx0XHRcdCAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcclxuXHRcdFx0ICAgIGhhc1ZhbHVlOiB0aGlzLmhhc1ZhbHVlXHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmZldG90LWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPHRleHRhcmVhIGNsYXNzPVwidGV4dGFyZWEtY29tcG9uZW50IHcxMDBcIlxyXG4gICAgICAgICAgICByZWY9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIEBpbnB1dC5zdG9wPVwiaW5wdXRIYW5kbGVyXCJcclxuICAgICAgICAgICAgQGZvY3VzLnN0b3A9XCIkZW1pdCgndGV4dGFyZWEtZm9jdXMnKVwiXHJcbiAgICAgICAgICAgIEBibHVyLnN0b3A9XCIkZW1pdCgndGV4dGFyZWEtYmx1cicsICRldmVudC50YXJnZXQudmFsdWUpXCI+e3sgdmFsdWUgfX08L3RleHRhcmVhPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndGV4dGFyZWEtY29tcG9uZW50JyxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdHZhbHVlOiBTdHJpbmcsXHJcblx0XHRcdG9uRm9jdXM6IEJvb2xlYW5cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGlucHV0SGFuZGxlcih7dGFyZ2V0fSkge1xyXG5cdFx0ICAgIHRoaXMudGV4dGFyZWFSZXNpemUoKTtcclxuXHRcdCAgICB0aGlzLiRlbWl0KCd0ZXh0YXJlYS1pbnB1dCcsIHRhcmdldC52YWx1ZSlcclxuXHQgICAgfSxcclxuXHQgICAgdGV4dGFyZWFSZXNpemUoKSB7XHJcblx0XHQgICAgY29uc3QgdGEgPSB0aGlzLiRyZWZzLnRleHRhcmVhO1xyXG5cclxuXHRcdCAgICB0YS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblx0XHQgICAgdGEuc3R5bGUuaGVpZ2h0ID0gdGEuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHQgICAgfVxyXG4gICAgfSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGlmKCB0aGlzLm9uRm9jdXMgKSB0aGlzLiRyZWZzLnRleHRhcmVhLmZvY3VzKCk7XHJcblx0XHRcdHRoaXMudGV4dGFyZWFSZXNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgQGltcG9ydCAnJGZldG90LXNjc3MnO1xyXG5cclxuICAudGV4dGFyZWEtY29tcG9uZW50IHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIEBpbmNsdWRlIGZvcm0tZWxlbWVudDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50XCI+XHJcbiAgICA8aW5wdXQtdGl0bGUtY29tcG9uZW50XHJcbiAgICAgICAgICAgIDpvbi1mb2N1cz1cInRydWVcIlxyXG4gICAgICAgICAgICA6aW5wdXQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIEBpbnB1dC10aXRsZS1ldmVudD1cImlucHV0VGl0bGVFdmVudEhhbmRsZXJcIj5cclxuICAgIDwvaW5wdXQtdGl0bGUtY29tcG9uZW50PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3RlLW1vZGFsLWNvbnRlbnQtY29tcG9uZW50JyxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aW5wdXQ6IHtcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgbmV3IG5vdGUgdGl0bGUnLFxyXG4gICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuXHRcdFx0XHRjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHRcdFx0aW5wdXRUaXRsZUV2ZW50SGFuZGxlcih2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudE5vdGVTdG9yZS5hY3Rpb25zLnVwZGF0ZVZhbHVlKHtrZXk6ICd0aXRsZScsIHZhbHVlfSlcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudCBic1wiPlxyXG4gICAgPGZldG90LWNvbmZpcm0tYnV0dG9ucyA6c2l6ZT1cIjEzMlwiIEBjb25maXJtLWV2ZW50PVwiY29uZmlybUV2ZW50SGFuZGxlclwiPjwvZmV0b3QtY29uZmlybS1idXR0b25zPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZmV0b3RDb25maXJtQnV0dG9ucyBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL2J1dHRvbnMvZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZSc7XHJcblx0aW1wb3J0IGV2ZW50c0VtaXR0ZXJXb3JrZXIgZnJvbSAnJGZldG90LWV2ZW50cy1lbWl0dGVyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudCcsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1jb25maXJtLWJ1dHRvbnMnOiBmZXRvdENvbmZpcm1CdXR0b25zXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjb25maXJtRXZlbnRIYW5kbGVyKGxhYmVsKSB7XHJcblx0XHRcdFx0ZXZlbnRzRW1pdHRlcldvcmtlci5nZXRFbWl0dGVyKCdub3RlcycpLmVtaXQoJ2NyZWF0ZS1ub3RlLWNvbmZpcm0nLCBsYWJlbClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICAubm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlciB3MTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5mbyB3MTAwIGZhaWNcIj5cclxuICAgICAgPGZldG90LWRhdGUgOmRhdGU9XCJub3RlRGF0ZVwiPjwvZmV0b3QtZGF0ZT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXQtdGl0bGUtY29tcG9uZW50XHJcbiAgICAgICAgICAgIDppbnB1dD1cIm5vdGVUaXRsZVwiXHJcbiAgICAgICAgICAgIEBpbnB1dC10aXRsZS1ldmVudD1cImlucHV0VGl0bGVFdmVudEhhbmRsZXJcIj5cclxuICAgIDwvaW5wdXQtdGl0bGUtY29tcG9uZW50PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZmV0b3REYXRlIGZyb20gJyRmZXRvdC12aWV3LWNvbXBvbmVudHMvZWxlbWVudHMvZmV0b3QtZGF0ZS52dWUnO1xyXG4gIGltcG9ydCBTdG9yZVdvcmtlciBmcm9tICckZmV0b3Qtc3RvcmUtd29ya2VyJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyJyxcclxuICAgIGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y3VycmVudEJsb2Nrc1N0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ibG9ja3MnKSxcclxuXHRcdFx0XHRjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHQgICAgJ2ZldG90LWRhdGUnOiBmZXRvdERhdGVcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGlucHV0VGl0bGVFdmVudEhhbmRsZXIodmFsdWUpIHtcclxuXHQgICAgXHR0aGlzLmN1cnJlbnROb3RlU3RvcmUuYWN0aW9ucy51cGRhdGVWYWx1ZSh7IGtleTogJ3RpdGxlJywgdmFsdWUgfSk7XHJcblxyXG5cdCAgICBcdGNvbnN0IG5vdGVJRCA9IHRoaXMuY3VycmVudE5vdGVTdG9yZS5zdGF0ZS5ub3RlLmlkO1xyXG5cdCAgICBcdGlmKCBub3RlSUQgIT09IDAgKSB0aGlzLmN1cnJlbnRCbG9ja3NTdG9yZS5hY3Rpb25zLnVwZGF0ZUJsb2NrVGl0bGUoe1xyXG4gICAgICAgICAgaWQ6IG5vdGVJRCwgdGl0bGU6IHZhbHVlXHJcblx0ICAgIFx0fSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdG5vdGVEYXRlKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy5kYXRlKClcclxuICAgICAgfSxcclxuICAgICAgbm90ZVRpdGxlKCkge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ05vdGUgdGl0bGUnLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLnRpdGxlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgJyRmZXRvdC1zY3NzJztcclxuXHJcbiAgLm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG4gIC5pbmZvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbVwiPlxyXG4gICAgPHBhcmFncmFwaC1jb21wb25lbnRcclxuICAgICAgICAgICAgdi1pZj1cInR5cGUgPT09ICdwYXJhZ3JhcGgnXCIgOnZhbHVlPVwiZGF0YVwiXHJcbiAgICAgICAgICAgIEBibHVyLWV2ZW50PVwicGFyYWdyYXBoQmx1ckV2ZW50SGFuZGxlclwiPlxyXG4gICAgPC9wYXJhZ3JhcGgtY29tcG9uZW50PlxyXG5cclxuICAgIDxsaXN0LWNvbXBvbmVudFxyXG4gICAgICAgICAgICB2LWVsc2UtaWY9XCJ0eXBlID09PSAnbnVtLWxpc3QnXCJcclxuICAgICAgICAgICAgOmlzLW51bT1cInRydWVcIiA6bGlzdD1cImRhdGFcIj5cclxuICAgIDwvbGlzdC1jb21wb25lbnQ+XHJcblxyXG4gICAgPGxpc3QtY29tcG9uZW50XHJcbiAgICAgICAgICAgIHYtZWxzZS1pZj1cInR5cGUgPT09ICdtYXJrLWxpc3QnXCJcclxuICAgICAgICAgICAgOmlzLW51bT1cImZhbHNlXCIgOmxpc3Q9XCJkYXRhXCI+XHJcbiAgICA8L2xpc3QtY29tcG9uZW50PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcGFyYWdyYXBoQ29tcG9uZW50IGZyb20gJy4uL2Zvcm0tY29tcG9uZW50cy9wYXJhZ3JhcGgtY29tcG9uZW50LnZ1ZSc7XHJcblx0aW1wb3J0IGxpc3RDb21wb25lbnQgZnJvbSAnLi4vZm9ybS1jb21wb25lbnRzL2xpc3QtY29tcG9uZW50LnZ1ZSc7XHJcblxyXG5cdGltcG9ydCB0cnVlVHlwZSBmcm9tICckZmV0b3Qtc2VydmljZXMvdHJ1ZS10eXBlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0nLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0eXBlOiAnJyxcclxuICAgICAgICBkYXRhOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0aXRlbTogW0FycmF5LCBTdHJpbmddXHJcbiAgICB9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHQncGFyYWdyYXBoLWNvbXBvbmVudCc6IHBhcmFncmFwaENvbXBvbmVudCxcclxuICAgICAgJ2xpc3QtY29tcG9uZW50JzogbGlzdENvbXBvbmVudFxyXG5cdFx0fSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgcGFyYWdyYXBoQmx1ckV2ZW50SGFuZGxlcih2YWx1ZSkge1xyXG5cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJlZm9yZU1vdW50KCkge1xyXG5cdFx0XHRzd2l0Y2goIHRydWVUeXBlLmdldCh0aGlzLml0ZW0pICkge1xyXG5cdFx0XHRcdGNhc2UgJ1N0cmluZyc6XHJcblx0XHRcdFx0XHR0aGlzLnR5cGUgPSB0aGlzLml0ZW1bMF0gPT09ICdwJyA/ICdwYXJhZ3JhcGgnIDogJyc7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLml0ZW0uc2xpY2UoMSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuICAgICAgICBjYXNlICdBcnJheSc6XHJcbiAgICAgICAgXHR0aGlzLnR5cGUgPSB0eXBlb2YgdGhpcy5pdGVtWzBdID09PSAnYm9vbGVhbicgPyAnbnVtLWxpc3QnIDogJ21hcmstbGlzdCc7XHJcbiAgICAgICAgXHR0aGlzLmRhdGEgPSB0aGlzLnR5cGUgPT09ICdudW0tbGlzdCcgPyB0aGlzLml0ZW0uZmlsdGVyKChpdCwgaSkgPT4gaSAhPT0gMCkgOiB0aGlzLml0ZW07XHJcblx0XHRcdH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZSB3MTAwXCI+XHJcbiAgICA8bm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbVxyXG4gICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbm90ZUNvbnRlbnRcIlxyXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIiA6aXRlbT1cIml0ZW1cIj5cclxuICAgIDwvbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IG5vdGVzRnJhbWVDb250ZW50V29ya3NwYWNlSXRlbSBmcm9tICcuL25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlLWl0ZW0udnVlJztcclxuICBpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZScsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGN1cnJlbnROb3RlU3RvcmU6IFN0b3JlV29ya2VyLmdldFN0b3JlKCdjdXJyZW50LW5vdGUnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbSc6IG5vdGVzRnJhbWVDb250ZW50V29ya3NwYWNlSXRlbVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcblx0XHRcdG5vdGVDb250ZW50KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy5jb250ZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibm90ZXMtZnJhbWUtY29udGVudCBic1wiPlxyXG4gICAgPG5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyPjwvbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXI+XHJcbiAgICA8bm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2U+PC9ub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZT5cclxuXHJcbiAgICA8ZnJhbWUtdG9vbHNcclxuICAgICAgICAgICAgOnRvb2xzPVwidG9vbHNcIlxyXG4gICAgICAgICAgICA6aXMtYWN0aXZlPVwiaXNGcmFtZVRvb2xzQWN0aXZlXCJcclxuICAgICAgICAgICAgQHRvb2xzLWl0ZW0tY2xpY2s9XCJ0b29sc0l0ZW1DbGlja0hhbmRsZXJcIj5cclxuICAgIDwvZnJhbWUtdG9vbHM+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBub3Rlc0ZyYW1lQ29udGVudEhlYWRlciBmcm9tICcuL25vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyLnZ1ZSc7XHJcbiAgaW1wb3J0IG5vdGVzRnJhbWVDb250ZW50V29ya3NwYWNlIGZyb20gJy4vbm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UudnVlJztcclxuXHJcbiAgaW1wb3J0IG5vdGVzRnJhbWVUb29sc1N0b3JlIGZyb20gJy4uLy4uL3N0b3JlL25vdGVzLWZyYW1lLXRvb2xzLXN0b3JlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ25vdGVzLWZyYW1lLWNvbnRlbnQnLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc0ZyYW1lVG9vbHNBY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRcdHRvb2xzOiBub3Rlc0ZyYW1lVG9vbHNTdG9yZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQnbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXInOiBub3Rlc0ZyYW1lQ29udGVudEhlYWRlcixcclxuICAgICAgJ25vdGVzLWZyYW1lLWNvbnRlbnQtd29ya3NwYWNlJzogbm90ZXNGcmFtZUNvbnRlbnRXb3Jrc3BhY2VcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIHRvb2xzSXRlbUNsaWNrSGFuZGxlcihsYWJlbCkge1xyXG5cdCAgICBcdGNvbnNvbGUubG9nKCd0b29scycsIGxhYmVsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICckZmV0b3Qtc2Nzcyc7XHJcblxyXG4gIC5ub3Rlcy1mcmFtZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHggOTZweCA0MnB4O1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGJsb2NrLWNvbnRhaW5lclxyXG4gICAgICAgICAgOnRpdGxlPVwiYmxvY2sudGl0bGVcIlxyXG4gICAgICAgICAgOmlzLW1lbnUtb3Blbj1cImlzTWVudU9wZW5cIlxyXG4gICAgICAgICAgOnNpemUtdHlwZT1cImJsb2Nrc1NpemVUeXBlXCJcclxuICAgICAgICAgIDpwb3NpdGlvbj1cImJsb2NrUG9zaXRpb25cIlxyXG4gICAgICAgICAgQGJsb2NrLWNvbnRlbnQtY2xpY2s9XCJlZGl0Tm90ZUV2ZW50SGFuZGxlclwiXHJcbiAgICAgICAgICBAb3Blbi1tZW51LWV2ZW50PVwib3Blbk1lbnVFdmVudEhhbmRsZXJcIlxyXG4gICAgICAgICAgQGNsb3NlLW1lbnUtZXZlbnQ9XCJjbG9zZU1lbnVFdmVudEhhbmRsZXJcIj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OmJsb2NrLW1lbnUtaXRlbXM+XHJcbiAgICAgIDxtZW51LWl0ZW0gdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG1lbnVJdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCIgOml0ZW09XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICBAbWVudS1pdGVtLWNsaWNrPVwibWVudUl0ZW1DbGlja0hhbmRsZXJcIj5cclxuICAgICAgPC9tZW51LWl0ZW0+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmxvY2stY29udGVudD5cclxuICAgICAgPGRpdiB2LWh0bWw9XCJkcmF3Q29udGVudFwiPjwvZGl2PlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OmJsb2NrLWRhdGU+XHJcbiAgICAgIDxmZXRvdC1kYXRlIDpkYXRlPVwibm90ZURhdGVcIj48L2ZldG90LWRhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Jsb2NrLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGZldG90RGF0ZSBmcm9tICckZmV0b3Qtdmlldy1jb21wb25lbnRzL2VsZW1lbnRzL2ZldG90LWRhdGUudnVlJztcclxuXHJcbiAgaW1wb3J0IGV2ZW50c0VtaXR0ZXJXb3JrZXIgZnJvbSAnJGZldG90LWV2ZW50cy1lbWl0dGVyJztcclxuICBpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcblxyXG4gIGltcG9ydCBub3Rlc0Jsb2NrTWVudVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL25vdGVzLWJsb2NrLW1lbnUtc3RvcmUnO1xyXG4gIGltcG9ydCBkcmF3QmxvY2tDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZHJhdy1ibG9jay1jb250ZW50JztcclxuICBpbXBvcnQge2Jsb2Nrc1Bvc2l0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vd29ya2Vycy9ibG9ja3MtcG9zaXRpb25zLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1ibG9jaycsXHJcbiAgICBkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzTWVudU9wZW46IGZhbHNlLFxyXG5cclxuICAgICAgICBjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJyksXHJcbiAgICAgICAgY3VycmVudE1vZHVsZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1tb2R1bGUnKSxcclxuXHJcbiAgICAgICAgbm90ZXNFdmVudHNFbWl0dGVyOiBldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ25vdGVzJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcblx0XHRcdGJsb2NrOiBPYmplY3RcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCdmZXRvdC1kYXRlJzogZmV0b3REYXRlXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0ZHJhd0NvbnRlbnQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRyYXdCbG9ja0NvbnRlbnQodGhpcy5ibG9jay5jb250ZW50KVxyXG4gICAgICB9LFxyXG4gICAgICBub3RlRGF0ZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5ibG9jay5pbmZvLmRhdGVcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIGJsb2NrIGNvbnRhaW5lciBwcm9wcyAqL1xyXG4gICAgICBibG9ja3NTaXplVHlwZSgpIHtcclxuXHQgICAgICByZXR1cm4gU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtbW9kdWxlJykuZ2V0dGVycy5zZXR0aW5nc0J5S2V5KCdibG9ja3NTaXplVHlwZScpXHJcbiAgICAgIH0sXHJcblx0ICAgIGJsb2NrUG9zaXRpb24oKSB7XHJcbiAgICAgIFx0aWYoIGJsb2Nrc1Bvc2l0aW9ucyA9PT0gbnVsbCApIHJldHVybiB7fTtcclxuXHJcbiAgICAgIFx0Y29uc3QgcG9zaXRpb25zID0gdGhpcy5jdXJyZW50TW9kdWxlU3RvcmUuZ2V0dGVycy5wb3NpdGlvbnMoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50QmxvY2tQb3NpdGlvbkluZGV4ID0gcG9zaXRpb25zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gdGhpcy5ibG9jay5pZCk7XHJcblxyXG5cdFx0ICAgIHJldHVybiBibG9ja3NQb3NpdGlvbnNbIGN1cnJlbnRCbG9ja1Bvc2l0aW9uSW5kZXggKyAxIF1cclxuXHQgICAgfSxcclxuXHJcbiAgICAgIC8qIG1lbnUgKi9cclxuXHQgICAgbWVudUl0ZW1zKCkge1xyXG5cdFx0ICAgIHJldHVybiBub3Rlc0Jsb2NrTWVudVN0b3JlLml0ZW1zXHJcblx0ICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIC8qIG1lbnUgKi9cclxuXHRcdFx0b3Blbk1lbnVFdmVudEhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5pc01lbnVPcGVuID0gdHJ1ZTtcclxuXHQgICAgXHR0aGlzLnNldEN1cnJlbnROb3RlU3RvcmUoKTtcclxuICAgICAgfSxcclxuXHQgICAgY2xvc2VNZW51RXZlbnRIYW5kbGVyKCkge1xyXG5cdFx0ICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG5cdCAgICBtZW51SXRlbUNsaWNrSGFuZGxlcihpdGVtKSB7XHJcblx0XHQgICAgc3dpdGNoKCBpdGVtLmxhYmVsICkge1xyXG5cdFx0XHQgICAgY2FzZSAnZWRpdCc6XHJcblx0XHRcdFx0ICAgIHRoaXMuZWRpdE5vdGVFdmVudEhhbmRsZXIoKTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICBjYXNlICdkZWxldGUnOlxyXG5cdFx0XHQgICAgXHR0aGlzLmRlbGV0ZU5vdGVFdmVudEhhbmRsZXIoKVxyXG5cdFx0ICAgIH1cclxuXHQgICAgfSxcclxuXHJcbiAgICAgIC8qIG1lbnUgZXZlbnQgKi9cclxuXHQgICAgZWRpdE5vdGVFdmVudEhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5jbG9zZU1lbnVFdmVudEhhbmRsZXIoKTtcclxuXHQgICAgXHR0aGlzLnNldEN1cnJlbnROb3RlU3RvcmUoKTtcclxuXHJcblx0ICAgIFx0dGhpcy5ub3Rlc0V2ZW50c0VtaXR0ZXIuZW1pdCgnZWRpdC1ub3RlLWV2ZW50Jyk7XHJcbiAgICAgIH0sXHJcblx0ICAgIGRlbGV0ZU5vdGVFdmVudEhhbmRsZXIoKSB7XHJcblx0ICAgIFx0dGhpcy5jbG9zZU1lbnVFdmVudEhhbmRsZXIoKTtcclxuXHRcdCAgICB0aGlzLm5vdGVzRXZlbnRzRW1pdHRlci5lbWl0KCdkZWxldGUtbm90ZS1ldmVudCcsIHRoaXMuYmxvY2suaWQpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyogc3JjICovXHJcbiAgICAgIHNldEN1cnJlbnROb3RlU3RvcmUoKSB7XHJcbiAgICAgIFx0dGhpcy5jdXJyZW50Tm90ZVN0b3JlLmFjdGlvbnMudXBkYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPG1vZHVsZS1jb250YWluZXIgOmhhcy1mcmFtZT1cImhhc0ZyYW1lXCIgQGNyZWF0ZS1ibG9jay1ldmVudD1cImNyZWF0ZU5vdGVFdmVudEhhbmRsZXJcIj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1vZHVsZS1mcmFtZT5cclxuICAgICAgPGZyYW1lLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHYtaWY9XCJoYXNGcmFtZVwiXHJcbiAgICAgICAgICAgICAgOmZyYW1lLXN0YXRlPVwiZnJhbWVTdGF0ZVwiXHJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJmcmFtZU9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIEBjbG9zZS1mcmFtZS1ldmVudD1cImNsb3NlRnJhbWVFdmVudEhhbmRsZXJcIj5cclxuICAgICAgICA8bm90ZXMtZnJhbWUtY29udGVudD48L25vdGVzLWZyYW1lLWNvbnRlbnQ+XHJcbiAgICAgIDwvZnJhbWUtY29udGFpbmVyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1zbG90Om1vZHVsZS1ibG9ja3M+XHJcbiAgICAgIDxub3Rlcy1ibG9ja1xyXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGJsb2NrLCBpbmRleCkgaW4gY3VycmVudEJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImluZGV4XCIgOmJsb2NrPVwiYmxvY2tcIj5cclxuICAgICAgPC9ub3Rlcy1ibG9jaz5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gIDwvbW9kdWxlLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IG5vdGVzRnJhbWVDb250ZW50IGZyb20gJy4uL25vdGVzLWZyYW1lLWNvbnRlbnQvbm90ZXMtZnJhbWUtY29udGVudC52dWUnO1xyXG5cdGltcG9ydCBub3Rlc0Jsb2NrIGZyb20gJy4vbm90ZXMtYmxvY2sudnVlJ1xyXG5cclxuICBpbXBvcnQgU3RvcmVXb3JrZXIgZnJvbSAnJGZldG90LXN0b3JlLXdvcmtlcic7XHJcbiAgaW1wb3J0IGV2ZW50c0VtaXR0ZXJXb3JrZXIgZnJvbSAnJGZldG90LWV2ZW50cy1lbWl0dGVyJztcclxuXHJcbiAgaW1wb3J0IHt1cGRhdGVCbG9ja3NQb3NpdGlvbnMsIHJlbW92ZUJsb2Nrc1Bvc2l0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vd29ya2Vycy9ibG9ja3MtcG9zaXRpb25zLXdvcmtlcic7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub3Rlcy1tb2R1bGUnLFxyXG4gICAgZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRoYXNGcmFtZTogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudEZyYW1lSXNGb3JDcmVhdGU6IGZhbHNlLFxyXG4gICAgICAgIGxhc3RCbG9ja3NTaXplVHlwZTogMCxcclxuXHJcbiAgICAgICAgcGFnZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgncGFnZScpLFxyXG4gICAgICAgIGN1cnJlbnRCbG9ja3NTdG9yZTogU3RvcmVXb3JrZXIuZ2V0U3RvcmUoJ2N1cnJlbnQtYmxvY2tzJyksXHJcbiAgICAgICAgY3VycmVudE1vZHVsZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1tb2R1bGUnKSxcclxuICAgICAgICBjdXJyZW50Tm90ZVN0b3JlOiBTdG9yZVdvcmtlci5nZXRTdG9yZSgnY3VycmVudC1ub3RlJyksXHJcblxyXG4gICAgICAgIGFwcEV2ZW50c0VtaXR0ZXI6IGV2ZW50c0VtaXR0ZXJXb3JrZXIuZ2V0RW1pdHRlcignYXBwJyksXHJcblx0XHRcdFx0bm90ZXNFdmVudHNFbWl0dGVyOiBldmVudHNFbWl0dGVyV29ya2VyLmdldEVtaXR0ZXIoJ25vdGVzJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J25vdGVzLWZyYW1lLWNvbnRlbnQnOiBub3Rlc0ZyYW1lQ29udGVudCxcclxuXHQgICAgJ25vdGVzLWJsb2NrJzogbm90ZXNCbG9ja1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHRcdFx0LyogY3JlYXRlIG5vdGUgKi9cclxuXHQgICAgY3JlYXRlTm90ZUV2ZW50SGFuZGxlcigpIHtcclxuXHQgICAgXHR0aGlzLmFwcEV2ZW50c0VtaXR0ZXIuZW1pdChcclxuXHQgICAgXHRcdCdvcGVuLW1vZGFsLWV2ZW50JyxcclxuICAgICAgICAgIHRoaXMuY3VycmVudE1vZHVsZVN0b3JlLmdldHRlcnMuY29uZmlnQnlLZXkoJ2NyZWF0ZU5vdGVNb2RhbENvbmZpZycpXHJcbiAgICAgICAgKTtcclxuXHQgICAgXHR0aGlzLm5vdGVzRXZlbnRzRW1pdHRlci5vbihcclxuXHQgICAgXHRcdCdjcmVhdGUtbm90ZS1jb25maXJtJyxcclxuICAgICAgICAgIHRoaXMuY3JlYXRlTm90ZUNvbmZpcm1IYW5kbGVyXHJcbiAgICAgICAgKVxyXG4gICAgICB9LFxyXG5cdCAgICBjcmVhdGVOb3RlQ29uZmlybUhhbmRsZXIobGFiZWwpIHtcclxuXHQgICAgXHRpZiggbGFiZWwgKSB7XHJcblx0XHRcdCAgICB0aGlzLmN1cnJlbnROb3RlU3RvcmUuYWN0aW9ucy51cGRhdGVGb3JDcmVhdGUoe2RhdGU6IG5ldyBEYXRlKCl9KTtcclxuXHJcblx0XHRcdCAgICB0aGlzLmN1cnJlbnRGcmFtZUlzRm9yQ3JlYXRlID0gdHJ1ZTtcclxuXHRcdFx0ICAgIHRoaXMub3BlbkZyYW1lSGFuZGxlcigpO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0ICAgICAgdGhpcy5hcHBFdmVudHNFbWl0dGVyLmVtaXQoJ2Nsb3NlLW1vZGFsLWV2ZW50Jyk7XHJcblx0ICAgIFx0dGhpcy5ub3Rlc0V2ZW50c0VtaXR0ZXIucmVtb3ZlKCdjcmVhdGUtbm90ZS1jb25maXJtJywgdGhpcy5jcmVhdGVOb3RlQ29uZmlybUhhbmRsZXIpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyogZnJhbWUgKi9cclxuICAgICAgb3BlbkZyYW1lSGFuZGxlcigpIHtcclxuICAgICAgXHR0aGlzLmhhc0ZyYW1lID0gdHJ1ZTtcclxuXHJcbiAgICAgIFx0dGhpcy5sYXN0QmxvY2tzU2l6ZVR5cGUgPSB0aGlzLmN1cnJlbnRNb2R1bGVTdG9yZS5nZXR0ZXJzLnNldHRpbmdzQnlLZXkoJ2Jsb2Nrc1NpemVUeXBlJyk7XHJcbiAgICAgIFx0dGhpcy5jdXJyZW50TW9kdWxlU3RvcmUuYWN0aW9ucy51cGRhdGVTZXR0aW5nc0J5S2V5KHtrZXk6ICdibG9ja3NTaXplVHlwZScsIHZhbHVlOiAyfSk7XHJcbiAgICAgIH0sXHJcblx0ICAgIGNsb3NlRnJhbWVFdmVudEhhbmRsZXIodG9TYXZlTm90ZSA9IHRydWUpIHtcclxuICAgICAgXHR0aGlzLmhhc0ZyYW1lID0gZmFsc2U7XHJcblx0XHQgICAgdGhpcy5jdXJyZW50TW9kdWxlU3RvcmUuYWN0aW9ucy51cGRhdGVTZXR0aW5nc0J5S2V5KHtcclxuICAgICAgICAgIGtleTogJ2Jsb2Nrc1NpemVUeXBlJywgdmFsdWU6IHRoaXMubGFzdEJsb2Nrc1NpemVUeXBlXHJcblx0XHQgICAgfSk7XHJcblxyXG4gICAgICBcdGlmKCAhdG9TYXZlTm90ZSApIHJldHVybjtcclxuXHJcbiAgICAgIFx0aWYoIHRoaXMuY3VycmVudEZyYW1lSXNGb3JDcmVhdGUgKSB7XHJcblx0XHQgICAgICBjb25zdCBjdXJyZW50Tm90ZSA9IHRoaXMuY3VycmVudE5vdGVTdG9yZS5nZXR0ZXJzLm5vdGUoKTtcclxuXHRcdCAgICAgIHRoaXMuY3VycmVudEJsb2Nrc1N0b3JlLmFjdGlvbnMuY3JlYXRlQmxvY2soY3VycmVudE5vdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIFx0dGhpcy5jdXJyZW50RnJhbWVJc0ZvckNyZWF0ZSA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyogbm90ZSBoYW5kbGVycyAqL1xyXG5cdCAgICBhc3luYyBlZGl0Tm90ZUV2ZW50SGFuZGxlcigpIHtcclxuXHQgICAgXHR0aGlzLm9wZW5GcmFtZUhhbmRsZXIoKTtcclxuXHQgICAgfSxcclxuXHQgICAgYXN5bmMgZGVsZXRlTm90ZUV2ZW50SGFuZGxlcihpZCkge1xyXG5cdCAgICBcdGF3YWl0IHRoaXMuY3VycmVudEJsb2Nrc1N0b3JlLmFjdGlvbnMuZGVsZXRlQmxvY2soaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuXHRcdFx0LyogZnJhbWUgKi9cclxuXHQgICAgZnJhbWVTdGF0ZSgpIHtcclxuXHQgICAgXHRyZXR1cm4gdGhpcy5wYWdlU3RvcmUuc3RhdGUuZnJhbWVTdGF0ZVxyXG4gICAgICB9LFxyXG4gICAgICBmcmFtZU9wdGlvbnMoKSB7XHJcblx0XHRcdFx0Y29uc3QgdGl0bGUgPSB0aGlzLmN1cnJlbnROb3RlU3RvcmUuZ2V0dGVycy50aXRsZSgpO1xyXG5cdFx0XHRcdHJldHVybiB7IGhlYWRlcjogeyB0aXRsZSwgaWNvbjogJyYjeEU4MEM7JyB9IH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qIGJsb2NrcyAqL1xyXG4gICAgICBjdXJyZW50QmxvY2tzKCkge1xyXG4gICAgICBcdHJldHVybiB0aGlzLmN1cnJlbnRCbG9ja3NTdG9yZS5nZXR0ZXJzLmdldExpa2VBcnJheSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGJlZm9yZU1vdW50KCkge1xyXG5cdCAgICB0aGlzLnBhZ2VTdG9yZS5zdGF0ZS5kb2N1bWVudFdpZHRoIDwgMTI4MFxyXG4gICAgICAgID8gcmVtb3ZlQmxvY2tzUG9zaXRpb25zKCkgOiB1cGRhdGVCbG9ja3NQb3NpdGlvbnMoKVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMubm90ZXNFdmVudHNFbWl0dGVyXHJcbiAgICAgICAgLm9uKCdlZGl0LW5vdGUtZXZlbnQnLCB0aGlzLmVkaXROb3RlRXZlbnRIYW5kbGVyKVxyXG4gICAgICAgIC5vbignZGVsZXRlLW5vdGUtZXZlbnQnLCB0aGlzLmRlbGV0ZU5vdGVFdmVudEhhbmRsZXIpXHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkKCkge1xyXG5cdFx0XHRTdG9yZVdvcmtlci5yZW1vdmVTdG9yZSgnY3VycmVudC1ub3RlJyk7XHJcblx0XHRcdGV2ZW50c0VtaXR0ZXJXb3JrZXIucmVtb3ZlRW1pdHRlcignbm90ZXMnKTtcclxuICAgIH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBtaXhpbnMgKi9cXG4vKiBjb21wb25lbnRzICovXFxuLyogZnVuY3Rpb25zICovXFxuLmZldG90LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjRjFGMUY1O1xcbiAgY29sb3I6ICMwMDQ0NjY7XFxuICBmb250OiAxOHB4ICdyb2JvdG8tbWVkaXVtJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogNDJweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoNTcsIDYyLCA3MCwgMC40KTtcXG59XFxuLmZldG90LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDQ0NjY7XFxuICAgIGNvbG9yOiAjRjFGMUY1O1xcbn1cXG4uZmV0b3QtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uZmV0b3QtY29uZmlybS1idXR0b25zIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZmV0b3QtY29uZmlybS1idXR0b25zIC5mZXRvdC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5mZXRvdC1kYXRlW2RhdGEtdi1hNzc2ZThjNF0ge1xcbiAgY29sb3I6ICMzOTNFNDY7XFxuICBmb250OiAxNHB4ICdyb2JvdG8tYm9sZCc7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4uaW5wdXQtY29udGFpbmVyW2RhdGEtdi03Njc1MjllMl0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5pbnB1dC1jb250YWluZXJbZGF0YS12LWFmNDhlYzY0XSB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5saXN0LWNvbXBvbmVudFtkYXRhLXYtYWY0OGVjNjRdIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMycHg7XFxufVxcbi5saXN0LWl0ZW0tbGFiZWxbZGF0YS12LWFmNDhlYzY0XSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IC0yMnB4O1xcbn1cXG4ubGlzdC1pdGVtLWxhYmVsLmlzLW1hcmstbGlzdFtkYXRhLXYtYWY0OGVjNjRdIHtcXG4gICAgYmFja2dyb3VuZDogIzM5M0U0NjtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi5pbnB1dC1jb250YWluZXJbZGF0YS12LTVhOGE2ODRlXSB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uZmV0b3QtaW5wdXQtaWNvbltkYXRhLXYtNWE4YTY4NGVdIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuLyogbWl4aW5zICovXFxuLyogY29tcG9uZW50cyAqL1xcbi8qIGZ1bmN0aW9ucyAqL1xcbi50ZXh0YXJlYS1jb21wb25lbnQge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vdGUtbW9kYWwtZm9vdGVyLWNvbXBvbmVudCB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4ubm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXJbZGF0YS12LTI1ZTA5NDAyXSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4uaW5mb1tkYXRhLXYtMjVlMDk0MDJdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIG1peGlucyAqL1xcbi8qIGNvbXBvbmVudHMgKi9cXG4vKiBmdW5jdGlvbnMgKi9cXG4ubm90ZXMtZnJhbWUtY29udGVudFtkYXRhLXYtMjAxYjNmY2JdIHtcXG4gIHBhZGRpbmc6IDI0cHggOTZweCA0MnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZldG90LWJ1dHRvbiBicjNweCBjcCBmYyBwciBiZnItY2xpY2tcIixcbiAgICAgIHN0eWxlOiBfdm0uc2V0QnV0dG9uU2l6ZSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZmV0b3QtYnV0dG9uLWNsaWNrXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmZXRvdC1jb25maXJtLWJ1dHRvbnMgZmxleCB3MTAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJmZXRvdC1idXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHNpemU6IF92bS5zaXplIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiZmV0b3QtYnV0dG9uLWNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY29uZmlybS1ldmVudFwiLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImZldG90LWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcIiYjeEU4MDg7XCIgfSB9KV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZmV0b3QtYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBzaXplOiBfdm0uc2l6ZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImZldG90LWJ1dHRvbi1jbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNvbmZpcm0tZXZlbnRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImZldG90LWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcIiYjeEU4MDc7XCIgfSB9KV0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmZXRvdC1kYXRlXCIgfSwgW1xuICAgIF92bS5fdihfdm0uX3MoX3ZtLmRyYXdEYXRlKSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaW5wdXQtY29udGFpbmVyXCIsXG4gICAgeyBhdHRyczogeyBkYXRhOiBfdm0uc2V0SW5wdXRDb250YWluZXJEYXRhIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInRleHRhcmVhLWNvbXBvbmVudFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHZhbHVlOiBfdm0udmFsdWUsIFwib24tZm9jdXNcIjogX3ZtLm9uRm9jdXMgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInRleHRhcmVhLWZvY3VzXCI6IF92bS5mb2N1c0hhbmRsZXIsXG4gICAgICAgICAgXCJ0ZXh0YXJlYS1ibHVyXCI6IF92bS5ibHVySGFuZGxlcixcbiAgICAgICAgICBcInRleHRhcmVhLWlucHV0XCI6IF92bS5pbnB1dEhhbmRsZXJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJpbnB1dC1jb250YWluZXJcIiwgeyBhdHRyczogeyBkYXRhOiBfdm0uc2V0SW5wdXRDb250YWluZXJEYXRhIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWNvbXBvbmVudCBic1wiIH0sXG4gICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwicHJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1pdGVtLWxhYmVsIGJyNTAgcGEgZmNcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmxpc3RUeXBlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pc051bSA/IGluZGV4ICsgMSA6IFwiXCIpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaXN0LWNvbXBvbmVudC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IHZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7IFwiYmx1ci1ldmVudFwiOiBfdm0uYmx1ckV2ZW50SGFuZGxlciB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImlucHV0LWNvbnRhaW5lclwiLFxuICAgIHsgYXR0cnM6IHsgZGF0YTogX3ZtLnNldElucHV0Q29udGFpbmVyRGF0YSB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ0ZXh0YXJlYS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyB2YWx1ZTogX3ZtLnZhbHVlLCBcIm9uLWZvY3VzXCI6IF92bS5vbkZvY3VzIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJ0ZXh0YXJlYS1mb2N1c1wiOiBfdm0uZm9jdXNIYW5kbGVyLFxuICAgICAgICAgIFwidGV4dGFyZWEtYmx1clwiOiBfdm0uYmx1ckhhbmRsZXIsXG4gICAgICAgICAgXCJ0ZXh0YXJlYS1pbnB1dFwiOiBfdm0uaW5wdXRIYW5kbGVyXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidGV4dGFyZWFcIixcbiAgICB7XG4gICAgICByZWY6IFwidGV4dGFyZWFcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRhcmVhLWNvbXBvbmVudCB3MTAwXCIsXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS5pbnB1dEhhbmRsZXIoJGV2ZW50KVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInRleHRhcmVhLWZvY3VzXCIpXG4gICAgICAgIH0sXG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJ0ZXh0YXJlYS1ibHVyXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtfdm0uX3YoX3ZtLl9zKF92bS52YWx1ZSkpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZS1tb2RhbC1jb250ZW50LWNvbXBvbmVudFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dC10aXRsZS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyBcIm9uLWZvY3VzXCI6IHRydWUsIGlucHV0OiBfdm0uaW5wdXQgfSxcbiAgICAgICAgb246IHsgXCJpbnB1dC10aXRsZS1ldmVudFwiOiBfdm0uaW5wdXRUaXRsZUV2ZW50SGFuZGxlciB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50IGJzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImZldG90LWNvbmZpcm0tYnV0dG9uc1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNpemU6IDEzMiB9LFxuICAgICAgICBvbjogeyBcImNvbmZpcm0tZXZlbnRcIjogX3ZtLmNvbmZpcm1FdmVudEhhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyIHcxMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm8gdzEwMCBmYWljXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmV0b3QtZGF0ZVwiLCB7IGF0dHJzOiB7IGRhdGU6IF92bS5ub3RlRGF0ZSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXRlZ29yeVwiIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dC10aXRsZS1jb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyBpbnB1dDogX3ZtLm5vdGVUaXRsZSB9LFxuICAgICAgICBvbjogeyBcImlucHV0LXRpdGxlLWV2ZW50XCI6IF92bS5pbnB1dFRpdGxlRXZlbnRIYW5kbGVyIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZS1pdGVtXCIgfSxcbiAgICBbXG4gICAgICBfdm0udHlwZSA9PT0gXCJwYXJhZ3JhcGhcIlxuICAgICAgICA/IF9jKFwicGFyYWdyYXBoLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogX3ZtLmRhdGEgfSxcbiAgICAgICAgICAgIG9uOiB7IFwiYmx1ci1ldmVudFwiOiBfdm0ucGFyYWdyYXBoQmx1ckV2ZW50SGFuZGxlciB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0udHlwZSA9PT0gXCJudW0tbGlzdFwiXG4gICAgICAgID8gX2MoXCJsaXN0LWNvbXBvbmVudFwiLCB7IGF0dHJzOiB7IFwiaXMtbnVtXCI6IHRydWUsIGxpc3Q6IF92bS5kYXRhIH0gfSlcbiAgICAgICAgOiBfdm0udHlwZSA9PT0gXCJtYXJrLWxpc3RcIlxuICAgICAgICA/IF9jKFwibGlzdC1jb21wb25lbnRcIiwgeyBhdHRyczogeyBcImlzLW51bVwiOiBmYWxzZSwgbGlzdDogX3ZtLmRhdGEgfSB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50LXdvcmtzcGFjZSB3MTAwXCIgfSxcbiAgICBfdm0uX2woX3ZtLm5vdGVDb250ZW50LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIF9jKFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2UtaXRlbVwiLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfVxuICAgICAgfSlcbiAgICB9KSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3Rlcy1mcmFtZS1jb250ZW50IGJzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnQtaGVhZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibm90ZXMtZnJhbWUtY29udGVudC13b3Jrc3BhY2VcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmcmFtZS10b29sc1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvb2xzOiBfdm0udG9vbHMsIFwiaXMtYWN0aXZlXCI6IF92bS5pc0ZyYW1lVG9vbHNBY3RpdmUgfSxcbiAgICAgICAgb246IHsgXCJ0b29scy1pdGVtLWNsaWNrXCI6IF92bS50b29sc0l0ZW1DbGlja0hhbmRsZXIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJibG9jay1jb250YWluZXJcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICB0aXRsZTogX3ZtLmJsb2NrLnRpdGxlLFxuICAgICAgXCJpcy1tZW51LW9wZW5cIjogX3ZtLmlzTWVudU9wZW4sXG4gICAgICBcInNpemUtdHlwZVwiOiBfdm0uYmxvY2tzU2l6ZVR5cGUsXG4gICAgICBwb3NpdGlvbjogX3ZtLmJsb2NrUG9zaXRpb25cbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImJsb2NrLWNvbnRlbnQtY2xpY2tcIjogX3ZtLmVkaXROb3RlRXZlbnRIYW5kbGVyLFxuICAgICAgXCJvcGVuLW1lbnUtZXZlbnRcIjogX3ZtLm9wZW5NZW51RXZlbnRIYW5kbGVyLFxuICAgICAgXCJjbG9zZS1tZW51LWV2ZW50XCI6IF92bS5jbG9zZU1lbnVFdmVudEhhbmRsZXJcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiYmxvY2stbWVudS1pdGVtc1wiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5fbChfdm0ubWVudUl0ZW1zLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibWVudS1pdGVtXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9LFxuICAgICAgICAgICAgICBvbjogeyBcIm1lbnUtaXRlbS1jbGlja1wiOiBfdm0ubWVudUl0ZW1DbGlja0hhbmRsZXIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImJsb2NrLWNvbnRlbnRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5kcmF3Q29udGVudCkgfSB9KVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJibG9jay1kYXRlXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gW19jKFwiZmV0b3QtZGF0ZVwiLCB7IGF0dHJzOiB7IGRhdGU6IF92bS5ub3RlRGF0ZSB9IH0pXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm1vZHVsZS1jb250YWluZXJcIiwge1xuICAgIGF0dHJzOiB7IFwiaGFzLWZyYW1lXCI6IF92bS5oYXNGcmFtZSB9LFxuICAgIG9uOiB7IFwiY3JlYXRlLWJsb2NrLWV2ZW50XCI6IF92bS5jcmVhdGVOb3RlRXZlbnRIYW5kbGVyIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2R1bGUtZnJhbWVcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uaGFzRnJhbWVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZnJhbWUtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZS1zdGF0ZVwiOiBfdm0uZnJhbWVTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZnJhbWVPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IFwiY2xvc2UtZnJhbWUtZXZlbnRcIjogX3ZtLmNsb3NlRnJhbWVFdmVudEhhbmRsZXIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcIm5vdGVzLWZyYW1lLWNvbnRlbnRcIildLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2R1bGUtYmxvY2tzXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLl9sKF92bS5jdXJyZW50QmxvY2tzLCBmdW5jdGlvbihibG9jaywgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIm5vdGVzLWJsb2NrXCIsIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgYmxvY2s6IGJsb2NrIH0gfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTA1NTkwZTFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzMwZGVjY2FcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtY29uZmlybS1idXR0b25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mZXRvdC1jb25maXJtLWJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmV0b3QtZGF0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNzc2ZThjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIwMjM5ZmNkXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZldG90LWRhdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTc3NmU4YzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Njc1MjllMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjlhN2YxYmM0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3NTI5ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QtY29tcG9uZW50LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3NTI5ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWY0OGVjNjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJmMjE3ZmNhOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZjQ4ZWM2NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGlzdC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWY0OGVjNjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFyYWdyYXBoLWNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YThhNjg0ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjRhYmYyMjU2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhcmFncmFwaC1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE4YTY4NGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOTVmYzc0ZDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dGFyZWEtY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXh0YXJlYS1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDVjMmUzMDRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZS1tb2RhbC1mb290ZXItY29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3RlLW1vZGFsLWZvb3Rlci1jb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzODllNWRkNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub3Rlcy1mcmFtZS1jb250ZW50LWhlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUwOTQwMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC1oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMDk0MDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm90ZXMtZnJhbWUtY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDFiM2ZjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFkMTQyNDFjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vdGVzLWZyYW1lLWNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjAxYjNmY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==