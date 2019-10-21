<template>
  <div class="fetot-grip-icon">
    <fetot-icon icon="&#xE808;"></fetot-icon>
  </div>
</template>

<script>
  import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-grip-icon',
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';
  
  .fetot-grip-icon {
    color: $fetot-dark-gray-40;
    transition: .4s;

    .fetot-icon {
      font-size: 18px;
    }
    
    &:hover {
      color: $fetot-dark-gray-80;
      cursor: grab;
    }
    &:active {
      cursor: grabbing;
    }
  }
</style>