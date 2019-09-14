import loginForm from '../login-form/login-form.vue';
import checkEmailMessage from '../check-email-mess/check-email-mess.vue'

import {content, login} from './login-data.json';
import validation from '../../modules/validation';

export default {
  name: 'fetot-login',
	data() {
  	return {
		  isLogin: false,
		  isContinue: false,
		  content,
		  login
	  }
	},
	components: {
  	'login-form': loginForm,
		'check-email-message': checkEmailMessage
	},
	methods: {
		changeContent() {
			this.isLogin = !this.isLogin;
			// this.isContinue = !this.isContinue;
		},
  	checkIsLogin(label) {
  		return this.isLogin ? this.content.login[label] : this.content.sing[label];
	  },
		submitData() {
  		let {mail, password} = this.login.inputs,
			  {value: mailValue, label: mailLabel} = mail,
		    submitData = {};
		    
			let valid = validation(mailLabel, mailValue);
			if( valid ) return mail.error = valid;
			
			submitData.mail = mailValue;
			
			if( this.isLogin ) {
				let {value: passwordValue, label: passwordLabel} = password,
				
				valid = validation(passwordLabel, passwordValue);
				if( valid ) return password.error = valid;
				
				submitData.password = passwordValue;
			}
			
  		console.log(submitData);
		}
	},
	computed: {
		getTitle() {
			return this.checkIsLogin('title')
		},
		getLink() {
			return this.checkIsLogin('link')
		},
		setLoginData() {
			this.login.button = this.isLogin ? 'Enter' : 'Continue';
			this.login.isLogin = this.isLogin;
			
			return this.login;
		}
	}
}