(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./build/app-page/components/services/draw-block-content-service.js":
/*!**************************************************************************!*\
  !*** ./build/app-page/components/services/draw-block-content-service.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $fetot_services_true_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $fetot-services/true-type */ "./app/components/services/true-type.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** init [begin] ***/

const listStyles = 'padding-left:30px;margin-bottom:10px';
/*** init [end] ***/

/*** exports [begin] ***/

const drawBlockContentService = {
  getContentItemType(contentItem) {
    return $fetot_services_true_type__WEBPACK_IMPORTED_MODULE_0__["default"].get(contentItem);
  },

  getParagraph(paragraph) {
    return `<p style="margin-bottom: 10px;">${paragraph}</p>`;
  },

  getList(list) {
    return typeof list[0] === 'boolean' ? getNumberedList(list) : getMarkedList(list);
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


/* harmony default export */ __webpack_exports__["default"] = (drawBlockContentService);

/***/ }),

/***/ "./build/app-page/modules/notes.js":
/*!*****************************************!*\
  !*** ./build/app-page/modules/notes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_services_draw_block_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/services/draw-block-content-service */ "./build/app-page/components/services/draw-block-content-service.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** init [begin] ***/

const notesConfig = {
  blockType: 'common'
};
/*** init [end] ***/

/*** exports [begin] ***/

const notesModule = {
  config: notesConfig,
  workers: {
    drawBlockContentWorker(content) {
      content = content.map(parseContentItem);
      return content.join('');
    }

  }
};
/*** exports [end] ***/

/*** src [begin] ***/

function parseContentItem(contentItem) {
  switch (_components_services_draw_block_content_service__WEBPACK_IMPORTED_MODULE_0__["default"].getContentItemType(contentItem)) {
    case 'String':
      return _components_services_draw_block_content_service__WEBPACK_IMPORTED_MODULE_0__["default"].getParagraph(contentItem);

    case 'Array':
      return _components_services_draw_block_content_service__WEBPACK_IMPORTED_MODULE_0__["default"].getList(contentItem);
  }
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = (notesModule);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy90cnVlLXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9zZXJ2aWNlcy9kcmF3LWJsb2NrLWNvbnRlbnQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9tb2R1bGVzL25vdGVzLmpzIl0sIm5hbWVzIjpbImdldFRydWVUeXBlIiwid2hhdCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZ2V0IiwibGlzdFN0eWxlcyIsImRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlIiwiZ2V0Q29udGVudEl0ZW1UeXBlIiwiY29udGVudEl0ZW0iLCJ0cnVlVHlwZSIsImdldFBhcmFncmFwaCIsInBhcmFncmFwaCIsImdldExpc3QiLCJsaXN0IiwiZ2V0TnVtYmVyZWRMaXN0IiwiZ2V0TWFya2VkTGlzdCIsInNoaWZ0IiwicHJlcGFyaW5nTGlzdEl0ZW1zIiwibWFwIiwiaXRlbSIsImpvaW4iLCJub3Rlc0NvbmZpZyIsImJsb2NrVHlwZSIsIm5vdGVzTW9kdWxlIiwiY29uZmlnIiwid29ya2VycyIsImRyYXdCbG9ja0NvbnRlbnRXb3JrZXIiLCJjb250ZW50IiwicGFyc2VDb250ZW50SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWE7QUFFYjs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUMxQixTQUFPQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosSUFBL0IsRUFBcUNLLEtBQXJDLENBQTJDLENBQTNDLEVBQThDLENBQUMsQ0FBL0MsQ0FBUDtBQUNBO0FBRUQ7OztBQUVlO0FBQUVDLEtBQUcsRUFBRVA7QUFBUCxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsTUFBTVEsVUFBVSxHQUFHLHNDQUFuQjtBQUVBOztBQUNBOztBQUVBLE1BQU1DLHVCQUF1QixHQUFHO0FBQy9CQyxvQkFBa0IsQ0FBQ0MsV0FBRCxFQUFjO0FBQy9CLFdBQU9DLGlFQUFRLENBQUNMLEdBQVQsQ0FBYUksV0FBYixDQUFQO0FBQ0EsR0FIOEI7O0FBSS9CRSxjQUFZLENBQUNDLFNBQUQsRUFBWTtBQUN2QixXQUFRLG1DQUFrQ0EsU0FBVSxNQUFwRDtBQUNBLEdBTjhCOztBQU8vQkMsU0FBTyxDQUFDQyxJQUFELEVBQU87QUFDYixXQUFRLE9BQU9BLElBQUksQ0FBQyxDQUFELENBQVgsS0FBbUIsU0FBcEIsR0FDSkMsZUFBZSxDQUFDRCxJQUFELENBRFgsR0FDb0JFLGFBQWEsQ0FBQ0YsSUFBRCxDQUR4QztBQUVBOztBQVY4QixDQUFoQztBQWFBOztBQUNBOztBQUVBLFNBQVNDLGVBQVQsQ0FBeUJELElBQXpCLEVBQStCO0FBQzlCQSxNQUFJLENBQUNHLEtBQUw7QUFDQSxTQUFRLGNBQWFYLFVBQVcsS0FBS1ksa0JBQWtCLENBQUNKLElBQUQsQ0FBUSxPQUEvRDtBQUNBOztBQUNELFNBQVNFLGFBQVQsQ0FBdUJGLElBQXZCLEVBQTZCO0FBQzVCLFNBQVEsY0FBYVIsVUFBVyxLQUFLWSxrQkFBa0IsQ0FBQ0osSUFBRCxDQUFRLE9BQS9EO0FBQ0E7O0FBQ0QsU0FBU0ksa0JBQVQsQ0FBNEJKLElBQTVCLEVBQWtDO0FBQ2pDLFNBQU9BLElBQUksQ0FBQ0ssR0FBTCxDQUFVQyxJQUFELElBQVcsbUNBQWtDQSxJQUFLLE9BQTNELEVBQW1FQyxJQUFuRSxDQUF3RSxFQUF4RSxDQUFQO0FBQ0E7QUFFRDs7O0FBRWVkLHNGQUFmLEU7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQWE7QUFFYjs7QUFFQTtBQUVBOztBQUNBOztBQUVBLE1BQU1lLFdBQVcsR0FBRztBQUNuQkMsV0FBUyxFQUFFO0FBRFEsQ0FBcEI7QUFJQTs7QUFDQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUc7QUFDbkJDLFFBQU0sRUFBRUgsV0FEVztBQUVuQkksU0FBTyxFQUFFO0FBQ1JDLDBCQUFzQixDQUFDQyxPQUFELEVBQVU7QUFDL0JBLGFBQU8sR0FBR0EsT0FBTyxDQUFDVCxHQUFSLENBQVlVLGdCQUFaLENBQVY7QUFDQSxhQUFPRCxPQUFPLENBQUNQLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDQTs7QUFKTztBQUZVLENBQXBCO0FBVUE7O0FBQ0E7O0FBRUEsU0FBU1EsZ0JBQVQsQ0FBMEJwQixXQUExQixFQUF1QztBQUN0QyxVQUFRRix1RkFBdUIsQ0FBQ0Msa0JBQXhCLENBQTJDQyxXQUEzQyxDQUFSO0FBQ0MsU0FBSyxRQUFMO0FBQ0MsYUFBT0YsdUZBQXVCLENBQUNJLFlBQXhCLENBQXFDRixXQUFyQyxDQUFQOztBQUNELFNBQUssT0FBTDtBQUNDLGFBQU9GLHVGQUF1QixDQUFDTSxPQUF4QixDQUFnQ0osV0FBaEMsQ0FBUDtBQUpGO0FBTUE7QUFFRDs7O0FBRWVlLDBFQUFmLEUiLCJmaWxlIjoiYTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBnZXRUcnVlVHlwZSh3aGF0KSB7XHJcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aGF0KS5zbGljZSg4LCAtMSlcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0OiBnZXRUcnVlVHlwZSB9OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCB0cnVlVHlwZSBmcm9tICckZmV0b3Qtc2VydmljZXMvdHJ1ZS10eXBlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGxpc3RTdHlsZXMgPSAncGFkZGluZy1sZWZ0OjMwcHg7bWFyZ2luLWJvdHRvbToxMHB4JztcclxuXHJcbi8qKiogaW5pdCBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlID0ge1xyXG5cdGdldENvbnRlbnRJdGVtVHlwZShjb250ZW50SXRlbSkge1xyXG5cdFx0cmV0dXJuIHRydWVUeXBlLmdldChjb250ZW50SXRlbSk7XHJcblx0fSxcclxuXHRnZXRQYXJhZ3JhcGgocGFyYWdyYXBoKSB7XHJcblx0XHRyZXR1cm4gYDxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIj4ke3BhcmFncmFwaH08L3A+YFxyXG5cdH0sXHJcblx0Z2V0TGlzdChsaXN0KSB7XHJcblx0XHRyZXR1cm4gKHR5cGVvZiBsaXN0WzBdID09PSAnYm9vbGVhbicgKVxyXG5cdFx0XHQ/IGdldE51bWJlcmVkTGlzdChsaXN0KSA6IGdldE1hcmtlZExpc3QobGlzdCk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBnZXROdW1iZXJlZExpc3QobGlzdCkge1xyXG5cdGxpc3Quc2hpZnQoKTtcclxuXHRyZXR1cm4gYDxvbCBzdHlsZT1cIiR7bGlzdFN0eWxlc31cIj4keyBwcmVwYXJpbmdMaXN0SXRlbXMobGlzdCkgfTwvb2w+YFxyXG59XHJcbmZ1bmN0aW9uIGdldE1hcmtlZExpc3QobGlzdCkge1xyXG5cdHJldHVybiBgPHVsIHN0eWxlPVwiJHtsaXN0U3R5bGVzfVwiPiR7IHByZXBhcmluZ0xpc3RJdGVtcyhsaXN0KSB9PC91bD5gXHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyaW5nTGlzdEl0ZW1zKGxpc3QpIHtcclxuXHRyZXR1cm4gbGlzdC5tYXAoKGl0ZW0pID0+IGA8bGkgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCI+JHtpdGVtfTwvbGk+YCkuam9pbignJylcclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJhd0Jsb2NrQ29udGVudFNlcnZpY2U7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IGRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc2VydmljZXMvZHJhdy1ibG9jay1jb250ZW50LXNlcnZpY2UnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBpbml0IFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNDb25maWcgPSB7XHJcblx0YmxvY2tUeXBlOiAnY29tbW9uJ1xyXG59O1xyXG5cclxuLyoqKiBpbml0IFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNNb2R1bGUgPSB7XHJcblx0Y29uZmlnOiBub3Rlc0NvbmZpZyxcclxuXHR3b3JrZXJzOiB7XHJcblx0XHRkcmF3QmxvY2tDb250ZW50V29ya2VyKGNvbnRlbnQpIHtcclxuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQubWFwKHBhcnNlQ29udGVudEl0ZW0pO1xyXG5cdFx0XHRyZXR1cm4gY29udGVudC5qb2luKCcnKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ29udGVudEl0ZW0oY29udGVudEl0ZW0pIHtcclxuXHRzd2l0Y2goIGRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlLmdldENvbnRlbnRJdGVtVHlwZShjb250ZW50SXRlbSkgKSB7XHJcblx0XHRjYXNlICdTdHJpbmcnOlxyXG5cdFx0XHRyZXR1cm4gZHJhd0Jsb2NrQ29udGVudFNlcnZpY2UuZ2V0UGFyYWdyYXBoKGNvbnRlbnRJdGVtKTtcclxuXHRcdGNhc2UgJ0FycmF5JzpcclxuXHRcdFx0cmV0dXJuIGRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlLmdldExpc3QoY29udGVudEl0ZW0pXHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3Rlc01vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=