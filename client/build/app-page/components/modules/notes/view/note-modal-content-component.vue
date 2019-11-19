<template>
  <div class="note-modal-content-component">
    <input-title-component :in-focus="true"
                           :input="{placeholder: 'Enter new note title'}"
                           @input-title-event="inputTitleEventHandler">
    </input-title-component>
  </div>
</template>

<script>
	import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'note-modal-content-component',
		data() {
			return {
				currentNoteStore: StoreWorker.getStore('current-note')
      }
    },
    methods: {
			inputTitleEventHandler(value) {
				this.currentNoteStore.actions.updateValue({key: 'title', value})
      }
		}
	}
</script>

<style lang="scss" scoped></style>