<template>
  <div class="fetot-categories-item" @click="clickHandler">
    {{ item.name }}
  </div>
</template>

<script>
	export default {
		name: 'fetot-categories-item',
    props: {
			item: Object
    },
    methods: {
			clickHandler(event) {
				this.$emit('fetot-categories-item-click', item.id)
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-categories-item {
    color: $fetot-blue;
    font: 18px 'roboto-reqular';
    width: 120px;
    height: 24px;
    position: relative;
    @include flex-center;

    &:hover, .is-active {
      color: $fetot-dark-blue;
    }
    &:hover {
      background: $fetot-dark-blue-20;
    }
    &.is-active {
      font-family: 'roboto-bold', sans-serif;

      &::after {
        width: 100%;
        bottom: 0;
        left: 0;
        @include psevdo-element;
      }
    }
  }
  @keyframes border-animation {
    from {
      background: $fetot-dark-blue-20;
      height: 100%;
    }
    to {
      background: $fetot-dark-blue;
      height: 4px;
    }
  }
</style>