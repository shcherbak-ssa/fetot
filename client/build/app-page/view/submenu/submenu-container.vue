<template>
  <div class="submenu-container br6px bg-fff full pa">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'submenu-container'
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .submenu-container {
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>