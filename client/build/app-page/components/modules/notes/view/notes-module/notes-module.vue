<template>
  <module-container :has-frame="hasFrame" @create-block-event="createNoteEventHandler">

    <template v-slot:module-frame>
      <frame-container
              v-if="hasFrame"
              :frame-state="frameState"
              :options="frameOptions"
              @close-frame-event="closeFrameEventHandler">
        <notes-frame-content></notes-frame-content>
      </frame-container>
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

  import {updateBlocksPositions, removeBlocksPositions} from '../../../../workers/blocks-positions-worker';

	export default {
		name: 'notes-module',
    data() {
			return {
				hasFrame: false,
        currentFrameIsForCreate: false,
        lastBlocksSizeType: 0,

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

      	this.lastBlocksSizeType = this.currentModuleStore.getters.settingsByKey('blocksSizeType');
      	this.currentModuleStore.actions.updateSettingsByKey({key: 'blocksSizeType', value: 2});
      },
	    closeFrameEventHandler(toSaveNote = true) {
      	this.hasFrame = false;
		    this.currentModuleStore.actions.updateSettingsByKey({
          key: 'blocksSizeType', value: this.lastBlocksSizeType
		    });

      	if( !toSaveNote ) return;

      	if( this.currentFrameIsForCreate ) {
		      const currentNote = this.currentNoteStore.getters.note();
		      this.currentBlocksStore.actions.createBlock(currentNote);
        }

      	this.currentFrameIsForCreate = false;
      },

      /* note handlers */
	    async editNoteEventHandler() {
	    	this.openFrameHandler();
	    },
	    async deleteNoteEventHandler(id) {
	    	await this.currentBlocksStore.actions.deleteBlock(id);
      }
    },
    computed: {
			/* frame */
	    frameState() {
	    	return this.pageStore.state.frameState
      },
      frameOptions() {
				const title = this.currentNoteStore.getters.title();
				return { header: { title, icon: '&#xE80C;' } }
      },

      /* blocks */
      currentBlocks() {
      	return this.currentBlocksStore.getters.getLikeArray();
      }
    },

    beforeMount() {
	    this.pageStore.state.documentWidth < 1280
        ? removeBlocksPositions() : updateBlocksPositions()
    },
    mounted() {
			this.notesEventsEmitter
        .on('edit-note-event', this.editNoteEventHandler)
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