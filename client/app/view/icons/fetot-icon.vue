<template>
  <div class="fetot-icon fc" v-html="icon"></div>
</template>

<script>
	export default {
		name: 'fetot-icon',
    props: { icon: String }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .fetot-icon {
    font: 24px 'icons-font';
  }
</style>