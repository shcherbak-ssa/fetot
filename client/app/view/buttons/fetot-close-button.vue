<template>
  <div class="fetot-close-button" @click="$emit('fetot-close-button-click')">
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
    cursor: pointer;
    font-family: 'roboto-light', sans-serif;
    width: 120px;
    bottom: 5%;
    transition: .4s;
    @include position-gor-center;
    @include flex-center-column;

    .txt, .fetot-icon {
      font-size: 16px;
    }
  }
</style>