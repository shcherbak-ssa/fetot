<template>
  <div class="frame-header bs faic w100">
    <fetot-header-title :title="title"></fetot-header-title>
    <fetot-close-icon @close-event="closeEventHandler"></fetot-close-icon>
  </div>
</template>

<script>
	import fetotHeaderTitle from '$fetot-view/elements/fetot-header-title.vue';
	import fetotCloseIcon from '$fetot-view/icons/fetot-close-icon.vue';

	import eventsEmitterWorker from '$fetot-events-emitter';

	export default {
		name: 'frame-header',
		props: {
			title: Object
		},
		components: {
			'fetot-header-title': fetotHeaderTitle,
			'fetot-close-icon': fetotCloseIcon,
		},
    methods: {
	    closeEventHandler() {
		    eventsEmitterWorker.getEmitter('app').emit('close-frame')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .frame-header {
    padding: 16px 24px;
    justify-content: space-between;
    @include static-shadow;
  }
</style>