<template>
  <div class="app-home bg-fff pa bs hover_hov-sh" :class="states">
    <app-header :isActive="states['is-active']" @hamburger-button-click="hamburgerButtonClickHandler"/>

    <div class="home flex bs pa">
      <content-section>
        <template v-slot:title>Modules</template>
        <template v-slot:content>
          <module-item v-for="(item, index) in modulesViewStore.home" :key="index" :item="item"
                       @module-item-click="moduleItemClickHandler"
          />
        </template>
      </content-section>
    </div>

    <fetot-close-button @fetot-close-button-click="closeButtonClickHandler">close home</fetot-close-button>
  </div>
</template>

<script>
  import fetotCloseButton from '$fetot-view-components/buttons/fetot-close-button.vue';

  import appHeader from '../app-header/app-header.vue';
  import contentSection from './content-section.vue';
  import moduleItem from './module-item.vue';

  import modulesViewStore from '../../store/modules-view-store';

	export default {
		name: 'app-home',
    data() {
			return {
				states: {
					'is-close': false,
					'is-active': true,
          'is-first-time': true
        },
        modulesViewStore
      }
    },
    components: {
			'fetot-close-button': fetotCloseButton,
	    'app-header': appHeader,
      'module-item': moduleItem,
      'content-section': contentSection
    },
    methods: {
	    hamburgerButtonClickHandler(isActive) {
	    	isActive ? this.closeHome() : this.openHome()
      },
	    moduleItemClickHandler(name) {
	    	// currentModuleWorker.updateCurrentModule(name);
	    	this.closeButtonClickHandler();
      },
			closeButtonClickHandler() {
				if( this.states['is-first-time'] ) this.states['is-first-time'] = false;
        this.closeHome();
      },
      closeHome() {
	      this.states['is-close'] = true;
	      this.states['is-active'] = false;
      },
      openHome() {
	      this.states['is-close'] = false;
	      this.states['is-active'] = true;
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-home {
    padding: 12px 24px;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 106px;
    transition: .4s;
    @include static-shadow;

    @media screen and (max-width: 419px) {
      padding: 12px;
    }

    &.is-active {
      padding: 36px 128px;
      height: 100%;

      @media screen and (max-width: 1023px) {
        padding: 36px 72px;
      }
      @media screen and (max-width: 670px) {
        padding: 36px;
      }
      @media screen and (max-width: 419px) {
        padding: 24px;
      }
    }
    &.is-first-time .fetot-close-button {
      opacity: 0;
      bottom: -200px;
    }

    &.is-close {
      .fetot-close-button {
        opacity: 0;
      }
      .home {
        transition: .4s;
        top: -60vh;
        opacity: 0;
      }
    }
  }
  .home {
    padding-top: 32px;
    transition: .4s;
    width: calc(100% - 256px);
    height: calc(100% - 192px);
    overflow: hidden;
    left: 128px;
    top: 156px;

    @media screen and (max-width: 1023px) {
      width: calc(100% - 144px);
      left: 72px;
      top: 106px;
    }
    @media screen and (max-width: 670px) {
      width: calc(100% - 48px);
      align-items: center;
      flex-direction: column;
      left: 24px;
    }
    @media screen and (max-width: 419px) {
      top: 92px;
    }
  }
</style>