<template>
  <div class="app-module pa bs">
    <add-button @add-block-event="addBlockHandler"></add-button>
    <div class="module-workspace pr w100 flex bs"></div>
  </div>
</template>

<script>
  import addButton from './add-button.vue';

	export default {
		name: 'app-module',
    components: {
			'add-button': addButton
    },
    methods: {
	    addBlockHandler() {
	    	alert('add-block-event')
      }
    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .app-module {
    padding: 148px 90px 42px;
    width: calc(100% + 24px);
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 419px) {
      padding: 24px 6.25% 0;
    }
  }
  .module-workspace {
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
</style>