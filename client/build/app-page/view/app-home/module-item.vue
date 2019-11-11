<template>
  <div class="module-item" @click="$emit('module-item-click', item.label)">
    <fetot-icon :icon="item.icon"></fetot-icon>
    <div class="name">{{ item.name }}</div>
  </div>
</template>

<script>
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue';

  export default {
		name: 'module-item',
    props: {
			item: Object
    },
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .module-item {
    background: #fff;
    color: $fetot-dark-blue;
    cursor: pointer;
    font: 24px 'roboto-medium';
    width: 100px;
    height: 100px;
    margin: 0 20px 20px 0;
    justify-content: center;
    transition: .2s;
    @include flex-center-column;
    @include static-shadow;
    @include border-radius-6;

    &:hover {
      @include hover-shadow;
    }

    .fetot-icon {
      margin-bottom: 5px;
    }
  }
</style>