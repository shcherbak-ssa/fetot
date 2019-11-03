<template>
  <div class="fetot-link" @click="$emit('fetot-link-click')">
    <slot></slot>
  </div>
</template>

<script>
	export default { name: 'fetot-link' }
</script>

<style lang="scss" scoped>
  @import 'fetot-scss';

  .fetot-link {
    color: $fetot-azure;
    cursor: pointer;
    font: 14px 'roboto-light', sans-serif;
    transition: .2s;

    &:hover {
      text-decoration: underline;
    }
  }
</style>