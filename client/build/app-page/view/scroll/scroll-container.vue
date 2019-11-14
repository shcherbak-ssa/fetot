<template>
  <div class="scroll-container pr full" ref="container" @mousedown="mousedownHandler">
    <div class="content pa" :class="contentClass" ref="content" :style="{top:0, left:0}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	import scrollWorker from '../../components/workers/scroll-worker';

	export default {
		name: 'scroll-container',
    props: {
			scrollType: String,
			contentClass: String
    },
    methods: {
	    async mousedownHandler(event) {
	    	if( event.which !== 1 ) return;
	    	await scrollWorker.runMouseScroll(this.scrollType, this.$refs, event);
      }
    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';
</style>