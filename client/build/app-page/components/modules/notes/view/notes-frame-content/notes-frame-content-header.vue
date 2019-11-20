<template>
  <div class="notes-frame-content-header w100">
    <div class="info w100 faic">
      <fetot-date :date="noteDate"></fetot-date>
      <div class="category"></div>
    </div>

    <input-title-component
            :input="noteTitle"
            @input-title-event="inputTitleEventHandler">
    </input-title-component>
  </div>
</template>

<script>
	import fetotDate from '$fetot-view-components/elements/fetot-date.vue';
  import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'notes-frame-content-header',
    data() {
			return {
				currentNoteStore: StoreWorker.getStore('current-note')
      }
    },
    components: {
	    'fetot-date': fetotDate
    },
    methods: {
	    inputTitleEventHandler(value) {
	    	this.currentNoteStore.actions.updateValue({ key: 'title', value })
      }
    },
    computed: {
			noteDate() {
				return this.currentNoteStore.getters.date()
      },
      noteTitle() {
				return {
					placeholder: 'Note title',
          value: this.currentNoteStore.getters.title()
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .notes-frame-content-header {
    margin-bottom: 24px;
  }
  .info {
    padding-left: 10px;
    justify-content: space-between;
    margin-bottom: 16px;
  }
</style>