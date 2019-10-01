<template>
  <fetot-container>
    <div class="user">
      <user-workspace :inputs="inputs" :email="email" :url="url"/>
      <!--<user-modal/>-->
    </div>
  </fetot-container>
</template>

<script>
	// import userModal from './components/user-modal.vue';
  import fetotContainer from 'fetot-components/fetot-container.vue';

  import storage from 'fetot-js-modules/local-storage';
  import eventsHandlers from 'fetot-js-modules/events-handlers';

  import userWorkspace from './components/workspace.vue';
  import userData from './src/user-data.json';

  // import loadAvatarModule from './modules/load-avatar';
  import userModule from './modules/user';

	export default {
		name: 'user',
    data() {
			return {
				inputs: userData.inputs,
				email: '',
        url: '',
      }
    },
    components: {
			'fetot-container': fetotContainer,
      'user-workspace': userWorkspace,
      // 'user-modal': userModal
    },
    methods: {
	    async buttonClickHandler() {
	    	await userModule.worker(this.inputs)
      },
	    // async loadAvatarHandler(avatar) {
	    // 	let url = loadAvatarModule.loadWorker(avatar);
	    // 	await loadAvatarModule.changeWorker(url, document.getElementById('user-avatar'));
      //
		  //   eventsHandlers.emit('open-modal');
      // }
    },
    created() {
	    this.email = storage.getStorageItem('fetot-client-email');

	    eventsHandlers.add({
		    'button-click': this.buttonClickHandler,
		    // 'load-avatar': this.loadAvatarHandler
	    });
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