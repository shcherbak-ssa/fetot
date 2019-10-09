<template>
  <div class="workspace-item">
    <fetot-title>
      <div class="title">{{ moduleData.title }}</div>
    </fetot-title>
    <workspace-item-content :content="moduleData.content"/>
    <fetot-link>
      <span class="link">{{ moduleData.link }}</span>
    </fetot-link>
  </div>
</template>

<script>
	import fetotTitle from 'fetot-components/elements/fetot-title.vue';
	import fetotLink from 'fetot-components/elements/fetot-link.vue';

	import workspaceItemContent from './workspace-item-content.vue'

	export default {
		name: 'workspace-item',
    props: {
			moduleData: Object
    },
		components: {
			'fetot-title': fetotTitle,
			'fetot-link': fetotLink,
      'workspace-item-content': workspaceItemContent
		}
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-item {
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