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
  blockType: 'common',
  blockContent: {},
  createBlockModalOptions: {
    header: {
      title: 'New note',
      icon: '&#xE80C;'
    },
    modalType: 'is-small',
    confirmHandler: '',
    data: {
      title: ''
    }
  }
};
/*** init [end] ***/

/*** exports [begin] ***/

const notesModule = {
  config: notesConfig,
  workers: {
    drawBlockContent(content) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy90cnVlLXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYXBwLXBhZ2UvY29tcG9uZW50cy9zZXJ2aWNlcy9kcmF3LWJsb2NrLWNvbnRlbnQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9hcHAtcGFnZS9tb2R1bGVzL25vdGVzLmpzIl0sIm5hbWVzIjpbImdldFRydWVUeXBlIiwid2hhdCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiZ2V0IiwibGlzdFN0eWxlcyIsImRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlIiwiZ2V0Q29udGVudEl0ZW1UeXBlIiwiY29udGVudEl0ZW0iLCJ0cnVlVHlwZSIsImdldFBhcmFncmFwaCIsInBhcmFncmFwaCIsImdldExpc3QiLCJsaXN0IiwiZ2V0TnVtYmVyZWRMaXN0IiwiZ2V0TWFya2VkTGlzdCIsInNoaWZ0IiwicHJlcGFyaW5nTGlzdEl0ZW1zIiwibWFwIiwiaXRlbSIsImpvaW4iLCJub3Rlc0NvbmZpZyIsImJsb2NrVHlwZSIsImJsb2NrQ29udGVudCIsImNyZWF0ZUJsb2NrTW9kYWxPcHRpb25zIiwiaGVhZGVyIiwidGl0bGUiLCJpY29uIiwibW9kYWxUeXBlIiwiY29uZmlybUhhbmRsZXIiLCJkYXRhIiwibm90ZXNNb2R1bGUiLCJjb25maWciLCJ3b3JrZXJzIiwiZHJhd0Jsb2NrQ29udGVudCIsImNvbnRlbnQiLCJwYXJzZUNvbnRlbnRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBYTtBQUViOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQzFCLFNBQU9DLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCSixJQUEvQixFQUFxQ0ssS0FBckMsQ0FBMkMsQ0FBM0MsRUFBOEMsQ0FBQyxDQUEvQyxDQUFQO0FBQ0E7QUFFRDs7O0FBRWU7QUFBRUMsS0FBRyxFQUFFUDtBQUFQLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFhO0FBRWI7O0FBRUE7QUFFQTs7QUFDQTs7QUFFQSxNQUFNUSxVQUFVLEdBQUcsc0NBQW5CO0FBRUE7O0FBQ0E7O0FBRUEsTUFBTUMsdUJBQXVCLEdBQUc7QUFDL0JDLG9CQUFrQixDQUFDQyxXQUFELEVBQWM7QUFDL0IsV0FBT0MsaUVBQVEsQ0FBQ0wsR0FBVCxDQUFhSSxXQUFiLENBQVA7QUFDQSxHQUg4Qjs7QUFJL0JFLGNBQVksQ0FBQ0MsU0FBRCxFQUFZO0FBQ3ZCLFdBQVEsbUNBQWtDQSxTQUFVLE1BQXBEO0FBQ0EsR0FOOEI7O0FBTy9CQyxTQUFPLENBQUNDLElBQUQsRUFBTztBQUNiLFdBQVEsT0FBT0EsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixTQUFwQixHQUNKQyxlQUFlLENBQUNELElBQUQsQ0FEWCxHQUNvQkUsYUFBYSxDQUFDRixJQUFELENBRHhDO0FBRUE7O0FBVjhCLENBQWhDO0FBYUE7O0FBQ0E7O0FBRUEsU0FBU0MsZUFBVCxDQUF5QkQsSUFBekIsRUFBK0I7QUFDOUJBLE1BQUksQ0FBQ0csS0FBTDtBQUNBLFNBQVEsY0FBYVgsVUFBVyxLQUFLWSxrQkFBa0IsQ0FBQ0osSUFBRCxDQUFRLE9BQS9EO0FBQ0E7O0FBQ0QsU0FBU0UsYUFBVCxDQUF1QkYsSUFBdkIsRUFBNkI7QUFDNUIsU0FBUSxjQUFhUixVQUFXLEtBQUtZLGtCQUFrQixDQUFDSixJQUFELENBQVEsT0FBL0Q7QUFDQTs7QUFDRCxTQUFTSSxrQkFBVCxDQUE0QkosSUFBNUIsRUFBa0M7QUFDakMsU0FBT0EsSUFBSSxDQUFDSyxHQUFMLENBQVVDLElBQUQsSUFBVyxtQ0FBa0NBLElBQUssT0FBM0QsRUFBbUVDLElBQW5FLENBQXdFLEVBQXhFLENBQVA7QUFDQTtBQUVEOzs7QUFFZWQsc0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsTUFBTWUsV0FBVyxHQUFHO0FBQ25CQyxXQUFTLEVBQUUsUUFEUTtBQUVuQkMsY0FBWSxFQUFFLEVBRks7QUFHbkJDLHlCQUF1QixFQUFFO0FBQ3hCQyxVQUFNLEVBQUU7QUFDUEMsV0FBSyxFQUFFLFVBREE7QUFFUEMsVUFBSSxFQUFFO0FBRkMsS0FEZ0I7QUFLeEJDLGFBQVMsRUFBRSxVQUxhO0FBTXhCQyxrQkFBYyxFQUFFLEVBTlE7QUFPeEJDLFFBQUksRUFBRTtBQUNMSixXQUFLLEVBQUU7QUFERjtBQVBrQjtBQUhOLENBQXBCO0FBZ0JBOztBQUNBOztBQUVBLE1BQU1LLFdBQVcsR0FBRztBQUNuQkMsUUFBTSxFQUFFWCxXQURXO0FBRW5CWSxTQUFPLEVBQUU7QUFDUkMsb0JBQWdCLENBQUNDLE9BQUQsRUFBVTtBQUN6QkEsYUFBTyxHQUFHQSxPQUFPLENBQUNqQixHQUFSLENBQVlrQixnQkFBWixDQUFWO0FBQ0EsYUFBT0QsT0FBTyxDQUFDZixJQUFSLENBQWEsRUFBYixDQUFQO0FBQ0E7O0FBSk87QUFGVSxDQUFwQjtBQVVBOztBQUNBOztBQUVBLFNBQVNnQixnQkFBVCxDQUEwQjVCLFdBQTFCLEVBQXVDO0FBQ3RDLFVBQVFGLHVGQUF1QixDQUFDQyxrQkFBeEIsQ0FBMkNDLFdBQTNDLENBQVI7QUFDQyxTQUFLLFFBQUw7QUFDQyxhQUFPRix1RkFBdUIsQ0FBQ0ksWUFBeEIsQ0FBcUNGLFdBQXJDLENBQVA7O0FBQ0QsU0FBSyxPQUFMO0FBQ0MsYUFBT0YsdUZBQXVCLENBQUNNLE9BQXhCLENBQWdDSixXQUFoQyxDQUFQO0FBSkY7QUFNQTtBQUVEOzs7QUFFZXVCLDBFQUFmLEUiLCJmaWxlIjoiYTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBnZXRUcnVlVHlwZSh3aGF0KSB7XHJcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aGF0KS5zbGljZSg4LCAtMSlcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0OiBnZXRUcnVlVHlwZSB9OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCB0cnVlVHlwZSBmcm9tICckZmV0b3Qtc2VydmljZXMvdHJ1ZS10eXBlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogaW5pdCBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGxpc3RTdHlsZXMgPSAncGFkZGluZy1sZWZ0OjMwcHg7bWFyZ2luLWJvdHRvbToxMHB4JztcclxuXHJcbi8qKiogaW5pdCBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlID0ge1xyXG5cdGdldENvbnRlbnRJdGVtVHlwZShjb250ZW50SXRlbSkge1xyXG5cdFx0cmV0dXJuIHRydWVUeXBlLmdldChjb250ZW50SXRlbSk7XHJcblx0fSxcclxuXHRnZXRQYXJhZ3JhcGgocGFyYWdyYXBoKSB7XHJcblx0XHRyZXR1cm4gYDxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIj4ke3BhcmFncmFwaH08L3A+YFxyXG5cdH0sXHJcblx0Z2V0TGlzdChsaXN0KSB7XHJcblx0XHRyZXR1cm4gKHR5cGVvZiBsaXN0WzBdID09PSAnYm9vbGVhbicgKVxyXG5cdFx0XHQ/IGdldE51bWJlcmVkTGlzdChsaXN0KSA6IGdldE1hcmtlZExpc3QobGlzdCk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBnZXROdW1iZXJlZExpc3QobGlzdCkge1xyXG5cdGxpc3Quc2hpZnQoKTtcclxuXHRyZXR1cm4gYDxvbCBzdHlsZT1cIiR7bGlzdFN0eWxlc31cIj4keyBwcmVwYXJpbmdMaXN0SXRlbXMobGlzdCkgfTwvb2w+YFxyXG59XHJcbmZ1bmN0aW9uIGdldE1hcmtlZExpc3QobGlzdCkge1xyXG5cdHJldHVybiBgPHVsIHN0eWxlPVwiJHtsaXN0U3R5bGVzfVwiPiR7IHByZXBhcmluZ0xpc3RJdGVtcyhsaXN0KSB9PC91bD5gXHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyaW5nTGlzdEl0ZW1zKGxpc3QpIHtcclxuXHRyZXR1cm4gbGlzdC5tYXAoKGl0ZW0pID0+IGA8bGkgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCI+JHtpdGVtfTwvbGk+YCkuam9pbignJylcclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJhd0Jsb2NrQ29udGVudFNlcnZpY2U7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IGRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc2VydmljZXMvZHJhdy1ibG9jay1jb250ZW50LXNlcnZpY2UnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBpbml0IFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3Qgbm90ZXNDb25maWcgPSB7XHJcblx0YmxvY2tUeXBlOiAnY29tbW9uJyxcclxuXHRibG9ja0NvbnRlbnQ6IHt9LFxyXG5cdGNyZWF0ZUJsb2NrTW9kYWxPcHRpb25zOiB7XHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0dGl0bGU6ICdOZXcgbm90ZScsXHJcblx0XHRcdGljb246ICcmI3hFODBDOydcclxuXHRcdH0sXHJcblx0XHRtb2RhbFR5cGU6ICdpcy1zbWFsbCcsXHJcblx0XHRjb25maXJtSGFuZGxlcjogJycsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdHRpdGxlOiAnJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogaW5pdCBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IG5vdGVzTW9kdWxlID0ge1xyXG5cdGNvbmZpZzogbm90ZXNDb25maWcsXHJcblx0d29ya2Vyczoge1xyXG5cdFx0ZHJhd0Jsb2NrQ29udGVudChjb250ZW50KSB7XHJcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50Lm1hcChwYXJzZUNvbnRlbnRJdGVtKTtcclxuXHRcdFx0cmV0dXJuIGNvbnRlbnQuam9pbignJyk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5mdW5jdGlvbiBwYXJzZUNvbnRlbnRJdGVtKGNvbnRlbnRJdGVtKSB7XHJcblx0c3dpdGNoKCBkcmF3QmxvY2tDb250ZW50U2VydmljZS5nZXRDb250ZW50SXRlbVR5cGUoY29udGVudEl0ZW0pICkge1xyXG5cdFx0Y2FzZSAnU3RyaW5nJzpcclxuXHRcdFx0cmV0dXJuIGRyYXdCbG9ja0NvbnRlbnRTZXJ2aWNlLmdldFBhcmFncmFwaChjb250ZW50SXRlbSk7XHJcblx0XHRjYXNlICdBcnJheSc6XHJcblx0XHRcdHJldHVybiBkcmF3QmxvY2tDb250ZW50U2VydmljZS5nZXRMaXN0KGNvbnRlbnRJdGVtKVxyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90ZXNNb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9