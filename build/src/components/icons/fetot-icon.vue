<template>
  <div class="fetot-icon">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'fetot-icon'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-icon {
    font-size: 24px;
    font-family: 'icons-font';
  }
</style>