<template>
  <div class="fetot-minimize-button" @click="$emit('fetot-minimize-button-click')">
    <fetot-icon icon="&#xE813;"></fetot-icon>
    {{ text }}
  </div>
</template>

<script>
  import fetotIcon from './icons/fetot-icon.vue';

	export default {
		name: 'fetot-minimize-button',
    props: {
			text: String
    },
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-minimize-button {
    color: $fetot-azure;
    cursor: pointer;
    font: 16px 'roboto-light';
    @include flex-center-column;

    .fetot-icon {
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
</style>