<template>
  <div class="fetot-header-title flex">
    <fetot-icon :icon="header.icon"></fetot-icon>
    <div class="title">{{ header.title }}</div>
  </div>
</template>

<script>
	import fetotIcon from '../icons/fetot-icon.vue';

	export default {
		name: 'fetot-header-title',
    props: {
			header: Object
    },
		components: {
			'fetot-icon': fetotIcon
		}
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-header-title {
    color: $fetot-dark-gray;
    font: 20px 'roboto-medium';

    .fetot-icon {
      margin-right: 10px;
    }
  }
</style>