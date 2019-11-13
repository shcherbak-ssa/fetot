<template>
  <div class="app-home pa bs hover_hov-sh" :class="states">
    <!-- content -->
    <app-header :isActive="states['is-active']" @hamburger-button-click="hamburgerButtonClickHandler"/>
    <div class="workspace flex bs">
      <content-section>
        <template v-slot:title>Today</template>
        <template v-slot:content>
          <module-item v-for="(item, index) in modulesViewStore" :key="index" :item="item"
                       @module-item-click="moduleItemClickHandler"
          />
        </template>
      </content-section>
      <content-section>
        <template v-slot:title>Modules</template>
        <template v-slot:content>
          <module-item v-for="(item, index) in modulesViewStore" :key="index" :item="item"
                       @module-item-click="moduleItemClickHandler"
          />
        </template>
      </content-section>
    </div>

    <!-- src -->
    <fetot-close-button @fetot-close-button-click="closeButtonClickHandler">close home</fetot-close-button>
    <categories></categories>

  </div>
</template>

<script>
  import fetotCloseButton from '$fetot-view/buttons/fetot-close-button.vue';

  import appHeader from '../app-header/app-header.vue';
  import contentSection from './content-section.vue';
  import moduleItem from './module-item.vue';
  import categories from '../categories/categories.vue';

  import modulesViewStore from '../../store/modules-view-store';
  import {currentModuleWorker} from '../../components/workers/current-module';

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
      'content-section': contentSection,
	    'categories': categories
    },
    methods: {
	    hamburgerButtonClickHandler(isActive) {
	    	isActive ? this.closeHome() : this.openHome()
      },
	    moduleItemClickHandler(name) {
	    	currentModuleWorker.updateCurrentModule(name);
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
    height: 120px;
    transition: .4s;
    @include static-shadow;

    @media screen and (max-width: 419px) {
      padding: 12px;
    }

    &.is-active {
      padding: 36px 128px;
      height: 97%;

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
    &.is-first-time {
      height: 100%;

      .fetot-close-button {
        opacity: 0;
        bottom: -200px;
      }
    }

    &.is-close {
      .fetot-close-button {
        opacity: 0;
      }
      .workspace {
        transform: translateY(-300px);
        transition: .2s;
        opacity: 0;
      }
    }
  }
  .workspace {
    padding-top: 32px;
    transition: .2s .2s;
    width: 100%;
    height: calc(100% - 120px);
    overflow: hidden;

    @media screen and (max-width: 670px) {
      align-items: center;
      flex-direction: column;
    }
  }
</style>