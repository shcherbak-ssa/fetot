<template>
  <div class="categories-menu bg-fff br6px bs pa">
    <div class="content w100 pr">
      <!-- default item -->
      <categories-menu-item :isDefault="true"
                            @select-category-event="selectCategoryHandler">
      </categories-menu-item>

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

    <fetot-button @fetot-button-click="addCategoryButtonClickHandler">
      <fetot-icon icon="&#xE809;"></fetot-icon>
    </fetot-button>

    <fetot-close-button @fetot-close-button-click="closeMenuHandler">close</fetot-close-button>
  </div>
</template>

<script>
	import fetotButton from '$fetot-view/buttons/fetot-button.vue';
  import fetotCloseButton from '$fetot-view/buttons/fetot-close-button.vue';
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue'

  import categoriesMenuItem from './categories-menu-item.vue';
	import categoriesNameWorker from './categories-name-worker.vue';

	import {currentCategoriesStore, currentCategoriesWorker} from '../../components/workers/current-categories';
	import {currentModuleStore} from '../../components/workers/current-module';

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
			'fetot-button': fetotButton,
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
	    	this.nameWorkerActive = false;

	    	if( index === -1 ) {
	    		if( this.categories.includes(name) ) return ;
	    		return await currentCategoriesWorker.create(name);
		    }

	    	if( this.categories[index] === name ) return ;
	    	await currentCategoriesWorker.rename({index, name})
      },

      /* menu item handlers */
	    selectCategoryHandler(index) {
	    	this.$emit('select-category-event', index);
	    	this.closeMenuHandler();
      },
	    renameCategoryHandler({index, name}) {
	    	const top = ((index + 1) * 42) + '';
	    	name = name[0].toUpperCase() + name.slice(1);

	    	this.updateNameWorkerData({index, name}, top);
      },
	    async deleteCategoryHandler({index, name}) {
	    	if( currentModuleStore.state.actives.category === index )
			    this.$emit('select-category-event');

	    	await currentCategoriesWorker.delete(name);
	    },

	    /* src */
      updateNameWorkerData(item = {index: -1, name: ''}, top = '') {
	      this.nameWorkerItem = item;
	      this.nameWorkerTop = top;
	      this.nameWorkerActive = true;
      },
      closeMenuHandler() {
      	this.$emit('close-category-menu-event')
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
    width: 280px;
    padding: 10px 0 54px;
    top: 46px;
    left: 0;
    transition: .4s;
    overflow: hidden;
    @include hover-shadow;

    @media screen and (max-width: 1024px) {
      left: 10px;
    }

    .content {
      width: calc(100% + 17px);
      max-height: 200px;
      overflow-x: hidden;
      overflow-y: scroll;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
    .fetot-button {
      font-size: 24px;
      width: 240px;
      height: 36px;
      margin: 13px auto 0;
    }
  }
</style>