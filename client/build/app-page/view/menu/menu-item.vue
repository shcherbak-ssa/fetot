<template>
  <div class="menu-item pr bs cp w100 faic bfr-click" @click.stop="$emit('menu-item-click', item.label)">
    <fetot-icon :icon="item.icon"></fetot-icon>
    <div class="title">{{ item.title }}</div>
  </div>
</template>

<script>
  import fetotIcon from '$fetot-view/icons/fetot-icon.vue';

	export default {
		name: 'menu-item',
    props: {
			item: Object
    },
    components: { 'fetot-icon': fetotIcon }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .menu-item {
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium';
    height: 42px;
    padding: 0 20px;
    transition: .2s;

    &:hover {
      background: $fetot-dark-blue-10;
    }
    .fetot-icon {
      margin-right: 10px;
    }
  }
</style>