import fetotInput from '../fetot-input/fetot-input.vue'
import fetotButton from '../fetot-button/fetot-button.vue'

export default {
  name: 'login-form',
	props: {
  	login: Object
	},
	components: {
  	'fetot-input': fetotInput,
		'fetot-button': fetotButton
	}
}