<template>
  <div class="workspace pa full bs fcc">
    <fetot-title>
      <div class="title">{{ store.title }}</div>
    </fetot-title>
    <workspace-content></workspace-content>
    <fetot-link @fetot-link-click="linkClickHandler">
      <div class="link">{{ store.link }}</div>
    </fetot-link>
  </div>
</template>

<script>
	import {currentModuleStore, currentModuleWorker} from '../components/workers/current-module';

	import fetotTitle from '$fetot-view/text/fetot-title.vue';
	import fetotLink from '$fetot-view/text/fetot-link.vue';
	import workspaceContent from './workspace-content.vue';

	export default {
		name: 'workspace',
    data() {
			return {
				store: currentModuleStore.state.data,
        worker: currentModuleWorker
      }
    },
    components: {
			'fetot-title': fetotTitle,
      'fetot-link': fetotLink,
      'workspace-content': workspaceContent
    },
    methods: {
	    async linkClickHandler() {
	    	await this.worker.changeModule('byLink')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .workspace {
    top: 0;
    left: 0;
    padding: 48px;
    transition: .4s;
    justify-content: center;

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