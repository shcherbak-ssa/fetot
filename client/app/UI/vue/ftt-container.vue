<template>
  <div class="ftt-container">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'ftt-container'
	}
</script>

<style lang="scss" scoped>
  @import '../scss/src.scss';

  .ftt-container {
    background: #fff;
    position: relative;
    overflow: hidden;
    @include full-sizes;
  }
</style>