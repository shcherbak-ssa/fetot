<template>
  <fetot-container>
    <div class="login">
      <login-workspace/>
    </div>
  </fetot-container>
</template>

<script>
	import fetotContainer from 'fetot-components/fetot-container.vue';
	import loginWorkspace from './workspace.vue';

	export default {
		name: 'fetot-login',
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
    @include flex-center;
  }
</style>