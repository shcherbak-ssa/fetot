(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./build/login-page/modules/login.js":
/*!*******************************************!*\
  !*** ./build/login-page/modules/login.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fetot_services_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fetot-services/store */ "./app/components/services/store.js");
/* harmony import */ var fetot_workers_output_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fetot-workers/output-message */ "./app/components/workers/output-message.js");
/* harmony import */ var _store_login_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/login-store */ "./build/login-page/store/login-store.js");

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
      } else {
        fetot_services_store__WEBPACK_IMPORTED_MODULE_0__["default"].collection('current-module').content.text = `<span style="color:#FF2105;">${message.error}</span>`;
      }

      return false;

    case 'success':
      console.log('Login success', message);
      return true;
  }
}
/*** src [end] ***/


/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store_login_store__WEBPACK_IMPORTED_MODULE_2__["default"],
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
    name: 'login',
    next: {
      byLink: 'sing-in',
      byButton: false
    }
  },
  data: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9sb2dpbi1zdG9yZS5qcyJdLCJuYW1lcyI6WyJsb2dpbk1vZHVsZVdvcmtlciIsImlucHV0cyIsImVtYWlsIiwicGFzc3dvcmQiLCJvdXRwdXRNZXNzYWdlIiwiaXNFbXB0eSIsInNldCIsInZhbHVlIiwicmVzcG9uc2UiLCJzZW5kIiwicGFyc2VTZXJ2ZXJSZXNwb25zZSIsInR5cGUiLCJtZXNzYWdlIiwiaW5wdXQiLCJlcnJvciIsIlN0b3JlIiwiY29sbGVjdGlvbiIsImNvbnRlbnQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwibG9naW5TdG9yZSIsIndvcmtlciIsImNvbmZpZyIsIm5hbWUiLCJuZXh0IiwiYnlMaW5rIiwiYnlCdXR0b24iLCJkYXRhIiwidGl0bGUiLCJsaW5rIiwiYnV0dG9uIiwicGxhY2Vob2xkZXIiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUNBOztBQUVBLGVBQWVBLGlCQUFmLENBQWlDO0FBQUNDLFFBQU0sRUFBRTtBQUFDQyxTQUFEO0FBQVFDO0FBQVIsR0FBVDtBQUE0QkM7QUFBNUIsQ0FBakMsRUFBNkU7QUFDNUUsTUFBSUYsS0FBSyxDQUFDRyxPQUFOLEVBQUosRUFBc0IsT0FBTyxLQUFQO0FBQ3RCRCxlQUFhLENBQUNFLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMkJKLEtBQUssQ0FBQ0ssS0FBakM7QUFFQSxNQUFJSixRQUFRLENBQUNFLE9BQVQsRUFBSixFQUF5QixPQUFPLEtBQVA7QUFDekJELGVBQWEsQ0FBQ0UsR0FBZCxDQUFrQixVQUFsQixFQUE4QkgsUUFBUSxDQUFDSSxLQUF2QztBQUVBLE1BQUlDLFFBQVEsR0FBRyxNQUFNSixhQUFhLENBQUNLLElBQWQsRUFBckI7QUFDQSxTQUFPLE1BQU1DLG1CQUFtQixDQUFDO0FBQUNSLFNBQUQ7QUFBUUM7QUFBUixHQUFELEVBQW9CSyxRQUFwQixDQUFoQztBQUNBO0FBRUQ7O0FBQ0E7OztBQUVBLGVBQWVFLG1CQUFmLENBQW1DVCxNQUFuQyxFQUEyQztBQUFDVSxNQUFEO0FBQU9DO0FBQVAsQ0FBM0MsRUFBNEQ7QUFDM0QsVUFBUUQsSUFBUjtBQUNDLFNBQUssT0FBTDtBQUNDLFVBQUksV0FBV0MsT0FBZixFQUF5QjtBQUN4QlgsY0FBTSxDQUFDVyxPQUFPLENBQUNDLEtBQVQsQ0FBTixDQUFzQkMsS0FBdEIsR0FBOEJGLE9BQU8sQ0FBQ0UsS0FBdEM7QUFDQSxPQUZELE1BRU87QUFDTkMsb0VBQUssQ0FBQ0MsVUFBTixDQUFpQixnQkFBakIsRUFBbUNDLE9BQW5DLENBQTJDQyxJQUEzQyxHQUNJLGdDQUErQk4sT0FBTyxDQUFDRSxLQUFNLFNBRGpEO0FBRUE7O0FBQ0QsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCUixPQUE3QjtBQUNBLGFBQU8sSUFBUDtBQVhGO0FBYUE7QUFFRDs7O0FBRWU7QUFDZFMsT0FBSyxFQUFFQywwREFETztBQUVkQyxRQUFNLEVBQUV2QjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQWE7QUFFYjs7QUFFQSxNQUFNc0IsVUFBVSxHQUFHO0FBQ2xCRSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFLE9BREM7QUFFUEMsUUFBSSxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxTQURIO0FBRUxDLGNBQVEsRUFBRTtBQUZMO0FBRkMsR0FEVTtBQVFsQkMsTUFBSSxFQUFFO0FBQ0xDLFNBQUssRUFBRSxPQURGO0FBRUxDLFFBQUksRUFBRSx3QkFGRDtBQUdMZCxXQUFPLEVBQUU7QUFDUkMsVUFBSSxFQUFFLEVBREU7QUFFUmpCLFlBQU0sRUFBRSxDQUFFLE9BQUYsRUFBVyxVQUFYLENBRkE7QUFHUitCLFlBQU0sRUFBRTtBQUhBO0FBSEosR0FSWTtBQWlCbEIvQixRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFO0FBQ05TLFVBQUksRUFBRSxNQURBO0FBRU5KLFdBQUssRUFBRSxFQUZEO0FBR04wQixpQkFBVyxFQUFFLFFBSFA7QUFJTkMsVUFBSSxFQUFFLFVBSkE7QUFLTnBCLFdBQUssRUFBRTtBQUxELEtBREE7QUFRUFgsWUFBUSxFQUFFO0FBQ1RRLFVBQUksRUFBRSxVQURHO0FBRVRKLFdBQUssRUFBRSxFQUZFO0FBR1QwQixpQkFBVyxFQUFFLFVBSEo7QUFJVEMsVUFBSSxFQUFFLFVBSkc7QUFLVHBCLFdBQUssRUFBRTtBQUxFO0FBUkg7QUFqQlUsQ0FBbkI7QUFtQ0E7O0FBRWVRLHlFQUFmLEUiLCJmaWxlIjoiMi5sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBTdG9yZSBmcm9tICdmZXRvdC1zZXJ2aWNlcy9zdG9yZSc7XHJcbmltcG9ydCBPdXRwdXRNZXNzYWdlIGZyb20gJ2ZldG90LXdvcmtlcnMvb3V0cHV0LW1lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IGxvZ2luU3RvcmUgZnJvbSAnLi4vc3RvcmUvbG9naW4tc3RvcmUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW5Nb2R1bGVXb3JrZXIoe2lucHV0czoge2VtYWlsLCBwYXNzd29yZH0sIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0aWYoIGVtYWlsLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgnZW1haWwnLCBlbWFpbC52YWx1ZSk7XHJcblx0XHJcblx0aWYoIHBhc3N3b3JkLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgncGFzc3dvcmQnLCBwYXNzd29yZC52YWx1ZSk7XHJcblx0XHJcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgb3V0cHV0TWVzc2FnZS5zZW5kKCk7XHJcblx0cmV0dXJuIGF3YWl0IHBhcnNlU2VydmVyUmVzcG9uc2Uoe2VtYWlsLCBwYXNzd29yZH0sIHJlc3BvbnNlKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZVNlcnZlclJlc3BvbnNlKGlucHV0cywge3R5cGUsIG1lc3NhZ2V9KSB7XHJcblx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRpZiggJ2lucHV0JyBpbiBtZXNzYWdlICkge1xyXG5cdFx0XHRcdGlucHV0c1ttZXNzYWdlLmlucHV0XS5lcnJvciA9IG1lc3NhZ2UuZXJyb3I7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0U3RvcmUuY29sbGVjdGlvbignY3VycmVudC1tb2R1bGUnKS5jb250ZW50LnRleHRcclxuXHRcdFx0XHRcdD0gYDxzcGFuIHN0eWxlPVwiY29sb3I6I0ZGMjEwNTtcIj4ke21lc3NhZ2UuZXJyb3J9PC9zcGFuPmA7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzJywgbWVzc2FnZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKiBzcmMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiBsb2dpblN0b3JlLFxyXG5cdHdvcmtlcjogbG9naW5Nb2R1bGVXb3JrZXJcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBsb2dpblN0b3JlID0ge1xyXG5cdGNvbmZpZzoge1xyXG5cdFx0bmFtZTogJ2xvZ2luJyxcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnc2luZy1pbicsXHJcblx0XHRcdGJ5QnV0dG9uOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YToge1xyXG5cdFx0dGl0bGU6ICdMb2dpbicsXHJcblx0XHRsaW5rOiAnRG8gbm90IGhhdmUgYW4gYWNjb3VudCcsXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHRleHQ6ICcnLFxyXG5cdFx0XHRpbnB1dHM6IFsgJ2VtYWlsJywgJ3Bhc3N3b3JkJyBdLFxyXG5cdFx0XHRidXR0b246ICdFbnRlcidcclxuXHRcdH1cclxuXHR9LFxyXG5cdGlucHV0czoge1xyXG5cdFx0ZW1haWw6IHtcclxuXHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnRS1tYWlsJyxcclxuXHRcdFx0aWNvbjogJyYjeGYwZTA7JyxcclxuXHRcdFx0ZXJyb3I6ICcnXHJcblx0XHR9LFxyXG5cdFx0cGFzc3dvcmQ6IHtcclxuXHRcdFx0dHlwZTogJ3Bhc3N3b3JkJyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDE7JyxcclxuXHRcdFx0ZXJyb3I6ICcnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==