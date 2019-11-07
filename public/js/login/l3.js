(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
      name: 'email',
      placeholder: 'E-mail',
      icon: '&#xf0e0;'
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

/* harmony default export */ __webpack_exports__["default"] = (loginStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9sb2dpbi1zdG9yZS5qcyJdLCJuYW1lcyI6WyJsb2dpbk1vZHVsZVdvcmtlciIsImlucHV0cyIsImVtYWlsIiwicGFzc3dvcmQiLCJvdXRwdXRNZXNzYWdlIiwiaXNFbXB0eSIsInNldCIsInZhbHVlIiwicmVzcG9uc2UiLCJzZW5kIiwicGFyc2VTZXJ2ZXJSZXNwb25zZSIsInR5cGUiLCJtZXNzYWdlIiwiaW5wdXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImxvZ2luU3RvcmUiLCJ3b3JrZXIiLCJjb25maWciLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwibmFtZSIsInRpdGxlIiwibGluayIsImNvbnRlbnQiLCJ0ZXh0IiwiYnV0dG9uIiwicGxhY2Vob2xkZXIiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFhO0FBRWI7O0FBRUE7QUFFQTs7QUFDQTs7QUFFQSxlQUFlQSxpQkFBZixDQUFpQztBQUFDQyxRQUFNLEVBQUU7QUFBQ0MsU0FBRDtBQUFRQztBQUFSLEdBQVQ7QUFBNEJDO0FBQTVCLENBQWpDLEVBQTZFO0FBQzVFLE1BQUlGLEtBQUssQ0FBQ0csT0FBTixFQUFKLEVBQXNCLE9BQU8sS0FBUDtBQUN0QkQsZUFBYSxDQUFDRSxHQUFkLENBQWtCLE9BQWxCLEVBQTJCSixLQUFLLENBQUNLLEtBQWpDO0FBRUEsTUFBSUosUUFBUSxDQUFDRSxPQUFULEVBQUosRUFBeUIsT0FBTyxLQUFQO0FBQ3pCRCxlQUFhLENBQUNFLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEJILFFBQVEsQ0FBQ0ksS0FBdkM7QUFFQSxNQUFJQyxRQUFRLEdBQUcsTUFBTUosYUFBYSxDQUFDSyxJQUFkLEVBQXJCO0FBQ0EsU0FBTyxNQUFNQyxtQkFBbUIsQ0FBQztBQUFDUixTQUFEO0FBQVFDO0FBQVIsR0FBRCxFQUFvQkssUUFBcEIsQ0FBaEM7QUFDQTtBQUVEOztBQUNBOzs7QUFFQSxlQUFlRSxtQkFBZixDQUFtQ1QsTUFBbkMsRUFBMkM7QUFBQ1UsTUFBRDtBQUFPQztBQUFQLENBQTNDLEVBQTREO0FBQzNELFVBQVFELElBQVI7QUFDQyxTQUFLLE9BQUw7QUFDQyxVQUFJLFdBQVdDLE9BQWYsRUFBeUI7QUFDeEJYLGNBQU0sQ0FBQ1csT0FBTyxDQUFDQyxLQUFULENBQU4sQ0FBc0JDLEtBQXRCLEdBQThCRixPQUFPLENBQUNFLEtBQXRDO0FBQ0EsT0FGRCxNQUVPLENBQ047QUFDQTtBQUNBOztBQUNELGFBQU8sS0FBUDs7QUFDRCxTQUFLLFNBQUw7QUFDQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkosT0FBN0I7QUFDQSxhQUFPLElBQVA7QUFYRjtBQWFBO0FBRUQ7OztBQUVlO0FBQ2RLLE9BQUssRUFBRUMsMERBRE87QUFFZEMsUUFBTSxFQUFFbkI7QUFGTSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFhO0FBRWI7O0FBRUEsTUFBTWtCLFVBQVUsR0FBRztBQUNsQkUsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQUNMQyxZQUFNLEVBQUUsU0FESDtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQURDLEdBRFU7QUFPbEJDLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsT0FERDtBQUVMQyxTQUFLLEVBQUUsT0FGRjtBQUdMQyxRQUFJLEVBQUUsd0JBSEQ7QUFJTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxFQURFO0FBRVI1QixZQUFNLEVBQUUsQ0FBRSxPQUFGLEVBQVcsVUFBWCxDQUZBO0FBR1I2QixZQUFNLEVBQUU7QUFIQTtBQUpKLEdBUFk7QUFpQmxCN0IsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRTtBQUNOdUIsVUFBSSxFQUFFLE9BREE7QUFFTk0saUJBQVcsRUFBRSxRQUZQO0FBR05DLFVBQUksRUFBRTtBQUhBLEtBREE7QUFNUDdCLFlBQVEsRUFBRTtBQUNUc0IsVUFBSSxFQUFFLFVBREc7QUFFVGQsVUFBSSxFQUFFLFVBRkc7QUFHVG9CLGlCQUFXLEVBQUUsVUFISjtBQUlUQyxVQUFJLEVBQUU7QUFKRztBQU5IO0FBakJVLENBQW5CO0FBZ0NBOztBQUVlZCx5RUFBZixFIiwiZmlsZSI6ImwzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuaW1wb3J0IGxvZ2luU3RvcmUgZnJvbSAnLi4vc3RvcmUvbG9naW4tc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW5Nb2R1bGVXb3JrZXIoe2lucHV0czoge2VtYWlsLCBwYXNzd29yZH0sIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0aWYoIGVtYWlsLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgnZW1haWwnLCBlbWFpbC52YWx1ZSk7XHJcblx0XHJcblx0aWYoIHBhc3N3b3JkLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgncGFzc3dvcmQnLCBwYXNzd29yZC52YWx1ZSk7XHJcblx0XHJcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgb3V0cHV0TWVzc2FnZS5zZW5kKCk7XHJcblx0cmV0dXJuIGF3YWl0IHBhcnNlU2VydmVyUmVzcG9uc2Uoe2VtYWlsLCBwYXNzd29yZH0sIHJlc3BvbnNlKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZVNlcnZlclJlc3BvbnNlKGlucHV0cywge3R5cGUsIG1lc3NhZ2V9KSB7XHJcblx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRpZiggJ2lucHV0JyBpbiBtZXNzYWdlICkge1xyXG5cdFx0XHRcdGlucHV0c1ttZXNzYWdlLmlucHV0XS5lcnJvciA9IG1lc3NhZ2UuZXJyb3I7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gU3RvcmUuY29sbGVjdGlvbignY3VycmVudC1tb2R1bGUnKS5jb250ZW50LnRleHRcclxuXHRcdFx0XHQvLyBcdD0gYDxzcGFuIHN0eWxlPVwiY29sb3I6I0ZGMjEwNTtcIj4ke21lc3NhZ2UuZXJyb3J9PC9zcGFuPmA7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzJywgbWVzc2FnZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiBsb2dpblN0b3JlLFxyXG5cdHdvcmtlcjogbG9naW5Nb2R1bGVXb3JrZXJcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBsb2dpblN0b3JlID0ge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0bmV4dDoge1xyXG5cdFx0XHRieUxpbms6ICdzaW5nLWluJyxcclxuXHRcdFx0YnlCdXR0b246IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhOiB7XHJcblx0XHRuYW1lOiAnbG9naW4nLFxyXG5cdFx0dGl0bGU6ICdMb2dpbicsXHJcblx0XHRsaW5rOiAnRG8gbm90IGhhdmUgYW4gYWNjb3VudCcsXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRpbnB1dHM6IFsgJ2VtYWlsJywgJ3Bhc3N3b3JkJyBdLFxyXG5cdFx0XHRidXR0b246ICdFbnRlcidcclxuXHRcdH1cclxuXHR9LFxyXG5cdGlucHV0czoge1xyXG5cdFx0ZW1haWw6IHtcclxuXHRcdFx0bmFtZTogJ2VtYWlsJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdFLW1haWwnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZjBlMDsnXHJcblx0XHR9LFxyXG5cdFx0cGFzc3dvcmQ6IHtcclxuXHRcdFx0bmFtZTogJ3Bhc3N3b3JkJyxcclxuXHRcdFx0dHlwZTogJ3Bhc3N3b3JkJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXHJcblx0XHRcdGljb246ICcmI3hlODAxOydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5TdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9