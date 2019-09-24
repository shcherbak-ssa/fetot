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

  import fetotEventsHandlers from 'fetot-js-modules/fetot-events-handlers';

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
	    	fetotEventsHandlers.emit('button-click')
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