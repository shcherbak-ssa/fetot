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
  @import '../scss/src.scss';

  .fetot-container {
    background: #fff;
    position: relative;
    overflow: hidden;
    @include full-sizes;
  }
</style>