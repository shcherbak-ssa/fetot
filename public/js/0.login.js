(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./build/login-page/modules/confirm-email.js":
/*!***************************************************!*\
  !*** ./build/login-page/modules/confirm-email.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_confirm_email_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/confirm-email-store */ "./build/login-page/store/confirm-email-store.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** exports [begin] ***/

async function confirmEmailModuleWorker({
  inputs: {
    code
  },
  outputMessage
}) {
  if (code.value.length < 6) return false;

  if (!/\d{1,6}/.test(code.value)) {
    code.error = 'Invalid confirmation code';
    return false;
  }

  let response = await outputMessage.set('code', code.value).send();
  return await parseServerResponse(code, response);
}
/*** exports [end] ***/

/*** src [begin] ***/


async function parseServerResponse(input, {
  type,
  message
}) {
  switch (type) {
    case 'error':
      console.log(message);
      input.error = message.error;
      return false;

    case 'success':
      console.log('success', message);
      return true;
  }
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store_confirm_email_store__WEBPACK_IMPORTED_MODULE_0__["default"],
  worker: confirmEmailModuleWorker
});

/***/ }),

/***/ "./build/login-page/store/confirm-email-store.js":
/*!*******************************************************!*\
  !*** ./build/login-page/store/confirm-email-store.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

const confirmEmailStore = {
  config: {
    name: 'confirm-email',
    next: {
      byLink: 'sing-in',
      byButton: 'create-account'
    }
  },
  data: {
    title: 'Confirm email',
    link: 'Change email',
    content: {
      text: 'Please, check your email and enter the received code',
      inputs: ['code']
    }
  },
  inputs: {
    code: {
      type: 'text',
      value: '',
      placeholder: 'Confirmation code',
      icon: '&#xe802;',
      error: '',
      event: true
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (confirmEmailStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY29uZmlybS1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlybUVtYWlsTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiY29kZSIsIm91dHB1dE1lc3NhZ2UiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJlcnJvciIsInJlc3BvbnNlIiwic2V0Iiwic2VuZCIsInBhcnNlU2VydmVyUmVzcG9uc2UiLCJpbnB1dCIsInR5cGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwiY29uZmlybUVtYWlsU3RvcmUiLCJ3b3JrZXIiLCJjb25maWciLCJuYW1lIiwibmV4dCIsImJ5TGluayIsImJ5QnV0dG9uIiwiZGF0YSIsInRpdGxlIiwibGluayIsImNvbnRlbnQiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJpY29uIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWE7QUFFYjs7QUFFQTtBQUVBOztBQUNBOztBQUVBLGVBQWVBLHdCQUFmLENBQXdDO0FBQUNDLFFBQU0sRUFBRTtBQUFDQztBQUFELEdBQVQ7QUFBaUJDO0FBQWpCLENBQXhDLEVBQXlFO0FBQ3hFLE1BQUlELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLENBQXhCLEVBQTRCLE9BQU8sS0FBUDs7QUFFNUIsTUFBSSxDQUFDLFVBQVVDLElBQVYsQ0FBZUosSUFBSSxDQUFDRSxLQUFwQixDQUFMLEVBQWtDO0FBQ2pDRixRQUFJLENBQUNLLEtBQUwsR0FBYSwyQkFBYjtBQUNBLFdBQU8sS0FBUDtBQUNBOztBQUVELE1BQUlDLFFBQVEsR0FBRyxNQUFNTCxhQUFhLENBQUNNLEdBQWQsQ0FBa0IsTUFBbEIsRUFBMEJQLElBQUksQ0FBQ0UsS0FBL0IsRUFBc0NNLElBQXRDLEVBQXJCO0FBQ0EsU0FBTyxNQUFNQyxtQkFBbUIsQ0FBQ1QsSUFBRCxFQUFPTSxRQUFQLENBQWhDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZUcsbUJBQWYsQ0FBbUNDLEtBQW5DLEVBQTBDO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUExQyxFQUEyRDtBQUMxRCxVQUFRRCxJQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0NFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FGLFdBQUssQ0FBQ0wsS0FBTixHQUFjTyxPQUFPLENBQUNQLEtBQXRCO0FBQ0EsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDUSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUF2QjtBQUNBLGFBQU8sSUFBUDtBQVBGO0FBU0E7QUFFRDs7O0FBRWU7QUFDZEcsT0FBSyxFQUFFQyxrRUFETztBQUVkQyxRQUFNLEVBQUVuQjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQWE7QUFFYjs7QUFFQSxNQUFNa0IsaUJBQWlCLEdBQUc7QUFDekJFLFFBQU0sRUFBRTtBQUNQQyxRQUFJLEVBQUUsZUFEQztBQUVQQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFLFNBREg7QUFFTEMsY0FBUSxFQUFFO0FBRkw7QUFGQyxHQURpQjtBQVF6QkMsTUFBSSxFQUFFO0FBQ0xDLFNBQUssRUFBRSxlQURGO0FBRUxDLFFBQUksRUFBRSxjQUZEO0FBR0xDLFdBQU8sRUFBRTtBQUNSQyxVQUFJLEVBQUUsc0RBREU7QUFFUjVCLFlBQU0sRUFBRSxDQUFFLE1BQUY7QUFGQTtBQUhKLEdBUm1CO0FBZ0J6QkEsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQUNMVyxVQUFJLEVBQUUsTUFERDtBQUVMVCxXQUFLLEVBQUUsRUFGRjtBQUdMMEIsaUJBQVcsRUFBRSxtQkFIUjtBQUlMQyxVQUFJLEVBQUUsVUFKRDtBQUtMeEIsV0FBSyxFQUFFLEVBTEY7QUFNTHlCLFdBQUssRUFBRTtBQU5GO0FBREM7QUFoQmlCLENBQTFCO0FBNEJBOztBQUVlZCxnRkFBZixFIiwiZmlsZSI6IjAubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgY29uZmlybUVtYWlsU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29uZmlybS1lbWFpbC1zdG9yZSc7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25maXJtRW1haWxNb2R1bGVXb3JrZXIoe2lucHV0czoge2NvZGV9LCBvdXRwdXRNZXNzYWdlfSkge1xyXG5cdGlmKCBjb2RlLnZhbHVlLmxlbmd0aCA8IDYgKSByZXR1cm4gZmFsc2U7XHJcblx0XHJcblx0aWYoICEvXFxkezEsNn0vLnRlc3QoY29kZS52YWx1ZSkgKSB7XHJcblx0XHRjb2RlLmVycm9yID0gJ0ludmFsaWQgY29uZmlybWF0aW9uIGNvZGUnO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBvdXRwdXRNZXNzYWdlLnNldCgnY29kZScsIGNvZGUudmFsdWUpLnNlbmQoKTtcclxuXHRyZXR1cm4gYXdhaXQgcGFyc2VTZXJ2ZXJSZXNwb25zZShjb2RlLCByZXNwb25zZSk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VTZXJ2ZXJSZXNwb25zZShpbnB1dCwge3R5cGUsIG1lc3NhZ2V9KSB7XHJcblx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHRcdFx0aW5wdXQuZXJyb3IgPSBtZXNzYWdlLmVycm9yO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBtZXNzYWdlKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c3RvcmU6IGNvbmZpcm1FbWFpbFN0b3JlLFxyXG5cdHdvcmtlcjogY29uZmlybUVtYWlsTW9kdWxlV29ya2VyXHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgY29uZmlybUVtYWlsU3RvcmUgPSB7XHJcblx0Y29uZmlnOiB7XHJcblx0XHRuYW1lOiAnY29uZmlybS1lbWFpbCcsXHJcblx0XHRuZXh0OiB7XHJcblx0XHRcdGJ5TGluazogJ3NpbmctaW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogJ2NyZWF0ZS1hY2NvdW50J1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YToge1xyXG5cdFx0dGl0bGU6ICdDb25maXJtIGVtYWlsJyxcclxuXHRcdGxpbms6ICdDaGFuZ2UgZW1haWwnLFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHR0ZXh0OiAnUGxlYXNlLCBjaGVjayB5b3VyIGVtYWlsIGFuZCBlbnRlciB0aGUgcmVjZWl2ZWQgY29kZScsXHJcblx0XHRcdGlucHV0czogWyAnY29kZScgXVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRjb2RlOiB7XHJcblx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0NvbmZpcm1hdGlvbiBjb2RlJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDI7JyxcclxuXHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRldmVudDogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maXJtRW1haWxTdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9