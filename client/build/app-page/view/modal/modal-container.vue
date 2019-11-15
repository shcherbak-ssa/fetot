<template>
  <div class="modal-container full pa">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'modal-container'
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .modal-container {
    background: $fetot-dark-gray-40;
    z-index: 10000;
  }
</style>