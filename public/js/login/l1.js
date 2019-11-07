(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
  let {
    value
  } = code.state;
  if (value.length < 6) return false;

  if (!/\d{1,6}/.test(value)) {
    code.actions.updateError('Invalid confirmation code');
    return false;
  }

  outputMessage.set('code', value);
  return await serverResponseHandler(code);
}
/*** exports [end] ***/

/*** src [begin] ***/


async function serverResponseHandler(input) {
  return async ({
    type,
    message
  }) => {
    switch (type) {
      case 'error':
        input.actions.updateError(message.error);
        return false;

      case 'success':
        return true;
    }
  };
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
    next: {
      byLink: 'sing-in',
      byButton: 'create-account'
    }
  },
  data: {
    name: 'confirm-email',
    title: 'Confirm email',
    link: 'Change email',
    content: {
      text: 'Please, check your email and enter the received code',
      inputs: ['code']
    }
  },
  inputs: {
    code: {
      name: 'code',
      placeholder: 'Confirmation code',
      icon: '&#xe802;',
      event: true
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (confirmEmailStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY29uZmlybS1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlybUVtYWlsTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiY29kZSIsIm91dHB1dE1lc3NhZ2UiLCJ2YWx1ZSIsInN0YXRlIiwibGVuZ3RoIiwidGVzdCIsImFjdGlvbnMiLCJ1cGRhdGVFcnJvciIsInNldCIsInNlcnZlclJlc3BvbnNlSGFuZGxlciIsImlucHV0IiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsInN0b3JlIiwiY29uZmlybUVtYWlsU3RvcmUiLCJ3b3JrZXIiLCJjb25maWciLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwibmFtZSIsInRpdGxlIiwibGluayIsImNvbnRlbnQiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJpY29uIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWE7QUFFYjs7QUFFQTtBQUVBOztBQUNBOztBQUVBLGVBQWVBLHdCQUFmLENBQXdDO0FBQUNDLFFBQU0sRUFBRTtBQUFDQztBQUFELEdBQVQ7QUFBaUJDO0FBQWpCLENBQXhDLEVBQXlFO0FBQ3hFLE1BQUk7QUFBQ0M7QUFBRCxNQUFVRixJQUFJLENBQUNHLEtBQW5CO0FBQ0EsTUFBSUQsS0FBSyxDQUFDRSxNQUFOLEdBQWUsQ0FBbkIsRUFBdUIsT0FBTyxLQUFQOztBQUV2QixNQUFJLENBQUMsVUFBVUMsSUFBVixDQUFlSCxLQUFmLENBQUwsRUFBNkI7QUFDNUJGLFFBQUksQ0FBQ00sT0FBTCxDQUFhQyxXQUFiLENBQXlCLDJCQUF6QjtBQUNBLFdBQU8sS0FBUDtBQUNBOztBQUVETixlQUFhLENBQUNPLEdBQWQsQ0FBa0IsTUFBbEIsRUFBMEJOLEtBQTFCO0FBQ0EsU0FBTyxNQUFNTyxxQkFBcUIsQ0FBQ1QsSUFBRCxDQUFsQztBQUNBO0FBRUQ7O0FBQ0E7OztBQUVBLGVBQWVTLHFCQUFmLENBQXFDQyxLQUFyQyxFQUE0QztBQUMzQyxTQUFPLE9BQU87QUFBQ0MsUUFBRDtBQUFPQztBQUFQLEdBQVAsS0FBMkI7QUFDakMsWUFBUUQsSUFBUjtBQUNDLFdBQUssT0FBTDtBQUNDRCxhQUFLLENBQUNKLE9BQU4sQ0FBY0MsV0FBZCxDQUEwQkssT0FBTyxDQUFDQyxLQUFsQztBQUNBLGVBQU8sS0FBUDs7QUFDRCxXQUFLLFNBQUw7QUFDQyxlQUFPLElBQVA7QUFMRjtBQU9BLEdBUkQ7QUFTQTtBQUVEOzs7QUFFZTtBQUNkQyxPQUFLLEVBQUVDLGtFQURPO0FBRWRDLFFBQU0sRUFBRWxCO0FBRk0sQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBYTtBQUViOztBQUVBLE1BQU1pQixpQkFBaUIsR0FBRztBQUN6QkUsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQUNMQyxZQUFNLEVBQUUsU0FESDtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQURDLEdBRGlCO0FBT3pCQyxNQUFJLEVBQUU7QUFDTEMsUUFBSSxFQUFFLGVBREQ7QUFFTEMsU0FBSyxFQUFFLGVBRkY7QUFHTEMsUUFBSSxFQUFFLGNBSEQ7QUFJTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxzREFERTtBQUVSM0IsWUFBTSxFQUFFLENBQUUsTUFBRjtBQUZBO0FBSkosR0FQbUI7QUFnQnpCQSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFO0FBQ0xzQixVQUFJLEVBQUUsTUFERDtBQUVMSyxpQkFBVyxFQUFFLG1CQUZSO0FBR0xDLFVBQUksRUFBRSxVQUhEO0FBSUxDLFdBQUssRUFBRTtBQUpGO0FBREM7QUFoQmlCLENBQTFCO0FBMEJBOztBQUVlZCxnRkFBZixFIiwiZmlsZSI6ImwxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IGNvbmZpcm1FbWFpbFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29uZmlybUVtYWlsTW9kdWxlV29ya2VyKHtpbnB1dHM6IHtjb2RlfSwgb3V0cHV0TWVzc2FnZX0pIHtcclxuXHRsZXQge3ZhbHVlfSA9IGNvZGUuc3RhdGU7XHJcblx0aWYoIHZhbHVlLmxlbmd0aCA8IDYgKSByZXR1cm4gZmFsc2U7XHJcblx0XHJcblx0aWYoICEvXFxkezEsNn0vLnRlc3QodmFsdWUpICkge1xyXG5cdFx0Y29kZS5hY3Rpb25zLnVwZGF0ZUVycm9yKCdJbnZhbGlkIGNvbmZpcm1hdGlvbiBjb2RlJyk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdG91dHB1dE1lc3NhZ2Uuc2V0KCdjb2RlJywgdmFsdWUpO1xyXG5cdHJldHVybiBhd2FpdCBzZXJ2ZXJSZXNwb25zZUhhbmRsZXIoY29kZSk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VydmVyUmVzcG9uc2VIYW5kbGVyKGlucHV0KSB7XHJcblx0cmV0dXJuIGFzeW5jICh7dHlwZSwgbWVzc2FnZX0pID0+IHtcclxuXHRcdHN3aXRjaCggdHlwZSApIHtcclxuXHRcdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRcdGlucHV0LmFjdGlvbnMudXBkYXRlRXJyb3IobWVzc2FnZS5lcnJvcik7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogY29uZmlybUVtYWlsU3RvcmUsXHJcblx0d29ya2VyOiBjb25maXJtRW1haWxNb2R1bGVXb3JrZXJcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBjb25maXJtRW1haWxTdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnc2luZy1pbicsXHJcblx0XHRcdGJ5QnV0dG9uOiAnY3JlYXRlLWFjY291bnQnXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHRuYW1lOiAnY29uZmlybS1lbWFpbCcsXHJcblx0XHR0aXRsZTogJ0NvbmZpcm0gZW1haWwnLFxyXG5cdFx0bGluazogJ0NoYW5nZSBlbWFpbCcsXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHRleHQ6ICdQbGVhc2UsIGNoZWNrIHlvdXIgZW1haWwgYW5kIGVudGVyIHRoZSByZWNlaXZlZCBjb2RlJyxcclxuXHRcdFx0aW5wdXRzOiBbICdjb2RlJyBdXHJcblx0XHR9XHJcblx0fSxcclxuXHRpbnB1dHM6IHtcclxuXHRcdGNvZGU6IHtcclxuXHRcdFx0bmFtZTogJ2NvZGUnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0NvbmZpcm1hdGlvbiBjb2RlJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDI7JyxcclxuXHRcdFx0ZXZlbnQ6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlybUVtYWlsU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==