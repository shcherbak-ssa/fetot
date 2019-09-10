export default {
  name: 'fetot-input',
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
	  },
  	checkValue({target}) {
  		if( target.value !== '' ) {
  			this.status['is-active'] = true;
			  // this.status['has-value'] = true;
		  } else {
			  this.status['is-active'] = false;
			  // this.status['has-value'] = true;
		  }
	  }
	}
}