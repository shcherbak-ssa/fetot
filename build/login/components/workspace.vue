<template>
  <div class="workspace">

  </div>
</template>

<script>
  import workspaceItem from './workspace-item.vue';

	export default {
		name: 'workspace',
    props: {
			mode: String,
			inputs: Object,
      content: Object
    },
    components: {
			'workspace-item': workspaceItem
    },
    computed: {
			hello() {
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace {
    position: relative;
    @include full-sizes;
  }
</style>