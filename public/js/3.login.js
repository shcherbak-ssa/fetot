(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
  module: {
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

/* harmony default export */ __webpack_exports__["default"] = (singInStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL3NpbmctaW4tc3RvcmUuanMiXSwibmFtZXMiOlsic2luZ0luU3RvcmUiLCJtb2R1bGUiLCJuYW1lIiwidGl0bGUiLCJsaW5rIiwiY29udGVudCIsInRleHQiLCJpbnB1dHMiLCJidXR0b24iLCJlbWFpbCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImVycm9yIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFhO0FBRWI7O0FBRUEsTUFBTUEsV0FBVyxHQUFHO0FBQ25CQyxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFLFNBREM7QUFFUEMsU0FBSyxFQUFFLFNBRkE7QUFHUEMsUUFBSSxFQUFFLHlCQUhDO0FBSVBDLFdBQU8sRUFBRTtBQUNSQyxVQUFJLEVBQUUsRUFERTtBQUVSQyxZQUFNLEVBQUUsQ0FBRSxPQUFGLENBRkE7QUFHUkMsWUFBTSxFQUFFO0FBSEE7QUFKRixHQURXO0FBV25CRCxRQUFNLEVBQUU7QUFDUEUsU0FBSyxFQUFFO0FBQ05DLFVBQUksRUFBRSxNQURBO0FBRU5DLFdBQUssRUFBRSxFQUZEO0FBR05DLGlCQUFXLEVBQUUsUUFIUDtBQUlOQyxVQUFJLEVBQUUsVUFKQTtBQUtOQyxXQUFLLEVBQUU7QUFMRCxLQURBO0FBUVBDLFlBQVEsRUFBRTtBQUNUTCxVQUFJLEVBQUUsVUFERztBQUVUQyxXQUFLLEVBQUUsRUFGRTtBQUdUQyxpQkFBVyxFQUFFLFVBSEo7QUFJVEMsVUFBSSxFQUFFLFVBSkc7QUFLVEMsV0FBSyxFQUFFO0FBTEU7QUFSSDtBQVhXLENBQXBCO0FBNkJBOztBQUVlZCwwRUFBZixFIiwiZmlsZSI6IjMubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKioqIGV4cG9ydHMgW2JlZ2luXSAqKiovXHJcblxyXG5jb25zdCBzaW5nSW5TdG9yZSA9IHtcclxuXHRtb2R1bGU6IHtcclxuXHRcdG5hbWU6ICdzaW5nLWluJyxcclxuXHRcdHRpdGxlOiAnU2luZyBpbicsXHJcblx0XHRsaW5rOiAnQWxyZWFkeSBoYXZlIGFuIGFjY291bnQnLFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0aW5wdXRzOiBbICdlbWFpbCcgXSxcclxuXHRcdFx0YnV0dG9uOiAnQ29udGludWUnXHJcblx0XHR9XHJcblx0fSxcclxuXHRpbnB1dHM6IHtcclxuXHRcdGVtYWlsOiB7XHJcblx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0UtbWFpbCcsXHJcblx0XHRcdGljb246ICcmI3hmMGUwOycsXHJcblx0XHRcdGVycm9yOiAnJ1xyXG5cdFx0fSxcclxuXHRcdHBhc3N3b3JkOiB7XHJcblx0XHRcdHR5cGU6ICdwYXNzd29yZCcsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXHJcblx0XHRcdGljb246ICcmI3hlODAxOycsXHJcblx0XHRcdGVycm9yOiAnJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiogZXhwb3J0cyBbZW5kXSAqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaW5nSW5TdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9