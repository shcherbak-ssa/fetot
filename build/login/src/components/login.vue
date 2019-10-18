<template>
  <fetot-container>
    <div class="login">
      <transition name="change-module" mode="out-in">
        <login-workspace :key="options.store['current-module']" :options="setWorkspaceOptions"/>
      </transition>
    </div>
  </fetot-container>
</template>

<script>
  import fetotContainer from 'fetot-components/fetot-container.vue';
  import loginWorkspace from './workspace.vue';

	export default {
		name: 'login',
    data() {
			return {
				currentModule: ''
      }
    },
    props: {
			options: Object
    },
    components: {
			'fetot-container': fetotContainer,
      'login-workspace': loginWorkspace
    },
    computed: {
	    setWorkspaceOptions() {
		    return {
			    events: this.options.events,
			    data: this.options.store.get('modules')[this.options.store['current-module']]
		    }
	    }
    }
	}
</script>

<style lang="scss">
  @import 'fetot-src-scss';

  .login {
    position: relative;
    @include full-sizes;
  }

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