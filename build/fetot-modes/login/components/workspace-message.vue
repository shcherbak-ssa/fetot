<template>
  <div class="workspace-message">
    <div class="email">{{ email }}</div>
    <div class="txt">Check your e-mail address to continue registration</div>
  </div>
</template>

<script>
	export default {
		name: 'workspace-message',
    props: { email: String }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-message {
    padding: 25px 0 2px;
    font-family: sans-serif;
    @include box-sizing;
    @include full-sizes;
    @include flex-center-column;

    .email {
      color: $fetot-dark-gray;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .txt {
      color: $fetot-blue;
      font-size: 24px;
      text-align: center;
    }
  }
</style>
