<template>
  <div class="workspace-content">

  </div>
</template>

<script>
	import fetotInput from 'fetot-components/form/fetot-input.vue';
	import fetotButton from 'fetot-components/form/fetot-button.vue';

	export default {
		name: 'workspace-content',
    props: {
			content: Map
    },
    components: {
	    'fetot-input': fetotInput,
	    'fetot-button': fetotButton
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-content {
    background: #fff;
    padding: 36px;
    transition: .4s;
    width: 510px;
    @include box-sizing;
    @include border-radius-6;
    @include static-shadow;

    &:hover {
      @include hover-shadow;
    }
  }
</style>