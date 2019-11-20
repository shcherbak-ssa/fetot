<template>
  <div class="paragraph w100 bs pr br6px bg-fff" :class="setState">
    <textarea class="ta full"
              ref="textarea"
              @input="inputHandler"
              @focus="focusHandler"
              @blur="blurHandler">{{ text }}</textarea>

    <fetot-input-icon icon="&#xE824;"></fetot-input-icon>
  </div>
</template>

<script>
  import fetotInputIcon from '$fetot-view-components/icons/fetot-input-icon.vue';

	export default {
		name: 'paragraph',
    data() {
			return {
				isActive: false,
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
      inputHandler() {
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
			setState() {
				return { 'is-active': this.isActive }
      }
    },
    mounted() {
			if( this.onFocus ) this.$refs.textarea.focus();
	    this.textareaResize();
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .paragraph {
    color: $fetot-dark-gray;
    font: 18px 'roboto-medium';
    padding: 10px;
    margin-bottom: 6px;
    transition: .4s;
    z-index: 1;

    &.is-active, &:hover {
      @include static-shadow;

      .fetot-input-icon {
        left: -28px;
        opacity: 1;
      }
    }
  }
  .fetot-input-icon {
    font-size: 20px;
  }
  .ta {
    color: inherit;
    font: inherit;
    min-height: 42px;
    resize: none;
    @include form-element;
  }
</style>