import loginForm from '../components/login-form/login-form.vue'

export default {
	name: 'fetot',
	data: () => {
		return {
			title: 'Sing up',
			link: 'Already has an account?'
		}
	},
	components: {
		'login-form': loginForm
	}
}