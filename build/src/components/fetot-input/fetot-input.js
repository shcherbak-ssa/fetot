export default {
  name: 'fetot-input',
	props: {
  	input: Object
	},
	data() {
  	return {
  		states: {
			  'is-active': false,
			  'has-value': false,
			  'has-error': false
		  }
		}
	},
	methods: {
  	isActive() {
		  this.states['is-active'] = true;
		  this.states['has-value'] = false;
	  },
		isBlur({target}) {
		  this.states['is-active'] = false;
		  if( target.value !== '' ) this.states['has-value'] = true;
	  },
		setValue({target}) {
  		this.input.value = target.value;
		}
	},
	computed: {
		toggleError() {
			let isError = !!this.input.error;
			
			this.states['is-active'] = isError;
			this.states['has-error'] = isError;
			this.states['has-value'] = false;
			
			return this.input.error;
		}
	}
}