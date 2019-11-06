<template>
  <div class="fetot-container">
    <component :is="pageComponent"></component>
  </div>
</template>

<script>
	export default {
		name: 'fetot-container',
    props: { pageComponent: String }
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