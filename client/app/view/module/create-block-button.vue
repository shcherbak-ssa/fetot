<template>
  <div class="create-block-button cp fc br50 bfr-click"
       :class="setState"
       @click.stop="$emit('create-block-event')">

    <fetot-icon icon="&#xE809;"></fetot-icon>
  </div>
</template>

<script>
  import fetotIcon from '$fetot-view-components/icons/fetot-icon.vue';

	export default {
		name: 'create-block-button',
    props: {
			hasFrame: Boolean
    },
    components: {
			'fetot-icon': fetotIcon
    },
    computed: {
			setState() {
				return { 'has-frame': this.hasFrame }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .create-block-button {
    background: $fetot-blue;
    color: #fff;
    font-size: 18px;
    width: 46px;
    height: 46px;
    transition: .4s;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    @include static-shadow;

    &:hover {
      background: $fetot-dark-blue;
    }
    &.has-frame {
      right: -56px;
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