<template>
  <div class="home-page-content">
    <div class="modules">
      <home-page-module v-for="(item, key) in modules" :module="item" :key="key"/>
    </div>
  </div>
</template>

<script>
  import homePageModule from './home-page-module.vue';
	import storeWorker from 'fetot-worker-modules/store-worker';

	export default {
		name: 'home-page-content',
    data() {
			return {
				modules: storeWorker.getGlobalStore('client').modules
      }
    },
    components: {
			'home-page-module': homePageModule
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .home-page-content {
    @include flex-column;

    .home-page-module {
      margin-bottom: 40px;
    }
  }
</style>