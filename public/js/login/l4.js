(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./build/login-page/modules/sing-in.js":
/*!*********************************************!*\
  !*** ./build/login-page/modules/sing-in.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_sing_in_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/sing-in-store */ "./build/login-page/store/sing-in-store.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** exports [begin] ***/

async function singInModuleWorker({
  inputs: {
    email
  },
  outputMessage
}) {
  if (email.isEmpty()) return false;
  outputMessage.set('email', email.value);
  let response = await outputMessage.send();
  return await parseServerResponse(email, response);
}
/*** exports [end] ***/

/*** src [begin] ***/


async function parseServerResponse(input, {
  type,
  message
}) {
  switch (type) {
    case 'error':
      input.error = message.error;
      return false;

    case 'success':
      console.log('success', message);
      return true;
  }
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store_sing_in_store__WEBPACK_IMPORTED_MODULE_0__["default"],
  worker: singInModuleWorker
});

/***/ }),

/***/ "./build/login-page/store/sing-in-store.js":
/*!*************************************************!*\
  !*** ./build/login-page/store/sing-in-store.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

const singInStore = {
  config: {
    next: {
      byLink: 'login',
      byButton: 'confirm-email'
    }
  },
  data: {
    name: 'sing-in',
    title: 'Sing in',
    link: 'Already have an account',
    content: {
      text: '',
      inputs: ['email'],
      button: 'Continue'
    }
  },
  inputs: {
    email: {
      type: 'text',
      value: '',
      placeholder: 'E-mail',
      icon: '&#xf0e0;',
      error: ''
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (singInStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvc2luZy1pbi5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL3NpbmctaW4tc3RvcmUuanMiXSwibmFtZXMiOlsic2luZ0luTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZW1haWwiLCJvdXRwdXRNZXNzYWdlIiwiaXNFbXB0eSIsInNldCIsInZhbHVlIiwicmVzcG9uc2UiLCJzZW5kIiwicGFyc2VTZXJ2ZXJSZXNwb25zZSIsImlucHV0IiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsInNpbmdJblN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmV4dCIsImJ5TGluayIsImJ5QnV0dG9uIiwiZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEsa0JBQWYsQ0FBa0M7QUFBQ0MsUUFBTSxFQUFFO0FBQUNDO0FBQUQsR0FBVDtBQUFrQkM7QUFBbEIsQ0FBbEMsRUFBb0U7QUFDbkUsTUFBSUQsS0FBSyxDQUFDRSxPQUFOLEVBQUosRUFBc0IsT0FBTyxLQUFQO0FBQ3RCRCxlQUFhLENBQUNFLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMkJILEtBQUssQ0FBQ0ksS0FBakM7QUFFQSxNQUFJQyxRQUFRLEdBQUcsTUFBTUosYUFBYSxDQUFDSyxJQUFkLEVBQXJCO0FBQ0EsU0FBTyxNQUFNQyxtQkFBbUIsQ0FBQ1AsS0FBRCxFQUFRSyxRQUFSLENBQWhDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZUUsbUJBQWYsQ0FBbUNDLEtBQW5DLEVBQTBDO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUExQyxFQUEyRDtBQUMxRCxVQUFRRCxJQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0NELFdBQUssQ0FBQ0csS0FBTixHQUFjRCxPQUFPLENBQUNDLEtBQXRCO0FBQ0EsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxPQUF2QjtBQUNBLGFBQU8sSUFBUDtBQU5GO0FBUUE7QUFFRDs7O0FBRWU7QUFDZEksT0FBSyxFQUFFQyw0REFETztBQUVkQyxRQUFNLEVBQUVsQjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQWE7QUFFYjs7QUFFQSxNQUFNaUIsV0FBVyxHQUFHO0FBQ25CRSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxPQURIO0FBRUxDLGNBQVEsRUFBRTtBQUZMO0FBREMsR0FEVztBQU9uQkMsTUFBSSxFQUFFO0FBQ0xDLFFBQUksRUFBRSxTQUREO0FBRUxDLFNBQUssRUFBRSxTQUZGO0FBR0xDLFFBQUksRUFBRSx5QkFIRDtBQUlMQyxXQUFPLEVBQUU7QUFDUkMsVUFBSSxFQUFFLEVBREU7QUFFUjNCLFlBQU0sRUFBRSxDQUFFLE9BQUYsQ0FGQTtBQUdSNEIsWUFBTSxFQUFFO0FBSEE7QUFKSixHQVBhO0FBaUJuQjVCLFFBQU0sRUFBRTtBQUNQQyxTQUFLLEVBQUU7QUFDTlMsVUFBSSxFQUFFLE1BREE7QUFFTkwsV0FBSyxFQUFFLEVBRkQ7QUFHTndCLGlCQUFXLEVBQUUsUUFIUDtBQUlOQyxVQUFJLEVBQUUsVUFKQTtBQUtObEIsV0FBSyxFQUFFO0FBTEQ7QUFEQTtBQWpCVyxDQUFwQjtBQTRCQTs7QUFFZUksMEVBQWYsRSIsImZpbGUiOiJsNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBzaW5nSW5TdG9yZSBmcm9tICcuLi9zdG9yZS9zaW5nLWluLXN0b3JlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNpbmdJbk1vZHVsZVdvcmtlcih7aW5wdXRzOiB7ZW1haWx9LCBvdXRwdXRNZXNzYWdlfSkge1xyXG5cdGlmKCBlbWFpbC5pc0VtcHR5KCkgKSByZXR1cm4gZmFsc2U7XHJcblx0b3V0cHV0TWVzc2FnZS5zZXQoJ2VtYWlsJywgZW1haWwudmFsdWUpO1xyXG5cdFxyXG5cdGxldCByZXNwb25zZSA9IGF3YWl0IG91dHB1dE1lc3NhZ2Uuc2VuZCgpO1xyXG5cdHJldHVybiBhd2FpdCBwYXJzZVNlcnZlclJlc3BvbnNlKGVtYWlsLCByZXNwb25zZSk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VTZXJ2ZXJSZXNwb25zZShpbnB1dCwge3R5cGUsIG1lc3NhZ2V9KSB7XHJcblx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRpbnB1dC5lcnJvciA9IG1lc3NhZ2UuZXJyb3I7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgJ3N1Y2Nlc3MnOlxyXG5cdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzcycsIG1lc3NhZ2UpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogc2luZ0luU3RvcmUsXHJcblx0d29ya2VyOiBzaW5nSW5Nb2R1bGVXb3JrZXJcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBzaW5nSW5TdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnbG9naW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogJ2NvbmZpcm0tZW1haWwnXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHRuYW1lOiAnc2luZy1pbicsXHJcblx0XHR0aXRsZTogJ1NpbmcgaW4nLFxyXG5cdFx0bGluazogJ0FscmVhZHkgaGF2ZSBhbiBhY2NvdW50JyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJycsXHJcblx0XHRcdGlucHV0czogWyAnZW1haWwnIF0sXHJcblx0XHRcdGJ1dHRvbjogJ0NvbnRpbnVlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRlbWFpbDoge1xyXG5cdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdFLW1haWwnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZjBlMDsnLFxyXG5cdFx0XHRlcnJvcjogJydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2luZ0luU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==