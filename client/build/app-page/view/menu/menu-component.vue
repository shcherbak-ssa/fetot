<template>
  <div class="menu-component flex pa bs bg-fff br6px">
    <menu-item v-for="(item, index) in list"
               :key="index" :item="item"
               @menu-item-click="menuItemClickHandler">
    </menu-item>
    <fetot-close-button @fetot-close-button-click="$emit('menu-event')">close menu</fetot-close-button>
  </div>
</template>

<script>
  import fetotCloseButton from '$fetot-view/buttons/fetot-close-button.vue';
  import menuItem from './menu-item.vue';

	export default {
		name: 'menu-component',
    props: {
			list: Array
    },
    components: {
			'fetot-close-button': fetotCloseButton,
      'menu-item': menuItem
    },
    methods: {
	    menuItemClickHandler(label) {
	    	this.$emit('menu-event', label)
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
    @include static-shadow;
  }
</style>