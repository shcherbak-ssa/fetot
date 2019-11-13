<template>
  <div class="block-footer flex pa">
    <div class="info"></div>
    <div class="date">{{ parseBlockDate }}</div>
  </div>
</template>

<script>
	export default {
		name: 'block-footer',
    computed: {
			parseBlockDate() {
				const date = new Date(Date.now());
				return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
      }
    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .block-footer {
    background: $fetot-light-gray;
    color: $fetot-dark-gray;
    font-size: 18px;
    width: 100%;
    height: 24px;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
  }
</style>