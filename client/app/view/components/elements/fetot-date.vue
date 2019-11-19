<template>
  <div class="fetot-date">{{ drawDate }}</div>
</template>

<script>
	export default {
		name: 'fetot-date',
    props: {
			date: Number
    },
    computed: {
			drawDate() {
				const date = new Date(this.date);
				return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-date {
    color: $fetot-dark-gray;
    font: 14px 'roboto-bold';
  }
</style>