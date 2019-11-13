<template>
  <div class="categories-menu-item bs pr" :class="setActive"
       @click="$emit('select-category-event', item.index)">

    <div class="content cp pr bfr-click full faic">
      <fetot-icon icon="&#xF292;"></fetot-icon>
      <div class="name">{{ item.name ? item.name[0].toUpperCase() + item.name.slice(1) : '' }}</div>
    </div>

    <div class="controllers pa" v-if="!isDefault">
      <fetot-icon-click icon="&#xE811;" @fetot-icon-click="renameCategoryEventHandler"/>
      <fetot-icon-click icon="&#xF1F8;" @fetot-icon-click="deleteCategoryEventHandler"/>
    </div>
  </div>
</template>

<script>
  import fetotIcon from '$fetot-view/icons/fetot-icon.vue';
  import fetotIconClick from '$fetot-view/icons/fetot-icon-click.vue';

  import {currentModuleStore} from '../../components/workers/current-module';

	export default {
		name: 'categories-menu-item',
    props: {
			item: {
				type: Object,
        default: () => ({ index: -1, name: 'all' })
      },
      isDefault: {
				type: Boolean,
        default: false
      }
    },
    components: {
			'fetot-icon': fetotIcon,
      'fetot-icon-click': fetotIconClick
    },
    methods: {
			renameCategoryEventHandler() {
				this.$emit('rename-category-event', this.item)
      },
	    deleteCategoryEventHandler() {
		    this.$emit('delete-category-event', this.item)
	    }
    },
    computed: {
			setActive() {
				const activeCategory = currentModuleStore.state.actives.category;
				return { 'is-active': activeCategory === this.item.index }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .categories-menu-item {
    color: $fetot-dark-blue;
    font: 20px 'roboto-medium';
    width: 100%;
    height: 42px;
    padding-left: 42px;

    &:hover {
      background: $fetot-dark-blue-10;

      .controllers {
        opacity: 1;
      }
    }
    &.is-active {
      background: $fetot-dark-blue-20;
      font-family: 'roboto-bold', sans-serif;
    }
  }
  .fetot-icon {
    margin-right: 10px;
  }
  .controllers {
    height: 100%;
    right: 5px;
    top: 0;
    opacity: 0;
    transition: .4s;
    z-index: 10;
    @include flex-align-items-center;
  }
  .fetot-icon-click {
    color: $fetot-dark-gray;
    width: 36px;
    height: 36px;
  }
</style>