<template>
  <div class="categories pa flex">
    <div class="categories-icon fc">
      <fetot-icon-click icon="&#xF292;" :active="isMenuOpen" @fetot-icon-click="toggleMenuOpen"/>
    </div>
    <categories-menu v-if="isMenuOpen"
                     @select-category-event="selectCategoryHandler"
                     @close-category-menu-event="toggleMenuOpen">
    </categories-menu>

    <div class="content flex">
      <categories-item :isDefault="true" @select-category-event="selectCategoryHandler"/>

      <categories-item v-for="(name, index) in currentCategories"
                     :key="index" :item="{name, index}"
                     @select-category-event="selectCategoryHandler">
      </categories-item>
    </div>
  </div>
</template>

<script>
  import fetotIconClick from '../components/icons/fetot-icon-click.vue';
  import categoriesItem from './categories-item.vue';
  import categoriesMenu from './categories-menu.vue';

  import StoreInterface from '../../components/store-interface';

	export default {
		name: 'categories',
    data() {
			return {
        isMenuOpen: false
      }
    },
    components: {
	    'fetot-icon-click': fetotIconClick,
			'categories-item': categoriesItem,
      'categories-menu': categoriesMenu
    },
    methods: {
	    toggleMenuOpen() {
		    this.isMenuOpen = !this.isMenuOpen;
	    },
    },
    computed: {
			currentCategories() {
				return StoreInterface.getStore('current-categories').categories
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .categories {
    width: calc(100% - 10px);
    bottom: 0;
    left: 10px;
    transition: .4s;

    .is-active & {
      display: none;
    }
  }
  .categories-icon {
    width: 38px;
    height: 38px;
    margin-right: 10px;
  }
  .fetot-icon-click {
    background: #fff;
    color: $fetot-dark-blue;
    font-size: 20px;
    width: 32px;
    height: 32px;
  }
  .content {
    width: calc(100% - 48px);
    overflow: hidden;
  }
</style>