<template>
  <div class="content-workspace-header">

  </div>
</template>

<script>
  import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'content-workspace-header',
    data() {
			return {
				currentNoteStore: StoreWorker.getStore('current-note')
      }
    },
    computed: {
			noteDate() {
				return this.currentNoteStore.getters.date()
      },
      noteTitle() {
				return this.currentNoteStore.getters.title()
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .content-workspace-header {

  }
</style>