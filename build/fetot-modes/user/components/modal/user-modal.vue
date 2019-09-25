<template>
  <div class="user-modal">
    <fetot-modal>
      <template v-slot:modal-title>Change avatar</template>
      <template v-slot:modal-body>
        <modal-canvas/>
      </template>
    </fetot-modal>
  </div>
</template>

<script>
	import fetotModal from 'fetot-components/fetot-modal.vue';
	import modalCanvas from './modal-canvas.vue';

	export default {
		name: 'user-modal',
    components: {
	    'fetot-modal': fetotModal,
      'modal-canvas': modalCanvas
    }
	}
</script>

<style lang="scss" scoped>

</style>