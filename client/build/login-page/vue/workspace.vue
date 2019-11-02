<template>
  <div class="workspace">
    <fetot-title>
      <div class="title">{{ title }}</div>
    </fetot-title>
    <workspace-content></workspace-content>
    <fetot-link @fetot-link-click="linkClickHandler">
      <div class="link">{{ link }}</div>
    </fetot-link>
  </div>
</template>

<script>
	import Store from 'fetot-services/store';

	import fetotTitle from 'fetot-vue/text/fetot-title.vue';
	import fetotLink from 'fetot-vue/text/fetot-link.vue';
	import workspaceContent from './workspace-content.vue';

	export default {
		name: 'workspace',
    components: {
			'fetot-title': fetotTitle,
      'fetot-link': fetotLink,
      'workspace-content': workspaceContent
    },
    data() {
			return {
				title: Store.collection('current-module').title,
        link: Store.collection('current-module').link
      }
    },
    methods: {
	    linkClickHandler() {
	    	console.log('fetot-link-click')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-scss';

  .workspace {
    position: absolute;
    top: 0;
    left: 0;
    padding: 48px;
    transition: .4s;
    justify-content: center;
    @include full-sizes;
    @include box-sizing;
    @include flex-center-column;

    .title {
      font-size: 32px;
    }
    .link {
      font-size: 16px;
    }
    .fetot-title, .fetot-link {
      transition: .4s;
    }

    @media screen and (max-width: 480px) {
      .title {
        font-size: 28px;
      }
    }
  }
</style>