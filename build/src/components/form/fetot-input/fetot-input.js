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
		  this.setStates(1, 0, 0)
	  },
		isBlur({target}) {
  		this.setStates(0, !!target.value,0)
		},
		setValue({target}) {
  		this.input.value = target.value;
  		this.$emit('input-input');
		},
		setStates(isActive, hasValue, hasError) {
			this.states['is-active'] = !!isActive;
			this.states['has-value'] = !!hasValue;
			this.states['has-error'] = !!hasError;
		}
	},
	computed: {
		toggleError() {
			if( this.input.error ) this.setStates(1, 0, 1);
			return this.input.error
		}
	},
	mounted() {
  	this.setStates(0, !!this.input.value, 0);
	}
}