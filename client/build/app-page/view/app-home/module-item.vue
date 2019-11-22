<template>
  <div class="module-item cp fcc br6px hover_hov-sh" @click="$emit('module-item-click', item.label)">
    <fetot-icon :icon="item.icon"></fetot-icon>
    <div class="name">{{ item.name }}</div>
  </div>
</template>

<script>
	import fetotIcon from '$fetot-view-components/icons/fetot-icon.vue';

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
    font: 24px 'roboto-medium';
    width: 100px;
    height: 100px;
    margin: 0 20px 20px 0;
    justify-content: center;
    transition: .2s;

    @media screen and (max-width: 670px) {
      font-size: 20px;
      width: 100%;
      height: 64px;
      flex-direction: row;
      justify-content: left;
      padding: 15px;
      margin-right: 0;
      @include box-sizing;
    }

    .fetot-icon {
      margin-bottom: 5px;

      @media screen and (max-width: 670px) {
        margin: 0 10px 0 0;
        font-size: 20px;
      }
    }
  }
</style>