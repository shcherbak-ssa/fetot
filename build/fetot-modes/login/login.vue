<template>
  <fetot-container>
    <div class="login">
      <login-workspace
              :mode="mode" :inputs="inputs"
              :title="setCurrentTitle" :link="setCurrentLink"/>
    </div>
  </fetot-container>
</template>

<script>
	import fetotContainer from 'fetot-components/fetot-container.vue';
	import eventsHandlers from 'fetot-js-modules/events-handlers';
	import storage from 'fetot-js-modules/local-storage';

	import loginWorkspace from './components/workspace.vue';
	import loginData from './src/login-data.json';

	import singInModule from './modules/sing-in';
	import loginModule from './modules/login';
	import confirmEmailModule from './modules/confirm-email';

	export default {
		name: 'fetot-login',
    data() {
			return {
				mode: '',
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
	    async singInWorkerHandler() {
				await singInModule.worker(this.inputs.email)
      },
	    async loginWorkerHandler() {
		    await loginModule.worker(this.inputs)
	    },
      async confirmEmailWorkerHandler() {
				await confirmEmailModule.worker(this.inputs['confirm-email'])
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
    beforeCreate() {
			this.mode = storage.hasStorageItem('client-exist') ? 'login' : 'sing-in'
    },
    created() {
	    eventsHandlers.add({
        'change-mode': this.changeModeHandler,
        'check-email': this.checkEmailHandler,
        'sing-in-worker': this.singInWorkerHandler,
        'login-worker': this.loginWorkerHandler,
        'confirm-email-worker': this.confirmEmailWorkerHandler
      })
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