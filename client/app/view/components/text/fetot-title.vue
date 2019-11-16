<template>
  <div class="fetot-title">
    <slot></slot>
  </div>
</template>

<script>
	export default { name: 'fetot-title' }
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-title {
    color: $fetot-dark-blue;
    font: 28px 'roboto-bold', sans-serif;
    transition: .2s;
  }
</style>