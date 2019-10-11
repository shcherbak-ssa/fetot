<template>
  <fetot-container>
    <div class="login" :class="setCurrentModule">
      <div class="sing-in-section">
        <login-workspace :options="setWorkspaceOptions('sing-in')"/>
      </div>
      <div class="login-section">
        <login-workspace :options="setWorkspaceOptions('login')"/>
      </div>
    </div>
  </fetot-container>
</template>

<script>
  import fetotContainer from 'fetot-components/fetot-container.vue';
  import loginWorkspace from './src/components/workspace.vue';

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
    methods: {
			setWorkspaceOptions(label) {
				console.log(this.options);
				return {
					events: this.options.events,
          data: this.options.store.get('modules')[label]
				}
      }
    },
    computed: {
	    setCurrentModule() {
	    	return { [`is-${this.options.store.get('current-module')}-module-active`]: true }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .login, .sing-in-section, .login-section {
    position: relative;
    @include full-sizes;
  }
  .sing-in-section, .login-section {
    opacity: 0;
    transition: .7s;
    position: absolute;
    top: 0;
    left: 0;
    @include flex-center;
  }
  .login {
    overflow: hidden;

    &.is-sing-in-module-active {
      .sing-in-section {
        opacity: 1;
      }
      .login-section {
        top: 100%;
      }
    }
    &.is-login-module-active {
      .login-section {
        opacity: 1;
      }
      .sing-in-section {
        top: -100%;
      }
    }
  }
</style>