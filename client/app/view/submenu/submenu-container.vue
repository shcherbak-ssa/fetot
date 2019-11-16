<template>
  <div class="submenu-container fcc br6px bg-fff full pr">
    <fetot-icon :icon="icon"></fetot-icon>
    <slot name="submenu-content"></slot>
  </div>
</template>

<script>
	import fetotIcon from '../components/icons/fetot-icon.vue';

	export default {
		name: 'submenu-container',
    props: {
			icon: String
    },
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .submenu-container {
    z-index: 1;
    @include static-shadow;

    .fetot-icon {
      color: $fetot-dark-gray;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
</style>