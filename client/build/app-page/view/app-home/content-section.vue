<template>
  <div class="content-section">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'content-section'
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .content-section {
    position: relative;
    height: 100%;
  }
  .title {
    color: $fetot-dark-gray;
    font: 18px 'roboto-bold';
    position: absolute;
    top: -30px;
    left: 10px;
  }
  .content {
    display: flex;
    overflow: hidden;
    padding: 10px;
    @include full-sizes;
  }
</style>