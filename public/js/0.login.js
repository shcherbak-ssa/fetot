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
  inputs,
  outputMessage
}) {
  let input = inputs['confirm-email'];
  console.log('confirm-email', input);
  if (input.value.length < 6) return false;
  console.log('confirm-email value 1', input.value);

  if (/[^\d]+/i.test(input.value)) {
    input.error = 'Invalid confirmation code';
    return false;
  }

  console.log('confirm-email value 2', input.value);
  let response = await outputMessage.set('code', input.value).send();
  return await parseServerResponse(input, response);
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
      inputs: ['confirm-email']
    }
  },
  inputs: {
    'confirm-email': {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY29uZmlybS1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlybUVtYWlsTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwib3V0cHV0TWVzc2FnZSIsImlucHV0IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwibGVuZ3RoIiwidGVzdCIsImVycm9yIiwicmVzcG9uc2UiLCJzZXQiLCJzZW5kIiwicGFyc2VTZXJ2ZXJSZXNwb25zZSIsInR5cGUiLCJtZXNzYWdlIiwic3RvcmUiLCJjb25maXJtRW1haWxTdG9yZSIsIndvcmtlciIsImNvbmZpZyIsIm5hbWUiLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwidGl0bGUiLCJsaW5rIiwiY29udGVudCIsInRleHQiLCJwbGFjZWhvbGRlciIsImljb24iLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEsd0JBQWYsQ0FBd0M7QUFBQ0MsUUFBRDtBQUFTQztBQUFULENBQXhDLEVBQWlFO0FBQ2hFLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDLGVBQUQsQ0FBbEI7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsS0FBN0I7QUFDQSxNQUFJQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixDQUF6QixFQUE2QixPQUFPLEtBQVA7QUFFN0JILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDRixLQUFLLENBQUNHLEtBQTNDOztBQUNBLE1BQUksVUFBVUUsSUFBVixDQUFlTCxLQUFLLENBQUNHLEtBQXJCLENBQUosRUFBa0M7QUFDakNILFNBQUssQ0FBQ00sS0FBTixHQUFjLDJCQUFkO0FBQ0EsV0FBTyxLQUFQO0FBQ0E7O0FBRURMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDRixLQUFLLENBQUNHLEtBQTNDO0FBQ0EsTUFBSUksUUFBUSxHQUFHLE1BQU1SLGFBQWEsQ0FBQ1MsR0FBZCxDQUFrQixNQUFsQixFQUEwQlIsS0FBSyxDQUFDRyxLQUFoQyxFQUF1Q00sSUFBdkMsRUFBckI7QUFDQSxTQUFPLE1BQU1DLG1CQUFtQixDQUFDVixLQUFELEVBQVFPLFFBQVIsQ0FBaEM7QUFDQTtBQUVEOztBQUNBOzs7QUFFQSxlQUFlRyxtQkFBZixDQUFtQ1YsS0FBbkMsRUFBMEM7QUFBQ1csTUFBRDtBQUFPQztBQUFQLENBQTFDLEVBQTJEO0FBQzFELFVBQVFELElBQVI7QUFDQyxTQUFLLE9BQUw7QUFDQ1gsV0FBSyxDQUFDTSxLQUFOLEdBQWNNLE9BQU8sQ0FBQ04sS0FBdEI7QUFDQSxhQUFPLEtBQVA7O0FBQ0QsU0FBSyxTQUFMO0FBQ0NMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJVLE9BQXZCO0FBQ0EsYUFBTyxJQUFQO0FBTkY7QUFRQTtBQUVEOzs7QUFFZTtBQUNkQyxPQUFLLEVBQUVDLGtFQURPO0FBRWRDLFFBQU0sRUFBRWxCO0FBRk0sQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBYTtBQUViOztBQUVBLE1BQU1pQixpQkFBaUIsR0FBRztBQUN6QkUsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRSxlQURDO0FBRVBDLFFBQUksRUFBRTtBQUNMQyxZQUFNLEVBQUUsU0FESDtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQUZDLEdBRGlCO0FBUXpCQyxNQUFJLEVBQUU7QUFDTEMsU0FBSyxFQUFFLGVBREY7QUFFTEMsUUFBSSxFQUFFLGNBRkQ7QUFHTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxzREFERTtBQUVSM0IsWUFBTSxFQUFFLENBQUUsZUFBRjtBQUZBO0FBSEosR0FSbUI7QUFnQnpCQSxRQUFNLEVBQUU7QUFDUCxxQkFBaUI7QUFDaEJhLFVBQUksRUFBRSxNQURVO0FBRWhCUixXQUFLLEVBQUUsRUFGUztBQUdoQnVCLGlCQUFXLEVBQUUsbUJBSEc7QUFJaEJDLFVBQUksRUFBRSxVQUpVO0FBS2hCckIsV0FBSyxFQUFFLEVBTFM7QUFNaEJzQixXQUFLLEVBQUU7QUFOUztBQURWO0FBaEJpQixDQUExQjtBQTRCQTs7QUFFZWQsZ0ZBQWYsRSIsImZpbGUiOiIwLmxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IGNvbmZpcm1FbWFpbFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29uZmlybUVtYWlsTW9kdWxlV29ya2VyKHtpbnB1dHMsIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0bGV0IGlucHV0ID0gaW5wdXRzWydjb25maXJtLWVtYWlsJ107XHJcblx0Y29uc29sZS5sb2coJ2NvbmZpcm0tZW1haWwnLCBpbnB1dCk7XHJcblx0aWYoIGlucHV0LnZhbHVlLmxlbmd0aCA8IDYgKSByZXR1cm4gZmFsc2U7XHJcblx0XHJcblx0Y29uc29sZS5sb2coJ2NvbmZpcm0tZW1haWwgdmFsdWUgMScsIGlucHV0LnZhbHVlKTtcclxuXHRpZiggL1teXFxkXSsvaS50ZXN0KGlucHV0LnZhbHVlKSApIHtcclxuXHRcdGlucHV0LmVycm9yID0gJ0ludmFsaWQgY29uZmlybWF0aW9uIGNvZGUnO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRjb25zb2xlLmxvZygnY29uZmlybS1lbWFpbCB2YWx1ZSAyJywgaW5wdXQudmFsdWUpO1xyXG5cdGxldCByZXNwb25zZSA9IGF3YWl0IG91dHB1dE1lc3NhZ2Uuc2V0KCdjb2RlJywgaW5wdXQudmFsdWUpLnNlbmQoKTtcclxuXHRyZXR1cm4gYXdhaXQgcGFyc2VTZXJ2ZXJSZXNwb25zZShpbnB1dCwgcmVzcG9uc2UpO1xyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlU2VydmVyUmVzcG9uc2UoaW5wdXQsIHt0eXBlLCBtZXNzYWdlfSkge1xyXG5cdHN3aXRjaCggdHlwZSApIHtcclxuXHRcdGNhc2UgJ2Vycm9yJzpcclxuXHRcdFx0aW5wdXQuZXJyb3IgPSBtZXNzYWdlLmVycm9yO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBtZXNzYWdlKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c3RvcmU6IGNvbmZpcm1FbWFpbFN0b3JlLFxyXG5cdHdvcmtlcjogY29uZmlybUVtYWlsTW9kdWxlV29ya2VyXHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgY29uZmlybUVtYWlsU3RvcmUgPSB7XHJcblx0Y29uZmlnOiB7XHJcblx0XHRuYW1lOiAnY29uZmlybS1lbWFpbCcsXHJcblx0XHRuZXh0OiB7XHJcblx0XHRcdGJ5TGluazogJ3NpbmctaW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogJ2NyZWF0ZS1hY2NvdW50J1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YToge1xyXG5cdFx0dGl0bGU6ICdDb25maXJtIGVtYWlsJyxcclxuXHRcdGxpbms6ICdDaGFuZ2UgZW1haWwnLFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHR0ZXh0OiAnUGxlYXNlLCBjaGVjayB5b3VyIGVtYWlsIGFuZCBlbnRlciB0aGUgcmVjZWl2ZWQgY29kZScsXHJcblx0XHRcdGlucHV0czogWyAnY29uZmlybS1lbWFpbCcgXVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHQnY29uZmlybS1lbWFpbCc6IHtcclxuXHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnQ29uZmlybWF0aW9uIGNvZGUnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZTgwMjsnLFxyXG5cdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdGV2ZW50OiB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpcm1FbWFpbFN0b3JlOyJdLCJzb3VyY2VSb290IjoiIn0=