<template>
  <div class="block-component flex bs br6px bg-fff hover_hov-sh"></div>
</template>

<script>
	export default {
		name: 'block-component'
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .block-component {
    flex-shrink: 0;
    padding: 24px;
    margin-bottom: 24px;
    width: 360px;
    height: 300px;
    @include static-shadow;

    @media screen and (max-width: 1024px) {
      width: 460px;
      height: 260px;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
</style>