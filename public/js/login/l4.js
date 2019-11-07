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
  if (await email.actions.isEmpty()) return false;
  outputMessage.set('email', email.state.value);
  return await serverResponseHandler(email);
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
      name: 'email',
      placeholder: 'E-mail',
      icon: '&#xf0e0;'
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (singInStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvc2luZy1pbi5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL3NpbmctaW4tc3RvcmUuanMiXSwibmFtZXMiOlsic2luZ0luTW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZW1haWwiLCJvdXRwdXRNZXNzYWdlIiwiYWN0aW9ucyIsImlzRW1wdHkiLCJzZXQiLCJzdGF0ZSIsInZhbHVlIiwic2VydmVyUmVzcG9uc2VIYW5kbGVyIiwiaW5wdXQiLCJ0eXBlIiwibWVzc2FnZSIsInVwZGF0ZUVycm9yIiwiZXJyb3IiLCJzdG9yZSIsInNpbmdJblN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmV4dCIsImJ5TGluayIsImJ5QnV0dG9uIiwiZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEsa0JBQWYsQ0FBa0M7QUFBQ0MsUUFBTSxFQUFFO0FBQUNDO0FBQUQsR0FBVDtBQUFrQkM7QUFBbEIsQ0FBbEMsRUFBb0U7QUFDbkUsTUFBSSxNQUFNRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxFQUFWLEVBQW9DLE9BQU8sS0FBUDtBQUVwQ0YsZUFBYSxDQUFDRyxHQUFkLENBQWtCLE9BQWxCLEVBQTJCSixLQUFLLENBQUNLLEtBQU4sQ0FBWUMsS0FBdkM7QUFDQSxTQUFPLE1BQU1DLHFCQUFxQixDQUFDUCxLQUFELENBQWxDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZU8scUJBQWYsQ0FBcUNDLEtBQXJDLEVBQTRDO0FBQzNDLFNBQU8sT0FBTztBQUFDQyxRQUFEO0FBQU9DO0FBQVAsR0FBUCxLQUEyQjtBQUNqQyxZQUFRRCxJQUFSO0FBQ0MsV0FBSyxPQUFMO0FBQ0NELGFBQUssQ0FBQ04sT0FBTixDQUFjUyxXQUFkLENBQTBCRCxPQUFPLENBQUNFLEtBQWxDO0FBQ0EsZUFBTyxLQUFQOztBQUNELFdBQUssU0FBTDtBQUNDLGVBQU8sSUFBUDtBQUxGO0FBT0EsR0FSRDtBQVNBO0FBRUQ7OztBQUVlO0FBQ2RDLE9BQUssRUFBRUMsNERBRE87QUFFZEMsUUFBTSxFQUFFakI7QUFGTSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFhO0FBRWI7O0FBRUEsTUFBTWdCLFdBQVcsR0FBRztBQUNuQkUsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQUNMQyxZQUFNLEVBQUUsT0FESDtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQURDLEdBRFc7QUFPbkJDLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsU0FERDtBQUVMQyxTQUFLLEVBQUUsU0FGRjtBQUdMQyxRQUFJLEVBQUUseUJBSEQ7QUFJTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxFQURFO0FBRVIxQixZQUFNLEVBQUUsQ0FBRSxPQUFGLENBRkE7QUFHUjJCLFlBQU0sRUFBRTtBQUhBO0FBSkosR0FQYTtBQWlCbkIzQixRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFO0FBQ05xQixVQUFJLEVBQUUsT0FEQTtBQUVOTSxpQkFBVyxFQUFFLFFBRlA7QUFHTkMsVUFBSSxFQUFFO0FBSEE7QUFEQTtBQWpCVyxDQUFwQjtBQTBCQTs7QUFFZWQsMEVBQWYsRSIsImZpbGUiOiJsNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBzaW5nSW5TdG9yZSBmcm9tICcuLi9zdG9yZS9zaW5nLWluLXN0b3JlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNpbmdJbk1vZHVsZVdvcmtlcih7aW5wdXRzOiB7ZW1haWx9LCBvdXRwdXRNZXNzYWdlfSkge1xyXG5cdGlmKCBhd2FpdCBlbWFpbC5hY3Rpb25zLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgnZW1haWwnLCBlbWFpbC5zdGF0ZS52YWx1ZSk7XHJcblx0cmV0dXJuIGF3YWl0IHNlcnZlclJlc3BvbnNlSGFuZGxlcihlbWFpbCk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VydmVyUmVzcG9uc2VIYW5kbGVyKGlucHV0KSB7XHJcblx0cmV0dXJuIGFzeW5jICh7dHlwZSwgbWVzc2FnZX0pID0+IHtcclxuXHRcdHN3aXRjaCggdHlwZSApIHtcclxuXHRcdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRcdGlucHV0LmFjdGlvbnMudXBkYXRlRXJyb3IobWVzc2FnZS5lcnJvcik7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogc2luZ0luU3RvcmUsXHJcblx0d29ya2VyOiBzaW5nSW5Nb2R1bGVXb3JrZXJcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBzaW5nSW5TdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnbG9naW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogJ2NvbmZpcm0tZW1haWwnXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHRuYW1lOiAnc2luZy1pbicsXHJcblx0XHR0aXRsZTogJ1NpbmcgaW4nLFxyXG5cdFx0bGluazogJ0FscmVhZHkgaGF2ZSBhbiBhY2NvdW50JyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJycsXHJcblx0XHRcdGlucHV0czogWyAnZW1haWwnIF0sXHJcblx0XHRcdGJ1dHRvbjogJ0NvbnRpbnVlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRlbWFpbDoge1xyXG5cdFx0XHRuYW1lOiAnZW1haWwnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0UtbWFpbCcsXHJcblx0XHRcdGljb246ICcmI3hmMGUwOydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2luZ0luU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==