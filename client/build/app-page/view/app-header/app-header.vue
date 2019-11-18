<template>
  <div class="app-header pr">
    <hamburger-button :active="isActive" @hamburger-button-click="hamburgerButtonClickHandler"/>

    <transition name="change-module-title" mode="out-in">
      <fetot-title>{{}}</fetot-title>
    </transition>

    <client-info></client-info>
  </div>
</template>

<script>
	import fetotTitle from '$fetot-view-components/text/fetot-title.vue';
	import clientInfo from './client-info.vue';
	import hamburgerButton from './hamburger-button.vue';

	import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'app-header',
    props: {
			isActive: Boolean
    },
    components: {
      'fetot-title': fetotTitle,
      'client-info': clientInfo,
	    'hamburger-button': hamburgerButton
    },
    methods: {
      hamburgerButtonClickHandler(isActive) {
				this.$emit('hamburger-button-click', isActive)
      }
    },
    computed: {
			// setCurrentModuleName() {
			// 	const name = currentModuleStore.state.name;
			// 	return this.isActive || !name ? '' : `${name[0].toUpperCase()}${name.slice(1)}`;
      // }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-header {
    height: 46px;
    margin-bottom: 24px;
  }

  .fetot-title {
    font-size: 24px;
    @include position-center;
  }
  .hamburger-button {
    left: -72px;
    @include position-vert-center;

    @media screen and (max-width: 1023px) {
      left: -42px;
    }
    @media screen and (max-width: 670px) {
      left: 0;
    }

    .is-close & {
      left: 0;
    }
    .is-first-time & {
      opacity: 0;
      left: -200px;
    }
  }
  .change-module-title {
    &-enter-to, &-leave {
      opacity: 1;
    }
    &-leave-to, &-enter {
      opacity: 0;
    }
  }
</style>