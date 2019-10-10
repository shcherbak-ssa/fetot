<template>
  <fetot-container>
    <div class="login">
      Hello
<!--      <login-workspace :inputs="store.get('inputs')"/>-->
    </div>
  </fetot-container>
</template>

<script>
  import fetotContainer from 'fetot-components/fetot-container.vue';
  // import loginWorkspace from './src/components/workspace.vue';

	export default {
		name: 'login',
    props: {
      store: Map
    },
    components: {
			'fetot-container': fetotContainer,
      // 'login-workspace': loginWorkspace
    },
    created() {
			console.log(this.store)
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .login {
    @include full-sizes;
  }
</style>