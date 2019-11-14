<template>
  <div class="common-block-component bs br6px bg-fff hover_hov-sh">
    <div class="content flex pr full">
      <block-header></block-header>

      <block-status-line></block-status-line>

      <component :is="setBlocksContent"></component>

      <block-footer></block-footer>
    </div>
  </div>
</template>

<script>
  import blockHeader from './block-header.vue';
  import blockStatusLine from './block-status-line.vue';
  import blockFooter from './block-footer.vue';

	export default {
		name: 'common-block-component',
    props: {
			block_id: String
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

<style lang="scss" scoped>
  @import '$fetot-scss';

  .common-block-component {
    flex-shrink: 0;
    padding: 24px;
    margin-bottom: 24px;
    width: 360px;
    height: 222px;
    transition: .4s;
    @include static-shadow;

    @media screen and (max-width: 1024px) {
      padding: 16px;
    }
    @media screen and (max-width: 392px) {
      width: 100%;
    }
  }
  .content {
    flex-direction: column;
  }
</style>