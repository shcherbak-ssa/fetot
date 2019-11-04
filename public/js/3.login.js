(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
    name: 'sing-in',
    next: {
      byLink: 'login',
      byButton: 'confirm-email'
    }
  },
  data: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvc2luZy1pbi5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL3NpbmctaW4tc3RvcmUuanMiXSwibmFtZXMiOlsic2luZ0luTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZW1haWwiLCJvdXRwdXRNZXNzYWdlIiwiaXNFbXB0eSIsInNldCIsInZhbHVlIiwicmVzcG9uc2UiLCJzZW5kIiwicGFyc2VTZXJ2ZXJSZXNwb25zZSIsImlucHV0IiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsInNpbmdJblN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmFtZSIsIm5leHQiLCJieUxpbmsiLCJieUJ1dHRvbiIsImRhdGEiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEsa0JBQWYsQ0FBa0M7QUFBQ0MsUUFBTSxFQUFFO0FBQUNDO0FBQUQsR0FBVDtBQUFrQkM7QUFBbEIsQ0FBbEMsRUFBb0U7QUFDbkUsTUFBSUQsS0FBSyxDQUFDRSxPQUFOLEVBQUosRUFBc0IsT0FBTyxLQUFQO0FBQ3RCRCxlQUFhLENBQUNFLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMkJILEtBQUssQ0FBQ0ksS0FBakM7QUFFQSxNQUFJQyxRQUFRLEdBQUcsTUFBTUosYUFBYSxDQUFDSyxJQUFkLEVBQXJCO0FBQ0EsU0FBTyxNQUFNQyxtQkFBbUIsQ0FBQ1AsS0FBRCxFQUFRSyxRQUFSLENBQWhDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZUUsbUJBQWYsQ0FBbUNDLEtBQW5DLEVBQTBDO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUExQyxFQUEyRDtBQUMxRCxVQUFRRCxJQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0NELFdBQUssQ0FBQ0csS0FBTixHQUFjRCxPQUFPLENBQUNDLEtBQXRCO0FBQ0EsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxPQUF2QjtBQUNBLGFBQU8sSUFBUDtBQU5GO0FBUUE7QUFFRDs7O0FBRWU7QUFDZEksT0FBSyxFQUFFQyw0REFETztBQUVkQyxRQUFNLEVBQUVsQjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQWE7QUFFYjs7QUFFQSxNQUFNaUIsV0FBVyxHQUFHO0FBQ25CRSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFLFNBREM7QUFFUEMsUUFBSSxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxPQURIO0FBRUxDLGNBQVEsRUFBRTtBQUZMO0FBRkMsR0FEVztBQVFuQkMsTUFBSSxFQUFFO0FBQ0xDLFNBQUssRUFBRSxTQURGO0FBRUxDLFFBQUksRUFBRSx5QkFGRDtBQUdMQyxXQUFPLEVBQUU7QUFDUkMsVUFBSSxFQUFFLEVBREU7QUFFUjNCLFlBQU0sRUFBRSxDQUFFLE9BQUYsQ0FGQTtBQUdSNEIsWUFBTSxFQUFFO0FBSEE7QUFISixHQVJhO0FBaUJuQjVCLFFBQU0sRUFBRTtBQUNQQyxTQUFLLEVBQUU7QUFDTlMsVUFBSSxFQUFFLE1BREE7QUFFTkwsV0FBSyxFQUFFLEVBRkQ7QUFHTndCLGlCQUFXLEVBQUUsUUFIUDtBQUlOQyxVQUFJLEVBQUUsVUFKQTtBQUtObEIsV0FBSyxFQUFFO0FBTEQ7QUFEQTtBQWpCVyxDQUFwQjtBQTRCQTs7QUFFZUksMEVBQWYsRSIsImZpbGUiOiIzLmxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IHNpbmdJblN0b3JlIGZyb20gJy4uL3N0b3JlL3NpbmctaW4tc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2luZ0luTW9kdWxlV29ya2VyKHtpbnB1dHM6IHtlbWFpbH0sIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0aWYoIGVtYWlsLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgnZW1haWwnLCBlbWFpbC52YWx1ZSk7XHJcblx0XHJcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgb3V0cHV0TWVzc2FnZS5zZW5kKCk7XHJcblx0cmV0dXJuIGF3YWl0IHBhcnNlU2VydmVyUmVzcG9uc2UoZW1haWwsIHJlc3BvbnNlKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZVNlcnZlclJlc3BvbnNlKGlucHV0LCB7dHlwZSwgbWVzc2FnZX0pIHtcclxuXHRzd2l0Y2goIHR5cGUgKSB7XHJcblx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdGlucHV0LmVycm9yID0gbWVzc2FnZS5lcnJvcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzJywgbWVzc2FnZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiBzaW5nSW5TdG9yZSxcclxuXHR3b3JrZXI6IHNpbmdJbk1vZHVsZVdvcmtlclxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IHNpbmdJblN0b3JlID0ge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0bmFtZTogJ3NpbmctaW4nLFxyXG5cdFx0bmV4dDoge1xyXG5cdFx0XHRieUxpbms6ICdsb2dpbicsXHJcblx0XHRcdGJ5QnV0dG9uOiAnY29uZmlybS1lbWFpbCdcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGE6IHtcclxuXHRcdHRpdGxlOiAnU2luZyBpbicsXHJcblx0XHRsaW5rOiAnQWxyZWFkeSBoYXZlIGFuIGFjY291bnQnLFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0aW5wdXRzOiBbICdlbWFpbCcgXSxcclxuXHRcdFx0YnV0dG9uOiAnQ29udGludWUnXHJcblx0XHR9XHJcblx0fSxcclxuXHRpbnB1dHM6IHtcclxuXHRcdGVtYWlsOiB7XHJcblx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0UtbWFpbCcsXHJcblx0XHRcdGljb246ICcmI3hmMGUwOycsXHJcblx0XHRcdGVycm9yOiAnJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaW5nSW5TdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9