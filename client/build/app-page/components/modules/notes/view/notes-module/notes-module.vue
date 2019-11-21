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
              :key="index" :block="block">
      </notes-block>
    </template>
  </module-container>
</template>

<script>
	import notesFrameContent from '../notes-frame-content/notes-frame-content.vue';
	import notesBlock from './notes-block.vue'

  import StoreWorker from '$fetot-store-worker';
  import eventsEmitterWorker from '$fetot-events-emitter';

  import {updateBlocksPositions} from '../../../../workers/blocks-positions-worker';

	export default {
		name: 'notes-module',
    data() {
			return {
				hasFrame: false,
        currentFrameIsForCreate: false,

        pageStore: StoreWorker.getStore('page'),
        currentBlocksStore: StoreWorker.getStore('current-blocks'),
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
          this.currentModuleStore.getters.configByKey('createNoteModalConfig')
        );
	    	this.notesEventsEmitter.on(
	    		'create-note-confirm',
          this.createNoteConfirmHandler
        )
      },
	    createNoteConfirmHandler(label) {
	    	if( label ) {
			    this.currentNoteStore.actions.updateForCreate({date: new Date()});

			    this.currentFrameIsForCreate = true;
			    this.openFrameHandler();
		    }

	      this.appEventsEmitter.emit('close-modal-event');
	    	this.notesEventsEmitter.remove('create-note-confirm', this.createNoteConfirmHandler);
      },

      /* frame */
      openFrameHandler() {
      	this.hasFrame = true;
      },
	    closeFrameEventHandler(toSaveNote = true) {
      	this.hasFrame = false;
      	if( !toSaveNote ) return;

      	if( this.currentFrameIsForCreate ) {
		      const currentNote = this.currentNoteStore.getters.note();
		      this.currentBlocksStore.actions.createBlock(currentNote);
        }

      	this.currentFrameIsForCreate = false;
      },

      /* note handlers */
	    async deleteNoteEventHandler(id) {
	    	await this.currentBlocksStore.actions.deleteBlock(id);
      }
    },
    computed: {
      frameOptions() {
				const title = this.currentNoteStore.getters.title();
				return { header: { title, icon: '&#xE80C;' } }
      },
      currentBlocks() {
      	const blocks = this.currentBlocksStore.state.blocks;
      	return Object.entries(blocks).map(([id, block]) => block);
      }
    },

    beforeMount() {
	    updateBlocksPositions( !(this.pageStore.state.documentWidth < 1280) )
    },
    mounted() {
			this.notesEventsEmitter
        .on('edit-note-event', this.openFrameHandler)
        .on('delete-note-event', this.deleteNoteEventHandler)
    },
    destroyed() {
			StoreWorker.removeStore('current-note');
			eventsEmitterWorker.removeEmitter('notes');
    }
	}
</script>

<style scoped>

</style>