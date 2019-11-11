<template>
  <div class="app-page">
    <app-home></app-home>
  </div>
</template>

<script>
  import appHome from './app-home/app-home.vue';

	export default {
		name: 'app-page',
    data() {
			return {}
    },
    components: {
			'app-home': appHome
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-page {
    position: relative;
    @include full-sizes;
  }
</style>