<template>
  <div class="fetot-container">
    <component :is="changePageComponent"></component>
  </div>
</template>

<script>
	export default {
		name: 'fetot-container',
    date() {
	    return {
		    pageComponent: ''
      }
    },
    computed: {
			changePageComponent() {
				return this.pageComponent
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '../scss/src.scss';

  .fetot-container {
    background: #fff;
    position: relative;
    overflow: hidden;
    @include full-sizes;
  }
</style>