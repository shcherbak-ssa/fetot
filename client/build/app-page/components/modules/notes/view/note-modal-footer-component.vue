<template>
  <div class="note-modal-footer-component">
    <fetot-confirm-buttons :size="132" @confirm-event="confirmEventHandler"></fetot-confirm-buttons>
  </div>
</template>

<script>
	import fetotConfirmButtons from '$fetot-view-components/buttons/fetot-confirm-buttons.vue';
	import eventsEmitterWorker from '$fetot-events-emitter';

	export default {
		name: 'note-modal-footer-component',
		components: {
			'fetot-confirm-buttons': fetotConfirmButtons
		},
		methods: {
			confirmEventHandler(label) {
				eventsEmitterWorker.getEmitter('notes').emit('create-note-confirm', label)
			}
		}
	}
</script>

<style lang="scss"></style>