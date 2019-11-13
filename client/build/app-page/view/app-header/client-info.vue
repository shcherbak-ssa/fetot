<template>
  <div class="client-info pa faic">
    <div class="name">{{ client.fullname }}</div>
    <fetot-ava @fetot-ava-click="avaClickHandler" :fullname="client.fullname" size="46"/>

    <menu-component v-if="isMenuOpen" :list="appMenuService.list" @menu-event="menuEventHandler"></menu-component>
  </div>
</template>

<script>
	import fetotAva from '$fetot-view/elements/fetot-ava.vue';
	import menuComponent from '../menu/menu-component.vue';

	import {clientStore} from '../../components/workers/client';

	export default {
		name: 'client-info',
		data() {
			return {
				client: clientStore.state.config,
        isMenuOpen: false,
				appMenuService: null
			}
		},
    components: {
			'fetot-ava': fetotAva,
      'menu-component': menuComponent
    },
    methods: {
	    avaClickHandler() {
	    	this.toggleOpenMenu();
      },
	    menuEventHandler(label) {
	    	if( label !== undefined ) this.appMenuService[label]();
        this.toggleOpenMenu();
      },

      /* src */
      toggleOpenMenu() {
	    	this.isMenuOpen = !this.isMenuOpen
      }
    },
    mounted() {
			if( this.appMenuService !== null ) return;

			const self = this;
			import('../../components/services/app-menu-service.js')
        .then((store) => {
        	self.appMenuService = store.default
        })
    }
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