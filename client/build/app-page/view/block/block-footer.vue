<template>
  <div class="block-footer w100 flex">
    <div class="info"></div>
    <div class="date">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'block-footer'
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .block-footer {
    color: $fetot-dark-gray;
    font: 16px 'roboto-medium';
    margin-top: 10px;
    height: 20px;
    justify-content: space-between;
    align-items: center;
  }
</style>