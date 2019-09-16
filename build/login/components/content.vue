<template>
  <div class="content">
    <div class="form" v-if="/(sing-in|login)/.test(currentContent)">
      <fetot-button type="text" :value="setButtonValue"/>
    </div>
    <check-email-message v-else mail="k"/>
  </div>
</template>
<script>
  import fetotButton from 'fetot-components/fetot-button/fetot-button.vue';
  import checkEmailMessage from './message.vue';

	export default {
		name: 'login-content',
		props: {
			currentContent: String,
      inputs: Object
		},
		components: {
			'fetot-button': fetotButton,
			'check-email-message': checkEmailMessage
    },
		methods: {},
    computed: {
			setButtonValue() {
				return this.currentContent === 'sing-in' ? 'Continue' : 'Enter'
      }
    }
	}
</script>
<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .content {
    width: 100%;
    @include flex-center-column;

    .form {
      margin: 30px 0;
    }
  }
</style>