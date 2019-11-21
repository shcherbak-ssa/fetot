<template>
  <div class="block-footer w100 faic">
    <slot name="states">
      <div></div>
    </slot>
    <slot name="date">
      <div></div>
    </slot>
  </div>
</template>

<script>
	export default {
		name: 'block-footer'
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .block-footer {
    height: 20px;
    justify-content: space-between;
    align-items: center;
  }
</style>