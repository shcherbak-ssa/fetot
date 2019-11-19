<template>
  <frame-container :options="frameOptions" @close-frame-event="closeFrameEventHandler">
    <template v-slot:frame-content>
      <notes-frame-content></notes-frame-content>
    </template>
  </frame-container>
</template>

<script>
  import notesFrameContent from './notes-frame-content.vue';

  import notesFrameStore from '../store/notes-frame-store';
  import eventsEmitterWorker from '$fetot-events-emitter';

	export default {
		name: 'notes-frame',
    date() {
			return {
				frameOptions: notesFrameStore.frameOptions,
        appEventsEmitter: eventsEmitterWorker.getEmitter('app')
      }
    },
    components: {
			'notes-frame-content': notesFrameContent
    },
    methods: {
	    closeFrameEventHandler() {
	    	this.appEventsEmitter.emit('close-frame-event');
      }
    }
	}
</script>

<style scoped>

</style>