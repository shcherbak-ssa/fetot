<template>
  <fetot-icon>
    <div class="fetot-icon-click" @click="$emit('fetot-icon-click')">
      <slot></slot>
    </div>
  </fetot-icon>
</template>

<script>
  import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-icon-click',
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss">
  @import 'fetot-src-scss';

  .fetot-icon-click {
    color: $fetot-dark-gray;
  }
</style>