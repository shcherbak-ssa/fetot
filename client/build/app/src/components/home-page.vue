<template>
  <div class="home-page">
    <home-page-header :modes="options.store.modes"></home-page-header>
    <home-page-content></home-page-content>
    <fetot-minimize-button
            text="close home page"
            @fetot-minimize-button-click="minimizeButtonClickHandler"
    />
  </div>
</template>

<script>
  import homePageHeader from './home-page-components/home-page-header.vue';
  import homePageContent from './home-page-components/home-page-content.vue';

  import fetotMinimizeButton from 'fetot-components/fetot-minimize-button.vue';

	export default {
		name: 'home-page',
    props: {
			options: Object
    },
    components: {
			'home-page-header': homePageHeader,
      'home-page-content': homePageContent,
      'fetot-minimize-button': fetotMinimizeButton
    },
    methods: {
	    minimizeButtonClickHandler() {
	    	this.options.events.fetot.emit('fetot-open-home-page', false)
      }
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

    .fetot-minimize-button {
      bottom: 64px;
      @include position-gor-center;
    }
  }
</style>