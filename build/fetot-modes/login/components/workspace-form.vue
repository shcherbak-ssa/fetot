<template>
  <div class="workspace-form" :class="changeMode">
    <fetot-input :input="inputs.email"/>
    <fetot-input :input="inputs.password"/>
    <fetot-button @button-click="buttonClickHandler" type="text" :value="setButtonValue"/>
  </div>
</template>

<script>
  import fetotInput from 'fetot-components/form/fetot-input.vue';
  import fetotButton from 'fetot-components/form/fetot-button.vue';

  import eventsHandlers from 'fetot-js-modules/events-handlers';

	export default {
		name: 'workspace-form',
		props: {
			mode: String,
      inputs: Object
		},
		components: {
			'fetot-input': fetotInput,
			'fetot-button': fetotButton
    },
		methods: {
			buttonClickHandler() {
				this.mode === 'sing-in' ? eventsHandlers.emit('sing-in-worker') : eventsHandlers.emit('login-worker');
			}
    },
		computed: {
			setButtonValue() {
				return this.mode === 'sing-in' ? 'Continue' : 'Enter'
			},
      changeMode() {
				return { 'is-login': this.mode === 'login' }
      }
		}
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-form {
    width: 100%;
    margin: 30px 0;
    transition: .4s;
    position: relative;
    z-index: 1;
    @include flex-center-column;

    .fetot-input:nth-child(2) {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    &.is-login {
      .fetot-input:nth-child(1) {
        margin-bottom: 102px;
      }
      .fetot-input:nth-child(2) {
        opacity: 1;
        top: 72px;
      }
    }
  }
</style>