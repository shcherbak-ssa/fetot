(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
  module: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9sb2dpbi1wYWdlL3N0b3JlL2xvZ2luLXN0b3JlLmpzIl0sIm5hbWVzIjpbImxvZ2luU3RvcmUiLCJtb2R1bGUiLCJuYW1lIiwidGl0bGUiLCJsaW5rIiwiY29udGVudCIsInRleHQiLCJpbnB1dHMiLCJidXR0b24iLCJlbWFpbCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImVycm9yIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFhO0FBRWI7O0FBRUEsTUFBTUEsVUFBVSxHQUFHO0FBQ2xCQyxRQUFNLEVBQUU7QUFDUEMsUUFBSSxFQUFFLE9BREM7QUFFUEMsU0FBSyxFQUFFLE9BRkE7QUFHUEMsUUFBSSxFQUFFLHdCQUhDO0FBSVBDLFdBQU8sRUFBRTtBQUNSQyxVQUFJLEVBQUUsRUFERTtBQUVSQyxZQUFNLEVBQUUsQ0FBRSxPQUFGLEVBQVcsVUFBWCxDQUZBO0FBR1JDLFlBQU0sRUFBRTtBQUhBO0FBSkYsR0FEVTtBQVdsQkQsUUFBTSxFQUFFO0FBQ1BFLFNBQUssRUFBRTtBQUNOQyxVQUFJLEVBQUUsTUFEQTtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxpQkFBVyxFQUFFLFFBSFA7QUFJTkMsVUFBSSxFQUFFLFVBSkE7QUFLTkMsV0FBSyxFQUFFO0FBTEQsS0FEQTtBQVFQQyxZQUFRLEVBQUU7QUFDVEwsVUFBSSxFQUFFLFVBREc7QUFFVEMsV0FBSyxFQUFFLEVBRkU7QUFHVEMsaUJBQVcsRUFBRSxVQUhKO0FBSVRDLFVBQUksRUFBRSxVQUpHO0FBS1RDLFdBQUssRUFBRTtBQUxFO0FBUkg7QUFYVSxDQUFuQjtBQTZCQTs7QUFFZWQseUVBQWYsRSIsImZpbGUiOiIyLmxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqKiBleHBvcnRzIFtiZWdpbl0gKioqL1xyXG5cclxuY29uc3QgbG9naW5TdG9yZSA9IHtcclxuXHRtb2R1bGU6IHtcclxuXHRcdG5hbWU6ICdsb2dpbicsXHJcblx0XHR0aXRsZTogJ0xvZ2luJyxcclxuXHRcdGxpbms6ICdEbyBub3QgaGF2ZSBhbiBhY2NvdW50JyxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dGV4dDogJycsXHJcblx0XHRcdGlucHV0czogWyAnZW1haWwnLCAncGFzc3dvcmQnIF0sXHJcblx0XHRcdGJ1dHRvbjogJ0VudGVyJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5wdXRzOiB7XHJcblx0XHRlbWFpbDoge1xyXG5cdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdFLW1haWwnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZjBlMDsnLFxyXG5cdFx0XHRlcnJvcjogJydcclxuXHRcdH0sXHJcblx0XHRwYXNzd29yZDoge1xyXG5cdFx0XHR0eXBlOiAncGFzc3dvcmQnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxyXG5cdFx0XHRpY29uOiAnJiN4ZTgwMTsnLFxyXG5cdFx0XHRlcnJvcjogJydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKioqIGV4cG9ydHMgW2VuZF0gKioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5TdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9