<template>
  <div class="notes-frame-content-workspace w100">
    <paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nam?"></paragraph>
    <paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum ducimus ipsa iste quia quo."></paragraph>
    <paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque doloremque nisi odio quo veritatis."></paragraph>
  </div>
</template>

<script>
  import paragraph from '../form-components/paragraph.vue';
  import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'notes-frame-content-workspace',
    date() {
			return {
				currentNoteStore: StoreWorker.getStore('current-note')
      }
    },
    components: {
			paragraph
    },
    computed: {
			noteContent() {
				return this.currentNoteStore.getters.content();
      }
    }
	}
</script>

<style scoped></style>