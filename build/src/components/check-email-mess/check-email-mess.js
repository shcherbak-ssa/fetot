export default {
  name: 'check-email-mess',
	props: {
  	mail: String,
		show: Boolean
	},
	computed: {
  	checkState() {
  		return {
  			'to-hide': !this.show,
			  'to-show': this.show
		  }
	  }
	}
}