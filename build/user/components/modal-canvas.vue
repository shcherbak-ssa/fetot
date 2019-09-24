<template>
  <div class="modal-canvas">
    <canvas id="user-avatar" class="canvas" width="300" height="400"></canvas>
  </div>
</template>

<script>
	export default {
		name: 'modal-canvas'
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .modal-canvas {
    width: 100%;
    height: 400px;
    position: relative;

    .canvas {
      @include position-center;
    }
  }
</style>