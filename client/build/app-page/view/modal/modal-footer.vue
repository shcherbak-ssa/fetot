<template>
  <div class="modal-footer bs w100">
    <slot>
      <fetot-confirm-buttons @confirm-event="confirmEventHandler"></fetot-confirm-buttons>
    </slot>
  </div>
</template>

<script>
  import fetotConfirmButtons from '$fetot-view/buttons/fetot-confirm-buttons.vue';

	export default {
		name: 'modal-footer',
    components: {
			'fetot-confirm-buttons': fetotConfirmButtons
    },
    methods: {
	    confirmEventHandler(label) {
		    this.$emit('confirm-event', label)
	    }
    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .modal-footer {
    padding: 0 62px;

    .fetot-confirm-buttons .fetot-button {
      width: 120px;
    }
  }
</style>