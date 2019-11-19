<template>
  <div class="fetot-button br3px cp fc pr bfr-click"
       :style="setButtonSize"
       @click.stop="$emit('fetot-button-click')">
    <slot></slot>
  </div>
</template>

<script>
  export default {
  	name: 'fetot-button',
    props: {
  		size: Number
    },
    computed: {
  		setButtonSize() {
  			return { width: `${this.size}px` };
      }
    }
  }
</script>

<style lang="scss">
  @import '$fetot-scss';

  .fetot-button {
    background: $fetot-light-gray;
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium', sans-serif;
    height: 42px;
    transition: .4s;
    user-select: none;
    @include static-shadow;

    &:hover {
      background: $fetot-dark-blue;
      color: $fetot-light-gray;
    }
    &:active {
      box-shadow: none;
    }
  }
</style>