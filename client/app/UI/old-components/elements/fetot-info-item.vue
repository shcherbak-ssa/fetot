<template>
  <div class="fetot-info-item">
    <fetot-icon :icon="info.icon"></fetot-icon>
    <div class="count">{{ info.count }}</div>
  </div>
</template>

<script>
  import fetotIcon from '../icons/fetot-icon.vue';

	export default {
		name: 'fetot-info-item',
    props: {
			info: Object
    },
    components: {
			'fetot-icon': fetotIcon
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-info-item {
    color: $fetot-dark-gray;
    transition: .4s;
    display: flex;
    font-size: 18px;
    margin-right: 10px;

    .fetot-icon {
      margin-right: 5px;
      font-size: 18px;
    }
  }
</style>