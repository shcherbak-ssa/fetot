import loginForm from '../login-form/login-form.vue'

export default {
  name: 'fetot-login',
	data() {
  	return {
		  isLogin: false,
		  content: {
  			singIn: {
				  title: 'Sing in',
				  link: 'Already have an account?'
			  },
			  login: {
			  	title: 'Log in',
				  link: 'Don\'t have an account?'
		    }
		  }
	  }
	},
	components: {
  	'login-form': loginForm
	},
	methods: {
  	checkIsLogin(label) {
  		return this.isLogin ? this.content.login[label] : this.content.singIn[label];
	  }
	},
	computed: {
		getTitle() {
			return this.checkIsLogin('title')
		},
		getLink() {
			return this.checkIsLogin('link')
		}
	}
}