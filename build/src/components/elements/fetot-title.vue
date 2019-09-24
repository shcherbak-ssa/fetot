<template>
  <div class="fetot-title">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'fetot-title'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-title {
    color: $fetot-dark-blue;
    font: bold 1.5rem sans-serif;
    transition: .2s;
  }
</style>