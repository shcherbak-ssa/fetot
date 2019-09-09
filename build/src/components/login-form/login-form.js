import fetotButton from '../f-button/f-button.vue'
import fetotInput from '../f-input/f-input.vue'

export default {
  name: 'login-form',
	data: () => {
  	return {
  		title: 'Sing in',
		  link: 'Already have an account?'
	  }
	},
	components: {
  	'fetot-button': fetotButton,
		'fetot-input': fetotInput
	}
}