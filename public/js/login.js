'use strict';

let inputs = document.querySelectorAll('.input');
let svg = document.getElementById('svg')

inputs.forEach((input) => {
	input.onclick = (event) => {
		let id = input.getAttribute('data-id');
		
		input.classList.add('is-active');
		svg.setAttribute('data-id', id);
	};
	input.querySelector('.item').onblur = (event) => {
		input.classList.remove('is-active');
	}
});