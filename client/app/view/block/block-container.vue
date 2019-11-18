<template>
  <div class="block-container flex-col pr flexible bs br6px bg-fff hover_hov-sh">
    <block-header @menu-event="$emit('menu-event')">
      <slot name="block-title"></slot>
    </block-header>

    <div class="workspace flex-col">
      <slot name="block-menu"></slot>

      <div class="content flex-col">
        <block-status-line></block-status-line>

        <div class="data cp pr" :class="textState" ref="content" @click.stop="$emit('block-content-click')">
          <slot name="block-content"></slot>
        </div>

        <block-footer>
          <template v-slot:states>
            <slot name="block-states"></slot>
          </template>
          <template v-slot:date>
            <slot name="block-date"></slot>
          </template>
        </block-footer>

      </div>
    </div>
  </div>
</template>

<script>
  import blockHeader from './block-header.vue';
  import blockStatusLine from './block-status-line.vue';
  import blockFooter from './block-footer.vue';

	export default {
		name: 'block-container',
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
    mounted() {
	    const {content} = this.$refs;

	    this.textState['is-overflow'] =
		    content.offsetHeight < content.children[0].offsetHeight
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .block-container {
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

    @media screen and (max-width: 1024px) {
      padding: 16px;
    }
    @media screen and (max-width: 392px) {
      width: 100%;
    }
  }
  .data {
    color: $fetot-dark-gray;
    font: 16px 'roboto-medium';
    flex-grow: 1;
    overflow: hidden;
  }
  .is-overflow::after {
    background-image: linear-gradient(to top, #fff, transparent);
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 24px;
    @include psevdo-element;
  }
</style>