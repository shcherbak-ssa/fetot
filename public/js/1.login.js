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
    name: 'create-account',
    next: {
      byLink: 'sing-in',
      byButton: false
    }
  },
  data: {
    title: 'New account',
    link: 'Back to start',
    content: {
      text: '',
      inputs: ['fullname', 'password'],
      button: ['Create']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL21vZHVsZXMvY3JlYXRlLWFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbG9naW4tcGFnZS9zdG9yZS9jcmVhdGUtYWNjb3VudC1zdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY2NvdW50TW9kdWxlV29ya2VyIiwiaW5wdXRzIiwiZnVsbG5hbWUiLCJwYXNzd29yZCIsIm91dHB1dE1lc3NhZ2UiLCJpc0VtcHR5Iiwic2V0IiwidmFsdWUiLCJyZXNwb25zZSIsInNlbmQiLCJwYXJzZVNlcnZlclJlc3BvbnNlIiwidHlwZSIsIm1lc3NhZ2UiLCJpbnB1dCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwiY3JlYXRlQWNjb3VudFN0b3JlIiwid29ya2VyIiwiY29uZmlnIiwibmFtZSIsIm5leHQiLCJieUxpbmsiLCJieUJ1dHRvbiIsImRhdGEiLCJ0aXRsZSIsImxpbmsiLCJjb250ZW50IiwidGV4dCIsImJ1dHRvbiIsInBsYWNlaG9sZGVyIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBYTtBQUViOztBQUVBO0FBRUE7O0FBQ0E7O0FBRUEsZUFBZUEseUJBQWYsQ0FBeUM7QUFBQ0MsUUFBTSxFQUFFO0FBQUNDLFlBQUQ7QUFBV0M7QUFBWCxHQUFUO0FBQStCQztBQUEvQixDQUF6QyxFQUF3RjtBQUN2RixNQUFJRixRQUFRLENBQUNHLE9BQVQsRUFBSixFQUF5QixPQUFPLEtBQVA7QUFDekJELGVBQWEsQ0FBQ0UsR0FBZCxDQUFrQixVQUFsQixFQUE4QkosUUFBUSxDQUFDSyxLQUF2QztBQUVBLE1BQUlKLFFBQVEsQ0FBQ0UsT0FBVCxFQUFKLEVBQXlCLE9BQU8sS0FBUDtBQUN6QkQsZUFBYSxDQUFDRSxHQUFkLENBQWtCLFVBQWxCLEVBQThCSCxRQUFRLENBQUNJLEtBQXZDO0FBRUEsTUFBSUMsUUFBUSxHQUFHLE1BQU1KLGFBQWEsQ0FBQ0ssSUFBZCxFQUFyQjtBQUNBLFNBQU8sTUFBTUMsbUJBQW1CLENBQUM7QUFBQ1IsWUFBRDtBQUFXQztBQUFYLEdBQUQsRUFBdUJLLFFBQXZCLENBQWhDO0FBQ0E7QUFFRDs7QUFDQTs7O0FBRUEsZUFBZUUsbUJBQWYsQ0FBbUNULE1BQW5DLEVBQTJDO0FBQUNVLE1BQUQ7QUFBT0M7QUFBUCxDQUEzQyxFQUE0RDtBQUMzRCxVQUFRRCxJQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0NWLFlBQU0sQ0FBQ1csT0FBTyxDQUFDQyxLQUFULENBQU4sQ0FBc0JDLEtBQXRCLEdBQThCRixPQUFPLENBQUNFLEtBQXRDO0FBQ0EsYUFBTyxLQUFQOztBQUNELFNBQUssU0FBTDtBQUNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkosT0FBL0I7QUFDQSxhQUFPLElBQVA7QUFORjtBQVFBO0FBRUQ7OztBQUVlO0FBQ2RLLE9BQUssRUFBRUMsbUVBRE87QUFFZEMsUUFBTSxFQUFFbkI7QUFGTSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFhO0FBRWI7O0FBRUEsTUFBTWtCLGtCQUFrQixHQUFHO0FBQzFCRSxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFLGdCQURDO0FBRVBDLFFBQUksRUFBRTtBQUNMQyxZQUFNLEVBQUUsU0FESDtBQUVMQyxjQUFRLEVBQUU7QUFGTDtBQUZDLEdBRGtCO0FBUTFCQyxNQUFJLEVBQUU7QUFDTEMsU0FBSyxFQUFFLGFBREY7QUFFTEMsUUFBSSxFQUFFLGVBRkQ7QUFHTEMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRSxFQURFO0FBRVI1QixZQUFNLEVBQUUsQ0FBRSxVQUFGLEVBQWMsVUFBZCxDQUZBO0FBR1I2QixZQUFNLEVBQUUsQ0FBRSxRQUFGO0FBSEE7QUFISixHQVJvQjtBQWlCMUI3QixRQUFNLEVBQUU7QUFDUEMsWUFBUSxFQUFFO0FBQ1RTLFVBQUksRUFBRSxNQURHO0FBRVRKLFdBQUssRUFBRSxFQUZFO0FBR1R3QixpQkFBVyxFQUFFLFdBSEo7QUFJVEMsVUFBSSxFQUFFLFVBSkc7QUFLVGxCLFdBQUssRUFBRTtBQUxFO0FBREg7QUFqQmtCLENBQTNCO0FBNEJBOztBQUVlSSxpRkFBZixFIiwiZmlsZSI6IjEubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGltcG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5pbXBvcnQgY3JlYXRlQWNjb3VudFN0b3JlIGZyb20gJy4uL3N0b3JlL2NyZWF0ZS1hY2NvdW50LXN0b3JlJztcclxuXHJcbi8qKiogaW1wb3J0cyBbZW5kXSAqKiovXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjY291bnRNb2R1bGVXb3JrZXIoe2lucHV0czoge2Z1bGxuYW1lLCBwYXNzd29yZH0sIG91dHB1dE1lc3NhZ2V9KSB7XHJcblx0aWYoIGZ1bGxuYW1lLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgnZnVsbG5hbWUnLCBmdWxsbmFtZS52YWx1ZSk7XHJcblx0XHJcblx0aWYoIHBhc3N3b3JkLmlzRW1wdHkoKSApIHJldHVybiBmYWxzZTtcclxuXHRvdXRwdXRNZXNzYWdlLnNldCgncGFzc3dvcmQnLCBwYXNzd29yZC52YWx1ZSk7XHJcblx0XHJcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgb3V0cHV0TWVzc2FnZS5zZW5kKCk7XHJcblx0cmV0dXJuIGF3YWl0IHBhcnNlU2VydmVyUmVzcG9uc2Uoe2Z1bGxuYW1lLCBwYXNzd29yZH0sIHJlc3BvbnNlKTtcclxufVxyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuLyoqKiBzcmMgW2JlZ2luXSAqKiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXJzZVNlcnZlclJlc3BvbnNlKGlucHV0cywge3R5cGUsIG1lc3NhZ2V9KSB7XHJcblx0c3dpdGNoKCB0eXBlICkge1xyXG5cdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRpbnB1dHNbbWVzc2FnZS5pbnB1dF0uZXJyb3IgPSBtZXNzYWdlLmVycm9yO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0Y29uc29sZS5sb2coJ0NyZWF0ZWQgc3VjY2VzcycsIG1lc3NhZ2UpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKiogc3JjIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogY3JlYXRlQWNjb3VudFN0b3JlLFxyXG5cdHdvcmtlcjogY3JlYXRlQWNjb3VudE1vZHVsZVdvcmtlclxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKiogZXhwb3J0cyBbYmVnaW5dICoqKi9cclxuXHJcbmNvbnN0IGNyZWF0ZUFjY291bnRTdG9yZSA9IHtcclxuXHRjb25maWc6IHtcclxuXHRcdG5hbWU6ICdjcmVhdGUtYWNjb3VudCcsXHJcblx0XHRuZXh0OiB7XHJcblx0XHRcdGJ5TGluazogJ3NpbmctaW4nLFxyXG5cdFx0XHRieUJ1dHRvbjogZmFsc2VcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGE6IHtcclxuXHRcdHRpdGxlOiAnTmV3IGFjY291bnQnLFxyXG5cdFx0bGluazogJ0JhY2sgdG8gc3RhcnQnLFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0aW5wdXRzOiBbICdmdWxsbmFtZScsICdwYXNzd29yZCcgXSxcclxuXHRcdFx0YnV0dG9uOiBbICdDcmVhdGUnIF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGlucHV0czoge1xyXG5cdFx0ZnVsbG5hbWU6IHtcclxuXHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnRnVsbCBuYW1lJyxcclxuXHRcdFx0aWNvbjogJyYjeGU4MDA7JyxcclxuXHRcdFx0ZXJyb3I6ICcnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqKiBleHBvcnRzIFtlbmRdICoqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFjY291bnRTdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9