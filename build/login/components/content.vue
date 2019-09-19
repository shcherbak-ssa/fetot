<template>
  <div class="content">
    <div class="form" :class="changeMode" v-if="/(sing-in|login)/.test(mode)">
      <fetot-input :input="inputs.mail"/>
      <fetot-input :input="inputs.password"/>
      <fetot-button @button-click="buttonClickHandler" type="text" :value="setButtonValue"/>
    </div>
    <check-email-message v-else :mail="inputs.mail.value"/>
  </div>
</template>

<script>
  import fetotInput from 'fetot-components/fetot-input.vue';
  import fetotButton from 'fetot-components/fetot-button.vue';
  import checkEmailMessage from './src/check-email-message.vue';

  import validation from 'fetot-js-modules/validation';
  import websocket from 'fetot-js-modules/websocket'

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
				this.mode === 'sing-in' ? this.isSinginMode() : this.isLoginMode()
			},

      isSinginMode() {
	      this.setErrorMessage('mail', '');
        let mailValue = this.checkInputValue('mail');

        if( mailValue ) websocket.sendMessage({
          type: this.mode,
          message: { mail: mailValue }
        })
      },
      isLoginMode() {
	      this.setErrorMessage('mail', '');
	      this.setErrorMessage('password', '');

	      let mailValue = this.checkInputValue('mail');
	      if( !mailValue ) return;

	      let passwordValue = this.checkInputValue('password');
	      if( !passwordValue ) return;

				websocket.sendMessage({
          type: this.mode,
          message: {
          	mail: mailValue,
            password: passwordValue
          }
				});
      },

      setErrorMessage(label, message) {
				this.inputs[label].error = message
      },
      checkInputValue(label) {
	      let {value} = this.inputs[label];

	      let valid = validation(label, value);
	      if( !!valid ) {
		      this.setErrorMessage(label, valid);
		      return false
	      }
	      return value;
      },

			singinMessageHandler({error, message}) {
				if( error ) return this.inputs.mail.error = message;
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
      }
		},
    created() {
			websocket.setMessageEvent('fetot-sing-in' ,this.singinMessageHandler);
			websocket.setMessageEvent('fetot-login', this.loginMessageHandler)
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .content {
    width: 100%;
    @include flex-center-column;

    .form {
      margin: 30px 0;
      transition: .4s;
      position: relative;

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
  }
</style>