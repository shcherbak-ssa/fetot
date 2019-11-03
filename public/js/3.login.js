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
    },
    password: {
      type: 'password',
      value: '',
      placeholder: 'Password',
      icon: '&#xe801;',
      error: ''
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (singInStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvc2luZy1pbi5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL3NpbmctaW4tc3RvcmUuanMiXSwibmFtZXMiOlsic2luZ0luTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZW1haWwiLCJvdXRwdXRNZXNzYWdlIiwiaXNFbXB0eSIsInNldCIsInZhbHVlIiwicmVzcG9uc2UiLCJzZW5kIiwicGFyc2VTZXJ2ZXJSZXNwb25zZSIsImlucHV0IiwidHlwZSIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsInNpbmdJblN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmFtZSIsIm5leHQiLCJieUxpbmsiLCJieUJ1dHRvbiIsImRhdGEiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFhO0FBRWI7O0FBRUE7QUFFQTs7QUFDQTs7QUFFQSxlQUFlQSxrQkFBZixDQUFrQztBQUFDQyxRQUFNLEVBQUU7QUFBQ0M7QUFBRCxHQUFUO0FBQWtCQztBQUFsQixDQUFsQyxFQUFvRTtBQUNuRSxNQUFJRCxLQUFLLENBQUNFLE9BQU4sRUFBSixFQUFzQixPQUFPLEtBQVA7QUFDdEJELGVBQWEsQ0FBQ0UsR0FBZCxDQUFrQixPQUFsQixFQUEyQkgsS0FBSyxDQUFDSSxLQUFqQztBQUVBLE1BQUlDLFFBQVEsR0FBRyxNQUFNSixhQUFhLENBQUNLLElBQWQsRUFBckI7QUFDQSxTQUFPLE1BQU1DLG1CQUFtQixDQUFDUCxLQUFELEVBQVFLLFFBQVIsQ0FBaEM7QUFDQTtBQUVEOztBQUNBOzs7QUFFQSxlQUFlRSxtQkFBZixDQUFtQ0MsS0FBbkMsRUFBMEM7QUFBQ0MsTUFBRDtBQUFPQztBQUFQLENBQTFDLEVBQTJEO0FBQzFELFVBQVFELElBQVI7QUFDQyxTQUFLLE9BQUw7QUFDQ0QsV0FBSyxDQUFDRyxLQUFOLEdBQWNELE9BQU8sQ0FBQ0MsS0FBdEI7QUFDQSxhQUFPLEtBQVA7O0FBQ0QsU0FBSyxTQUFMO0FBQ0NDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJILE9BQXZCO0FBQ0EsYUFBTyxJQUFQO0FBTkY7QUFRQTtBQUVEOzs7QUFFZTtBQUNkSSxPQUFLLEVBQUVDLDREQURPO0FBRWRDLFFBQU0sRUFBRWxCO0FBRk0sQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBYTtBQUViOztBQUVBLE1BQU1pQixXQUFXLEdBQUc7QUFDbkJFLFFBQU0sRUFBRTtBQUNQQyxRQUFJLEVBQUUsU0FEQztBQUVQQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFLE9BREg7QUFFTEMsY0FBUSxFQUFFO0FBRkw7QUFGQyxHQURXO0FBUW5CQyxNQUFJLEVBQUU7QUFDTEMsU0FBSyxFQUFFLFNBREY7QUFFTEMsUUFBSSxFQUFFLHlCQUZEO0FBR0xDLFdBQU8sRUFBRTtBQUNSQyxVQUFJLEVBQUUsRUFERTtBQUVSM0IsWUFBTSxFQUFFLENBQUUsT0FBRixDQUZBO0FBR1I0QixZQUFNLEVBQUU7QUFIQTtBQUhKLEdBUmE7QUFpQm5CNUIsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRTtBQUNOUyxVQUFJLEVBQUUsTUFEQTtBQUVOTCxXQUFLLEVBQUUsRUFGRDtBQUdOd0IsaUJBQVcsRUFBRSxRQUhQO0FBSU5DLFVBQUksRUFBRSxVQUpBO0FBS05sQixXQUFLLEVBQUU7QUFMRCxLQURBO0FBUVBtQixZQUFRLEVBQUU7QUFDVHJCLFVBQUksRUFBRSxVQURHO0FBRVRMLFdBQUssRUFBRSxFQUZFO0FBR1R3QixpQkFBVyxFQUFFLFVBSEo7QUFJVEMsVUFBSSxFQUFFLFVBSkc7QUFLVGxCLFdBQUssRUFBRTtBQUxFO0FBUkg7QUFqQlcsQ0FBcEI7QUFtQ0E7O0FBRWVJLDBFQUFmLEUiLCJmaWxlIjoiMy5sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBzaW5nSW5TdG9yZSBmcm9tICcuLi9zdG9yZS9zaW5nLWluLXN0b3JlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNpbmdJbk1vZHVsZVdvcmtlcih7aW5wdXRzOiB7ZW1haWx9LCBvdXRwdXRNZXNzYWdlfSkge1xyXG5cdGlmKCBlbWFpbC5pc0VtcHR5KCkgKSByZXR1cm4gZmFsc2U7XHJcblx0b3V0cHV0TWVzc2FnZS5zZXQoJ2VtYWlsJywgZW1haWwudmFsdWUpO1xyXG5cdFxyXG5cdGxldCByZXNwb25zZSA9IGF3YWl0IG91dHB1dE1lc3NhZ2Uuc2VuZCgpO1xyXG5cdHJldHVybiBhd2FpdCBwYXJzZVNlcnZlclJlc3BvbnNlKGVtYWlsLCByZXNwb25zZSk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VTZXJ2ZXJSZXNwb25zZShpbnB1dCwge3R5cGUsIG1lc3NhZ2V9KSB7XHJcblx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRpbnB1dC5lcnJvciA9IG1lc3NhZ2UuZXJyb3I7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgJ3N1Y2Nlc3MnOlxyXG5cdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzcycsIG1lc3NhZ2UpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogc2luZ0luU3RvcmUsXHJcblx0d29ya2VyOiBzaW5nSW5Nb2R1bGVXb3JrZXJcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBzaW5nSW5TdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5hbWU6ICdzaW5nLWluJyxcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnbG9naW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogJ2NvbmZpcm0tZW1haWwnXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHR0aXRsZTogJ1NpbmcgaW4nLFxyXG5cdFx0bGluazogJ0FscmVhZHkgaGF2ZSBhbiBhY2NvdW50JyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJycsXHJcblx0XHRcdGlucHV0czogWyAnZW1haWwnIF0sXHJcblx0XHRcdGJ1dHRvbjogJ0NvbnRpbnVlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRlbWFpbDoge1xyXG5cdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdFLW1haWwnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZjBlMDsnLFxyXG5cdFx0XHRlcnJvcjogJydcclxuXHRcdH0sXHJcblx0XHRwYXNzd29yZDoge1xyXG5cdFx0XHR0eXBlOiAncGFzc3dvcmQnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZTgwMTsnLFxyXG5cdFx0XHRlcnJvcjogJydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2luZ0luU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==