<template>
  <div class="frame-container bs w100 bg-fff hover_hov-sh">
    <frame-header :header="options.header"
                  @close-event="$emit('close-frame-event')">
    </frame-header>
    <div class="content w100">
      <slot name="frame-content"></slot>
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
    height: 100%;
    transition: .4s;
    @include static-shadow;

    /*.content {*/
    /*  overflow-y: scroll;*/
    /*  overflow-x: hidden;*/
    /*}*/
  }
</style>