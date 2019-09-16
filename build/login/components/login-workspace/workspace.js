import loginContent from '../content.vue';
import {content, inputs} from './data.json'

export default {
  name: 'workspace',
	data() {
  	return {
  		current: 'sing-in',
  		content,
		  inputs
	  }
	},
	components: {
  	'login-content': loginContent
	},
	methods: {
		testClickHandler() {
			this.current = 'check-email';
		},
  	changeContent() {
  		this.current = this.changeCurrentContent();
	  },
		changeCurrentContent() {
			switch( this.current ) {
				case 'sing-in':
					return 'login';
				case 'login':
				case 'check-email':
					return 'sing-in';
			}
		}
	},
	computed: {
  	setCurrentTitle() {
  		return this.content[this.current].title
	  },
		setCurrentLink() {
			return this.content[this.current].link
		}
	}
}