<template>
  <div class="module-container pa bs flex" :class="setState">
    <div class="frame" v-if="hasFrame">
      <frame-container :options="frameOptions" @close-frame-event="$emit('close-frame-event')">
        <template v-slot:frame-content>
          <slot name="module-frame-content"></slot>
        </template>
      </frame-container>
    </div>
    <div class="blocks">
      <slot name="module-blocks"></slot>
    </div>

    <create-block-button @create-block-event="$emit('create-block-event')"></create-block-button>
  </div>
</template>

<script>
  import frameContainer from '../frame/frame-container.vue';
  import createBlockButton from './create-block-button.vue';

	export default {
		name: 'module-container',
    props: {
	    hasFrame: Boolean,
      frameOptions: Object
    },
    components: {
			'frame-container': frameContainer,
	    'create-block-button': createBlockButton,
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
    padding: 148px 128px 0;
    width: calc(100% + 17px);
    height: 100%;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 419px) {
      padding: 148px 6.25% 0;
    }

    .blocks {
      width: 100%;
    }

    &.has-frame {
      justify-content: space-around;

      .frame {
        width: 60%;
      }
      .blocks {
        width: 30%;
      }
    }
  }
</style>