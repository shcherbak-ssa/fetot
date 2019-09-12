export default {
  name: 'fetot-input',
	props: {
  	input: Object
	},
	data() {
  	return {
  		status: {
			  'is-active': false,
			  'has-value': false,
			  'has-error': false
		  }
		}
	},
	methods: {
  	isActive() {
		  this.status['is-active'] = true;
		  this.status['has-value'] = false;
	  },
  	checkValue({target}) {
		  this.status['is-active'] = false;
		  if( target.value !== '' ) this.status['has-value'] = true;
	  },
		setValue({target}) {
  		this.input.value = target.value;
		}
	},
	computed: {
		toggleError() {
			let isError = !!this.input.error;
			this.status['has-error'] = isError;
			
			if( isError ) {
			
			}
			
			return this.input.error;
		}
	}
}