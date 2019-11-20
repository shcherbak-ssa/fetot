<template>
  <div class="frame-header pr bs faic w100">
    <fetot-header-title :header="header"></fetot-header-title>
    <fetot-close-icon @close-event="$emit('close-event')"></fetot-close-icon>
  </div>
</template>

<script>
	import fetotHeaderTitle from '../components/elements/fetot-header-title.vue';
	import fetotCloseIcon from '../components/icons/fetot-close-icon.vue';

	export default {
		name: 'frame-header',
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

  .frame-header {
    z-index: 10;
    padding: 16px 24px;
    justify-content: space-between;
    @include static-shadow;
  }
</style>