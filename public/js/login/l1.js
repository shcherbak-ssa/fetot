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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY29uZmlybS1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlybUVtYWlsTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiY29kZSIsIm91dHB1dE1lc3NhZ2UiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJlcnJvciIsInJlc3BvbnNlIiwic2V0Iiwic2VuZCIsInBhcnNlU2VydmVyUmVzcG9uc2UiLCJpbnB1dCIsInR5cGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwiY29uZmlybUVtYWlsU3RvcmUiLCJ3b3JrZXIiLCJjb25maWciLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwibmFtZSIsInRpdGxlIiwibGluayIsImNvbnRlbnQiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJpY29uIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWE7QUFFYjs7QUFFQTtBQUVBOztBQUNBOztBQUVBLGVBQWVBLHdCQUFmLENBQXdDO0FBQUNDLFFBQU0sRUFBRTtBQUFDQztBQUFELEdBQVQ7QUFBaUJDO0FBQWpCLENBQXhDLEVBQXlFO0FBQ3hFLE1BQUlELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLENBQXhCLEVBQTRCLE9BQU8sS0FBUDs7QUFFNUIsTUFBSSxDQUFDLFVBQVVDLElBQVYsQ0FBZUosSUFBSSxDQUFDRSxLQUFwQixDQUFMLEVBQWtDO0FBQ2pDRixRQUFJLENBQUNLLEtBQUwsR0FBYSwyQkFBYjtBQUNBLFdBQU8sS0FBUDtBQUNBOztBQUVELE1BQUlDLFFBQVEsR0FBRyxNQUFNTCxhQUFhLENBQUNNLEdBQWQsQ0FBa0IsTUFBbEIsRUFBMEJQLElBQUksQ0FBQ0UsS0FBL0IsRUFBc0NNLElBQXRDLEVBQXJCO0FBQ0EsU0FBTyxNQUFNQyxtQkFBbUIsQ0FBQ1QsSUFBRCxFQUFPTSxRQUFQLENBQWhDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZUcsbUJBQWYsQ0FBbUNDLEtBQW5DLEVBQTBDO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUExQyxFQUEyRDtBQUMxRCxVQUFRRCxJQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0NFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FGLFdBQUssQ0FBQ0wsS0FBTixHQUFjTyxPQUFPLENBQUNQLEtBQXRCO0FBQ0EsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDUSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUF2QjtBQUNBLGFBQU8sSUFBUDtBQVBGO0FBU0E7QUFFRDs7O0FBRWU7QUFDZEcsT0FBSyxFQUFFQyxrRUFETztBQUVkQyxRQUFNLEVBQUVuQjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQWE7QUFFYjs7QUFFQSxNQUFNa0IsaUJBQWlCLEdBQUc7QUFDekJFLFFBQU0sRUFBRTtBQUNQQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFLFNBREg7QUFFTEMsY0FBUSxFQUFFO0FBRkw7QUFEQyxHQURpQjtBQU96QkMsTUFBSSxFQUFFO0FBQ0xDLFFBQUksRUFBRSxlQUREO0FBRUxDLFNBQUssRUFBRSxlQUZGO0FBR0xDLFFBQUksRUFBRSxjQUhEO0FBSUxDLFdBQU8sRUFBRTtBQUNSQyxVQUFJLEVBQUUsc0RBREU7QUFFUjVCLFlBQU0sRUFBRSxDQUFFLE1BQUY7QUFGQTtBQUpKLEdBUG1CO0FBZ0J6QkEsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQUNMdUIsVUFBSSxFQUFFLE1BREQ7QUFFTEssaUJBQVcsRUFBRSxtQkFGUjtBQUdMQyxVQUFJLEVBQUUsVUFIRDtBQUlMQyxXQUFLLEVBQUU7QUFKRjtBQURDO0FBaEJpQixDQUExQjtBQTBCQTs7QUFFZWQsZ0ZBQWYsRSIsImZpbGUiOiJsMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBjb25maXJtRW1haWxTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maXJtLWVtYWlsLXN0b3JlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1FbWFpbE1vZHVsZVdvcmtlcih7aW5wdXRzOiB7Y29kZX0sIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0aWYoIGNvZGUudmFsdWUubGVuZ3RoIDwgNiApIHJldHVybiBmYWxzZTtcclxuXHRcclxuXHRpZiggIS9cXGR7MSw2fS8udGVzdChjb2RlLnZhbHVlKSApIHtcclxuXHRcdGNvZGUuZXJyb3IgPSAnSW52YWxpZCBjb25maXJtYXRpb24gY29kZSc7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdGxldCByZXNwb25zZSA9IGF3YWl0IG91dHB1dE1lc3NhZ2Uuc2V0KCdjb2RlJywgY29kZS52YWx1ZSkuc2VuZCgpO1xyXG5cdHJldHVybiBhd2FpdCBwYXJzZVNlcnZlclJlc3BvbnNlKGNvZGUsIHJlc3BvbnNlKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZVNlcnZlclJlc3BvbnNlKGlucHV0LCB7dHlwZSwgbWVzc2FnZX0pIHtcclxuXHRzd2l0Y2goIHR5cGUgKSB7XHJcblx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5cdFx0XHRpbnB1dC5lcnJvciA9IG1lc3NhZ2UuZXJyb3I7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgJ3N1Y2Nlc3MnOlxyXG5cdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzcycsIG1lc3NhZ2UpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogY29uZmlybUVtYWlsU3RvcmUsXHJcblx0d29ya2VyOiBjb25maXJtRW1haWxNb2R1bGVXb3JrZXJcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBjb25maXJtRW1haWxTdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnc2luZy1pbicsXHJcblx0XHRcdGJ5QnV0dG9uOiAnY3JlYXRlLWFjY291bnQnXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHRuYW1lOiAnY29uZmlybS1lbWFpbCcsXHJcblx0XHR0aXRsZTogJ0NvbmZpcm0gZW1haWwnLFxyXG5cdFx0bGluazogJ0NoYW5nZSBlbWFpbCcsXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHRleHQ6ICdQbGVhc2UsIGNoZWNrIHlvdXIgZW1haWwgYW5kIGVudGVyIHRoZSByZWNlaXZlZCBjb2RlJyxcclxuXHRcdFx0aW5wdXRzOiBbICdjb2RlJyBdXHJcblx0XHR9XHJcblx0fSxcclxuXHRpbnB1dHM6IHtcclxuXHRcdGNvZGU6IHtcclxuXHRcdFx0bmFtZTogJ2NvZGUnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0NvbmZpcm1hdGlvbiBjb2RlJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDI7JyxcclxuXHRcdFx0ZXZlbnQ6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlybUVtYWlsU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==