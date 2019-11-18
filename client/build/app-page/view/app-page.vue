<template>
  <div class="app-page pr full">
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

<style lang="scss" scoped></style>