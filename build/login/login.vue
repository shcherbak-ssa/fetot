<template>
  <fetot-container>
    <div class="login" :class="setCurrentModule">
      <div class="section sing-in">
        <login-workspace :options="setWorkspaceOptions('sing-in')"/>
      </div>
      <div class="section log-in">
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
				return {
					events: this.options.events,
          data: this.options.store.get('modules')[label]
				}
      }
    },
    computed: {
	    setCurrentModule() {
	    	return { [`is-${this.options.store['current-module']}-module-active`]: true }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .login, .section {
    overflow: hidden;
    position: relative;
    @include full-sizes;
  }
  .section {
    opacity: 0;
    transition: .6s;
    position: absolute;
    top: 0;
    left: 0;
  }
  .login {
    &.is-sing-in-module-active {
      .sing-in {
        opacity: 1;
      }
      .log-in {
        top: 100%;
      }
    }
    &.is-login-module-active {
      .log-in {
        opacity: 1;
      }
      .sing-in {
        top: -100%;
      }
    }
  }
</style>