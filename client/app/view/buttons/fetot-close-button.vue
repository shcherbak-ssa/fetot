<template>
  <div class="fetot-close-button">
    <div class="icon">&#xe813;</div>
    <div class="txt">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'fetot-close-button'
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-close-button {
    color: $fetot-azure;

    .txt {
      font: 18px 'roboto-light';
    }
  }
</style>