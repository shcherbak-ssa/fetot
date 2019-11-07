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
  if (await fullname.actions.isEmpty()) return false;
  if (await password.actions.isEmpty()) return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY3JlYXRlLWFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9jcmVhdGUtYWNjb3VudC1zdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY2NvdW50TW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZnVsbG5hbWUiLCJwYXNzd29yZCIsIm91dHB1dE1lc3NhZ2UiLCJhY3Rpb25zIiwiaXNFbXB0eSIsInNldCIsInN0YXRlIiwidmFsdWUiLCJzZXJ2ZXJSZXNwb25zZUhhbmRsZXIiLCJ0eXBlIiwibWVzc2FnZSIsImlucHV0IiwidXBkYXRlRXJyb3IiLCJlcnJvciIsInN0b3JlIiwiY3JlYXRlQWNjb3VudFN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmV4dCIsImJ5TGluayIsImJ5QnV0dG9uIiwiZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEseUJBQWYsQ0FBeUM7QUFBQ0MsUUFBTSxFQUFFO0FBQUNDLFlBQUQ7QUFBV0M7QUFBWCxHQUFUO0FBQStCQztBQUEvQixDQUF6QyxFQUF3RjtBQUN2RixNQUFJLE1BQU1GLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsT0FBakIsRUFBVixFQUF1QyxPQUFPLEtBQVA7QUFDdkMsTUFBSSxNQUFNSCxRQUFRLENBQUNFLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQVYsRUFBdUMsT0FBTyxLQUFQO0FBRXZDRixlQUFhLENBQUNHLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEJMLFFBQVEsQ0FBQ00sS0FBVCxDQUFlQyxLQUE3QztBQUNBTCxlQUFhLENBQUNHLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEJKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlQyxLQUE3QztBQUVBLFNBQU8sTUFBTUMscUJBQXFCLENBQUM7QUFBQ1IsWUFBRDtBQUFXQztBQUFYLEdBQUQsQ0FBbEM7QUFDQTtBQUVEOztBQUNBOzs7QUFFQSxlQUFlTyxxQkFBZixDQUFxQ1QsTUFBckMsRUFBNkM7QUFDNUMsU0FBTyxPQUFPO0FBQUNVLFFBQUQ7QUFBT0M7QUFBUCxHQUFQLEtBQTJCO0FBQ2pDLFlBQVFELElBQVI7QUFDQyxXQUFLLE9BQUw7QUFDQ1YsY0FBTSxDQUFDVyxPQUFPLENBQUNDLEtBQVQsQ0FBTixDQUFzQlIsT0FBdEIsQ0FBOEJTLFdBQTlCLENBQTBDRixPQUFPLENBQUNHLEtBQWxEO0FBQ0EsZUFBTyxLQUFQOztBQUNELFdBQUssU0FBTDtBQUNDLGVBQU8sSUFBUDtBQUxGO0FBT0EsR0FSRDtBQVNBO0FBRUQ7OztBQUVlO0FBQ2RDLE9BQUssRUFBRUMsbUVBRE87QUFFZEMsUUFBTSxFQUFFbEI7QUFGTSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFhO0FBRWI7O0FBRUEsTUFBTWlCLGtCQUFrQixHQUFHO0FBQzFCRSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxTQURIO0FBRUxDLGNBQVEsRUFBRTtBQUZMO0FBREMsR0FEa0I7QUFPMUJDLE1BQUksRUFBRTtBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEMsU0FBSyxFQUFFLGFBRkY7QUFHTEMsUUFBSSxFQUFFLGVBSEQ7QUFJTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxFQURFO0FBRVIzQixZQUFNLEVBQUUsQ0FBRSxVQUFGLEVBQWMsVUFBZCxDQUZBO0FBR1I0QixZQUFNLEVBQUU7QUFIQTtBQUpKLEdBUG9CO0FBaUIxQjVCLFFBQU0sRUFBRTtBQUNQQyxZQUFRLEVBQUU7QUFDVHNCLFVBQUksRUFBRSxVQURHO0FBRVRNLGlCQUFXLEVBQUUsV0FGSjtBQUdUQyxVQUFJLEVBQUU7QUFIRyxLQURIO0FBTVA1QixZQUFRLEVBQUU7QUFDVHFCLFVBQUksRUFBRSxVQURHO0FBRVRiLFVBQUksRUFBRSxVQUZHO0FBR1RtQixpQkFBVyxFQUFFLFVBSEo7QUFJVEMsVUFBSSxFQUFFO0FBSkc7QUFOSDtBQWpCa0IsQ0FBM0I7QUFnQ0E7O0FBRWVkLGlGQUFmLEUiLCJmaWxlIjoibDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgY3JlYXRlQWNjb3VudFN0b3JlIGZyb20gJy4uL3N0b3JlL2NyZWF0ZS1hY2NvdW50LXN0b3JlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjY291bnRNb2R1bGVXb3JrZXIoe2lucHV0czoge2Z1bGxuYW1lLCBwYXNzd29yZH0sIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0aWYoIGF3YWl0IGZ1bGxuYW1lLmFjdGlvbnMuaXNFbXB0eSgpICkgcmV0dXJuIGZhbHNlO1xyXG5cdGlmKCBhd2FpdCBwYXNzd29yZC5hY3Rpb25zLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgnZnVsbG5hbWUnLCBmdWxsbmFtZS5zdGF0ZS52YWx1ZSk7XHJcblx0b3V0cHV0TWVzc2FnZS5zZXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQuc3RhdGUudmFsdWUpO1xyXG5cdFxyXG5cdHJldHVybiBhd2FpdCBzZXJ2ZXJSZXNwb25zZUhhbmRsZXIoe2Z1bGxuYW1lLCBwYXNzd29yZH0pO1xyXG59XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG4vKioqIHNyYyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlcnZlclJlc3BvbnNlSGFuZGxlcihpbnB1dHMpIHtcclxuXHRyZXR1cm4gYXN5bmMgKHt0eXBlLCBtZXNzYWdlfSkgPT4ge1xyXG5cdFx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdFx0aW5wdXRzW21lc3NhZ2UuaW5wdXRdLmFjdGlvbnMudXBkYXRlRXJyb3IobWVzc2FnZS5lcnJvcik7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogY3JlYXRlQWNjb3VudFN0b3JlLFxyXG5cdHdvcmtlcjogY3JlYXRlQWNjb3VudE1vZHVsZVdvcmtlclxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNyZWF0ZUFjY291bnRTdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5leHQ6IHtcclxuXHRcdFx0YnlMaW5rOiAnc2luZy1pbicsXHJcblx0XHRcdGJ5QnV0dG9uOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YToge1xyXG5cdFx0bmFtZTogJ2NyZWF0ZS1hY2NvdW50JyxcclxuXHRcdHRpdGxlOiAnTmV3IGFjY291bnQnLFxyXG5cdFx0bGluazogJ0JhY2sgdG8gc3RhcnQnLFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0aW5wdXRzOiBbICdmdWxsbmFtZScsICdwYXNzd29yZCcgXSxcclxuXHRcdFx0YnV0dG9uOiAnQ3JlYXRlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRmdWxsbmFtZToge1xyXG5cdFx0XHRuYW1lOiAnZnVsbG5hbWUnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0Z1bGwgbmFtZScsXHJcblx0XHRcdGljb246ICcmI3hlODAwOydcclxuXHRcdH0sXHJcblx0XHRwYXNzd29yZDoge1xyXG5cdFx0XHRuYW1lOiAncGFzc3dvcmQnLFxyXG5cdFx0XHR0eXBlOiAncGFzc3dvcmQnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDE7J1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBY2NvdW50U3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==