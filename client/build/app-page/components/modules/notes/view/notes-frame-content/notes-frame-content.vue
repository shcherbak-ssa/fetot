<template>
  <div class="notes-frame-content bs">
    <notes-frame-content-header></notes-frame-content-header>
    <notes-frame-content-workspace></notes-frame-content-workspace>

    <frame-tools
            :tools="tools"
            :is-active="isFrameToolsActive"
            @tools-item-click="toolsItemClickHandler">
    </frame-tools>
  </div>
</template>

<script>
  import notesFrameContentHeader from './notes-frame-content-header.vue';
  import notesFrameContentWorkspace from './notes-frame-content-workspace.vue';

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
			'notes-frame-content-header': notesFrameContentHeader,
      'notes-frame-content-workspace': notesFrameContentWorkspace
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