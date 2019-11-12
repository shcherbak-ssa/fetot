<template>
  <div class="category-item pr fc cp" @click="clickHandler">
    {{ item.name.toUpperCase() }}
  </div>
</template>

<script>
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
    methods: {
			clickHandler() {
				this.$emit('fetot-category-item-click', this.item.index)
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
    height: 42px;
    transition: .4s;

    &:hover {
      background: $fetot-dark-blue-20;
    }
    &.is-active {
      font-family: 'roboto-bold', sans-serif;

      &::after {
        animation: border-animation .4s forwards;
        width: 100%;
        bottom: 0;
        left: 0;
        @include psevdo-element;
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
  @keyframes border-animation {
    from {
      background: $fetot-dark-blue-20;
      height: 100%;
    }
    to {
      background: $fetot-dark-blue;
      height: 3px;
    }
  }
</style>