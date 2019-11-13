<template>
  <div class="fetot-confirm-buttons flex w100">
    <confirm-button v-for="(item, index) in buttons"
                    :key="index" :item="item"
                    @confirm-event="confirmEventHandler">
    </confirm-button>
  </div>
</template>

<script>
  import fetotIcon from '../icons/fetot-icon.vue';
  import fetotButton from './fetot-button.vue';

	export default {
		name: 'fetot-confirm-buttons',
    data() {
			return {
				buttons: [
					{ icon: '&#xE808;', label: false },
					{ icon: '&#xE807;', label: true }
				]
      }
    },
    components: {
			'confirm-button': {
				template: '<fetot-button @fetot-button-click="$emit(\'confirm-event\', item.label)">' +
                    '<fetot-icon :icon="item.icon"></fetot-icon>' +
                  '</fetot-button>',
				props: { item: Object },
				components: {
					'fetot-button': fetotButton,
					'fetot-icon': fetotIcon,
        }
			}
    },
    methods: {
	    confirmEventHandler(label) {
				this.$emit('confirm-event', label)
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-confirm-buttons {
    justify-content: space-around;

    .fetot-button {
      font-size: 24px;
      width: 92px;
      height: 36px;
    }
  }
</style>