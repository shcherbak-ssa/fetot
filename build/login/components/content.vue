<template>
  <div class="content" :class="showMessage">
    <div class="form" :class="changeMode">
      <fetot-input :input="inputs.mail"/>
      <fetot-input :input="inputs.password"/>
      <fetot-button @button-click="buttonClickHandler" type="text" :value="setButtonValue"/>
    </div>
    <div class="message">
      <check-email-message :mail="inputs.mail.value"/>
    </div>
  </div>
</template>

<script>
  import fetotInput from 'fetot-components/fetot-input.vue';
  import fetotButton from 'fetot-components/fetot-button.vue';
  import checkEmailMessage from './src/check-email-message.vue';

  import validation from 'fetot-js-modules/validation';
  import websocket from 'fetot-js-modules/websocket';
  import storage from 'fetot-js-modules/local-storage';

	export default {
		name: 'login-content',
		props: {
			mode: String,
      inputs: Object
		},
		components: {
			'fetot-input': fetotInput,
			'fetot-button': fetotButton,
			'check-email-message': checkEmailMessage
    },
		methods: {
			buttonClickHandler() {
				// this.mode = 'check-email'
				this.mode === 'sing-in' ? this.isSinginMode() : this.isLoginMode()
			},

      isSinginMode() {
        let mailValue = this.checkInputValue('mail');

        if( mailValue ) websocket.sendMessage({
          type: 'message',
          message: {
          	type: 'sing-in/sing-in',
            data: {
	            email: mailValue
            }
          }
        })
      },
      isLoginMode() {
	      let mailValue = this.checkInputValue('mail');
	      if( !mailValue ) return;

	      let passwordValue = this.checkInputValue('password');
	      if( !passwordValue ) return;

				websocket.sendMessage({
          type: 'message',
          message: {
	          type: 'login/log-in',
          	data: {
		          email: mailValue,
		          password: passwordValue
            }
          }
				});
      },

      setErrorMessage(label, message) {
				this.inputs[label].error = message
      },
      checkInputValue(label) {
				this.setErrorMessage(label, '');
	      let {value} = this.inputs[label];

	      let valid = validation(label, value);
	      if( !!valid ) {
		      this.setErrorMessage(label, valid);
		      return false
	      }
	      return value;
      },

			singinMessageHandler({status, error}) {
				if( status === 'error' ) return this.inputs.mail.error = error;

				storage.setStorageItem('fetot-client-email', this.inputs.mail.value);
				this.$emit('check-email')
			},
			loginMessageHandler(message) {
				console.log(message)
				// this.websocketMessage = data;
			}
    },
		computed: {
			setButtonValue() {
				return this.mode === 'sing-in' ? 'Continue' : 'Enter'
			},
      changeMode() {
				return { 'is-login': this.mode === 'login' }
      },
      showMessage() {
				return { 'show-message': this.mode === 'check-email' }
      }
		},
    created() {
			websocket.setMessageHandlers('sing-in', this.singinMessageHandler);
			websocket.setMessageHandlers('log-in', this.loginMessageHandler)
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .content {
    width: 100%;
    position: relative;
    @include flex-center-column;

    .form {
      margin: 30px 0;
      transition: .4s;
      position: relative;
      z-index: 1;

      .fetot-input:nth-child(2) {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
      }

      &.is-login {
        .fetot-input:nth-child(1) {
          margin-bottom: 102px;
        }
        .fetot-input:nth-child(2) {
          opacity: 1;
          top: 72px;
        }
      }
    }
    .message {
      transition: .4s;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      @include full-sizes;
    }
    &.show-message {
      .form {
        opacity: 0;
      }
      .message {
        opacity: 1;
        transition: .4s .2s;
        z-index: 2;
      }
    }
  }
</style>