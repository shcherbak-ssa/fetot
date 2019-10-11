<template>
  <div class="workspace">
    <fetot-title>
      <div class="title">{{ options.data.get('title') }}</div>
    </fetot-title>
    <workspace-content />
    <fetot-link @link-click="linkClickHandler">
      <span class="link">{{ options.data.get('link') }}</span>
    </fetot-link>
  </div>
</template>

<script>
	import fetotTitle from 'fetot-components/elements/fetot-title.vue';
	import fetotLink from 'fetot-components/elements/fetot-link.vue';

	import workspaceContent from './workspace-content.vue';

	export default {
		name: 'workspace',
    props: {
			options: Object
		},
		components: {
			'fetot-title': fetotTitle,
			'fetot-link': fetotLink,
      'workspace-content': workspaceContent
		},
    methods: {
			linkClickHandler() {
				this.options.events.emit('workspace-link-click')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace {
    position: absolute;
    top: 0;
    left: 0;
    padding: 64px;
    transition: .6s;
    justify-content: space-between;
    @include full-sizes;
    @include box-sizing;
    @include flex-center-column;

    .title {
      font-size: 36px;
    }
    .link {
      font-size: 18px;
    }
  }
</style>