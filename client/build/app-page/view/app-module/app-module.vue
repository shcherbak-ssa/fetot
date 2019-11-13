<template>
  <div class="app-module pa bs">
    <add-button @add-block-event="addBlockHandler"></add-button>
    <div class="content flex full pr">
      <block-component :block="{title: 'I am block'}"></block-component>
      <block-component :block="{title: 'I am block'}"></block-component>
      <block-component :block="{title: 'I am block'}"></block-component>
    </div>
  </div>
</template>

<script>
  import addButton from './add-button.vue';
  import blockComponent from '../block/block-component.vue';

	export default {
		name: 'app-module',
    components: {
			'add-button': addButton,
      'block-component': blockComponent
    },
    methods: {
	    addBlockHandler() {
	    	alert('add-block-event')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-module {
    width: 100%;
    height: calc(100% - 106px);
    padding: 42px 90px 0;
    left: 0;
    bottom: 0;
    z-index: 1;

    @media screen and (max-width: 419px) {
      padding: 24px 6.25% 0;
    }
  }
  .content {
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
</style>