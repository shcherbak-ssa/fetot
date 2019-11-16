<template>
  <div class="modal-header w100 faic">
    <fetot-header-title :header="header"></fetot-header-title>
    <fetot-close-icon @close-event="$emit('close-event')"></fetot-close-icon>
  </div>
</template>

<script>
  import fetotHeaderTitle from '../components/elements/fetot-header-title.vue';
	import fetotCloseIcon from '../components/icons/fetot-close-icon.vue';

	export default {
		name: 'modal-header',
    props: {
			header: Object
    },
		components: {
			'fetot-header-title': fetotHeaderTitle,
			'fetot-close-icon': fetotCloseIcon,
		}
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .modal-header {
    justify-content: space-between;
    height: 36px;
  }
</style>