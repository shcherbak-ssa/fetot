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
    font-family: sans-serif;
    font-weight: bold;
    transition: .2s;
  }
</style>