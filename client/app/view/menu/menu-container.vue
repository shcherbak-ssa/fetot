<template>
  <div class="menu-container flex-col w100 pa bs bg-fff br6px">
    <menu-header @close-event="$emit('menu-close-event')"></menu-header>

    <div class="menu-content w100 flex-col">
      <slot name="submenu"></slot>

      <slot name="menu-items"></slot>

      <fetot-close-button @fetot-close-button-click="$emit('menu-close-event')">
        close menu
      </fetot-close-button>
    </div>
  </div>
</template>

<script>
  import fetotCloseButton from '$fetot-view/buttons/fetot-close-button.vue';
  import menuHeader from './menu-header.vue';

	export default {
		name: 'menu-container',
    props: {
			list: Array
    },
    components: {
			'fetot-close-button': fetotCloseButton,
      'menu-header': menuHeader
    },
    methods: {
	    menuItemClickHandler(item) {
	    	this.$emit('menu-event', item)
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .menu-container {
    padding: 10px 0 64px;
    z-index: 10;
    transition: .4s;
    @include hover-shadow;
  }
</style>