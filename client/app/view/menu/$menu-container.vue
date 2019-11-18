<template>
  <div class="menu-container flex-col w100 pa bs bg-fff br6px">
    <menu-header @close-event="$emit('close-menu-event')">
      <template v-slot:menu-header-title>
        <slot name="menu-title"></slot>
      </template>
    </menu-header>

    <div class="menu-content w100 flex-col">
      <slot name="submenu"></slot>

      <slot name="menu-items"></slot>

      <fetot-close-button @fetot-close-button-click="$emit('close-menu-event')">
        close menu
      </fetot-close-button>
    </div>
  </div>
</template>

<script>
  import fetotCloseButton from '../components/buttons/fetot-close-button.vue';
  import menuHeader from './menu-header.vue';

	export default {
		name: 'menu-container',
    components: {
			'fetot-close-button': fetotCloseButton,
      'menu-header': menuHeader
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .menu-container {
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: .4s;
    @include hover-shadow;
  }
</style>