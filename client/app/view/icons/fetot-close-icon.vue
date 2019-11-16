<template>
  <div class="fetot-close-icon br50 bg-fff pr fc cp bfr-click" @click.stop="$emit('close-event')">
    <fetot-icon icon="&#xE808;"></fetot-icon>
  </div>
</template>

<script>
	import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-close-icon',
		components: {
			'fetot-icon': fetotIcon,
		}
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-close-icon {
    transition: .2s;
    width: 36px;
    height: 36px;

    &:hover {
      @include static-shadow;
    }

    .fetot-icon {
      color: $fetot-dark-gray;
      font-size: 20px;
    }
  }
</style>