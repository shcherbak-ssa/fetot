<template>
  <module-container
          :has-frame="hasFrame"
          :size-type="currentSizeType"
          @create-block-event="createNoteEventHandler"
          @change-size-type-event="changeSizeTypeEventHandler">

    <template v-slot:module-frame>
      <frame-container
              v-if="hasFrame"
              :frame-state="frameState"
              :options="frameOptions"
              @close-frame-event="closeFrameEventHandler">


      </frame-container>
    </template>

    <template v-slot:module-blocks>
      <notes-block
              v-for="(block, index) in setCurrentBlocks"
              :key="index" :index="index" :block="block">
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
        currentFrameIsForCreate: false,
        lastBlocksSizeType: 0,
        currentBlocks: [],

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
      	this.currentModuleStore.actions.updateSettingsByKey({
          key: 'blocksSizeType', value: 2, sendToServer: false
      	});

	      this.pageStore.actions.removeBlocksPositions();
      },
	    async closeFrameEventHandler(toSaveNote = true) {
      	if( !toSaveNote ) return;

      	if( this.currentFrameIsForCreate ) {
		      const currentNote = this.currentNoteStore.getters.note();
		      await this.currentBlocksStore.actions.createBlock(currentNote);
        }

		    await this.currentModuleStore.actions.updateSettingsByKey({
			    key: 'blocksSizeType', value: this.lastBlocksSizeType, sendToServer: false
		    });

		    this.hasFrame = false;
		    this.currentFrameIsForCreate = false;

		    this.updateCurrentBlocks();
		    this.currentNoteStore.actions.clean();
      },

      /* note handlers */
	    async editNoteEventHandler() {
	    	this.openFrameHandler();
	    },
	    async deleteNoteEventHandler(id) {
	    	await this.currentBlocksStore.actions.deleteBlock(id);
		    this.updateCurrentBlocks();
      },

      /* others */
	    changeSizeTypeEventHandler(sizeType) {
	    	this.currentModuleStore.actions.updateSettingsByKey({key: 'blocksSizeType', value: sizeType})
	    },
      updateCurrentBlocks() {
	      this.pageStore.state.documentWidth < 1280
		      ? this.pageStore.actions.removeBlocksPositions()
		      : this.pageStore.actions.updateBlocksPositions();

	      this.currentBlocks = this.currentBlocksStore.getters.getLikeArray();
      }
    },
    computed: {
			/* module */
      currentSizeType() {
      	return this.currentModuleStore.getters.settingsByKey('blocksSizeType');
      },

			/* frame */
	    frameState() {
	    	return this.pageStore.state.frameState
      },
      frameOptions() {
				const title = this.currentNoteStore.getters.title();
				return { header: { title, icon: '&#xE80C;' } }
      },

      /* blocks */
      setCurrentBlocks() {
	      return this.currentBlocks
      }
    },

    mounted() {
			this.updateCurrentBlocks();

	    this.appEventsEmitter.on('force-update-notes', this.updateCurrentBlocks);

      this.notesEventsEmitter
        .on('edit-note-event', this.editNoteEventHandler)
        .on('delete-note-event', this.deleteNoteEventHandler);
    },
    destroyed() {
			StoreWorker.removeStore('current-note');
			eventsEmitterWorker.removeEmitter('notes');

	    this.appEventsEmitter.remove('force-update-notes', this.updateCurrentBlocks);
    }
	}
</script>

<style scoped></style>