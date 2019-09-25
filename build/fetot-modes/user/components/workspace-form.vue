<template>
  <div class="workspace-form">
    <fetot-input :input="inputs.fullname"/>
    <fetot-input :input="inputs.password"/>
    <fetot-button type="text" value="Confirm" @button-click="buttonClickHandler"/>
  </div>
</template>

<script>
  import fetotInput from 'fetot-components/form/fetot-input.vue';
  import fetotButton from 'fetot-components/form/fetot-button.vue';

  import eventsHandlers from 'fetot-js-modules/events-handlers';

	export default {
		name: 'workspace-form',
    props: {
			inputs: Object
    },
    components: {
			'fetot-input': fetotInput,
      'fetot-button': fetotButton
    },
    methods: {
	    buttonClickHandler() {
		    eventsHandlers.emit('button-click')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-form {
    @include flex-center-column;
  }
</style>