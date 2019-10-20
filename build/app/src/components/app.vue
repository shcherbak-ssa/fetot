<template>
  <fetot-container>
    <div class="fetot-app"></div>
  </fetot-container>
</template>

<script>
	import fetotContainer from 'fetot-components/fetot-container.vue';

	export default {
		name: 'fetot-app',
    components: {
			'fetot-container': fetotContainer
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