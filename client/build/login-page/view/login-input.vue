<template>
  <div class="login-input" :class="states" > <!-- @click="isActive" -->
<!--    <input class="input"-->
<!--           :type="type" :value="value"-->
<!--           @blur="isBlur" @input="setValue">-->
    <div class="placeholder">{{ input }}</div>
<!--    <fetot-icon :icon="icon"></fetot-icon>-->
<!--    <div class="error">{{ error }}</div>-->
  </div>
</template>

<script>
	import fetotIcon from '$fetot-view/icons/fetot-icon.vue';

	export default {
		name: 'login-input',
		props: { input: String },
		components: { 'fetot-icon': fetotIcon },
    data: () => ({
	    states: {
		    'is-active': false,
        'has-value': false,
        'has-error': false
	    }
		}),
		// methods: {
		// 	isActive() {
		// 		this.setStates(1, 0, 0);
		// 		this.input.dispatch('setInputError')
		// 	},
		// 	isBlur({target}) {
		// 		this.setStates(0, !!target.value,0);
		// 	},
		// 	setValue({target}) {
		// 		this.input.dispatch('updateInputValue', target.value);
		// 		if( this.event() ) this.$emit('fetot-input-input');
		// 	},
		// 	setStates(isActive, hasValue, hasError) {
		// 		this.states['is-active'] = !!isActive;
		// 		this.states['has-value'] = !!hasValue;
		// 		this.states['has-error'] = !!hasError;
		// 	}
		// },
		// computed: {
		// 	toggleError() {
		// 		if( this.error() ) this.setStates(1, 0, 1);
		// 		return this.error()
		// 	}
		// },
		// mounted() {
		// 	this.setStates(0, !!this.value(), 0);
		// 	this.input.dispatch('setInputError')
		// }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .login-input {
    font-size: 18px;
    width: 100%;
    height: 42px;
    margin-bottom: 30px;
    position: relative;
    transition: .4s;

    .input {
      color: $fetot-dark-gray;
      position: absolute;
      z-index: 2;
      padding: 0 10px;
      @include box-sizing;
      @include form-element;
      @include full-sizes;
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
      position: absolute;
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