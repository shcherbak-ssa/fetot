<template>
  <div class="login-input pr" :class="states" @click="isActive">
    <input class="input bs full pa"
           :type="data.state.type" :value="data.state.value"
           @blur="isBlur" @input="isInput"
    >
    <div class="placeholder">{{ data.state.placeholder }}</div>
    <fetot-icon :icon="data.state.icon"></fetot-icon>
    <div class="error pa">{{ toggleError }}</div>
  </div>
</template>

<script>
	import inputWorker from '../components/workers/input';
  import fetotIcon from '$fetot-view/icons/fetot-icon.vue';

	export default {
		name: 'login-input',
		props: {
			input: String
    },
		components: {
			'fetot-icon': fetotIcon
    },
    data() {
			return {
				data: {},
				states: {
					'is-active': false,
					'has-value': false,
					'has-error': false
				}
      }
		},
		methods: {
			isActive() {
				this.setStates(1, 0, 0);
				this.data.actions.updateError();
			},
			isBlur({target}) {
				this.data.actions.updateValue(target.value);
				this.setStates(0, !!target.value,0);
			},
			isInput({target}) {
				if( this.data.state.event ) {
					this.data.actions.updateValue(target.value);
					this.$emit('fetot-input-input');
				}
			},
			setStates(isActive, hasValue, hasError) {
				this.states['is-active'] = !!isActive;
				this.states['has-value'] = !!hasValue;
				this.states['has-error'] = !!hasError;
			}
		},
		computed: {
			toggleError() {
				if( this.data.state.error ) this.setStates(1, 0, 1);
				return this.data.state.error
			}
		},
		created() {
			this.data = inputWorker.getInput(this.input)
		},
		mounted() {
			this.setStates(0, !!this.data.state.value, 0);
			this.data.actions.updateError();
		}
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .login-input {
    font-size: 18px;
    width: 100%;
    height: 42px;
    margin-bottom: 30px;
    transition: .4s;

    .input {
      color: $fetot-dark-gray;
      z-index: 2;
      padding: 0 10px;
      @include form-element;
    }
    .placeholder {
      color: $fetot-dark-gray-60;
      left: 40px;
    }
    .fetot-icon {
      color: $fetot-dark-gray-80;
      left: 10px;
      width: 24px;
      height: 24px;
    }
    .placeholder, .fetot-icon {
      z-index: 1;
      transition: .2s;
      @include position-vert-center;
    }
    .error {
      color: $fetot-red;
      font: 14px 'roboto-light', sans-serif;
      bottom: 0;
      left: 6px;
      opacity: 0;
      transition: .2s;
    }
    &::after {
      background: $fetot-dark-gray;
      border-radius: 0 0 2px 2px;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      transition: .2s;
      @include psevdo-element;
    }
    &.is-active, &:hover {
      background: #fff;
      @include hover-shadow;
      @include border-radius-3;

      &::after {
        background: #fff;
      }
    }

    &.is-active {
      .placeholder {
        color: $fetot-dark-gray-80;
        font: 14px 'roboto-light', sans-serif;
        transform: none;
        top: -15px;
        left: 10px;
      }
    }
    &.has-value .placeholder {
      left: 6px;
      opacity: 0;
    }
    &.is-active .fetot-icon, &.has-value .fetot-icon {
      color: $fetot-dark-blue;
      left: -30px;
    }
    &.has-error {
      .placeholder, .fetot-icon {
        color: $fetot-red;
      }
      .error {
        bottom: -18px;
        opacity: 1;
      }
    }
  }
</style>