<template>
  <div class="app-header"></div>
</template>

<script>
	export default {
		name: 'app-header'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .app-header {
    background: #fff;
    border-radius: 0 0 6px 6px;
    width: 100%;
    height: 80px;
    @include static-shadow;
  }
</style>