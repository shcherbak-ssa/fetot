<template>
  <div class="app-page pr full">
    <app-home></app-home>
    <component :is="currentModuleView"></component>
  </div>
</template>

<script>
  import appHome from './app-home/app-home.vue';
  import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'app-page',
    data() {
			return {}
    },
    components: {
			'app-home': appHome
		},
    computed: {
	    currentModuleView() {
	    	return StoreWorker.getStore('current-module').state.config.view || '';
      }
    }
	}
</script>

<style lang="scss" scoped></style>