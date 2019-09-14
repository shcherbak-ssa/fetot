import fetotInput from '../fetot-input/fetot-input.vue'
import fetotButton from '../fetot-button/fetot-button.vue'

export default {
  name: 'login-form',
	props: {
  	login: Object,
		show: Boolean
	},
	components: {
  	'fetot-input': fetotInput,
		'fetot-button': fetotButton
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