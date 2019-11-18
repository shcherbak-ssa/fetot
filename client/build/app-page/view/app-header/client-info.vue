<template>
  <div class="client-info pa faic">
    <div class="name">{{ client.fullname }}</div>
    <fetot-ava @fetot-ava-click="" :fullname="client.fullname" size="46"/>

<!--    <menu-component v-if="isMenuOpen"-->
<!--                    :submenu="submenu" :list="appMenuService.list"-->
<!--                    @menu-event="menuEventHandler">-->
<!--    </menu-component>-->
  </div>
</template>

<script>
	import fetotAva from '$fetot-view-components/elements/fetot-ava.vue';
	// import menuComponent from '../menu/menu-component.vue';

  import StoreWorker from '$fetot-store-worker';

	export default {
		name: 'client-info',
		data() {
			return {
				client: StoreWorker.getStore('client').state.config,

        isMenuOpen: false,
				appMenuService: null,
        submenu: false,
			}
		},
    components: {
			'fetot-ava': fetotAva,
      // 'menu-component': menuComponent
    },
    methods: {},
    mounted() {}
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .client-info {
    top: 0;
    right: 0;
  }
  .fetot-ava {
    margin-left: 12px;
  }
  .name {
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium';
    transition: .4s;

    @media screen and (max-width: 670px) {
      display: none;
    }

    .is-close & {
      opacity: 0;
    }
  }
  .menu-component {
    top: 125%;
    right: 0;
  }
</style>