<template>
  <div class="message">
    <div class="mail">{{ mail }}</div>
    <div class="text">Check your e-mail address to continue registration</div>
  </div>
</template>

<script>
	export default {
		name: 'check-email-message',
    props: { mail: String }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .message {
    padding: 25px 0 2px;
    font-family: sans-serif;
    @include box-sizing;
    @include full-sizes;
    @include flex-center-column;

    .mail {
      color: $fetot-dark-gray;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .text {
      color: $fetot-blue;
      font-size: 24px;
      text-align: center;
    }
  }
</style>
