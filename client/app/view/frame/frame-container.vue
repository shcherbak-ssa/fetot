<template>
  <div class="frame-container bs full bg-fff hover_hov-sh">
    <frame-header :header="options.header"
                  @close-event="$emit('close-frame-event')">
    </frame-header>
    <div class="container full">
      <div class="content">
        <slot name="frame-content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import frameHeader from './frame-header.vue';

	export default {
		name: 'frame-container',
    props: {
			options: Object
    },
    components: {
			'frame-header': frameHeader
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .frame-container {
    border-radius: 6px 6px 0 0;
    transition: .4s;
    @include static-shadow;

    .container {
      /*overflow: hidden;*/

      .content {
        height: 100%;
        width: calc(100% + 17px);
        overflow-y: scroll;
        overflow-x: hidden;
      }
    }
  }
</style>