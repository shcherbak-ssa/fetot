<template>
  <div class="app-home-header">
    <hamburger-button :active="isActive" @hamburger-button-click="hamburgerButtonClickHandler"/>
    <div class="client-info">
      <div class="name">{{ client.fullname }}</div>
      <fetot-ava @fetot-ava-click="avaClickHandler" :fullname="client.fullname" size="46"/>
    </div>
    <fetot-title>
      <div class="title">{{ setCurrentModuleName }}</div>
    </fetot-title>
  </div>
</template>

<script>
	import fetotAva from '$fetot-view/elements/fetot-ava.vue';
	import fetotTitle from '$fetot-view/text/fetot-title.vue';

	import hamburgerButton from './hamburger-button.vue';

	import {clientStore, clientHandlers} from '../../components/workers/client';
	import {currentModuleStore} from '../../components/workers/current-module';

	export default {
		name: 'app-home-header',
    props: {
			isActive: Boolean
    },
    data() {
			return {
				client: clientStore.state.config
      }
    },
    components: {
			'fetot-ava': fetotAva,
      'fetot-title': fetotTitle,

	    'hamburger-button': hamburgerButton
    },
    methods: {
			avaClickHandler() {
				return clientHandlers.clientOpenMenuHandler()
      },
      hamburgerButtonClickHandler(isActive) {
				this.$emit('hamburger-button-click', isActive)
      }
    },
    computed: {
			setCurrentModuleName() {
				const name = currentModuleStore.state.name;
				return name ? `${name[0].toUpperCase()}${name.slice(1)}` : '';
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-home-header {
    position: relative;
    height: 60px;
    margin-bottom: 24px;
  }
  .client-info {
    overflow: hidden;
    padding: 5px;
    position: absolute;
    top: 0;
    right: 0;
    @include flex-align-items-center;
  }
  .fetot-ava {
    margin-left: 12px;
  }
  .name {
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium';
    transition: .4s;

    @media screen and (max-width: 670px) {
      display: none;
    }

    .is-close & {
      opacity: 0;
    }
  }
  .fetot-title {
    font-size: 24px;
    transition-delay: .2s;
    @include position-center;

    .is-active & {
      opacity: 0;
      transition-delay: 0s;
    }
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
</style>