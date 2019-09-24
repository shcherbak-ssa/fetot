<template>
  <div class="workspace-header">
    <div class="title">New user</div>
    <div class="email">{{ email }}</div>
  </div>
</template>

<script>
	export default {
		name: 'workspace-header',
    props: {
			email: String
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-header {
    text-align: center;
    margin-bottom: 30px;

    .title {
      @include workspace-title-component;
      margin-bottom: 10px;
    }
    .email {
      color: $fetot-dark-gray;
      font-size: 18px;
    }
  }
</style>