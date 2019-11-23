<template>
  <div class="frame-container bs bg-fff hover_hov-sh" :class="setState">
    <frame-header
            :header="options.header"
            @close-event="$emit('close-frame-event')">
    </frame-header>
    <div class="container pr">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import frameHeader from './frame-header.vue';

	export default {
		name: 'frame-container',
    props: {
			frameState: Number,
			options: Object
    },
    components: {
			'frame-header': frameHeader
    },
    computed: {
	    setState() {
	    	return ['is-default', 'is-full-screen'][this.frameState]
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .frame-container {
    position: fixed;
    border-radius: 6px 6px 0 0;
    transition: .4s;
    overflow: hidden;
    @include static-shadow;

    &.is-default {
      top: 140px;
      left: calc((100vw - 1128px) / 2);
      width: 720px;
      height: calc(100% - 140px);
    }
    &.is-full-screen {
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;
    }

    .container {
      height: calc(100% - 68px);
      width: calc(100% + 17px);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
</style>