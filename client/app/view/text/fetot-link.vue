<template>
  <div class="fetot-link cp" @click="$emit('fetot-link-click')">
    <slot></slot>
  </div>
</template>

<script>
	export default { name: 'fetot-link' }
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-link {
    color: $fetot-azure;
    font: 14px 'roboto-light', sans-serif;
    transition: .2s;

    &:hover {
      text-decoration: underline;
    }
  }
</style>