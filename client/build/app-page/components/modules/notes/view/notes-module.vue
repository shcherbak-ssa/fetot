<template>
  <module-container :has-frame="hasFrame" @create-block-event="createNoteEventHandler">
    <template v-slot:module-blocks>
      <notes-block v-for="(block, index) in currentBlocks"
                   :key="index" :block="block">
      </notes-block>
    </template>
  </module-container>
</template>

<script>
  import notesBlock from './notes-block.vue'
  import StoreWorker from '$fetot-store-worker';
  import eventsEmitterWorker from '$fetot-events-emitter';

	export default {
		name: 'notes-module',
    data() {
			return {
				hasFrame: false,

        currentModuleStore: StoreWorker.getStore('current-module'),
        currentNoteStore: StoreWorker.getStore('current-note'),

        appEventsEmitter: eventsEmitterWorker.getEmitter('app'),
        notesEventsEmitter: eventsEmitterWorker.getEmitter('notes')
      }
    },
    components: {
			'notes-block': notesBlock
    },
    methods: {
	    createNoteEventHandler() {
	    	this.appEventsEmitter.emit(
	    		'open-modal-event',
          this.currentModuleStore.state.config.createNoteModalConfig
        );
	    	this.notesEventsEmitter.on(
	    		'create-note-confirm',
          this.createNoteConfirmHandler
        )
      },

	    createNoteConfirmHandler(label) {
	    	if( label ) {
			    this.currentNoteStore.actions.updateInfoValue({ key: 'date', value: new Date() });
	    		console.log('create-note', StoreWorker.getStore('current-note').state.note);
		    }

	      this.appEventsEmitter.emit('close-modal-event');
	    	this.notesEventsEmitter.remove('create-note-confirm', this.createNoteConfirmHandler);
      }
    },
    computed: {
			currentBlocks() {
				return StoreWorker.getStore('current-blocks').getters.getLikeArray();
      }
    },
    destroyed() {
			StoreWorker.removeStore('current-note')
    }
	}
</script>

<style scoped>

</style>