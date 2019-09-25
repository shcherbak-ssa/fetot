<template>
  <div class="workspace-header">
    <fetot-title>New user</fetot-title>
    <div class="email">{{ email }}</div>
  </div>
</template>

<script>
  import fetotTitle from 'fetot-components/elements/fetot-title.vue';

	export default {
		name: 'workspace-header',
    props: {
			email: String
    },
    components: {
			'fetot-title': fetotTitle
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-header {
    text-align: center;
    margin-bottom: 30px;

    .fetot-title {
      margin-bottom: 10px;
    }
    .email {
      color: $fetot-dark-gray;
      font-size: 18px;
    }
  }
</style>