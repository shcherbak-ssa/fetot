<template>
  <div class="fetot-confirm-buttons flex w100">
    <fetot-button :size="size" @fetot-button-click="$emit('confirm-event', false)">
      <fetot-icon icon="&#xE808;"></fetot-icon>
    </fetot-button>
    <fetot-button :size="size" @fetot-button-click="$emit('confirm-event', true)">
      <fetot-icon icon="&#xE807;"></fetot-icon>
    </fetot-button>
  </div>
</template>

<script>
  import fetotIcon from '../icons/fetot-icon.vue';
  import fetotButton from './fetot-button.vue';

	export default {
		name: 'fetot-confirm-buttons',
		props: {
			size: {
				type: Number,
				default: 96
			}
		},
		components: {
			'fetot-button': fetotButton,
			'fetot-icon': fetotIcon,
		},
    computed: {

    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .fetot-confirm-buttons {
    justify-content: space-around;

    .fetot-button {
      font-size: 24px;
      height: 36px;
    }
  }
</style>