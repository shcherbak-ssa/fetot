<template>
  <div class="block-container pa bs br6px bg-fff hover_hov-sh"
       :class="currentSize"
       :style="setCurrentPosition"
       ref="currentBlock">

    <block-header @open-menu-event="$emit('open-menu-event')">
      {{ title }}
    </block-header>

    <menu-container v-if="isMenuOpen" @close-menu-event="$emit('close-menu-event')">
      <template v-slot:menu-title>{{ title }}</template>

      <template v-slot:menu-items>
        <slot name="block-menu-items"></slot>
      </template>
    </menu-container>

    <div class="workspace w100">
<!--      <block-status-line></block-status-line>-->

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
</template>

<script>
  import blockHeader from './block-header.vue';
  // import blockStatusLine from './block-status-line.vue';
  import blockFooter from './block-footer.vue';

	export default {
		name: 'block-container',
    data() {
			return {
				isMounted: false,
				currentPosition: {},
				textState: { 'is-overflow': false },
      }
    },
    props: {
			title: String,
      isMenuOpen: Boolean,
			sizeType: Number,
      position: Object
    },
    components: {
			'block-header': blockHeader,
      // 'block-status-line': blockStatusLine,
      'block-footer': blockFooter
    },
    methods: {
			updateTextState() {
				const {content} = this.$refs;
				this.textState['is-overflow'] =
					content.offsetHeight < content.children[0].offsetHeight
      },

      /* position */
    },
    watch: {
			position() {
				this.$forceUpdate();
      }
    },
    computed: {
	    currentSize() {
	    	if( this.isMenuOpen ) return 'is-menu-open';
	    	return ['is-normal', 'is-small', 'is-list', 'is-flexible',][this.sizeType];
      },
	    setCurrentPosition() {
	    	if( !this.isMounted ) return {};

		    const {children} = this.$refs.currentBlock.parentElement;

		    let overBlockHeight = 0;
		    let {left, index, rawIndex} = this.position;

		    if( left === undefined ) {
			    left = 0;

			    if( index !== 0 ) {
				    overBlockHeight = (children[index - 1].offsetHeight + 24) * index;
			    }
		    } else {
			    if( index >= 3 ) {
				    overBlockHeight = (children[index - 3].offsetHeight + 24) * rawIndex(index);
			    }
		    }

		    return { left, top: overBlockHeight + 'px' };
	    },
    },
    mounted() {
	    this.updateTextState();
	    this.$nextTick(() => {
	    	this.isMounted = true;
      })
    },
    updated() {
			this.updateTextState()
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .block-container {
    padding: 24px;
    margin-bottom: 24px;
    width: 360px;
    transition: .4s;

    &.is-normal {
      height: 222px;

      .data {
        height: 102px;
      }
    }
    &.is-small {
      height: 122px;

      .data {
        height: 0;
        opacity: 0;
        margin: 0;
      }
    }
    &.is-flexible {
      height: auto;
      max-height: 400px;
    }
    &.is-list {
      height: 80px;

      .workspace {
        height: 0;
        opacity: 0;
        margin: 0;
      }
    }
    &.is-menu-open {
      height: 300px;

      .data {
        opacity: 0
      }
      .menu-container {
        box-shadow: none;
      }
    }

    @media screen and (max-width: 1279px) {
      width: 100%;
    }
  }
  .workspace {
    transition: .4s;
    overflow: hidden;
  }
  .data {
    color: $fetot-dark-gray;
    font: 16px 'roboto-medium';
    overflow: hidden;
    transition: .4s;
    margin-bottom: 10px;

    &.is-overflow::after {
      background-image: linear-gradient(to top, #fff, transparent);
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 24px;
      @include psevdo-element;
    }
  }
</style>