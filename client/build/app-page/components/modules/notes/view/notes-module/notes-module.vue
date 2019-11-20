<template>
  <module-container
          :has-frame="hasFrame"
          :frame-options="frameOptions"
          @close-frame-event="closeFrameEventHandler"
          @create-block-event="createNoteEventHandler">

    <template v-slot:module-frame-content>
      <notes-frame-content></notes-frame-content>
    </template>

    <template v-slot:module-blocks>
      <notes-block
              v-for="(block, index) in currentBlocks"
              :key="index" :block="block"
              @block-click-event="openFrameHandler">
      </notes-block>
    </template>
  </module-container>
</template>

<script>
	import notesFrameContent from '../notes-frame-content/notes-frame-content.vue';
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
			'notes-frame-content': notesFrameContent,
			'notes-block': notesBlock
    },
    methods: {
			/* create note */
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
			    this.openFrameHandler();
		    }

	      this.appEventsEmitter.emit('close-modal-event');
	    	this.notesEventsEmitter.remove('create-note-confirm', this.createNoteConfirmHandler);
      },

      /* frame */
      openFrameHandler() {
      	this.hasFrame = true;
      },
	    closeFrameEventHandler() {
      	this.hasFrame = false;
      }
    },
    computed: {
			currentBlocks() {
				return StoreWorker.getStore('current-blocks').getters.getLikeArray();
      },
      frameOptions() {
				const title = this.currentNoteStore.getters.title();
				return { header: { title, icon: '&#xE80C;' } }
      }
    },
    destroyed() {
			StoreWorker.removeStore('current-note')
    }
	}
</script>

<style scoped>

</style>