<template>
  <div class="workspace-message">
    <div class="txt">
      Please, check your e-mail address
      <a class="email" href="https://mail.google.com" target="_blank">{{ email }}</a>
      to continue registration
    </div>
    <fetot-input :input="input" @input-input="inputInputHandler"/>
  </div>
</template>

<script>
	import fetotInput from 'fetot-components/form/fetot-input.vue';
	import eventsHandlers from 'fetot-js-modules/events-handlers';

	export default {
		name: 'workspace-message',
    props: {
			email: String,
      input: Object
		},
    components: {
			'fetot-input': fetotInput
    },
    methods: {
			inputInputHandler() {
				eventsHandlers.emit('confirm-email-worker')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-message {
    text-align: center;
    font-size: 18px;
    padding: 25px 0 2px;
    font-family: sans-serif;
    @include box-sizing;
    @include full-sizes;
    @include flex-center-column;

    .email {
      color: $fetot-azure;

      &:hover {
        text-decoration: underline;
      }
    }
    .txt {
      color: $fetot-blue;
      margin-bottom: 20px;
    }
  }
</style>
