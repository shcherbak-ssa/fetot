<template>
  <div class="workspace">
    <fetot-title>{{ title }}</fetot-title>
    <div class="content" :class="showMessage">
      <workspace-form :inputs="inputs" :mode="mode"/>
      <div class="message">
        <workspace-message :email="inputs.email.value" :input="inputs['confirm-email']"/>
      </div>
    </div>
    <fetot-link fontSize="14px" @link-click="linkClickHandler">{{ link }}</fetot-link>
  </div>
</template>

<script>
  import fetotTitle from 'fetot-components/elements/fetot-title.vue';
  import fetotLink from 'fetot-components/elements/fetot-link.vue';

  import workspaceMessage from './workspace-message.vue';
	import workspaceForm from './workspace-form.vue';

	import eventsHandlers from 'fetot-js-modules/events-handlers';

	export default {
		name: 'workspace',
    props: {
			mode: String,
      title: String,
      link: String,
      inputs: Object
    },
		components: {
			'fetot-title': fetotTitle,
      'fetot-link': fetotLink,
			'workspace-form': workspaceForm,
      'workspace-message': workspaceMessage
		},
		methods: {
			linkClickHandler() {
				eventsHandlers.emit('change-mode');
      }
		},
    computed: {
	    showMessage() {
		    return { 'show-message': this.mode === 'check-email' }
	    }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace {
    width: 510px;
    @include flex-center-column;
    @include workspace-component;
  }
  .content {
    position: relative;
  }
  .message {
    transition: .4s;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    @include full-sizes;
  }
  .content.show-message {
    .workspace-form {
      opacity: 0;
    }
    .message {
      opacity: 1;
      transition: .4s .2s;
      z-index: 2;
    }
  }

  .change-mode {
    &-enter-active, &-leave-active {
      transition: opacity .2s;
    }
    &-enter, &-leave-to {
      opacity: 0;
    }
    &-enter {
      transform: translateX(-50%);
    }
    &-leave-to {
      transform: translateX(50%);
    }
  }
</style>