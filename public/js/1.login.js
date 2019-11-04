(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
  if (fullname.isEmpty()) return false;
  outputMessage.set('fullname', fullname.value);
  if (password.isEmpty()) return false;
  outputMessage.set('password', password.value);
  let response = await outputMessage.send();
  return await parseServerResponse({
    fullname,
    password
  }, response);
}
/*** exports [end] ***/

/*** src [begin] ***/


async function parseServerResponse(inputs, {
  type,
  message
}) {
  switch (type) {
    case 'error':
      inputs[message.input].error = message.error;
      return false;

    case 'success':
      console.log('Created success', message);
      return true;
  }
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
      type: 'text',
      value: '',
      placeholder: 'Full name',
      icon: '&#xe800;',
      error: ''
    }
  }
};
/*** exports [end] ***/

/* harmony default export */ __webpack_exports__["default"] = (createAccountStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY3JlYXRlLWFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9jcmVhdGUtYWNjb3VudC1zdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY2NvdW50TW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZnVsbG5hbWUiLCJwYXNzd29yZCIsIm91dHB1dE1lc3NhZ2UiLCJpc0VtcHR5Iiwic2V0IiwidmFsdWUiLCJyZXNwb25zZSIsInNlbmQiLCJwYXJzZVNlcnZlclJlc3BvbnNlIiwidHlwZSIsIm1lc3NhZ2UiLCJpbnB1dCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwiY3JlYXRlQWNjb3VudFN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmV4dCIsImJ5TGluayIsImJ5QnV0dG9uIiwiZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEseUJBQWYsQ0FBeUM7QUFBQ0MsUUFBTSxFQUFFO0FBQUNDLFlBQUQ7QUFBV0M7QUFBWCxHQUFUO0FBQStCQztBQUEvQixDQUF6QyxFQUF3RjtBQUN2RixNQUFJRixRQUFRLENBQUNHLE9BQVQsRUFBSixFQUF5QixPQUFPLEtBQVA7QUFDekJELGVBQWEsQ0FBQ0UsR0FBZCxDQUFrQixVQUFsQixFQUE4QkosUUFBUSxDQUFDSyxLQUF2QztBQUVBLE1BQUlKLFFBQVEsQ0FBQ0UsT0FBVCxFQUFKLEVBQXlCLE9BQU8sS0FBUDtBQUN6QkQsZUFBYSxDQUFDRSxHQUFkLENBQWtCLFVBQWxCLEVBQThCSCxRQUFRLENBQUNJLEtBQXZDO0FBRUEsTUFBSUMsUUFBUSxHQUFHLE1BQU1KLGFBQWEsQ0FBQ0ssSUFBZCxFQUFyQjtBQUNBLFNBQU8sTUFBTUMsbUJBQW1CLENBQUM7QUFBQ1IsWUFBRDtBQUFXQztBQUFYLEdBQUQsRUFBdUJLLFFBQXZCLENBQWhDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZUUsbUJBQWYsQ0FBbUNULE1BQW5DLEVBQTJDO0FBQUNVLE1BQUQ7QUFBT0M7QUFBUCxDQUEzQyxFQUE0RDtBQUMzRCxVQUFRRCxJQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0NWLFlBQU0sQ0FBQ1csT0FBTyxDQUFDQyxLQUFULENBQU4sQ0FBc0JDLEtBQXRCLEdBQThCRixPQUFPLENBQUNFLEtBQXRDO0FBQ0EsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkosT0FBL0I7QUFDQSxhQUFPLElBQVA7QUFORjtBQVFBO0FBRUQ7OztBQUVlO0FBQ2RLLE9BQUssRUFBRUMsbUVBRE87QUFFZEMsUUFBTSxFQUFFbkI7QUFGTSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFhO0FBRWI7O0FBRUEsTUFBTWtCLGtCQUFrQixHQUFHO0FBQzFCRSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxTQURIO0FBRUxDLGNBQVEsRUFBRTtBQUZMO0FBREMsR0FEa0I7QUFPMUJDLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEMsU0FBSyxFQUFFLGFBRkY7QUFHTEMsUUFBSSxFQUFFLGVBSEQ7QUFJTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxFQURFO0FBRVI1QixZQUFNLEVBQUUsQ0FBRSxVQUFGLEVBQWMsVUFBZCxDQUZBO0FBR1I2QixZQUFNLEVBQUU7QUFIQTtBQUpKLEdBUG9CO0FBaUIxQjdCLFFBQU0sRUFBRTtBQUNQQyxZQUFRLEVBQUU7QUFDVFMsVUFBSSxFQUFFLE1BREc7QUFFVEosV0FBSyxFQUFFLEVBRkU7QUFHVHdCLGlCQUFXLEVBQUUsV0FISjtBQUlUQyxVQUFJLEVBQUUsVUFKRztBQUtUbEIsV0FBSyxFQUFFO0FBTEU7QUFESDtBQWpCa0IsQ0FBM0I7QUE0QkE7O0FBRWVJLGlGQUFmLEUiLCJmaWxlIjoiMS5sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBjcmVhdGVBY2NvdW50U3RvcmUgZnJvbSAnLi4vc3RvcmUvY3JlYXRlLWFjY291bnQtc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNjb3VudE1vZHVsZVdvcmtlcih7aW5wdXRzOiB7ZnVsbG5hbWUsIHBhc3N3b3JkfSwgb3V0cHV0TWVzc2FnZX0pIHtcclxuXHRpZiggZnVsbG5hbWUuaXNFbXB0eSgpICkgcmV0dXJuIGZhbHNlO1xyXG5cdG91dHB1dE1lc3NhZ2Uuc2V0KCdmdWxsbmFtZScsIGZ1bGxuYW1lLnZhbHVlKTtcclxuXHRcclxuXHRpZiggcGFzc3dvcmQuaXNFbXB0eSgpICkgcmV0dXJuIGZhbHNlO1xyXG5cdG91dHB1dE1lc3NhZ2Uuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKTtcclxuXHRcclxuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBvdXRwdXRNZXNzYWdlLnNlbmQoKTtcclxuXHRyZXR1cm4gYXdhaXQgcGFyc2VTZXJ2ZXJSZXNwb25zZSh7ZnVsbG5hbWUsIHBhc3N3b3JkfSwgcmVzcG9uc2UpO1xyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlU2VydmVyUmVzcG9uc2UoaW5wdXRzLCB7dHlwZSwgbWVzc2FnZX0pIHtcclxuXHRzd2l0Y2goIHR5cGUgKSB7XHJcblx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdGlucHV0c1ttZXNzYWdlLmlucHV0XS5lcnJvciA9IG1lc3NhZ2UuZXJyb3I7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgJ3N1Y2Nlc3MnOlxyXG5cdFx0XHRjb25zb2xlLmxvZygnQ3JlYXRlZCBzdWNjZXNzJywgbWVzc2FnZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiBjcmVhdGVBY2NvdW50U3RvcmUsXHJcblx0d29ya2VyOiBjcmVhdGVBY2NvdW50TW9kdWxlV29ya2VyXHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgY3JlYXRlQWNjb3VudFN0b3JlID0ge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0bmV4dDoge1xyXG5cdFx0XHRieUxpbms6ICdzaW5nLWluJyxcclxuXHRcdFx0YnlCdXR0b246IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHRuYW1lOiAnY3JlYXRlLWFjY291bnQnLFxyXG5cdFx0dGl0bGU6ICdOZXcgYWNjb3VudCcsXHJcblx0XHRsaW5rOiAnQmFjayB0byBzdGFydCcsXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRpbnB1dHM6IFsgJ2Z1bGxuYW1lJywgJ3Bhc3N3b3JkJyBdLFxyXG5cdFx0XHRidXR0b246ICdDcmVhdGUnXHJcblx0XHR9XHJcblx0fSxcclxuXHRpbnB1dHM6IHtcclxuXHRcdGZ1bGxuYW1lOiB7XHJcblx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0Z1bGwgbmFtZScsXHJcblx0XHRcdGljb246ICcmI3hlODAwOycsXHJcblx0XHRcdGVycm9yOiAnJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBY2NvdW50U3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==