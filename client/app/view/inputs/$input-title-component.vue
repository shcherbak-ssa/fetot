<template>
  <div class="input-title-component bg-fff br3px w100 pr flex" :class="setState">
    <input type="text" class="input bs pr full" ref="input"
           :value="input.value"
           @focus="focusHandler"
           @blur="blurHandler"
           @input="inputHandler"
    >
    <fetot-icon icon="&#xF1DC;"></fetot-icon>
    <div class="ph">{{ input.placeholder }}</div>
  </div>
</template>

<script>
  import fetotIcon from '../components/icons/fetot-icon.vue';

	export default {
		name: 'input-title-component',
    data() {
			return {
				isActive: false,
				hasValue: false
      }
    },
    props: {
			input: Object,
      inFocus: {
				type: Boolean,
        default: false
      }
    },
    components: {
			'fetot-icon': fetotIcon
    },
    methods: {
	    inputHandler({target}) {
	    	const {value} = target;

	    	this.hasValue = value !== '';
	    	this.input.value = value;

	    	this.$emit('input-title-event', value);
      },

	    focusHandler() {
	    	this.isActive = true
      },
	    blurHandler() {
	    	this.isActive = false
      }
    },
    computed: {
			setState() {
				return {
					'is-active': this.isActive,
          'has-value': this.hasValue
				}
      }
    },
    mounted() {
			const {input} = this.$refs;

			if( this.inFocus ) input.focus();
			if( input.value !== '' ) this.hasValue = true;
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .input-title-component {
    height: 42px;
    transition: .2s;
    font: 24px 'roboto-bold';

    &.is-active, &:hover {
      @include static-shadow;

      .fetot-icon {
        left: -28px;
        opacity: 1;
      }
    }
    &.has-value {
      .ph {
        left: 100%;
        opacity: 0;
      }
    }
  }

  .fetot-icon {
    color: $fetot-dark-blue;
    font-size: 16px;
    width: 24px;
    height: 24px;
    transition: .2s;
    position: absolute;
    top: 9px;
    left: 24px;
    opacity: 0;
  }
  .input {
    color: $fetot-dark-blue;
    padding-left: 10px;
    flex-grow: 1;
    z-index: 1;
    @include form-element;
  }
  .ph {
    color: $fetot-dark-gray-60;
    font: 16px 'roboto-medium';
    transition: .4s;
    left: 10px;
    @include position-vert-center;
  }
</style>