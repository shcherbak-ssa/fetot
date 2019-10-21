<template>
  <div class="fetot-status-line"></div>
</template>

<script>
	export default {
		name: 'fetot-status-line',
    props: {
			status: String,
      margin: String
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-status-line {
    color: $fetot-dark-gray-60;
    width: 100%;
    height: 2px;
    margin: 24px 0;
  }
</style>