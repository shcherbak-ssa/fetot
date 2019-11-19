<template>
  <div class="notes-frame-content bs">
    <content-workspace-header></content-workspace-header>

    <div class="workspace"></div>

    <frame-tools
            :tools="tools"
            :is-active="isFrameToolsActive"
            @tools-item-click="toolsItemClickHandler">
    </frame-tools>
  </div>
</template>

<script>
  import contentWorkspaceHeader from './content-workspace-header.vue';
  import notesFrameToolsStore from '../../store/notes-frame-tools-store';

	export default {
		name: 'notes-frame-content',
    data() {
			return {
				isFrameToolsActive: false,
				tools: notesFrameToolsStore
      }
    },
    components: {
			'content-workspace-header': contentWorkspaceHeader
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
    padding: 24px 96px 42px;
  }
</style>