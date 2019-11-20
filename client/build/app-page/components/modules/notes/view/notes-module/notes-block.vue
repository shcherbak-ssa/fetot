<template>
  <block-container
          @block-content-click="blockContentClickHandler"
          @open-menu-event="openMenuEventHandler">

    <template v-slot:block-title>{{ block.title }}</template>

    <template v-slot:block-menu v-if="isMenuOpen">
      <notes-block-menu :title="block.title" @close-menu-event="closeMenuEventHandler"></notes-block-menu>
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

  import drawBlockContent from '../../components/draw-block-content';
  import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'notes-block',
    data() {
			return {
				isMenuOpen: false
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

      /* block */
	    blockContentClickHandler() {
	    	this.setCurrentNoteStore();
	    	this.$emit('block-click-event')
      },

      /* src */
      setCurrentNoteStore() {
      	StoreWorker.getStore('current-note').actions.update(this.block);
      }
    }
	}
</script>

<style scoped>

</style>