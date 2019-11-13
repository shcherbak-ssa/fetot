<template>
  <div class="add-button cp fc pa br50 bfr-click" @click.stop="$emit('add-block-event')">
    <fetot-icon icon="&#xE809;"></fetot-icon>
  </div>
</template>

<script>
  import fetotIcon from '$fetot-view/icons/fetot-icon.vue';

	export default {
		name: 'add-button',
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .add-button {
    background: $fetot-blue;
    color: #fff;
    font-size: 18px;
    width: 46px;
    height: 46px;
    transition: .4s;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    @include static-shadow;

    &:hover {
      background: $fetot-dark-blue;
    }

    @media screen and (max-width: 1024px) {
      font-size: 24px;
      width: 56px;
      height: 56px;
      right: 12px;
      bottom: 12px;
    }
  }
</style>