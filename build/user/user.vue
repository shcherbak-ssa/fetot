<template>
  <fetot-container>
    <div class="user">
      <user-workspace :inputs="inputs" :email="email" :url="url"/>
<!--      <user-modal/>-->
    </div>
  </fetot-container>
</template>

<script>
  import fetotContainer from 'fetot-components/fetot-container.vue';

  import storage from 'fetot-js-modules/local-storage';
  import fetotEventsHandlers from 'fetot-js-modules/fetot-events-handlers';

  // import userModal from './components/user-modal.vue';
  import userWorkspace from './components/workspace.vue';
  import userData from './src/user-form-data.json';

  import loadAvatarModule from './modules/load-avatar';

	export default {
		name: 'user',
    data() {
			return {
				inputs: userData.inputs,
				email: '',
        url: '',

        modalActive: false
      }
    },
    components: {
			'fetot-container': fetotContainer,
      'user-workspace': userWorkspace,
      // 'user-modal': userModal
    },
    methods: {
	    buttonClickHandler() {
	    	console.log('inputs: ', this.inputs)
      },
	    async loadAvatarHandler(avatar) {
	    	let url = loadAvatarModule.loadWorker(avatar);
	    	await loadAvatarModule.changeWorker(url, document.getElementById('user-avatar'));

	    	fetotEventsHandlers.emit('open-modal');
      }
    },
    created() {
	    this.email = storage.getStorageItem('fetot-client-email');

	    let eventsHandlers = {
	    	'button-click': this.buttonClickHandler,
        'load-avatar': this.loadAvatarHandler
      };

	    fetotEventsHandlers.add(eventsHandlers);
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .user {
    @include full-sizes;
    @include flex-center;
  }
</style>