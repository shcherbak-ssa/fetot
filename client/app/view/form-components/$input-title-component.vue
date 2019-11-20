<template>
  <input-container :data="setInputContainerData">
    <input
            type="text" class="input bs pr full" ref="input"
            :value="input.value"
            @focus="focusHandler"
            @blur="blurHandler"
            @input="inputHandler"
    />
  </input-container>
</template>

<script>
  import inputContainer from './$input-container.vue';

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
      onFocus: {
				type: Boolean,
        default: false
      }
    },
    components: {
			'input-container': inputContainer
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
	    setInputContainerData() {
	    	// const self = this;
	    	return {
	    		icon: '&#xF1DC;',
          placeholder: this.input.placeholder,
          isActive: this.isActive,
          hasValue: this.hasValue
        }
      }
    },
    mounted() {
			const {input} = this.$refs;

			if( this.onFocus ) input.focus();
	    this.hasValue = input.value !== ''
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .input-container {
    color: $fetot-dark-blue;
    font: 24px 'roboto-bold';
    height: 42px;
    padding-left: 10px;
  }
  .input {
    z-index: 2;
    @include form-element;
  }
</style>