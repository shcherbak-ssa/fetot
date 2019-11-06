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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY29uZmlybS1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlybUVtYWlsTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiY29kZSIsIm91dHB1dE1lc3NhZ2UiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJlcnJvciIsInJlc3BvbnNlIiwic2V0Iiwic2VuZCIsInBhcnNlU2VydmVyUmVzcG9uc2UiLCJpbnB1dCIsInR5cGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwiY29uZmlybUVtYWlsU3RvcmUiLCJ3b3JrZXIiLCJjb25maWciLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwibmFtZSIsInRpdGxlIiwibGluayIsImNvbnRlbnQiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJpY29uIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWE7QUFFYjs7QUFFQTtBQUVBOztBQUNBOztBQUVBLGVBQWVBLHdCQUFmLENBQXdDO0FBQUNDLFFBQU0sRUFBRTtBQUFDQztBQUFELEdBQVQ7QUFBaUJDO0FBQWpCLENBQXhDLEVBQXlFO0FBQ3hFLE1BQUlELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLENBQXhCLEVBQTRCLE9BQU8sS0FBUDs7QUFFNUIsTUFBSSxDQUFDLFVBQVVDLElBQVYsQ0FBZUosSUFBSSxDQUFDRSxLQUFwQixDQUFMLEVBQWtDO0FBQ2pDRixRQUFJLENBQUNLLEtBQUwsR0FBYSwyQkFBYjtBQUNBLFdBQU8sS0FBUDtBQUNBOztBQUVELE1BQUlDLFFBQVEsR0FBRyxNQUFNTCxhQUFhLENBQUNNLEdBQWQsQ0FBa0IsTUFBbEIsRUFBMEJQLElBQUksQ0FBQ0UsS0FBL0IsRUFBc0NNLElBQXRDLEVBQXJCO0FBQ0EsU0FBTyxNQUFNQyxtQkFBbUIsQ0FBQ1QsSUFBRCxFQUFPTSxRQUFQLENBQWhDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZUcsbUJBQWYsQ0FBbUNDLEtBQW5DLEVBQTBDO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUExQyxFQUEyRDtBQUMxRCxVQUFRRCxJQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0NFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FGLFdBQUssQ0FBQ0wsS0FBTixHQUFjTyxPQUFPLENBQUNQLEtBQXRCO0FBQ0EsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDUSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUF2QjtBQUNBLGFBQU8sSUFBUDtBQVBGO0FBU0E7QUFFRDs7O0FBRWU7QUFDZEcsT0FBSyxFQUFFQyxrRUFETztBQUVkQyxRQUFNLEVBQUVuQjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQWE7QUFFYjs7QUFFQSxNQUFNa0IsaUJBQWlCLEdBQUc7QUFDekJFLFFBQU0sRUFBRTtBQUNQQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFLFNBREg7QUFFTEMsY0FBUSxFQUFFO0FBRkw7QUFEQyxHQURpQjtBQU96QkMsTUFBSSxFQUFFO0FBQ0xDLFFBQUksRUFBRSxlQUREO0FBRUxDLFNBQUssRUFBRSxlQUZGO0FBR0xDLFFBQUksRUFBRSxjQUhEO0FBSUxDLFdBQU8sRUFBRTtBQUNSQyxVQUFJLEVBQUUsc0RBREU7QUFFUjVCLFlBQU0sRUFBRSxDQUFFLE1BQUY7QUFGQTtBQUpKLEdBUG1CO0FBZ0J6QkEsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQUNMVyxVQUFJLEVBQUUsTUFERDtBQUVMVCxXQUFLLEVBQUUsRUFGRjtBQUdMMEIsaUJBQVcsRUFBRSxtQkFIUjtBQUlMQyxVQUFJLEVBQUUsVUFKRDtBQUtMeEIsV0FBSyxFQUFFLEVBTEY7QUFNTHlCLFdBQUssRUFBRTtBQU5GO0FBREM7QUFoQmlCLENBQTFCO0FBNEJBOztBQUVlZCxnRkFBZixFIiwiZmlsZSI6ImwxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IGNvbmZpcm1FbWFpbFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbmZpcm0tZW1haWwtc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29uZmlybUVtYWlsTW9kdWxlV29ya2VyKHtpbnB1dHM6IHtjb2RlfSwgb3V0cHV0TWVzc2FnZX0pIHtcclxuXHRpZiggY29kZS52YWx1ZS5sZW5ndGggPCA2ICkgcmV0dXJuIGZhbHNlO1xyXG5cdFxyXG5cdGlmKCAhL1xcZHsxLDZ9Ly50ZXN0KGNvZGUudmFsdWUpICkge1xyXG5cdFx0Y29kZS5lcnJvciA9ICdJbnZhbGlkIGNvbmZpcm1hdGlvbiBjb2RlJztcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0XHJcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgb3V0cHV0TWVzc2FnZS5zZXQoJ2NvZGUnLCBjb2RlLnZhbHVlKS5zZW5kKCk7XHJcblx0cmV0dXJuIGF3YWl0IHBhcnNlU2VydmVyUmVzcG9uc2UoY29kZSwgcmVzcG9uc2UpO1xyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlU2VydmVyUmVzcG9uc2UoaW5wdXQsIHt0eXBlLCBtZXNzYWdlfSkge1xyXG5cdHN3aXRjaCggdHlwZSApIHtcclxuXHRcdGNhc2UgJ2Vycm9yJzpcclxuXHRcdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XHJcblx0XHRcdGlucHV0LmVycm9yID0gbWVzc2FnZS5lcnJvcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzJywgbWVzc2FnZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiBjb25maXJtRW1haWxTdG9yZSxcclxuXHR3b3JrZXI6IGNvbmZpcm1FbWFpbE1vZHVsZVdvcmtlclxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNvbmZpcm1FbWFpbFN0b3JlID0ge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0bmV4dDoge1xyXG5cdFx0XHRieUxpbms6ICdzaW5nLWluJyxcclxuXHRcdFx0YnlCdXR0b246ICdjcmVhdGUtYWNjb3VudCdcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGE6IHtcclxuXHRcdG5hbWU6ICdjb25maXJtLWVtYWlsJyxcclxuXHRcdHRpdGxlOiAnQ29uZmlybSBlbWFpbCcsXHJcblx0XHRsaW5rOiAnQ2hhbmdlIGVtYWlsJyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJ1BsZWFzZSwgY2hlY2sgeW91ciBlbWFpbCBhbmQgZW50ZXIgdGhlIHJlY2VpdmVkIGNvZGUnLFxyXG5cdFx0XHRpbnB1dHM6IFsgJ2NvZGUnIF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGlucHV0czoge1xyXG5cdFx0Y29kZToge1xyXG5cdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdDb25maXJtYXRpb24gY29kZScsXHJcblx0XHRcdGljb246ICcmI3hlODAyOycsXHJcblx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0ZXZlbnQ6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlybUVtYWlsU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==