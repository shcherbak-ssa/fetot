<template>
  <div class="login-page">
<!--    <transition name="change-module" mode="out-in" appear>-->
<!--      <workspace :key="wtf"></workspace>-->
<!--    </transition>-->
  </div>
</template>

<script>
  // import workspace from './workspace.vue';

	export default {
		name: 'login-page',
    // components: { workspace },
    // data() {
		// 	return {
		// 		wtf: ''
    //   }
    // }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-scss';

  .login-page {
    position: relative;
    @include full-sizes;
  }

  .change-module {
    &-enter, &-leave-to {
      opacity: 0;

      .fetot-title {
        transform: translateY(300%);
      }
      .fetot-link {
        transform: translateY(-400%);
      }
    }
    &-enter-to, &-leave {
      opacity: 1;

      .fetot-title, .fetot-link {
        transform: translateY(0);
      }
    }
  }
</style>