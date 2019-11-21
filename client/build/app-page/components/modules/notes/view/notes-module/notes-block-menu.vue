<template>
  <menu-container @close-menu-event="$emit('close-menu-event')">
    <template v-slot:menu-title>{{ title }}</template>

    <template v-slot:menu-items>
      <menu-item v-for="(item, index) in menuItems"
                 :key="index" :item="item"
                 @menu-item-click="menuItemClickHandler">
      </menu-item>
    </template>
  </menu-container>
</template>

<script>
  import notesBlockMenuStore from '../../store/notes-block-menu-store';

	export default {
		name: 'notes-block-menu',
    props: {
			title: String
    },
    methods: {
	    menuItemClickHandler(item) {
	    	console.log('menu-item-click', item);
        switch( item.label ) {
          case 'edit':
          	this.$emit('edit-note-event');
          	break;
          case 'delete':
          	this.$emit('delete-note-event')
        }
      },
    },
    computed: {
			menuItems() {
				return notesBlockMenuStore.items
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';
</style>