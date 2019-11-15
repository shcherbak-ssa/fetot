<template>
  <div class="app-module pa bs">
    <add-button @add-block-event="addBlockHandler"></add-button>
    <app-module-workspace></app-module-workspace>
  </div>
</template>

<script>
  import addButton from './add-button.vue';
  import appModuleWorkspace from './app-module-workspace.vue';

	export default {
		name: 'app-module',
    components: {
			'add-button': addButton,
      'app-module-workspace': appModuleWorkspace
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
</style>