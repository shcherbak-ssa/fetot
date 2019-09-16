<template>
  <div class="icon">{{ icon }}</div>
</template>

<script>
	export default {
		name: 'icon',
    props: { icon: String }
	}
</script>

<style lang="scss">
  @import 'fetot-src-scss';

  .icon {
    /*font: 24px 'fetot-icons';*/
    font-size: 24px;
  }
</style>