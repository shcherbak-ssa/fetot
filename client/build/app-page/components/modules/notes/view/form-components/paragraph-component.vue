<template>
  <input-container :data="setInputContainerData">
    <textarea-component
            :value="value"
            :on-focus="onFocus"
            @textarea-focus="focusHandler"
            @textarea-blur="blurHandler"
            @textarea-input="inputHandler">
    </textarea-component>
  </input-container>
</template>

<script>
  import textareaComponentMixin from './src/textarea-component-mixin';

	export default {
		name: 'paragraph-component',
		mixins: [textareaComponentMixin],
    computed: {
	    setInputContainerData() {
		    return {
			    icon: '&#xE824;',
			    placeholder: 'Paragraph',
			    isActive: this.isActive,
			    hasValue: this.hasValue
		    }
	    }
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
</style>