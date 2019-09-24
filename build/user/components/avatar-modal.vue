<template>
  <fetot-modal />
</template>

<script>
  import fetotModal from 'fetot-components/fetot-modal.vue';

	export default {
		name: 'avatar-modal',
    components: {
			'fetot-modal': fetotModal
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .avatar-modal {
    background: $fetot-dark-gray-60;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    @include full-sizes;

    .modal {
      background: #fff;
      @include static-shadow;
      @include sizes(400px, 500px);
      @include position-center;
    }
  }
</style>