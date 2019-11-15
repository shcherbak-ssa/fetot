<template>
  <div class="block-footer w100 flex">
    <div class="states">
      <slot name="states"></slot>
    </div>
    <div class="date">
      <slot name="date"></slot>
    </div>
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
    color: $fetot-dark-gray;
    font: 14px 'roboto-bold';
    margin-top: 10px;
    height: 20px;
    justify-content: space-between;
    align-items: center;

    .has-frame & {
      display: none;
    }
  }
</style>