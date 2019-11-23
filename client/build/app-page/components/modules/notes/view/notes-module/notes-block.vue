<template>
  <block-container
          :title="block.title"
          :is-menu-open="isMenuOpen"
          :size-type="blocksSizeType"
          :position="blockPosition"
          @block-content-click="editNoteEventHandler"
          @open-menu-event="openMenuEventHandler"
          @close-menu-event="closeMenuEventHandler">

    <template v-slot:block-menu-items>
      <menu-item v-for="(item, index) in menuItems"
                 :key="index" :item="item"
                 @menu-item-click="menuItemClickHandler">
      </menu-item>
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

  import eventsEmitterWorker from '$fetot-events-emitter';
  import StoreWorker from '$fetot-store-worker';

  import notesBlockMenuStore from '../../store/notes-block-menu-store';
  import drawBlockContent from '../../components/draw-block-content';

	export default {
		name: 'notes-block',
    data() {
			return {
				isMenuOpen: false,

				pageStore: StoreWorker.getStore('page'),
        currentNoteStore: StoreWorker.getStore('current-note'),
        currentModuleStore: StoreWorker.getStore('current-module'),

				appEventsEmitter: eventsEmitterWorker.getEmitter('app'),
        notesEventsEmitter: eventsEmitterWorker.getEmitter('notes'),
      }
    },
    props: {
			block: Object,
      index: Number,
    },
    components: {
			'fetot-date': fetotDate
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
	      return this.currentModuleStore.getters.settingsByKey('blocksSizeType')
      },
	    blockPosition() {
      	if( this.pageStore.state.blocksPositions === null ) return { index: this.index };
		    return this.pageStore.state.blocksPositions[ this.index + 1 ]
	    },

      /* menu */
	    menuItems() {
		    return notesBlockMenuStore.items
	    }
    },
    methods: {
	    /* menu */
			openMenuEventHandler() {
	    	this.isMenuOpen = true;
	    	this.setCurrentNoteStore();

				this.appEventsEmitter.emit('force-update-notes');
      },
	    closeMenuEventHandler() {
		    this.isMenuOpen = false;
		    this.appEventsEmitter.emit('force-update-notes');
      },
	    menuItemClickHandler(item) {
		    switch( item.label ) {
			    case 'edit':
				    this.editNoteEventHandler();
				    break;
			    case 'delete':
			    	this.deleteNoteEventHandler()
		    }
	    },

      /* menu event */
	    editNoteEventHandler() {
	    	this.closeMenuEventHandler();
	    	this.setCurrentNoteStore();

	    	this.notesEventsEmitter.emit('edit-note-event');
      },
	    deleteNoteEventHandler() {
	    	this.closeMenuEventHandler();
		    this.notesEventsEmitter.emit('delete-note-event', this.block.id);
      },

      /* src */
      setCurrentNoteStore() {
      	this.currentNoteStore.actions.update(this.block);
      },
    },
	}
</script>

<style scoped></style>