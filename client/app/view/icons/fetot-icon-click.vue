<template>
  <div class="fetot-icon-click br50 cp hover_st-sh fc" @click="$emit('fetot-icon-click')">
    <fetot-icon :icon="icon"></fetot-icon>
  </div>
</template>

<script>
  import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-icon-click',
    props: { icon: String },
    components: { 'fetot-icon': fetotIcon }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-icon-click {
    background: #fff;
    width: 42px;
    height: 42px;
    transition: .4s;
  }
</style>