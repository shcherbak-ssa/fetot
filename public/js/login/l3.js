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
  if (await email.actions.isEmpty()) return false;
  if (await password.actions.isEmpty()) return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9sb2dpbi1zdG9yZS5qcyJdLCJuYW1lcyI6WyJsb2dpbk1vZHVsZVdvcmtlciIsImlucHV0cyIsImVtYWlsIiwicGFzc3dvcmQiLCJvdXRwdXRNZXNzYWdlIiwiYWN0aW9ucyIsImlzRW1wdHkiLCJzZXQiLCJzdGF0ZSIsInZhbHVlIiwic2VydmVyUmVzcG9uc2VIYW5kbGVyIiwidHlwZSIsIm1lc3NhZ2UiLCJpbnB1dCIsInVwZGF0ZUVycm9yIiwiZXJyb3IiLCJjdXJyZW50TW9kdWxlV29ya2VyIiwidXBkYXRlVGV4dCIsInN0b3JlIiwibG9naW5TdG9yZSIsIndvcmtlciIsImNvbmZpZyIsIm5leHQiLCJieUxpbmsiLCJieUJ1dHRvbiIsImRhdGEiLCJuYW1lIiwidGl0bGUiLCJsaW5rIiwiY29udGVudCIsInRleHQiLCJidXR0b24iLCJwbGFjZWhvbGRlciIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBQ0E7QUFFQTs7QUFDQTs7QUFFQSxlQUFlQSxpQkFBZixDQUFpQztBQUFDQyxRQUFNLEVBQUU7QUFBQ0MsU0FBRDtBQUFRQztBQUFSLEdBQVQ7QUFBNEJDO0FBQTVCLENBQWpDLEVBQTZFO0FBQzVFLE1BQUksTUFBTUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsRUFBVixFQUFvQyxPQUFPLEtBQVA7QUFDcEMsTUFBSSxNQUFNSCxRQUFRLENBQUNFLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQVYsRUFBdUMsT0FBTyxLQUFQO0FBRXZDRixlQUFhLENBQUNHLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMkJMLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxLQUF2QztBQUNBTCxlQUFhLENBQUNHLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEJKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlQyxLQUE3QztBQUVBLFNBQU8sTUFBTUMscUJBQXFCLENBQUM7QUFBQ1IsU0FBRDtBQUFRQztBQUFSLEdBQUQsQ0FBbEM7QUFDQTtBQUVEOztBQUNBOzs7QUFFQSxlQUFlTyxxQkFBZixDQUFxQ1QsTUFBckMsRUFBNkM7QUFDNUMsU0FBTyxPQUFPO0FBQUNVLFFBQUQ7QUFBT0M7QUFBUCxHQUFQLEtBQTJCO0FBQ2pDLFlBQVFELElBQVI7QUFDQyxXQUFLLE9BQUw7QUFDQyxZQUFJLFdBQVdDLE9BQWYsRUFBeUI7QUFDeEJYLGdCQUFNLENBQUNXLE9BQU8sQ0FBQ0MsS0FBVCxDQUFOLENBQXNCUixPQUF0QixDQUE4QlMsV0FBOUIsQ0FBMENGLE9BQU8sQ0FBQ0csS0FBbEQ7QUFDQSxTQUZELE1BRU87QUFDTixnQkFBTUMsc0ZBQW1CLENBQUNYLE9BQXBCLENBQTRCWSxVQUE1QixDQUNKLGdDQUErQkwsT0FBTyxDQUFDRyxLQUFNLFNBRHpDLENBQU47QUFHQTs7QUFDRCxlQUFPLEtBQVA7O0FBQ0QsV0FBSyxTQUFMO0FBQ0MsZUFBTyxJQUFQO0FBWEY7QUFhQSxHQWREO0FBZUE7QUFFRDs7O0FBRWU7QUFDZEcsT0FBSyxFQUFFQywwREFETztBQUVkQyxRQUFNLEVBQUVwQjtBQUZNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQWE7QUFFYjs7QUFFQSxNQUFNbUIsVUFBVSxHQUFHO0FBQ2xCRSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxTQURIO0FBRUxDLGNBQVEsRUFBRTtBQUZMO0FBREMsR0FEVTtBQU9sQkMsTUFBSSxFQUFFO0FBQ0xDLFFBQUksRUFBRSxPQUREO0FBRUxDLFNBQUssRUFBRSxPQUZGO0FBR0xDLFFBQUksRUFBRSx3QkFIRDtBQUlMQyxXQUFPLEVBQUU7QUFDUkMsVUFBSSxFQUFFLEVBREU7QUFFUjdCLFlBQU0sRUFBRSxDQUFFLE9BQUYsRUFBVyxVQUFYLENBRkE7QUFHUjhCLFlBQU0sRUFBRTtBQUhBO0FBSkosR0FQWTtBQWlCbEI5QixRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFO0FBQ053QixVQUFJLEVBQUUsT0FEQTtBQUVOTSxpQkFBVyxFQUFFLFFBRlA7QUFHTkMsVUFBSSxFQUFFO0FBSEEsS0FEQTtBQU1QOUIsWUFBUSxFQUFFO0FBQ1R1QixVQUFJLEVBQUUsVUFERztBQUVUZixVQUFJLEVBQUUsVUFGRztBQUdUcUIsaUJBQVcsRUFBRSxVQUhKO0FBSVRDLFVBQUksRUFBRTtBQUpHO0FBTkg7QUFqQlUsQ0FBbkI7QUFnQ0E7O0FBRWVkLHlFQUFmLEUiLCJmaWxlIjoibDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgbG9naW5TdG9yZSBmcm9tICcuLi9zdG9yZS9sb2dpbi1zdG9yZSc7XHJcbmltcG9ydCB7Y3VycmVudE1vZHVsZVdvcmtlcn0gZnJvbSAnLi4vY29tcG9uZW50cy93b3JrZXJzL2N1cnJlbnQtbW9kdWxlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luTW9kdWxlV29ya2VyKHtpbnB1dHM6IHtlbWFpbCwgcGFzc3dvcmR9LCBvdXRwdXRNZXNzYWdlfSkge1xyXG5cdGlmKCBhd2FpdCBlbWFpbC5hY3Rpb25zLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRpZiggYXdhaXQgcGFzc3dvcmQuYWN0aW9ucy5pc0VtcHR5KCkgKSByZXR1cm4gZmFsc2U7XHJcblx0XHJcblx0b3V0cHV0TWVzc2FnZS5zZXQoJ2VtYWlsJywgZW1haWwuc3RhdGUudmFsdWUpO1xyXG5cdG91dHB1dE1lc3NhZ2Uuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkLnN0YXRlLnZhbHVlKTtcclxuXHRcclxuXHRyZXR1cm4gYXdhaXQgc2VydmVyUmVzcG9uc2VIYW5kbGVyKHtlbWFpbCwgcGFzc3dvcmR9KTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXJ2ZXJSZXNwb25zZUhhbmRsZXIoaW5wdXRzKSB7XHJcblx0cmV0dXJuIGFzeW5jICh7dHlwZSwgbWVzc2FnZX0pID0+IHtcclxuXHRcdHN3aXRjaCggdHlwZSApIHtcclxuXHRcdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRcdGlmKCAnaW5wdXQnIGluIG1lc3NhZ2UgKSB7XHJcblx0XHRcdFx0XHRpbnB1dHNbbWVzc2FnZS5pbnB1dF0uYWN0aW9ucy51cGRhdGVFcnJvcihtZXNzYWdlLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YXdhaXQgY3VycmVudE1vZHVsZVdvcmtlci5hY3Rpb25zLnVwZGF0ZVRleHQoXHJcblx0XHRcdFx0XHRcdGA8c3BhbiBzdHlsZT1cImNvbG9yOiNGRjIxMDU7XCI+JHttZXNzYWdlLmVycm9yfTwvc3Bhbj5gXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKioqIHNyYyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c3RvcmU6IGxvZ2luU3RvcmUsXHJcblx0d29ya2VyOiBsb2dpbk1vZHVsZVdvcmtlclxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGxvZ2luU3RvcmUgPSB7XHJcblx0Y29uZmlnOiB7XHJcblx0XHRuZXh0OiB7XHJcblx0XHRcdGJ5TGluazogJ3NpbmctaW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogZmFsc2VcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGE6IHtcclxuXHRcdG5hbWU6ICdsb2dpbicsXHJcblx0XHR0aXRsZTogJ0xvZ2luJyxcclxuXHRcdGxpbms6ICdEbyBub3QgaGF2ZSBhbiBhY2NvdW50JyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJycsXHJcblx0XHRcdGlucHV0czogWyAnZW1haWwnLCAncGFzc3dvcmQnIF0sXHJcblx0XHRcdGJ1dHRvbjogJ0VudGVyJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRlbWFpbDoge1xyXG5cdFx0XHRuYW1lOiAnZW1haWwnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0UtbWFpbCcsXHJcblx0XHRcdGljb246ICcmI3hmMGUwOydcclxuXHRcdH0sXHJcblx0XHRwYXNzd29yZDoge1xyXG5cdFx0XHRuYW1lOiAncGFzc3dvcmQnLFxyXG5cdFx0XHR0eXBlOiAncGFzc3dvcmQnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDE7J1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpblN0b3JlOyJdLCJzb3VyY2VSb290IjoiIn0=