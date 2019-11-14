<template>
  <div class="block-status-line w100 pr">
    <div class="status-line w100 pc"></div>
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
    height: 22px;

    .status-line {
      background: $fetot-dark-gray-40;
      height: 2px;
    }
    /*@media screen and (max-width: 1024px) {*/
    /*  height: 12px;*/
    /*}*/
  }
</style>