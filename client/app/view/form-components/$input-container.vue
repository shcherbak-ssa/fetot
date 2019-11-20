<template>
  <div class="input-container bs bg-fff br3px w100 pr" :class="setState">
    <slot></slot>

    <fetot-input-icon
            v-if="data.icon !== ''"
            :icon="data.icon">
    </fetot-input-icon>
    <div class="ph" v-if="data.placeholder !== ''">
      {{ data.placeholder }}
    </div>
  </div>
</template>

<script>
	import fetotInputIcon from '../components/icons/fetot-input-icon.vue';

	export default {
		name: 'input-container',
    props: {
			data: Object
    },
		components: {
			'fetot-input-icon': fetotInputIcon
		},
		computed: {
			setState() {
				return {
					'is-active': this.data.isActive,
					'has-value': this.data.hasValue
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .input-container {
    color: $fetot-dark-gray;
    font: 18px 'roboto-medium';
    transition: .4s;
    z-index: 1;

    &.is-active, &:hover {
      @include static-shadow;

      .fetot-input-icon {
        left: -28px;
        opacity: 1;
      }
    }
    &.has-value {
      .ph {
        left: 100px;
        opacity: 0;
      }
    }
  }
  .ph {
    color: $fetot-dark-gray-60;
    font: 16px 'roboto-medium';
    transition: .2s;
    left: 10px;
    @include position-vert-center;
  }
</style>