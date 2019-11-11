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
    /*height: 100%;*/
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
    position: absolute;
    top: -30px;
    left: 10px;
  }
  .content {
    display: flex;
    overflow: hidden;
    padding: 10px;
    @include full-sizes;
    @include box-sizing;

    @media screen and (max-width: 670px) {
      flex-direction: column;
    }
  }
</style>