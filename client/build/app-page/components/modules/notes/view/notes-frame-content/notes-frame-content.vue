<template>
  <div class="notes-frame-content bs">
    <div class="workspace"></div>

    <frame-tools
            :tools="tools"
            :is-active="isFrameToolsActive"
            @tools-item-click="toolsItemClickHandler">
    </frame-tools>
  </div>
</template>

<script>
  import notesFrameToolsStore from '../../store/notes-frame-tools-store';

	export default {
		name: 'notes-frame-content',
    data() {
			return {
				isFrameToolsActive: false,
				tools: notesFrameToolsStore
      }
    },
    methods: {
	    toolsItemClickHandler(label) {
	    	console.log('tools', label)
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .notes-frame-content {
    padding: 42px 96px;
  }
</style>