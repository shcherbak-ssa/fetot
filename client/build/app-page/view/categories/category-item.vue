<template>
  <div class="category-item pr fc cp" :class="setActive" @click="$emit('select-category-event', item.index)">
    {{ item.name.toUpperCase() }}
  </div>
</template>

<script>
	import {currentModuleStore} from '../../components/workers/current-module';

	export default {
		name: 'category-item',
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

  .category-item {
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium';
    width: 120px;
    height: 38px;
    transition: .4s;
    flex-shrink: 0;

    &:hover {
      background: $fetot-dark-blue-20;
    }
    &::after {
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      transition: .2s;
      @include psevdo-element;
    }
    &.is-active {
      background: $fetot-dark-blue-10;
      font-family: 'roboto-bold', sans-serif;

      &::after {
        background: $fetot-dark-blue;
      }
    }
    &::after {
      transition: .4s;
    }
    &::before {
      top: 0;
      left: 0;
      @include full-sizes;
      @include psevdo-element;
    }
  }
</style>