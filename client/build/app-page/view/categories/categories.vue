<template>
  <div class="categories pa">
    <div class="categories-icon fc">
      <fetot-icon-click icon="&#xF292;" :active="isMenuOpen" @fetot-icon-click="iconClickHandler"/>
    </div>
    <categories-menu v-if="isMenuOpen" @fetot-close-button-click="closeButtonClickHandler"></categories-menu>

    <div class="content">
      <category-item :isDefault="true" @fetot-category-item-click="categoryItemClickHandler"/>

      <category-item v-for="(name, index) in getCategories" :key="index"
                     :item="{name, index}" @fetot-category-item-click="categoryItemClickHandler"/>
    </div>
  </div>
</template>

<script>
  import fetotIconClick from '$fetot-view/icons/fetot-icon-click.vue';

  import categoryItem from './category-item.vue';
  import categoriesMenu from './categories-menu.vue';

  import {currentCategoriesStore} from '../../components/workers/current-categories';

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
			async closeButtonClickHandler() {
				this.toggleMenuOpen();
			},
	    async iconClickHandler() {
				this.toggleMenuOpen();
      },
			async categoryItemClickHandler(categoryIndex) {},
      toggleMenuOpen() {
	      this.isMenuOpen = !this.isMenuOpen;
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
    display: flex;
    width: calc(100% - 10px);
    bottom: 0;
    left: 10px;
    transition: .4s;

    .is-active & {
      opacity: 0;
      left: -100vw;
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
    display: flex;
    width: calc(100% - 52px);
    overflow: hidden;
  }
</style>