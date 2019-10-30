<template>
  <div class="login-page"></div>
</template>

<script>
	export default {
		name: 'login-page'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-scss';

  .login-page {
    background: #fff;
    width: 300px;
    height: 180px;
    @include static-shadow;
    @include position-center;
  }
</style>