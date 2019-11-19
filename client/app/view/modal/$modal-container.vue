<template>
  <div class="modal-container full pa">
    <div class="modal bs br6px bg-fff pc flex-col" :class="options.modalType">
      <modal-header
              :header="options.header"
              @close-event="$emit('close-modal-event')">
      </modal-header>

      <div class="modal-content bs w100">
        <slot name="modal-content"></slot>
      </div>

      <div class="modal-footer bs w100">
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import modalHeader from './modal-header.vue';

	export default {
		name: 'modal-container',
    props: {
			options: Object
    },
    components: {
			'modal-header': modalHeader
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .modal-container {
    background: $fetot-dark-gray-40;
    z-index: 10000;
  }
  .modal {
    padding: 24px;
    @include hover-shadow;

    &.is-small {
      width: 420px;
    }
  }
  .modal-content {
    padding: 42px 24px;
  }
</style>