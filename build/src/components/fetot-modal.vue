<template>
  <div class="fetot-modal" :class="states" @click="modalClickHandler">
    <div class="modal">
      <slot name="modal-header"></slot>
      <slot name="modal-body"></slot>
      <slot name="modal-footer"></slot>
    </div>
  </div>
</template>

<script>
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
    cursor: pointer;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    @include full-sizes;

    .modal {
      width: 400px;
      @include position-center;
      @include workspace-component;
    }

    &.is-open {
      display: block;
    }
  }
</style>