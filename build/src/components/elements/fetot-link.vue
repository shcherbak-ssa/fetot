<template>
  <div class="fetot-link" :style="{ 'font-size': this.fontSize }" @click="$emit('link-click')">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'fetot-link',
    props: {
			fontSize: String
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-link {
    color: $fetot-azure;
    cursor: pointer;
    font-weight: lighter;
    font-family: sans-serif;
    transition: .2s;

    &:hover {
      text-decoration: underline;
    }
  }
</style>