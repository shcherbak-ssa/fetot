<template>
  <div class="frame-component full br6px bg-fff hover_hov-sh"></div>
</template>

<script>
	export default {
		name: 'frame-component'
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .frame-component {
    transition: .4s;
    @include static-shadow;
  }
</style>