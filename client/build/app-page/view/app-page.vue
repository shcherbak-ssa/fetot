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

        appEventsEmitter: eventsEmitterWorker.getEmitter('app')
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
				this.isModalOpen = true;

        this.appEventsEmitter.on('close-modal', this.closeModalHandler)
      },
	    closeModalHandler() {
				this.isModalOpen = false;
		    this.appEventsEmitter.remove('close-modal', this.closeModalHandler)
      }
    },
    mounted() {
	    this.appEventsEmitter.on('show-modal', this.showModalHandler)
    }
	}
</script>

<style lang="scss" scoped></style>