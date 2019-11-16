<template>
  <div class="menu-header w100 flex">
    <fetot-close-icon @close-event="$emit('close-event')"></fetot-close-icon>
  </div>
</template>

<script>
  import fetotCloseIcon from '../components/icons/fetot-close-icon.vue';

	export default {
		name: 'menu-header',
    components: {
			'fetot-close-icon': fetotCloseIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .menu-header {
    margin-bottom: 20px;
    justify-content: right;
  }
</style>