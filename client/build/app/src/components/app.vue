<template>
  <fetot-container>
    <div class="fetot-app" :class="isHomePageOpen">
      <home-page :options="options"></home-page>
      <app-header :options="options"></app-header>
    </div>
  </fetot-container>
</template>

<script>
	import fetotContainer from 'fetot-components/fetot-container.vue';
	import appHeader from './app-header.vue';
	import homePage from './home-page.vue';

	export default {
		name: 'fetot-app',
    props: {
			options: Object
    },
    components: {
			'fetot-container': fetotContainer,
      'app-header': appHeader,
      'home-page': homePage
    },
    computed: {
			isHomePageOpen() {
				return {'is-home-page-open': this.options.store['home-page-open']};
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-app {
    position: relative;
    overflow: hidden;
    @include full-sizes;

    .home-page {
      opacity: 0;
      top: -100%;
    }

    &.is-home-page-open {
      .app-header {
        opacity: 0;
        top: 100%;
      }
      .home-page {
        top: 0;
        opacity: 1;
      }
    }
  }
</style>