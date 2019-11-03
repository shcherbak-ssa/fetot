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
  if (input.value.length < 6) return false;

  if (/[^\w]/i.test(value)) {
    input.error = 'Invalid confirmation code';
    return false;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY29uZmlybS1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlybUVtYWlsTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwib3V0cHV0TWVzc2FnZSIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJ0ZXN0IiwiZXJyb3IiLCJyZXNwb25zZSIsInNldCIsInNlbmQiLCJwYXJzZVNlcnZlclJlc3BvbnNlIiwidHlwZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic3RvcmUiLCJjb25maXJtRW1haWxTdG9yZSIsIndvcmtlciIsImNvbmZpZyIsIm5hbWUiLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwidGl0bGUiLCJsaW5rIiwiY29udGVudCIsInRleHQiLCJwbGFjZWhvbGRlciIsImljb24iLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEsd0JBQWYsQ0FBd0M7QUFBQ0MsUUFBRDtBQUFTQztBQUFULENBQXhDLEVBQWlFO0FBQ2hFLE1BQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDLGVBQUQsQ0FBbEI7QUFDQSxNQUFJRSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixDQUF6QixFQUE2QixPQUFPLEtBQVA7O0FBRTdCLE1BQUksU0FBU0MsSUFBVCxDQUFjRixLQUFkLENBQUosRUFBMkI7QUFDMUJELFNBQUssQ0FBQ0ksS0FBTixHQUFjLDJCQUFkO0FBQ0EsV0FBTyxLQUFQO0FBQ0E7O0FBRUQsTUFBSUMsUUFBUSxHQUFHLE1BQU1OLGFBQWEsQ0FBQ08sR0FBZCxDQUFrQixNQUFsQixFQUEwQk4sS0FBSyxDQUFDQyxLQUFoQyxFQUF1Q00sSUFBdkMsRUFBckI7QUFDQSxTQUFPLE1BQU1DLG1CQUFtQixDQUFDUixLQUFELEVBQVFLLFFBQVIsQ0FBaEM7QUFDQTtBQUVEOztBQUNBOzs7QUFFQSxlQUFlRyxtQkFBZixDQUFtQ1IsS0FBbkMsRUFBMEM7QUFBQ1MsTUFBRDtBQUFPQztBQUFQLENBQTFDLEVBQTJEO0FBQzFELFVBQVFELElBQVI7QUFDQyxTQUFLLE9BQUw7QUFDQ1QsV0FBSyxDQUFDSSxLQUFOLEdBQWNNLE9BQU8sQ0FBQ04sS0FBdEI7QUFDQSxhQUFPLEtBQVA7O0FBQ0QsU0FBSyxTQUFMO0FBQ0NPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLE9BQXZCO0FBQ0EsYUFBTyxJQUFQO0FBTkY7QUFRQTtBQUVEOzs7QUFFZTtBQUNkRyxPQUFLLEVBQUVDLGtFQURPO0FBRWRDLFFBQU0sRUFBRWxCO0FBRk0sQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBYTtBQUViOztBQUVBLE1BQU1pQixpQkFBaUIsR0FBRztBQUN6QkUsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRSxlQURDO0FBRVBDLFFBQUksRUFBRTtBQUNMQyxZQUFNLEVBQUUsU0FESDtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQUZDLEdBRGlCO0FBUXpCQyxNQUFJLEVBQUU7QUFDTEMsU0FBSyxFQUFFLGVBREY7QUFFTEMsUUFBSSxFQUFFLGNBRkQ7QUFHTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxzREFERTtBQUVSM0IsWUFBTSxFQUFFLENBQUUsZUFBRjtBQUZBO0FBSEosR0FSbUI7QUFnQnpCQSxRQUFNLEVBQUU7QUFDUCxxQkFBaUI7QUFDaEJXLFVBQUksRUFBRSxNQURVO0FBRWhCUixXQUFLLEVBQUUsRUFGUztBQUdoQnlCLGlCQUFXLEVBQUUsbUJBSEc7QUFJaEJDLFVBQUksRUFBRSxVQUpVO0FBS2hCdkIsV0FBSyxFQUFFLEVBTFM7QUFNaEJ3QixXQUFLLEVBQUU7QUFOUztBQURWO0FBaEJpQixDQUExQjtBQTRCQTs7QUFFZWQsZ0ZBQWYsRSIsImZpbGUiOiIwLmxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IGNvbmZpcm1FbWFpbFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29uZmlybUVtYWlsTW9kdWxlV29ya2VyKHtpbnB1dHMsIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0bGV0IGlucHV0ID0gaW5wdXRzWydjb25maXJtLWVtYWlsJ107XHJcblx0aWYoIGlucHV0LnZhbHVlLmxlbmd0aCA8IDYgKSByZXR1cm4gZmFsc2U7XHJcblx0XHJcblx0aWYoIC9bXlxcd10vaS50ZXN0KHZhbHVlKSApIHtcclxuXHRcdGlucHV0LmVycm9yID0gJ0ludmFsaWQgY29uZmlybWF0aW9uIGNvZGUnO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBvdXRwdXRNZXNzYWdlLnNldCgnY29kZScsIGlucHV0LnZhbHVlKS5zZW5kKCk7XHJcblx0cmV0dXJuIGF3YWl0IHBhcnNlU2VydmVyUmVzcG9uc2UoaW5wdXQsIHJlc3BvbnNlKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZVNlcnZlclJlc3BvbnNlKGlucHV0LCB7dHlwZSwgbWVzc2FnZX0pIHtcclxuXHRzd2l0Y2goIHR5cGUgKSB7XHJcblx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdGlucHV0LmVycm9yID0gbWVzc2FnZS5lcnJvcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzJywgbWVzc2FnZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiBjb25maXJtRW1haWxTdG9yZSxcclxuXHR3b3JrZXI6IGNvbmZpcm1FbWFpbE1vZHVsZVdvcmtlclxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNvbmZpcm1FbWFpbFN0b3JlID0ge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0bmFtZTogJ2NvbmZpcm0tZW1haWwnLFxyXG5cdFx0bmV4dDoge1xyXG5cdFx0XHRieUxpbms6ICdzaW5nLWluJyxcclxuXHRcdFx0YnlCdXR0b246ICdjcmVhdGUtYWNjb3VudCdcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGE6IHtcclxuXHRcdHRpdGxlOiAnQ29uZmlybSBlbWFpbCcsXHJcblx0XHRsaW5rOiAnQ2hhbmdlIGVtYWlsJyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJ1BsZWFzZSwgY2hlY2sgeW91ciBlbWFpbCBhbmQgZW50ZXIgdGhlIHJlY2VpdmVkIGNvZGUnLFxyXG5cdFx0XHRpbnB1dHM6IFsgJ2NvbmZpcm0tZW1haWwnIF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGlucHV0czoge1xyXG5cdFx0J2NvbmZpcm0tZW1haWwnOiB7XHJcblx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0NvbmZpcm1hdGlvbiBjb2RlJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDI7JyxcclxuXHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRldmVudDogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maXJtRW1haWxTdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9