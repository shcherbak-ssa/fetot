<template>
  <div class="block-header w100 flex">
    <fetot-title>
      <slot></slot>
    </fetot-title>
    <fetot-icon-click icon="&#xF141;" @fetot-icon-click="$emit('menu-event')"/>
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
    height: 32px;
    align-items: center;
    justify-content: space-between;

    .fetot-title {
      font-size: 20px;
    }
    .fetot-icon-click {
      opacity: 0;
      font-size: 24px;
      width: 32px;
      height: 32px;

      [class="block-container"]:hover & {
        opacity: 1;
      }

      @media screen and (max-width: 1024px) {
        opacity: 1;
      }
    }
  }
</style>