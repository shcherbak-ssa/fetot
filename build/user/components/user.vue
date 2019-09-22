<template>
  <fetot-container>
    <div class="user">
      <user-workspace/>
    </div>
  </fetot-container>
</template>

<script>
  import fetotContainer from 'fetot-components/fetot-container.vue';
  import userWorkspace from './workspace.vue';

	export default {
		name: 'user',
    components: {
			'fetot-container': fetotContainer,
      'user-workspace': userWorkspace
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .user {
    @include full-sizes;
    @include flex-center;
  }
</style>