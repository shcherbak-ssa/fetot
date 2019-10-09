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

	export default {
		name: 'login',
    props: {
			currentModule: String,
      store: Object
    },
    components: {
			'fetot-container': fetotContainer,
      'login-workspace': loginWorkspace
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .login {
    @include full-sizes;
  }
</style>