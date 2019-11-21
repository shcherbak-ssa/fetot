<template>
  <block-container
          :size-type="blocksSizeType"
          :position="blockPosition"
          @block-content-click="editNoteEventHandler"
          @open-menu-event="openMenuEventHandler">

    <template v-slot:block-title>{{ block.title }}</template>

    <template v-slot:block-menu v-if="isMenuOpen">
      <notes-block-menu
              :title="block.title"
              @edit-note-event="editNoteEventHandler"
              @delete-note-event="deleteNoteEventHandler"
              @close-menu-event="closeMenuEventHandler">
      </notes-block-menu>
    </template>

    <template v-slot:block-content>
      <div v-html="drawContent"></div>
    </template>

    <template v-slot:block-date>
      <fetot-date :date="noteDate"></fetot-date>
    </template>

  </block-container>
</template>

<script>
  import fetotDate from '$fetot-view-components/elements/fetot-date.vue';
  import notesBlockMenu from './notes-block-menu.vue';

  import eventsEmitterWorker from '$fetot-events-emitter';
  import StoreWorker from '$fetot-store-worker';

  import drawBlockContent from '../../components/draw-block-content';
  import {blocksPositions} from '../../../../workers/blocks-positions-worker';

	export default {
		name: 'notes-block',
    data() {
			return {
				isMenuOpen: false,

        currentNoteStore: StoreWorker.getStore('current-note'),
        notesEventsEmitter: eventsEmitterWorker.getEmitter('notes')
      }
    },
    props: {
			block: Object
    },
    components: {
			'fetot-date': fetotDate,
      'notes-block-menu': notesBlockMenu
    },
    computed: {
			drawContent() {
				return drawBlockContent(this.block.content)
      },
      noteDate() {
				return this.block.info.date
      },

      /* block container props */
      blocksSizeType() {
      	return StoreWorker.getStore('current-module').getters.settingsByKey('blocksSizeType')
      },
	    blockPosition() {
		    return blocksPositions === null ? {} : blocksPositions[ this.currentNoteStore.getters.position() ]
	    }
    },
    methods: {
	    /* menu */
			openMenuEventHandler() {
	    	this.isMenuOpen = true;
	    	this.setCurrentNoteStore();
      },
	    closeMenuEventHandler() {
		    this.isMenuOpen = false;
      },

      /* menu event */
	    editNoteEventHandler() {
	    	this.closeMenuEventHandler();
	    	this.notesEventsEmitter.emit('edit-note-event');
      },
	    deleteNoteEventHandler() {
	    	this.closeMenuEventHandler();
		    this.notesEventsEmitter.emit('delete-note-event', this.block.id);
      },

      /* src */
      setCurrentNoteStore() {
      	this.currentNoteStore.actions.update(this.block);
      }
    }
	}
</script>

<style scoped>

</style>