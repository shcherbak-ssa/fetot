<template>
  <div class="block-component bs br6px bg-fff hover_hov-sh">
    <div class="content pr full">
      <block-header>{{ block.title }}</block-header>

      <block-status-line></block-status-line>

      <div class="block-content pa w100">
        <component :is="setBlocksContent"></component>
      </div>

      <block-footer></block-footer>
    </div>
  </div>
</template>

<script>
  import blockHeader from './block-header.vue';
  import blockStatusLine from './block-status-line.vue';
  import blockFooter from './block-footer.vue';

	export default {
		name: 'block-component',
    props: {
			block: Object
    },
    components: {
			'block-header': blockHeader,
      'block-status-line': blockStatusLine,
      'block-footer': blockFooter
    },
    computed: {
	    setBlocksContent() {
	    	return '';
      }
    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .block-component {
    flex-shrink: 0;
    padding: 24px;
    margin-bottom: 24px;
    width: 360px;
    height: 300px;
    transition: .4s;
    @include static-shadow;

    &:hover {
      .block-header .fetot-icon-click {
        opacity: 1;
      }
    }

    @media screen and (max-width: 1024px) {
      padding: 20px;
      width: 360px;
      height: 280px;
    }
    @media screen and (max-width: 460px) {
      width: 100%;
    }
  }
  .block-content {
    background: $fetot-light-gray;
    height: calc(100% - 94px);
    left: 0;
    top: 60px;
  }
</style>