<template>
  <div class="login-page pr full">
    <transition name="change-module" mode="out-in" appear>
      <workspace :key="updateCurrentModuleName"></workspace>
    </transition>
  </div>
</template>

<script>
  import {currentModuleStore} from '../components/workers/current-module';
  import workspace from './workspace.vue';

	export default {
		name: 'login-page',
    components: { workspace },
    computed: {
			updateCurrentModuleName() {
				return currentModuleStore.state.data.name
			}
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .change-module {
    &-enter, &-leave-to {
      opacity: 0;

      .fetot-title {
        transform: translateY(300%);
      }
      .fetot-link {
        transform: translateY(-400%);
      }
    }
    &-enter-to, &-leave {
      opacity: 1;

      .fetot-title, .fetot-link {
        transform: translateY(0);
      }
    }
  }
</style>