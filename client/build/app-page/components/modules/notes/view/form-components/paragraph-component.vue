<template>
  <input-container :data="setInputContainerData">
    <textarea class="ta w100"
              ref="textarea"
              @input="inputHandler"
              @focus="focusHandler"
              @blur="blurHandler">{{ text }}</textarea>
  </input-container>
</template>

<script>
  import fetotInputIcon from '$fetot-view-components/icons/fetot-input-icon.vue';

	export default {
		name: 'paragraph-component',
    data() {
			return {
				isActive: false,
        hasValue: false
      }
    },
    props: {
			text: String,
      onFocus: {
				type: Boolean,
        default: false
      }
    },
    components: {
			'fetot-input-icon': fetotInputIcon
    },
    methods: {
	    focusHandler() {
	    	this.isActive = true
      },
			blurHandler() {
	    	this.isActive = false;
        this.$emit('paragraph-blur', this.text)
      },
      inputHandler({target}) {
	    	this.hasValue = target.value !== '';
	      this.textareaResize();
      },

      /* src */
      textareaResize() {
      	const ta = this.$refs.textarea;

      	ta.style.height = 'auto';
	      ta.style.height = ta.scrollHeight + 'px';
      }
    },
    computed: {
	    setInputContainerData() {
		    return {
			    icon: '&#xE824;',
			    placeholder: 'Paragraph',
			    isActive: this.isActive,
			    hasValue: this.hasValue
		    }
	    }
    },
    mounted() {
			if( this.onFocus ) this.$refs.textarea.focus();

			this.hasValue = this.text !== '';
	    this.textareaResize();
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .input-container {
    margin-bottom: 6px;
    padding: 10px;
  }
  .fetot-input-icon {
    font-size: 20px;
  }
  .ta {
    resize: none;
    @include form-element;
  }
</style>