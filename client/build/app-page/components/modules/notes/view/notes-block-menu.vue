<template>
  <menu-container @menu-close-event="menuCloseEventHandler">
    <template v-slot:menu-title>{{ menu.title }}</template>

    <template v-slot:menu-items>
      <menu-item v-for="(item, index) in menu.items"
                 :key="index" :item="item"
                 @menu-item-click="menuItemClickHandler">
      </menu-item>
    </template>
  </menu-container>
</template>

<script>
  import menuContainer from '$fetot-view/menu/menu-container.vue';
  import menuItem from '$fetot-view/menu/menu-item.vue';

	export default {
		name: 'notes-block-menu',
    props: {
			menu: Object
    },
    components: {
			'menu-container': menuContainer,
      'menu-item': menuItem
    },
    methods: {
	    menuItemClickHandler(item) {
	    	console.log('menu-item-click', item)
      },
	    menuCloseEventHandler() {

      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';
</style>