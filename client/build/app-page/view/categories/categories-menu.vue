<template>
  <div class="categories-menu br6px bs pa hover_hov-sh">
    <div class="content pr">
      <!-- default item -->
      <categories-menu-item :isDefault="true"></categories-menu-item>

      <!-- categories -->
      <categories-menu-item v-for="(name, index) in getCategories"
                            :key="index" :item="{name, index}"
                            @select-category-event="selectCategoryHandler"
                            @rename-category-event="renameCategoryHandler"
                            @delete-category-event="deleteCategoryHandler">
      </categories-menu-item>

      <!-- name worker -->
      <categories-name-worker v-if="nameWorkerActive" :item="nameWorkerItem" :top="nameWorkerTop"
                              @name-worker-blur="nameWorkerBlurHandler">
      </categories-name-worker>
    </div>

    <div class="add-category-button cp fc pr bfr-click" @click="addCategoryButtonClickHandler">
      <fetot-icon icon="&#xE809;"></fetot-icon>
    </div>

    <fetot-close-button @fetot-close-button-click="$emit('fetot-close-button-click')">close</fetot-close-button>
  </div>
</template>

<script>
	import fetotCloseButton from '$fetot-view/buttons/fetot-close-button.vue';
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue'

  import categoriesMenuItem from './categories-menu-item.vue';
	import categoriesNameWorker from './categories-name-worker.vue';

	import {currentCategoriesStore, currentCategoriesWorker} from '../../components/workers/current-categories';

	export default {
		name: 'categories-menu',
    data() {
			return {
				categories: [],
				nameWorkerActive: false,
        nameWorkerItem: {},
        nameWorkerTop: ''
      }
    },
		components: {
			'fetot-close-button': fetotCloseButton,
      'fetot-icon': fetotIcon,

      'categories-menu-item': categoriesMenuItem,
      'categories-name-worker': categoriesNameWorker
		},
    methods: {
	    addCategoryButtonClickHandler() {
	    	this.updateNameWorkerData();
      },

      /* name worker */
	    async nameWorkerBlurHandler({index, name}) {
	    	console.log('name-worker-blur', {index, name});
	    	this.nameWorkerActive = false;

	    	if( index === -1 ) {
	    		if( this.categories.includes(name) ) return ;
	    		return await currentCategoriesWorker.create(name);
		    }

	    	if( this.categories[index] === name ) return ;
	    	await currentCategoriesWorker.rename({index, name})
      },

      /* menu item */
	    selectCategoryHandler(index) {
	    	console.log('select-category', index)
      },
	    renameCategoryHandler(item) {
	    	const top = ((item.index + 1) * 42) + '';
	    	item.name = item.name[0].toUpperCase() + item.name.slice(1);

	    	this.updateNameWorkerData(item, top);
      },
	    async deleteCategoryHandler(name) {
	    	await currentCategoriesWorker.delete(name)
	    },

	    /* src */
      updateNameWorkerData(item = {index: -1, name: ''}, top = '') {
	      this.nameWorkerItem = item;
	      this.nameWorkerTop = top;
	      this.nameWorkerActive = true;
      }
    },
    computed: {
			getCategories() {
				this.categories = currentCategoriesStore.state.categories;
				return this.categories;
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .categories-menu {
    background: #fff;
    width: 280px;
    max-height: 360px;
    padding: 10px 0 54px;
    top: 46px;
    left: 0;
    transition: .4s;
    @include static-shadow;

    .content {
      width: 100%;
      height: calc(100% - 55px);
      overflow: hidden;
    }
    .add-category-button {
      color: $fetot-dark-blue;
      font-size: 24px;
      width: 100%;
      height: 42px;
      transition: .4s;
      margin-top: 13px;

      &:hover {
        background: $fetot-dark-blue-20;
      }
    }
  }
</style>