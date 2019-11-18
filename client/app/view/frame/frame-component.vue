<template>
  <div class="frame-component bs w100 bg-fff hover_hov-sh">
    <frame-header :title="options.title"></frame-header>
    <div class="content w100"></div>
  </div>
</template>

<script>
  import frameHeader from './frame-header.vue';

	export default {
		name: 'frame-component',
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

  .frame-component {
    border-radius: 6px 6px 0 0;
    height: 100%;
    transition: .4s;
    @include static-shadow;
  }
</style>