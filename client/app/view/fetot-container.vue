<template>
  <div class="fetot-container full pr">
    <component :is="pageComponent"></component>
  </div>
</template>

<script>
	export default {
		name: 'fetot-container',
    props: { pageComponent: String }
	}
</script>

<style lang="scss" scoped>
  @import '../scss/src.scss';

  .fetot-container {
    background: #fff;
    overflow: hidden;
  }
</style>