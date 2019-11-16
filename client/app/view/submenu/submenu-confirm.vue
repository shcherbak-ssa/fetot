<template>
  <div class="submenu-confirm bs fcc w100">
    <div class="text" v-html="text"></div>
    <fetot-confirm-buttons @confirm-event="confirmEventHandler"></fetot-confirm-buttons>
  </div>
</template>

<script>
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue';
	import fetotConfirmButtons from '$fetot-view/buttons/fetot-confirm-buttons.vue';

	export default {
		name: 'submenu-confirm',
    props: {
			text: String
    },
		components: {
			'fetot-icon': fetotIcon,
      'fetot-confirm-buttons': fetotConfirmButtons
		},
    methods: {
	    confirmEventHandler(label) {
	    	this.$emit('confirm-event', label)
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .submenu-confirm {
    padding: 24px;
  }
  .text {
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium';
    text-align: center;
    margin-bottom: 32px;
  }
</style>