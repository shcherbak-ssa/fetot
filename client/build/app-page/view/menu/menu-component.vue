<template>
  <div class="menu-component flex pa bs bg-fff br6px" :class="setCurrentSubmenuState">
    <menu-item v-for="(item, index) in list"
               :key="index" :item="item"
               @menu-item-click="menuItemClickHandler">
    </menu-item>
    <fetot-close-button @fetot-close-button-click="$emit('menu-event')">close menu</fetot-close-button>

    <component :is="setCurrentSubmenuComponent" :submenu="submenu"></component>
  </div>
</template>

<script>
  import fetotCloseButton from '$fetot-view/buttons/fetot-close-button.vue';

  import menuItem from './menu-item.vue';
  import confirmSubmenu from '../submenu/confirm-submenu.vue';

	export default {
		name: 'menu-component',
    props: {
			list: Array,
      submenu: [Object, Boolean]
    },
    components: {
			'fetot-close-button': fetotCloseButton,
      'menu-item': menuItem
    },
    methods: {
	    menuItemClickHandler(label) {
	    	this.$emit('menu-event', label)
      }
    },
    computed: {
	    setCurrentSubmenuComponent() {
	    	if( !this.submenu ) return '';

	    	if( this.submenu.type === 'confirm' ) return confirmSubmenu;
      },
	    setCurrentSubmenuState() {
	    	return this.submenu ? { [`is-${this.submenu.type}`]: true } : ''
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .menu-component {
    width: 280px;
    padding: 10px 0 64px;
    flex-direction: column;
    z-index: 10;
    transition: .4s;
    @include static-shadow;

    &.is-confirm {
      height: 240px;
    }
  }
</style>