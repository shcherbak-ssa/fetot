<template>
  <div class="app-page pr full">
    <app-home></app-home>
    <component :is="currentModuleComponent"></component>

    <modal-container v-if="isModalOpen" :options="modalOptions"
                     @close-modal-event="closeModalEventHandler">

      <template v-slot:modal-content>
        <component :is="modalContentComponent"></component>
      </template>

      <template v-slot:modal-footer>
        <component :is="modalFooterComponent"></component>
      </template>
    </modal-container>
  </div>
</template>

<script>
  import appHome from './app-home/app-home.vue';
  import StoreWorker from '$fetot-store-worker';

  import eventsEmitterWorker from '$fetot-events-emitter';

	export default {
		name: 'app-page',
    data() {
			return {
				isModalOpen: false,
				modalOptions: {},
        modalContentComponent: '',
        modalFooterComponent: '',

        appEventsEmitter: eventsEmitterWorker.getEmitter('app')
      }
    },
    components: {
			'app-home': appHome
		},
    methods: {
			openModalEventHandler({options, contentComponent, footerComponent}) {
				this.modalOptions = options;
				this.modalContentComponent = contentComponent;
				this.modalFooterComponent = footerComponent;

				this.isModalOpen = true;
				this.appEventsEmitter.on('close-modal-event', this.closeModalEventHandler)
      },
	    closeModalEventHandler() {
				this.isModalOpen = false;
				this.appEventsEmitter.remove('close-modal-event', this.closeModalEventHandler)
      }
    },
    computed: {
	    currentModuleComponent() {
	    	return StoreWorker.getStore('current-module').state.config.view || '';
      }
    },
    mounted() {
			this.appEventsEmitter.on('open-modal-event', this.openModalEventHandler);
    }
	}
</script>

<style lang="scss" scoped></style>