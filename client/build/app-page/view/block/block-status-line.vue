<template>
  <div class="block-status-line pa">
    <div class="status-line pc"></div>
  </div>
</template>

<script>
	export default {
		name: 'block-status-line'
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .block-status-line {
    width: 100%;
    height: 22px;
    left: 0;
    top: 38px;

    .status-line {
      background: $fetot-dark-gray-60;
      width: 100%;
      height: 2px;
    }
    /*@media screen and (max-width: 1024px) {*/
    /*  height: 12px;*/
    /*}*/
  }
</style>