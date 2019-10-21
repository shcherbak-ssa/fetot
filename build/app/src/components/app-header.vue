<template>
  <div class="app-header">
    app-header
  </div>
</template>

<script>
	export default {
		name: 'app-header',
    props: {
			options: Object
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .app-header {
    background: #fff;
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 120px;
    transition: 1s;
    padding: 24px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    @include static-shadow;
    @include box-sizing;
  }
</style>