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
/* harmony import */ var _components_workers_current_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/workers/current-module */ "./build/login-page/components/workers/current-module/index.js");

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
  if (email.actions.isEmpty()) return false;
  if (password.actions.isEmpty()) return false;
  outputMessage.set('email', email.state.value);
  outputMessage.set('password', password.state.value);
  return await serverResponseHandler({
    email,
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
        if ('input' in message) {
          inputs[message.input].actions.updateError(message.error);
        } else {
          await _components_workers_current_module__WEBPACK_IMPORTED_MODULE_1__["currentModuleWorker"].actions.updateText(`<span style="color:#FF2105;">${message.error}</span>`);
        }

        return false;

      case 'success':
        return true;
    }
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9sb2dpbi1zdG9yZS5qcyJdLCJuYW1lcyI6WyJsb2dpbk1vZHVsZVdvcmtlciIsImlucHV0cyIsImVtYWlsIiwicGFzc3dvcmQiLCJvdXRwdXRNZXNzYWdlIiwiYWN0aW9ucyIsImlzRW1wdHkiLCJzZXQiLCJzdGF0ZSIsInZhbHVlIiwic2VydmVyUmVzcG9uc2VIYW5kbGVyIiwidHlwZSIsIm1lc3NhZ2UiLCJpbnB1dCIsInVwZGF0ZUVycm9yIiwiZXJyb3IiLCJjdXJyZW50TW9kdWxlV29ya2VyIiwidXBkYXRlVGV4dCIsInN0b3JlIiwibG9naW5TdG9yZSIsIndvcmtlciIsImNvbmZpZyIsIm5leHQiLCJieUxpbmsiLCJieUJ1dHRvbiIsImRhdGEiLCJuYW1lIiwidGl0bGUiLCJsaW5rIiwiY29udGVudCIsInRleHQiLCJidXR0b24iLCJwbGFjZWhvbGRlciIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBQ0E7QUFFQTs7QUFDQTs7QUFFQSxlQUFlQSxpQkFBZixDQUFpQztBQUFDQyxRQUFNLEVBQUU7QUFBQ0MsU0FBRDtBQUFRQztBQUFSLEdBQVQ7QUFBNEJDO0FBQTVCLENBQWpDLEVBQTZFO0FBQzVFLE1BQUlGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLEVBQUosRUFBOEIsT0FBTyxLQUFQO0FBQzlCLE1BQUlILFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsT0FBakIsRUFBSixFQUFpQyxPQUFPLEtBQVA7QUFFakNGLGVBQWEsQ0FBQ0csR0FBZCxDQUFrQixPQUFsQixFQUEyQkwsS0FBSyxDQUFDTSxLQUFOLENBQVlDLEtBQXZDO0FBQ0FMLGVBQWEsQ0FBQ0csR0FBZCxDQUFrQixVQUFsQixFQUE4QkosUUFBUSxDQUFDSyxLQUFULENBQWVDLEtBQTdDO0FBRUEsU0FBTyxNQUFNQyxxQkFBcUIsQ0FBQztBQUFDUixTQUFEO0FBQVFDO0FBQVIsR0FBRCxDQUFsQztBQUNBO0FBRUQ7O0FBQ0E7OztBQUVBLGVBQWVPLHFCQUFmLENBQXFDVCxNQUFyQyxFQUE2QztBQUM1QyxTQUFPLE9BQU87QUFBQ1UsUUFBRDtBQUFPQztBQUFQLEdBQVAsS0FBMkI7QUFDakMsWUFBUUQsSUFBUjtBQUNDLFdBQUssT0FBTDtBQUNDLFlBQUksV0FBV0MsT0FBZixFQUF5QjtBQUN4QlgsZ0JBQU0sQ0FBQ1csT0FBTyxDQUFDQyxLQUFULENBQU4sQ0FBc0JSLE9BQXRCLENBQThCUyxXQUE5QixDQUEwQ0YsT0FBTyxDQUFDRyxLQUFsRDtBQUNBLFNBRkQsTUFFTztBQUNOLGdCQUFNQyxzRkFBbUIsQ0FBQ1gsT0FBcEIsQ0FBNEJZLFVBQTVCLENBQ0osZ0NBQStCTCxPQUFPLENBQUNHLEtBQU0sU0FEekMsQ0FBTjtBQUdBOztBQUNELGVBQU8sS0FBUDs7QUFDRCxXQUFLLFNBQUw7QUFDQyxlQUFPLElBQVA7QUFYRjtBQWFBLEdBZEQ7QUFlQTtBQUVEOzs7QUFFZTtBQUNkRyxPQUFLLEVBQUVDLDBEQURPO0FBRWRDLFFBQU0sRUFBRXBCO0FBRk0sQ0FBZixFOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBYTtBQUViOztBQUVBLE1BQU1tQixVQUFVLEdBQUc7QUFDbEJFLFFBQU0sRUFBRTtBQUNQQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFLFNBREg7QUFFTEMsY0FBUSxFQUFFO0FBRkw7QUFEQyxHQURVO0FBT2xCQyxNQUFJLEVBQUU7QUFDTEMsUUFBSSxFQUFFLE9BREQ7QUFFTEMsU0FBSyxFQUFFLE9BRkY7QUFHTEMsUUFBSSxFQUFFLHdCQUhEO0FBSUxDLFdBQU8sRUFBRTtBQUNSQyxVQUFJLEVBQUUsRUFERTtBQUVSN0IsWUFBTSxFQUFFLENBQUUsT0FBRixFQUFXLFVBQVgsQ0FGQTtBQUdSOEIsWUFBTSxFQUFFO0FBSEE7QUFKSixHQVBZO0FBaUJsQjlCLFFBQU0sRUFBRTtBQUNQQyxTQUFLLEVBQUU7QUFDTndCLFVBQUksRUFBRSxPQURBO0FBRU5NLGlCQUFXLEVBQUUsUUFGUDtBQUdOQyxVQUFJLEVBQUU7QUFIQSxLQURBO0FBTVA5QixZQUFRLEVBQUU7QUFDVHVCLFVBQUksRUFBRSxVQURHO0FBRVRmLFVBQUksRUFBRSxVQUZHO0FBR1RxQixpQkFBVyxFQUFFLFVBSEo7QUFJVEMsVUFBSSxFQUFFO0FBSkc7QUFOSDtBQWpCVSxDQUFuQjtBQWdDQTs7QUFFZWQseUVBQWYsRSIsImZpbGUiOiJsMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogaW1wb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmltcG9ydCBsb2dpblN0b3JlIGZyb20gJy4uL3N0b3JlL2xvZ2luLXN0b3JlJztcclxuaW1wb3J0IHtjdXJyZW50TW9kdWxlV29ya2VyfSBmcm9tICcuLi9jb21wb25lbnRzL3dvcmtlcnMvY3VycmVudC1tb2R1bGUnO1xyXG5cclxuLyoqKiBpbXBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW5Nb2R1bGVXb3JrZXIoe2lucHV0czoge2VtYWlsLCBwYXNzd29yZH0sIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0aWYoIGVtYWlsLmFjdGlvbnMuaXNFbXB0eSgpICkgcmV0dXJuIGZhbHNlO1xyXG5cdGlmKCBwYXNzd29yZC5hY3Rpb25zLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgnZW1haWwnLCBlbWFpbC5zdGF0ZS52YWx1ZSk7XHJcblx0b3V0cHV0TWVzc2FnZS5zZXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQuc3RhdGUudmFsdWUpO1xyXG5cdFxyXG5cdHJldHVybiBhd2FpdCBzZXJ2ZXJSZXNwb25zZUhhbmRsZXIoe2VtYWlsLCBwYXNzd29yZH0pO1xyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlcnZlclJlc3BvbnNlSGFuZGxlcihpbnB1dHMpIHtcclxuXHRyZXR1cm4gYXN5bmMgKHt0eXBlLCBtZXNzYWdlfSkgPT4ge1xyXG5cdFx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdFx0aWYoICdpbnB1dCcgaW4gbWVzc2FnZSApIHtcclxuXHRcdFx0XHRcdGlucHV0c1ttZXNzYWdlLmlucHV0XS5hY3Rpb25zLnVwZGF0ZUVycm9yKG1lc3NhZ2UuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhd2FpdCBjdXJyZW50TW9kdWxlV29ya2VyLmFjdGlvbnMudXBkYXRlVGV4dChcclxuXHRcdFx0XHRcdFx0YDxzcGFuIHN0eWxlPVwiY29sb3I6I0ZGMjEwNTtcIj4ke21lc3NhZ2UuZXJyb3J9PC9zcGFuPmBcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogbG9naW5TdG9yZSxcclxuXHR3b3JrZXI6IGxvZ2luTW9kdWxlV29ya2VyXHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgbG9naW5TdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnc2luZy1pbicsXHJcblx0XHRcdGJ5QnV0dG9uOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YToge1xyXG5cdFx0bmFtZTogJ2xvZ2luJyxcclxuXHRcdHRpdGxlOiAnTG9naW4nLFxyXG5cdFx0bGluazogJ0RvIG5vdCBoYXZlIGFuIGFjY291bnQnLFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0aW5wdXRzOiBbICdlbWFpbCcsICdwYXNzd29yZCcgXSxcclxuXHRcdFx0YnV0dG9uOiAnRW50ZXInXHJcblx0XHR9XHJcblx0fSxcclxuXHRpbnB1dHM6IHtcclxuXHRcdGVtYWlsOiB7XHJcblx0XHRcdG5hbWU6ICdlbWFpbCcsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnRS1tYWlsJyxcclxuXHRcdFx0aWNvbjogJyYjeGYwZTA7J1xyXG5cdFx0fSxcclxuXHRcdHBhc3N3b3JkOiB7XHJcblx0XHRcdG5hbWU6ICdwYXNzd29yZCcsXHJcblx0XHRcdHR5cGU6ICdwYXNzd29yZCcsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZTgwMTsnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==