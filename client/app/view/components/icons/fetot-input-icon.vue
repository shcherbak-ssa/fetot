<template>
  <div class="fetot-input-icon pa">
    <fetot-icon :icon="icon"></fetot-icon>
  </div>
</template>

<script>
  import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-input-icon',
    props: {
			icon: String
    },
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .fetot-input-icon {
    color: $fetot-dark-blue;
    font-size: 16px;
    width: 24px;
    height: 24px;
    transition: .4s;
    top: 9px;
    left: 24px;
    opacity: 0;
  }
</style>