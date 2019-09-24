<template>
  <div class="fetot-icon">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'fetot-icon'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-icon {
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    transition: .2s;
    @include flex-center;
    @include sizes(32px, 32px);

    &:hover {
      @include hover-shadow;
    }
  }
</style>