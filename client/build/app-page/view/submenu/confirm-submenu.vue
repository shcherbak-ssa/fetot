<template>
  <submenu-container>
    <div class="confirm-submenu bs fcc full flex">
      <fetot-icon :icon="submenu.icon"></fetot-icon>
      <div class="text" v-html="submenu.text"></div>
      <fetot-confirm-buttons @confirm-event="confirmEventHandler"></fetot-confirm-buttons>
    </div>
  </submenu-container>
</template>

<script>
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue';
	import fetotConfirmButtons from '$fetot-view/buttons/fetot-confirm-buttons.vue';
	import submenuContainer from './submenu-container.vue';

	import menuWorker from '../../components/workers/menu-worker';

	export default {
		name: 'confirm-submenu',
    props: {
			submenu: Object
    },
		components: {
			'fetot-icon': fetotIcon,
      'fetot-confirm-buttons': fetotConfirmButtons,
      'submenu-container': submenuContainer
		},
    methods: {
	    confirmEventHandler(label) {
	    	menuWorker.triggerSubmenuEvent(this.submenu.type, label);
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .confirm-submenu {
    padding: 24px;
  }
  .fetot-icon {
    color: $fetot-dark-gray;
    font-size: 28px;
  }
  .text {
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium';
    text-align: center;
    margin: 32px 0;
  }
</style>