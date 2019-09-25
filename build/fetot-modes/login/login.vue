<template>
  <fetot-container>
    <div class="login">
      <login-workspace
              :mode="mode" :title="currentTitle"
              :link="currentLink" :inputs="inputs"
      />
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

	export default {
		name: 'fetot-login',
    date() {
			return {
				mode: 'sing-in',
        currentTitle: '',
        currentLink: '',
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
				this.mode = changeCurrentMode();
				this.currentTitle = this.content[this.mode].title;
				this.currentLink = this.content[this.mode].link;

				function changeCurrentMode() {
					switch( this.mode ) {
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
      }
    },
    created() {
	    eventsHandlers.add({
        'change-mode': this.changeModeHandler,
        'check-email': this.checkEmailHandler,
        'sing-in-worker': this.singInWorkerHandler
      });
			websocket.setMessageHandlers(
				singInModule.messageHandlers(this.inputs.email)
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