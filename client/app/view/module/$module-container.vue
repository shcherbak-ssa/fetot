<template>
  <div class="module-container pa bs flex" :class="setState">

    <slot name="module-frame"></slot>

    <div class="blocks pr">
      <slot name="module-blocks"></slot>
    </div>

    <create-block-button
            :has-frame="hasFrame"
            @create-block-event="$emit('create-block-event')">
    </create-block-button>

    <change-blocks-size-type-buttons
            :has-frame="hasFrame"
            :size-type="sizeType"
            @change-size-type-event="changeSizeTypeEventHandler">
    </change-blocks-size-type-buttons>
  </div>
</template>

<script>
  import createBlockButton from './create-block-button.vue';
  import changeBlocksSizeTypeButtons from './change-blocks-size-type-buttons.vue';

	export default {
		name: 'module-container',
    props: {
			sizeType: Number,
	    hasFrame: Boolean
    },
    components: {
	    'create-block-button': createBlockButton,
      'change-blocks-size-type-buttons': changeBlocksSizeTypeButtons,
    },
    methods: {
	    changeSizeTypeEventHandler(sizeType) {
	    	if( this.sizeType === sizeType ) return;
	    	this.$emit('change-size-type-event', sizeType)
      }
    },
    computed: {
			setState() {
				return { 'has-frame': this.hasFrame }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .module-container {
    padding: 140px 0 0;
    width: calc(100% + 17px);
    height: 100%;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;

    .blocks {
      transition: .4s;
      width: 1128px;
      margin: 0 auto;

      @media screen and (max-width: 1279px) {
        width: 360px;
      }
      @media screen and (max-width: 419px) {
        width: 280px;
      }
    }
    &.has-frame .blocks {
      width: 360px;
      margin: 0;
      position: absolute;
      top: 140px;
      right: calc((100vw - 1128px) / 2);

      @media screen and (max-width: 1279px) {
        right: -350px;
      }
    }
  }
</style>