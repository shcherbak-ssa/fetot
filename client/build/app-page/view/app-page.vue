<template>
  <div class="app-page pr full">
    <app-home></app-home>
    <app-module></app-module>
    <modal-component v-if="isModalOpen" :options="modalOptions"></modal-component>
  </div>
</template>

<script>
  import appHome from './app-home/app-home.vue';
  import appModule from './app-module/app-module.vue';
  import modalComponent from './modal/modal-component.vue';

  import eventsEmitterWorker from '$fetot-events-emitter';

	export default {
		name: 'app-page',
    data() {
			return {
				isModalOpen: false,
        modalOptions: {},

        // appEventsEmitter: eventsEmitterWorker.getEmitter('app')
      }
    },
    components: {
			'app-home': appHome,
      'app-module': appModule,
      'modal-component': modalComponent
    },
    methods: {
			showModalHandler(modalOptions) {
				this.modalOptions = {...modalOptions};
				this.isModalOpen = true
      },
	    closeModalHandler() {
				this.isModalOpen = false;
      }
    },
    mounted() {
	    eventsEmitterWorker.getEmitter('app')
        .on('show-modal', this.showModalHandler)
        .on('close-modal', this.closeModalHandler)
    }
	}
</script>

<style lang="scss" scoped></style>