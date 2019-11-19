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
      <div v-html="drawDate"></div>
    </template>

  </block-container>
</template>

<script>
  import notesBlockMenu from './notes-block-menu.vue';

  import drawBlockContent from '../../components/draw-block-content';
  import drawBlockInfo from '../../components/draw-block-info';

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
      'notes-block-menu': notesBlockMenu
    },
    computed: {
			drawContent() {
				return drawBlockContent(this.block.content)
      },
      drawDate() {
				return drawBlockInfo.date(this.block.info.date);
      }
    },
    methods: {
	    /* menu */
			openMenuEventHandler() {
	    	console.log('open-menu-event');
	    	this.isMenuOpen = true;
      },
	    closeMenuEventHandler() {
		    console.log('close-menu-event');
		    this.isMenuOpen = false;
      },

	    blockContentClickHandler() {
	    	console.log('block-content-click-handler')
      }
    }
	}
</script>

<style scoped>

</style>