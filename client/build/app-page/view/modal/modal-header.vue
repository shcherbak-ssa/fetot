<template>
  <div class="modal-header w100 faic">
    <div class="title flex">
      <fetot-icon :icon="header.icon"></fetot-icon>
      <div class="name">{{ header.name }}</div>
    </div>
    <div class="close-icon br50 bg-fff pr fc cp bfr-click" @click.stop="$emit('close-event')">
      <fetot-icon icon="&#xE808;"></fetot-icon>
    </div>
  </div>
</template>

<script>
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue';

	export default {
		name: 'modal-header',
    props: {
			header: Object
    },
		components: {
			'fetot-icon': fetotIcon,
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .modal-header {
    justify-content: space-between;
    height: 36px;

    .title {
      color: $fetot-dark-gray;
      font: 24px 'roboto-medium';

      .fetot-icon {
        margin-right: 10px;
      }
    }
    .close-icon {
      transition: .2s;
      width: 36px;
      height: 36px;

      &:hover {
        @include static-shadow;
      }

      .fetot-icon {
        color: $fetot-dark-gray;
        font-size: 24px;
      }
    }
  }
</style>