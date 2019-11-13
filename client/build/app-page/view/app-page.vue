<template>
  <div class="app-page pr full">
    <app-home></app-home>
    <app-module></app-module>
  </div>
</template>

<script>
  import appHome from './app-home/app-home.vue';
  import appModule from './app-module/app-module.vue';

	export default {
		name: 'app-page',
    components: {
			'app-home': appHome,
      'app-module': appModule
    }
	}
</script>

<style lang="scss" scoped></style>