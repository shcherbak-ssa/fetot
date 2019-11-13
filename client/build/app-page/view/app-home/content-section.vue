<template>
  <div class="content-section pr">
    <div class="title pa">
      <slot name="title"></slot>
    </div>
    <div class="content flex full bs">
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
    margin: 0 10px 20px 0;

    @media screen and (max-width: 670px) {
      margin: 0 0 30px 0;
      width: 320px;
    }
    @media screen and (max-width: 419px) {
      width: 100%;
    }
  }
  .title {
    color: $fetot-dark-gray;
    font: 18px 'roboto-bold';
    top: -30px;
    left: 10px;
  }
  .content {
    overflow: hidden;
    padding: 10px;

    @media screen and (max-width: 670px) {
      flex-direction: column;
    }
  }
</style>