<template>
  <div class="workspace">
    <fetot-title>
      <div class="title">{{ getData('title') }}</div>
    </fetot-title>
    <workspace-content></workspace-content>
    <fetot-link @fetot-link-click="linkClickHandler">
      <div class="link">{{ getData('link') }}</div>
    </fetot-link>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

	import fetotTitle from 'fetot-view/text/fetot-title.vue';
	import fetotLink from 'fetot-view/text/fetot-link.vue';
	import workspaceContent from './workspace-content.vue';

	export default {
		name: 'workspace',
    components: {
			'fetot-title': fetotTitle,
      'fetot-link': fetotLink,
      'workspace-content': workspaceContent
    },
    methods: {
	    linkClickHandler() {}
    },
    computed: {
			...mapGetters('module-worker', {
				getData: 'getCurrentModuleData'
      })
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