<template>
  <div class="home-page">
    <home-page-header :modes="options.store.modes"></home-page-header>
  </div>
</template>

<script>
  import homePageHeader from './home-page-components/home-page-header.vue';

	export default {
		name: 'home-page',
    props: {
			options: Object
    },
    components: {
			'home-page-header': homePageHeader
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .home-page {
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s;
    z-index: 10;
    padding: 64px 128px;
    @include full-sizes;
    @include box-sizing;
  }
</style>