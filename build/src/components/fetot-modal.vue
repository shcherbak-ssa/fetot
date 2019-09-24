<template>
  <div class="fetot-modal" :class="states" @click="modalClickHandler">
    <div class="modal">
      <div class="modal-header">
        <fetot-title><slot name="modal-title"></slot></fetot-title>
        <fetot-icon-click @icon-click="closeModalHandler">x</fetot-icon-click>
      </div>
      <slot name="modal-body"></slot>
      <slot name="modal-footer"></slot>
    </div>
  </div>
</template>

<script>
  import fetotTitle from './elements/fetot-title.vue';
  import fetotIconClick from './icons/fetot-icon-click.vue';

  import fetotEventsHandlers from '../modules/fetot-events-handlers';

	export default {
		name: 'fetot-modal',
    props: {

    },
    data() {
			return {
				states: {
					'is-open': false
        }
      }
    },
    components: {
			'fetot-title': fetotTitle,
			'fetot-icon-click': fetotIconClick
    },
    methods: {
			openModalHandler() {
				this.states['is-open'] = true;
      },
      closeModalHandler() {
				this.states['is-open'] = false;
      },
			modalClickHandler({target}) {
				let targetClassList = target.classList;

				if( targetClassList.contains('fetot-modal') ) this.closeModalHandler();
      }
    },
    created() {
			let eventsHandlers = { 'open-modal': this.openModalHandler };
			fetotEventsHandlers.add(eventsHandlers);
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-modal {
    background: $fetot-dark-gray-60;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    @include full-sizes;

    .modal {
      width: 480px;
      @include position-center;
      @include workspace-component;

      &-header {
        width: 100%;
        height: 42px;
        margin-bottom: 18px;
        position: relative;
        @include flex-center-space-between
      }
    }

    &.is-open {
      display: block;
    }
  }
</style>