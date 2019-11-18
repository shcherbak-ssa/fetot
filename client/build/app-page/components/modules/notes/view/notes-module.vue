<template>
  <module-container :has-frame="hasFrame" @create-block-event="createBlockEventHandler">
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

	export default {
		name: 'notes-module',
    data() {
			return {
				hasFrame: false,
      }
    },
    components: {
			'notes-block': notesBlock
    },
    methods: {
	    createBlockEventHandler() {}
    },
    computed: {
			currentBlocks() {
				return StoreWorker.getStore('current-blocks').getters.getLikeArray();
      }
    }
	}
</script>

<style scoped>

</style>