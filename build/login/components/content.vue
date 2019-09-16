<template>
  <div class="content">
    <div class="form" v-if="/(sing-in|login)/.test(mode)">
      <fetot-input :input="inputs.mail"/>
      <fetot-input v-if="mode === 'login'" :input="inputs.password"/>
      <fetot-button @button-click="buttonClickHandler" type="text" :value="setButtonValue"/>
    </div>
    <check-email-message v-else :mail="inputs.mail.value"/>
  </div>
</template>

<script>
  import fetotInput from 'fetot-components/fetot-input/fetot-input.vue';
  import fetotButton from 'fetot-components/fetot-button/fetot-button.vue';
  import checkEmailMessage from './src/check-email-message.vue';

  import validation from 'fetot-js-modules/validation';
  import websocket from 'fetot-js-modules/websocket'

	export default {
		name: 'login-content',
		props: {
			mode: String,
      inputs: Object
		},
    data() {
			return {
				websocketMessage: {}
      }
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
				let {value} = this.inputs.mail,
          valid = validation('mail', value);

				if( valid ) return this.inputs.mail.error = valid;

	      this.inputs.mail.error = '';
				this.sendData({ type: this.mode, mail: value })
      },
      isLoginMode() {

      },
      sendData(data) {
	      websocket.sendData(data)
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
    }
  }
</style>