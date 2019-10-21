<template>
  <fetot-container>
    <div class="fetot-app">
      <transition :name="setHomePageTransition" mode="out-in">
        <home-page v-if="options.store['home-page-open']" :options="options"></home-page>
        <app-header v-else :options="options"></app-header>
      </transition>
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
	    setHomePageTransition() {
	    	return this.options.store['home-page-open'] ? 'to-home-page' : 'to-app-header';
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-app {
    position: relative;
    @include full-sizes;
  }

  .to-home-page-leave-to {
    opacity: 0;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  .to-app-header-leave-to {
    opacity: 0;
    height: 120px;
    border-radius: 0 0 10px 10px;
    @include static-shadow;
  }
  .to-home-page, .to-app-header {
    &-enter-to {
      opacity: 1;
    }
  }
</style>