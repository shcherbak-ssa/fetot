<template>
  <modal-container :has-frame="hasFrame" @create-block-event="createBlockEventHandler">
    <template v-slot:module-blocks>
      <notes-block></notes-block>
    </template>
  </modal-container>
</template>

<script>
  import notesBlock from './notes-block.vue'

	export default {
		name: 'notes-module',
    data() {
			return {
				hasFrame: false
      }
    },
    components: {
			'notes-block': notesBlock
    },
    methods: {
	    createBlockEventHandler() {}
    }
	}
</script>

<style scoped>

</style>