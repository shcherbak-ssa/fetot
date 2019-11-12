<template>
  <div class="categories pa">
    <fetot-icon-click icon="&#xF292;"></fetot-icon-click>
    <category :isDefault="true" @fetot-category-click="categoryClickHandler"></category>
    <category v-for="(name, index) in categories" :key="index"
              :item="{name, index}" @fetot-category-click="categoryClickHandler">
    </category>
  </div>
</template>

<script>
  import fetotIconClick from '$fetot-view/icons/fetot-icon-click.vue';
  import category from './category.vue';

  import {currentCategoriesStore} from '../../components/workers/current-categories';

	export default {
		name: 'categories',
    data() {
			return {
				categories: currentCategoriesStore.state.categories
      }
    },
    components: {
	    'fetot-icon-click': fetotIconClick,
			'category': category
		},
    methods: {
	    categoryClickHandler(categoryIndex) {
	    	console.log('categoryIndex', categoryIndex);
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
  .fetot-icon-click {
    /*font-size: 18px;*/
    color: $fetot-dark-blue;
    margin-right: 10px;
  }
</style>