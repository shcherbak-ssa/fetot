<template>
  <block-container
          @block-contanet-click="blockContentClickHandler"
          @open-menu-event="openMenuEventHandler">

    <template v-slot:block-title>{{ block.title }}</template>

    <template v-slot:block-menu v-if="isMenuOpen">
      <notes-block-menu :menu="block.menu"></notes-block-menu>
    </template>

    <template v-slot:block-content>{{ drawContent }}</template>

    <template v-slot:block-date>{{ drawDate }}</template>

  </block-container>
</template>

<script>
  import notesBlockMenu from './notes-block-menu.vue';

  import drawBlockContent from '../components/draw-block-content';
  import drawBlockInfo from '../components/draw-block-info';

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
				return drawBlockInfo.date(this.block.date);
      }
    },
    methods: {
	    openMenuEventHandler() {},
	    blockContentClickHandler() {}
    }
	}
</script>

<style scoped>

</style>