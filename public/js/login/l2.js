(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./build/login-page/modules/create-account.js":
/*!****************************************************!*\
  !*** ./build/login-page/modules/create-account.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_create_account_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/create-account-store */ "./build/login-page/store/create-account-store.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** exports [begin] ***/

async function createAccountModuleWorker({
  inputs: {
    fullname,
    password
  },
  outputMessage
}) {
  if (fullname.actions.isEmpty()) return false;
  if (password.actions.isEmpty()) return false;
  outputMessage.set('fullname', fullname.state.value);
  outputMessage.set('password', password.state.value);
  return await serverResponseHandler({
    fullname,
    password
  });
}
/*** exports [end] ***/

/*** src [begin] ***/


async function serverResponseHandler(inputs) {
  return async ({
    type,
    message
  }) => {
    switch (type) {
      case 'error':
        inputs[message.input].actions.updateError(message.error);
        return false;

      case 'success':
        return true;
    }
  };
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store_create_account_store__WEBPACK_IMPORTED_MODULE_0__["default"],
  worker: createAccountModuleWorker
});

/***/ }),

/***/ "./build/login-page/store/create-account-store.js":
/*!********************************************************!*\
  !*** ./build/login-page/store/create-account-store.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

const createAccountStore = {
  config: {
    next: {
      byLink: 'sing-in',
      byButton: false
    }
  },
  data: {
    name: 'create-account',
    title: 'New account',
    link: 'Back to start',
    content: {
      text: '',
      inputs: ['fullname', 'password'],
      button: 'Create'
    }
  },
  inputs: {
    fullname: {
      name: 'fullname',
      placeholder: 'Full name',
      icon: '&#xe800;'
    },
    password: {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      icon: '&#xe801;'
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (createAccountStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY3JlYXRlLWFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9jcmVhdGUtYWNjb3VudC1zdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY2NvdW50TW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZnVsbG5hbWUiLCJwYXNzd29yZCIsIm91dHB1dE1lc3NhZ2UiLCJhY3Rpb25zIiwiaXNFbXB0eSIsInNldCIsInN0YXRlIiwidmFsdWUiLCJzZXJ2ZXJSZXNwb25zZUhhbmRsZXIiLCJ0eXBlIiwibWVzc2FnZSIsImlucHV0IiwidXBkYXRlRXJyb3IiLCJlcnJvciIsInN0b3JlIiwiY3JlYXRlQWNjb3VudFN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmV4dCIsImJ5TGluayIsImJ5QnV0dG9uIiwiZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEseUJBQWYsQ0FBeUM7QUFBQ0MsUUFBTSxFQUFFO0FBQUNDLFlBQUQ7QUFBV0M7QUFBWCxHQUFUO0FBQStCQztBQUEvQixDQUF6QyxFQUF3RjtBQUN2RixNQUFJRixRQUFRLENBQUNHLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQUosRUFBaUMsT0FBTyxLQUFQO0FBQ2pDLE1BQUlILFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsT0FBakIsRUFBSixFQUFpQyxPQUFPLEtBQVA7QUFFakNGLGVBQWEsQ0FBQ0csR0FBZCxDQUFrQixVQUFsQixFQUE4QkwsUUFBUSxDQUFDTSxLQUFULENBQWVDLEtBQTdDO0FBQ0FMLGVBQWEsQ0FBQ0csR0FBZCxDQUFrQixVQUFsQixFQUE4QkosUUFBUSxDQUFDSyxLQUFULENBQWVDLEtBQTdDO0FBRUEsU0FBTyxNQUFNQyxxQkFBcUIsQ0FBQztBQUFDUixZQUFEO0FBQVdDO0FBQVgsR0FBRCxDQUFsQztBQUNBO0FBRUQ7O0FBQ0E7OztBQUVBLGVBQWVPLHFCQUFmLENBQXFDVCxNQUFyQyxFQUE2QztBQUM1QyxTQUFPLE9BQU87QUFBQ1UsUUFBRDtBQUFPQztBQUFQLEdBQVAsS0FBMkI7QUFDakMsWUFBUUQsSUFBUjtBQUNDLFdBQUssT0FBTDtBQUNDVixjQUFNLENBQUNXLE9BQU8sQ0FBQ0MsS0FBVCxDQUFOLENBQXNCUixPQUF0QixDQUE4QlMsV0FBOUIsQ0FBMENGLE9BQU8sQ0FBQ0csS0FBbEQ7QUFDQSxlQUFPLEtBQVA7O0FBQ0QsV0FBSyxTQUFMO0FBQ0MsZUFBTyxJQUFQO0FBTEY7QUFPQSxHQVJEO0FBU0E7QUFFRDs7O0FBRWU7QUFDZEMsT0FBSyxFQUFFQyxtRUFETztBQUVkQyxRQUFNLEVBQUVsQjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQWE7QUFFYjs7QUFFQSxNQUFNaUIsa0JBQWtCLEdBQUc7QUFDMUJFLFFBQU0sRUFBRTtBQUNQQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFLFNBREg7QUFFTEMsY0FBUSxFQUFFO0FBRkw7QUFEQyxHQURrQjtBQU8xQkMsTUFBSSxFQUFFO0FBQ0xDLFFBQUksRUFBRSxnQkFERDtBQUVMQyxTQUFLLEVBQUUsYUFGRjtBQUdMQyxRQUFJLEVBQUUsZUFIRDtBQUlMQyxXQUFPLEVBQUU7QUFDUkMsVUFBSSxFQUFFLEVBREU7QUFFUjNCLFlBQU0sRUFBRSxDQUFFLFVBQUYsRUFBYyxVQUFkLENBRkE7QUFHUjRCLFlBQU0sRUFBRTtBQUhBO0FBSkosR0FQb0I7QUFpQjFCNUIsUUFBTSxFQUFFO0FBQ1BDLFlBQVEsRUFBRTtBQUNUc0IsVUFBSSxFQUFFLFVBREc7QUFFVE0saUJBQVcsRUFBRSxXQUZKO0FBR1RDLFVBQUksRUFBRTtBQUhHLEtBREg7QUFNUDVCLFlBQVEsRUFBRTtBQUNUcUIsVUFBSSxFQUFFLFVBREc7QUFFVGIsVUFBSSxFQUFFLFVBRkc7QUFHVG1CLGlCQUFXLEVBQUUsVUFISjtBQUlUQyxVQUFJLEVBQUU7QUFKRztBQU5IO0FBakJrQixDQUEzQjtBQWdDQTs7QUFFZWQsaUZBQWYsRSIsImZpbGUiOiJsMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBjcmVhdGVBY2NvdW50U3RvcmUgZnJvbSAnLi4vc3RvcmUvY3JlYXRlLWFjY291bnQtc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNjb3VudE1vZHVsZVdvcmtlcih7aW5wdXRzOiB7ZnVsbG5hbWUsIHBhc3N3b3JkfSwgb3V0cHV0TWVzc2FnZX0pIHtcclxuXHRpZiggZnVsbG5hbWUuYWN0aW9ucy5pc0VtcHR5KCkgKSByZXR1cm4gZmFsc2U7XHJcblx0aWYoIHBhc3N3b3JkLmFjdGlvbnMuaXNFbXB0eSgpICkgcmV0dXJuIGZhbHNlO1xyXG5cdFxyXG5cdG91dHB1dE1lc3NhZ2Uuc2V0KCdmdWxsbmFtZScsIGZ1bGxuYW1lLnN0YXRlLnZhbHVlKTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgncGFzc3dvcmQnLCBwYXNzd29yZC5zdGF0ZS52YWx1ZSk7XHJcblx0XHJcblx0cmV0dXJuIGF3YWl0IHNlcnZlclJlc3BvbnNlSGFuZGxlcih7ZnVsbG5hbWUsIHBhc3N3b3JkfSk7XHJcbn1cclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogc3JjIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VydmVyUmVzcG9uc2VIYW5kbGVyKGlucHV0cykge1xyXG5cdHJldHVybiBhc3luYyAoe3R5cGUsIG1lc3NhZ2V9KSA9PiB7XHJcblx0XHRzd2l0Y2goIHR5cGUgKSB7XHJcblx0XHRcdGNhc2UgJ2Vycm9yJzpcclxuXHRcdFx0XHRpbnB1dHNbbWVzc2FnZS5pbnB1dF0uYWN0aW9ucy51cGRhdGVFcnJvcihtZXNzYWdlLmVycm9yKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiBjcmVhdGVBY2NvdW50U3RvcmUsXHJcblx0d29ya2VyOiBjcmVhdGVBY2NvdW50TW9kdWxlV29ya2VyXHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgY3JlYXRlQWNjb3VudFN0b3JlID0ge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0bmV4dDoge1xyXG5cdFx0XHRieUxpbms6ICdzaW5nLWluJyxcclxuXHRcdFx0YnlCdXR0b246IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHRuYW1lOiAnY3JlYXRlLWFjY291bnQnLFxyXG5cdFx0dGl0bGU6ICdOZXcgYWNjb3VudCcsXHJcblx0XHRsaW5rOiAnQmFjayB0byBzdGFydCcsXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRpbnB1dHM6IFsgJ2Z1bGxuYW1lJywgJ3Bhc3N3b3JkJyBdLFxyXG5cdFx0XHRidXR0b246ICdDcmVhdGUnXHJcblx0XHR9XHJcblx0fSxcclxuXHRpbnB1dHM6IHtcclxuXHRcdGZ1bGxuYW1lOiB7XHJcblx0XHRcdG5hbWU6ICdmdWxsbmFtZScsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnRnVsbCBuYW1lJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDA7J1xyXG5cdFx0fSxcclxuXHRcdHBhc3N3b3JkOiB7XHJcblx0XHRcdG5hbWU6ICdwYXNzd29yZCcsXHJcblx0XHRcdHR5cGU6ICdwYXNzd29yZCcsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZTgwMTsnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFjY291bnRTdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9