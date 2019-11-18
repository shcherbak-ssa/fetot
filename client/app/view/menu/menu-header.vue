<template>
  <div class="menu-header bs w100 faic">
    <fetot-title>
      <slot name="menu-header-title"></slot>
    </fetot-title>
    <fetot-close-icon @close-event="$emit('close-event')"></fetot-close-icon>
  </div>
</template>

<script>
  import fetotTitle from '../components/text/fetot-title.vue';
  import fetotCloseIcon from '../components/icons/fetot-close-icon.vue';

	export default {
		name: 'menu-header',
    components: {
			'fetot-title': fetotTitle,
			'fetot-close-icon': fetotCloseIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .menu-header {
    padding: 16px 24px;
    justify-content: space-between;

    .fetot-title {
      font-size: 20px;
    }
  }
</style>