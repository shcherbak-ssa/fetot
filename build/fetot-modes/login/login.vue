<template>
  <fetot-container>
    <div class="login">
      <login-workspace
              :mode="mode" :title="setCurrentTitle"
              :link="setCurrentLink" :inputs="inputs"/>
    </div>
  </fetot-container>
</template>

<script>
	import fetotContainer from 'fetot-components/fetot-container.vue';

	import loginWorkspace from './components/workspace.vue';
	import loginData from './src/login-data.json';

	import eventsHandlers from 'fetot-js-modules/events-handlers';
	import websocket from 'fetot-js-modules/websocket';

	import singInModule from './modules/sing-in';
	import loginModule from './modules/login';

	export default {
		name: 'fetot-login',
    data() {
			return {
				mode: 'sing-in',
				content: loginData.content,
        inputs: loginData.inputs
      }
    },
		components: {
			'fetot-container': fetotContainer,
			'login-workspace': loginWorkspace
		},
    methods: {
			changeModeHandler() {
				this.mode = changeCurrentMode(this.mode);

				function changeCurrentMode(mode) {
					switch( mode ) {
						case 'sing-in':
							return 'login';
						case 'login':
						case 'check-email':
							return 'sing-in';
					}
				}
      },
      checkEmailHandler() {
	      this.mode = 'check-email'
      },
	    singInWorkerHandler() {
				singInModule.worker(this.inputs.email)
      },
	    loginWorkerHandler() {
		    loginModule.worker(this.inputs)
	    }
    },
    computed: {
	    setCurrentTitle() {
	    	return this.content[this.mode].title;
	    },
      setCurrentLink() {
	    	return this.content[this.mode].link;
      }
    },
    created() {
	    eventsHandlers.add({
        'change-mode': this.changeModeHandler,
        'check-email': this.checkEmailHandler,
        'sing-in-worker': this.singInWorkerHandler,
        'login-worker': this.loginWorkerHandler
      });

			websocket.setMessageHandlers(
				singInModule.messageHandlers(this.inputs.email),
        loginModule.messageHandlers(this.inputs)
      )
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .login {
    @include full-sizes;
    @include flex-center;
  }
</style>