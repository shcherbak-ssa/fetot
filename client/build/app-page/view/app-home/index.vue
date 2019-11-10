<template>
  <div class="app-home" :class="states"></div>
</template>

<script>
	export default {
		name: 'app-home',
    data() {
			return {
				states: {
					'is-active': true,
          'is-first-time': true
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-home {
    padding: 64px 128px;
    position: absolute;
    top: -105%;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 95%;
    transition: .4s;
    @include static-shadow;
    @include box-sizing;

    &.is-active {
      top: 0;
    }
    &.is-first-time {
      height: 100%;

      .close-btn {
        display: none;
      }
    }
  }
</style>