<template>
  <modal-container>
    <div class="modal-component br6px bg-fff pc flex" :class="options.modalType">
      <modal-header :header="options.header" @close-event="closeHandler"></modal-header>
      <modal-content :content="options.contentData"></modal-content>
      <modal-footer @confirm-event="confirmEventHandler"></modal-footer>
    </div>
  </modal-container>
</template>

<script>
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue';
	import modalContainer from './modal-container.vue';

  import modalHeader from './modal-header.vue';
  import modalContent from './modal-content.vue';
  import modalFooter from './modal-footer.vue';

	import eventsEmitterWorker from '$fetot-events-emitter';

	export default {
		name: 'modal-component',
    data() {
			return {
				appEventsEmitter: eventsEmitterWorker.getEmitter('app')
      }
    },
    props: {
			options: Object
    },
		components: {
			'fetot-icon': fetotIcon,
      'modal-container': modalContainer,

      'modal-header': modalHeader,
      'modal-content': modalContent,
			'modal-footer': modalFooter
		},
    methods: {
	    closeHandler() {
	    	this.appEventsEmitter.emit('close-modal');
      },
	    confirmEventHandler(label) {
	    	if( label ) this.options.confirmHandler(this.options.contentData);
	    	this.closeHandler();
      }
    },
    mounted() {

    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .modal-component {
    flex-direction: column;
    padding: 24px;
    @include hover-shadow;

    &.is-small {
      width: 420px;
    }
  }
</style>