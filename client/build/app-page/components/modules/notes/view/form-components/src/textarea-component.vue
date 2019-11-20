<template>
  <textarea class="textarea-component w100"
            ref="textarea"
            @input.stop="inputHandler"
            @focus.stop="$emit('textarea-focus')"
            @blur.stop="$emit('textarea-blur', $event.target.value)">
    <slot></slot>
  </textarea>
</template>

<script>
	export default {
		name: 'textarea-component',
    props: {
			onFocus: Boolean
    },
    methods: {
	    inputHandler({target}) {
		    this.textareaResize();
		    this.$emit('textarea-input', target.value)
	    },
	    textareaResize() {
		    const ta = this.$refs.textarea;

		    ta.style.height = 'auto';
		    ta.style.height = ta.scrollHeight + 'px';
	    }
    },
		mounted() {
			if( this.onFocus ) this.$refs.textarea.focus();
			this.textareaResize();
		}
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .textarea-component {
    resize: none;
    @include form-element;
  }
</style>