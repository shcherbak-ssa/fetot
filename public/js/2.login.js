(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./build/login-page/modules/login.js":
/*!*******************************************!*\
  !*** ./build/login-page/modules/login.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_login_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/login-store */ "./build/login-page/store/login-store.js");

/*** imports [begin] ***/


/*** imports [end] ***/

/*** exports [begin] ***/

async function loginModuleWorker({
  inputs: {
    email,
    password
  },
  outputMessage
}) {
  if (email.isEmpty()) return false;
  outputMessage.set('email', email.value);
  if (password.isEmpty()) return false;
  outputMessage.set('password', password.value);
  let response = await outputMessage.send();
  return await parseServerResponse({
    email,
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
      if ('input' in message) {
        inputs[message.input].error = message.error;
      } else {// Store.collection('current-module').content.text
        // 	= `<span style="color:#FF2105;">${message.error}</span>`;
      }

      return false;

    case 'success':
      console.log('Login success', message);
      return true;
  }
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store_login_store__WEBPACK_IMPORTED_MODULE_0__["default"],
  worker: loginModuleWorker
});

/***/ }),

/***/ "./build/login-page/store/login-store.js":
/*!***********************************************!*\
  !*** ./build/login-page/store/login-store.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*** exports [begin] ***/

const loginStore = {
  config: {
    next: {
      byLink: 'sing-in',
      byButton: false
    }
  },
  data: {
    name: 'login',
    title: 'Login',
    link: 'Do not have an account',
    content: {
      text: '',
      inputs: ['email', 'password'],
      button: 'Enter'
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

/* harmony default export */ __webpack_exports__["default"] = (loginStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9sb2dpbi1zdG9yZS5qcyJdLCJuYW1lcyI6WyJsb2dpbk1vZHVsZVdvcmtlciIsImlucHV0cyIsImVtYWlsIiwicGFzc3dvcmQiLCJvdXRwdXRNZXNzYWdlIiwiaXNFbXB0eSIsInNldCIsInZhbHVlIiwicmVzcG9uc2UiLCJzZW5kIiwicGFyc2VTZXJ2ZXJSZXNwb25zZSIsInR5cGUiLCJtZXNzYWdlIiwiaW5wdXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImxvZ2luU3RvcmUiLCJ3b3JrZXIiLCJjb25maWciLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwibmFtZSIsInRpdGxlIiwibGluayIsImNvbnRlbnQiLCJ0ZXh0IiwiYnV0dG9uIiwicGxhY2Vob2xkZXIiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFhO0FBRWI7O0FBRUE7QUFFQTs7QUFDQTs7QUFFQSxlQUFlQSxpQkFBZixDQUFpQztBQUFDQyxRQUFNLEVBQUU7QUFBQ0MsU0FBRDtBQUFRQztBQUFSLEdBQVQ7QUFBNEJDO0FBQTVCLENBQWpDLEVBQTZFO0FBQzVFLE1BQUlGLEtBQUssQ0FBQ0csT0FBTixFQUFKLEVBQXNCLE9BQU8sS0FBUDtBQUN0QkQsZUFBYSxDQUFDRSxHQUFkLENBQWtCLE9BQWxCLEVBQTJCSixLQUFLLENBQUNLLEtBQWpDO0FBRUEsTUFBSUosUUFBUSxDQUFDRSxPQUFULEVBQUosRUFBeUIsT0FBTyxLQUFQO0FBQ3pCRCxlQUFhLENBQUNFLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEJILFFBQVEsQ0FBQ0ksS0FBdkM7QUFFQSxNQUFJQyxRQUFRLEdBQUcsTUFBTUosYUFBYSxDQUFDSyxJQUFkLEVBQXJCO0FBQ0EsU0FBTyxNQUFNQyxtQkFBbUIsQ0FBQztBQUFDUixTQUFEO0FBQVFDO0FBQVIsR0FBRCxFQUFvQkssUUFBcEIsQ0FBaEM7QUFDQTtBQUVEOztBQUNBOzs7QUFFQSxlQUFlRSxtQkFBZixDQUFtQ1QsTUFBbkMsRUFBMkM7QUFBQ1UsTUFBRDtBQUFPQztBQUFQLENBQTNDLEVBQTREO0FBQzNELFVBQVFELElBQVI7QUFDQyxTQUFLLE9BQUw7QUFDQyxVQUFJLFdBQVdDLE9BQWYsRUFBeUI7QUFDeEJYLGNBQU0sQ0FBQ1csT0FBTyxDQUFDQyxLQUFULENBQU4sQ0FBc0JDLEtBQXRCLEdBQThCRixPQUFPLENBQUNFLEtBQXRDO0FBQ0EsT0FGRCxNQUVPLENBQ047QUFDQTtBQUNBOztBQUNELGFBQU8sS0FBUDs7QUFDRCxTQUFLLFNBQUw7QUFDQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkosT0FBN0I7QUFDQSxhQUFPLElBQVA7QUFYRjtBQWFBO0FBRUQ7OztBQUVlO0FBQ2RLLE9BQUssRUFBRUMsMERBRE87QUFFZEMsUUFBTSxFQUFFbkI7QUFGTSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFhO0FBRWI7O0FBRUEsTUFBTWtCLFVBQVUsR0FBRztBQUNsQkUsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQUNMQyxZQUFNLEVBQUUsU0FESDtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQURDLEdBRFU7QUFPbEJDLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsT0FERDtBQUVMQyxTQUFLLEVBQUUsT0FGRjtBQUdMQyxRQUFJLEVBQUUsd0JBSEQ7QUFJTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxFQURFO0FBRVI1QixZQUFNLEVBQUUsQ0FBRSxPQUFGLEVBQVcsVUFBWCxDQUZBO0FBR1I2QixZQUFNLEVBQUU7QUFIQTtBQUpKLEdBUFk7QUFpQmxCN0IsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRTtBQUNOUyxVQUFJLEVBQUUsTUFEQTtBQUVOSixXQUFLLEVBQUUsRUFGRDtBQUdOd0IsaUJBQVcsRUFBRSxRQUhQO0FBSU5DLFVBQUksRUFBRSxVQUpBO0FBS05sQixXQUFLLEVBQUU7QUFMRCxLQURBO0FBUVBYLFlBQVEsRUFBRTtBQUNUUSxVQUFJLEVBQUUsVUFERztBQUVUSixXQUFLLEVBQUUsRUFGRTtBQUdUd0IsaUJBQVcsRUFBRSxVQUhKO0FBSVRDLFVBQUksRUFBRSxVQUpHO0FBS1RsQixXQUFLLEVBQUU7QUFMRTtBQVJIO0FBakJVLENBQW5CO0FBbUNBOztBQUVlSSx5RUFBZixFIiwiZmlsZSI6IjIubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgbG9naW5TdG9yZSBmcm9tICcuLi9zdG9yZS9sb2dpbi1zdG9yZSc7XHJcblxyXG4vKioqIGltcG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2dpbk1vZHVsZVdvcmtlcih7aW5wdXRzOiB7ZW1haWwsIHBhc3N3b3JkfSwgb3V0cHV0TWVzc2FnZX0pIHtcclxuXHRpZiggZW1haWwuaXNFbXB0eSgpICkgcmV0dXJuIGZhbHNlO1xyXG5cdG91dHB1dE1lc3NhZ2Uuc2V0KCdlbWFpbCcsIGVtYWlsLnZhbHVlKTtcclxuXHRcclxuXHRpZiggcGFzc3dvcmQuaXNFbXB0eSgpICkgcmV0dXJuIGZhbHNlO1xyXG5cdG91dHB1dE1lc3NhZ2Uuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKTtcclxuXHRcclxuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBvdXRwdXRNZXNzYWdlLnNlbmQoKTtcclxuXHRyZXR1cm4gYXdhaXQgcGFyc2VTZXJ2ZXJSZXNwb25zZSh7ZW1haWwsIHBhc3N3b3JkfSwgcmVzcG9uc2UpO1xyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlU2VydmVyUmVzcG9uc2UoaW5wdXRzLCB7dHlwZSwgbWVzc2FnZX0pIHtcclxuXHRzd2l0Y2goIHR5cGUgKSB7XHJcblx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdGlmKCAnaW5wdXQnIGluIG1lc3NhZ2UgKSB7XHJcblx0XHRcdFx0aW5wdXRzW21lc3NhZ2UuaW5wdXRdLmVycm9yID0gbWVzc2FnZS5lcnJvcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBTdG9yZS5jb2xsZWN0aW9uKCdjdXJyZW50LW1vZHVsZScpLmNvbnRlbnQudGV4dFxyXG5cdFx0XHRcdC8vIFx0PSBgPHNwYW4gc3R5bGU9XCJjb2xvcjojRkYyMTA1O1wiPiR7bWVzc2FnZS5lcnJvcn08L3NwYW4+YDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0Y29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3MnLCBtZXNzYWdlKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c3RvcmU6IGxvZ2luU3RvcmUsXHJcblx0d29ya2VyOiBsb2dpbk1vZHVsZVdvcmtlclxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGxvZ2luU3RvcmUgPSB7XHJcblx0Y29uZmlnOiB7XHJcblx0XHRuZXh0OiB7XHJcblx0XHRcdGJ5TGluazogJ3NpbmctaW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogZmFsc2VcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGE6IHtcclxuXHRcdG5hbWU6ICdsb2dpbicsXHJcblx0XHR0aXRsZTogJ0xvZ2luJyxcclxuXHRcdGxpbms6ICdEbyBub3QgaGF2ZSBhbiBhY2NvdW50JyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJycsXHJcblx0XHRcdGlucHV0czogWyAnZW1haWwnLCAncGFzc3dvcmQnIF0sXHJcblx0XHRcdGJ1dHRvbjogJ0VudGVyJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRlbWFpbDoge1xyXG5cdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdFLW1haWwnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZjBlMDsnLFxyXG5cdFx0XHRlcnJvcjogJydcclxuXHRcdH0sXHJcblx0XHRwYXNzd29yZDoge1xyXG5cdFx0XHR0eXBlOiAncGFzc3dvcmQnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZTgwMTsnLFxyXG5cdFx0XHRlcnJvcjogJydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5TdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9