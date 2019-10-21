<template>
  <div class="fetot-info-item">
    <fetot-icon :icon="icon"></fetot-icon>
    <div class="count">{{ count }}</div>
  </div>
</template>

<script>
  import fetotIcon from '../icons/fetot-icon.vue';

	export default {
		name: 'fetot-info-item',
    props: {
			icon: String,
      count: Number
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
    font-size: 24px;
    margin-right: 10px;
  }
</style>