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

  const confirmButton = {
  	name: 'confirm-button',
	  template: '<div class="confirm-button pr cp bfr-click fc br3px"' +
                    '@click.stop="$emit(\'confirm-event\', item.label)">' +
		            '<fetot-icon :icon="item.icon"></fetot-icon>' +
		          '</div>',
    props: { item: Object },
    components: { 'fetot-icon': fetotIcon, }
  };

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
			'confirm-button': confirmButton
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

    .confirm-button {
      color: $fetot-dark-blue;
      font-size: 24px;
      width: 92px;
      height: 38px;
      transition: .2s;

      &:hover {
        background: $fetot-dark-blue-20;
      }
    }
  }
</style>