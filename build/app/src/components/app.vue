<template>
  <fetot-container>
    <div class="fetot-app">
      <app-header/>
    </div>
  </fetot-container>
</template>

<script>
	import fetotContainer from 'fetot-components/fetot-container.vue';
	import appHeader from './app-header.vue';

	export default {
		name: 'fetot-app',
    components: {
			'fetot-container': fetotContainer,
      'app-header': appHeader
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-app {
    position: relative;
    @include full-sizes;
  }
</style>