<template>
  <div class="fetot-button" @click="$emit('button-click')">
    <icon v-if="type === 'icon'" :icon="value"/>
    <div class="txt" v-else>{{ value }}</div>
  </div>
</template>

<script>
	import icon from 'fetot-components/icon.vue'

  export default {
		name: 'fetot-button',
		props: {
			type: String,
			value: String
		},
    components: { icon }
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

    .txt {
      font: 18px sans-serif;
    }
    &:hover {
      background: $fetot-dark-blue;
      @include hover-shadow;
    }
    &:active {
      box-shadow: none;
    }
  }
</style>