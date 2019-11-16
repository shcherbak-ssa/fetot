<template>
  <div class="common-block flexible bs br6px bg-fff hover_hov-sh">
    <div class="border flex pr full">
      <block-header>{{ block.title }}</block-header>

      <block-status-line></block-status-line>

      <!--<component :is="setBlockContent"></component>-->
      <div class="content cp pr" :class="textState" ref="content" @click.stop="contentClickHandler">
        <div v-html="setBlockContent"></div>
      </div>

      <block-footer>
        <template v-slot:date>{{ setBlockDate }}</template>
      </block-footer>
    </div>
  </div>
</template>

<script>
  import blockHeader from './block-header.vue';
  import blockStatusLine from './block-status-line.vue';
  import blockFooter from './block-footer.vue';

  import blockViewWorker from '../../components/workers/block-view-worker';

	export default {
		name: 'common-block',
    data() {
			return {
				textState: {
					'text-overflow': false
        }
      }
    },
    props: {
			block: Object
    },
    components: {
			'block-header': blockHeader,
      'block-status-line': blockStatusLine,
      'block-footer': blockFooter
    },
    methods: {
	    contentClickHandler() {

      }
    },
    computed: {
	    setBlockContent() {
	    	return blockViewWorker.preparingContent(this.block.data.content);
      },
      setBlockDate() {
	    	return blockViewWorker.preparingDate(this.block.info.date)
      }
    },
    mounted() {
	    const {content} = this.$refs;

	    this.textState['text-overflow'] =
		    content.offsetHeight < content.children[0].offsetHeight
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .common-block {
    flex-shrink: 0;
    padding: 24px;
    margin-bottom: 24px;
    width: 360px;
    height: 222px;
    transition: .4s;
    @include static-shadow;

    &.flexible {
      height: auto;
      max-height: 400px;
    }
    .has-frame & {
      //height: 32px;
    }

    @media screen and (max-width: 1024px) {
      padding: 16px;
    }
    @media screen and (max-width: 392px) {
      width: 100%;
    }
  }
  .border {
    flex-direction: column;
  }
  .content {
    color: $fetot-dark-gray;
    font: 16px 'roboto-medium';
    flex-grow: 1;
    overflow: hidden;

    &.text-overflow::after {
      background-image: linear-gradient(to top, #fff, transparent);
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 24px;
      @include psevdo-element;
    }

    .has-frame & {
      display: none;
    }
  }
</style>