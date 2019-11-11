<template>
  <div class="app-home" :class="states">
    <!-- content -->
    <app-home-header :isActive="states['is-active']" @hamburger-button-click="hamburgerButtonClickHandler"/>
    <div class="workspace">
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

  </div>
</template>

<script>
  import fetotCloseButton from '$fetot-view/buttons/fetot-close-button.vue';

  import contentSection from './content-section.vue';
  import appHomeHeader from '../app-home-header/app-home-header.vue';
  import moduleItem from './module-item.vue';

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

	    'app-home-header': appHomeHeader,
      'module-item': moduleItem,
      'content-section': contentSection
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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 120px;
    transition: .4s;
    @include static-shadow;
    @include box-sizing;

    &:hover {
      @include hover-shadow;
    }

    &.is-active {
      padding: 36px 128px;
      height: 97%;
    }
    &.is-first-time {
      height: 100%;

      .fetot-close-button {
        opacity: 0;
      }
    }

    &.is-close {
      .fetot-close-button {
        opacity: 0;
      }
      .workspace {
        transform: translateY(-150%);
        opacity: 0;
      }
    }
  }
  .workspace {
    display: flex;
    padding: 10px;
    transition: .4s;
  }
</style>