<template>
  <div class="fetot-button" @click="$emit('button-click')">
    <slot></slot>
  </div>
</template>

<script>
  export default {
		name: 'fetot-button'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-button {
    background: $fetot-blue;
    color: $fetot-light-gray;
    cursor: pointer;
    width: 300px;
    height: 42px;
    transition: .4s;
    user-select: none;
    @include flex-center;
    @include static-shadow;
    @include border-radius-3;

    &:hover {
      background: $fetot-dark-blue;
      @include hover-shadow;
    }
    &:active {
      box-shadow: none;
    }
  }
</style>