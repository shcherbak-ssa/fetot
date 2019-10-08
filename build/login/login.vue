<template>
  <fetot-container>
    <div class="login">
      <login-workspace :inputs="inputs" :content="content" :mode="mode"/>
    </div>
  </fetot-container>
</template>

<script>
  import fetotContainer from 'fetot-components/fetot-container.vue';
  import loginWorkspace from './components/workspace.vue';

  import locStorage from 'fetot-js-modules/local-storage';
  import fetchRequest from 'fetot-js-modules/fetch-request';

  import inputs from './store/inputs.json';
  import content from './store/content.json';

	export default {
		name: 'login',
    data() {
			return { mode: '', inputs, content }
    },
    components: {
			'fetot-container': fetotContainer,
      'login-workspace': loginWorkspace
    },
    created() {
	    this.mode = locStorage.hasStorageItem('client-exist') ? 'login' : 'sing-in';
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .login {
    @include full-sizes;
    @include flex-center;
  }
</style>