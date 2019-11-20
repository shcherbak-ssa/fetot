<template>
  <div class="notes-frame-content-workspace w100">
    <notes-frame-content-workspace-item
            v-for="(item, index) in noteContent"
            :key="index" :item="item">
    </notes-frame-content-workspace-item>
  </div>
</template>

<script>
  import notesFrameContentWorkspaceItem from './notes-frame-content-workspace-item.vue';
  import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'notes-frame-content-workspace',
    data() {
			return {
				currentNoteStore: StoreWorker.getStore('current-note')
      }
    },
    components: {
			'notes-frame-content-workspace-item': notesFrameContentWorkspaceItem
    },
    computed: {
			noteContent() {
				return this.currentNoteStore.getters.content();
      }
    }
	}
</script>

<style scoped></style>