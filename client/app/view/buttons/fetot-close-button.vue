<template>
  <div class="fetot-close-button cp fcc" @click="$emit('fetot-close-button-click')">
    <fetot-icon icon="&#xE817;"></fetot-icon>
    <div class="txt">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import fetotIcon from '../icons/fetot-icon.vue';

	export default {
		name: 'fetot-close-button',
    components: { 'fetot-icon': fetotIcon }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-close-button {
    color: $fetot-azure;
    font-family: 'roboto-light', sans-serif;
    width: 120px;
    bottom: 10px;
    transition: .4s;
    @include position-gor-center;

    .txt, .fetot-icon {
      font-size: 16px;
    }
  }
</style>