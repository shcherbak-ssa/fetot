<template>
  <modal-container :modal-type="options.modalType" :header="options.header"
                   @close-event="$emit('close-event')">

    <template v-slot:modal-content>

    </template>

    <template v-slot:modal-footer>
      <fetot-confirm-buttons @confirm-event="confirmEventHandler"></fetot-confirm-buttons>
    </template>

  </modal-container>
</template>

<script>
  import modalContainer from './modal-container.vue';
  import fetotConfirmButtons from '../components/buttons/fetot-confirm-buttons.vue';

	export default {
		name: 'modal-create-block',
    props: {
			options: Object
    },
    components: {
			'modal-container': modalContainer,
      'fetot-confirm-buttons': fetotConfirmButtons
    },
    methods: {
	    confirmEventHandler(label) {

      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .modal-create-block {

  }
</style>