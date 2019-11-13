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
      <category-item :isDefault="true" @select-category-event="selectCategoryHandler"/>

      <category-item v-for="(name, index) in getCategories"
                     :key="index" :item="{name, index}"
                     @select-category-event="selectCategoryHandler">
      </category-item>
    </div>
  </div>
</template>

<script>
  import fetotIconClick from '$fetot-view/icons/fetot-icon-click.vue';

  import categoryItem from './category-item.vue';
  import categoriesMenu from './categories-menu.vue';

  import {currentCategoriesStore} from '../../components/workers/current-categories';
  import {currentModuleStore} from '../../components/workers/current-module';

	export default {
		name: 'categories',
    data() {
			return {
        isMenuOpen: false
      }
    },
    components: {
	    'fetot-icon-click': fetotIconClick,
			'category-item': categoryItem,
      'categories-menu': categoriesMenu
		},
    methods: {
	    toggleMenuOpen() {
		    this.isMenuOpen = !this.isMenuOpen;
	    },

			async selectCategoryHandler(index) {
	    	await currentModuleStore.actions.updateActives({
          key: 'category',
          value: index
	    	})
      }
    },
    computed: {
			getCategories() {
				return currentCategoriesStore.state.categories
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
    width: 42px;
    height: 42px;
    margin-right: 10px;
  }
  .fetot-icon-click {
    background: #fff;
    color: $fetot-dark-blue;
    font-size: 20px;
    width: 38px;
    height: 38px;
  }
  .content {
    width: calc(100% - 52px);
    overflow: hidden;
  }
</style>