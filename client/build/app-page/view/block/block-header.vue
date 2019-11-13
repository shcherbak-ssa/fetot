<template>
  <div class="block-header flex pa">
    <fetot-title>
      <slot></slot>
    </fetot-title>
    <fetot-icon-click icon="&#xF141;"></fetot-icon-click>
  </div>
</template>

<script>
	import fetotTitle from '$fetot-view/text/fetot-title.vue';
	import fetotIconClick from '$fetot-view/icons/fetot-icon-click.vue';

	export default {
		name: 'block-header',
		components: {
			'fetot-title': fetotTitle,
      'fetot-icon-click': fetotIconClick
		}
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .block-header {
    width: 100%;
    height: 38px;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;

    .fetot-title {
      font-size: 24px;
    }
    .fetot-icon-click {
      opacity: 0;
      font-size: 24px;
      width: 38px;
      height: 38px;

      @media screen and (max-width: 1024px) {
        opacity: 1;
      }
    }
  }
</style>