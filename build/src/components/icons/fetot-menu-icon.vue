<template>
  <div class="fetot-menu-icon">
    <fetot-icon icon="&#xF141;"></fetot-icon>
  </div>
</template>

<script>
  import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-menu-icon',
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-menu-icon {
    color: $fetot-dark-gray;
    transition: .4s;
  }
</style>