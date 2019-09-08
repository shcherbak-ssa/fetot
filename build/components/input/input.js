export default {
	name: 'input',
	methods: {
		isActive({target}) {
			target.parentElement.classList.add('is-active')
		},
		isRemoveFocus({target}) {
			let parentClass = target.parentElement.classList;
			
			if( target.value.length !== 0 ) parentClass.add('is-has-value');
			parentClass.remove('is-active');
		}
	}
}