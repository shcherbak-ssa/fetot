<template>
  <div class="fetot-container">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'fetot-container'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-container {
    background: #fff;
    position: relative;
    @include full-sizes;
  }
</style>