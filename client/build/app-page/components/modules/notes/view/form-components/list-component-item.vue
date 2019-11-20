<template>
  <input-container :data="setInputContainerData">
    <textarea-component
            :on-focus="onFocus"
            @textarea-focus="focusHandler"
            @textarea-blur="blurHandler"
            @textarea-input="inputHandler">
      {{ value }}
    </textarea-component>
  </input-container>
</template>

<script>
	import textareaComponentMixin from './src/textarea-component-mixin';

	export default {
		name: 'list-component-item',
		mixins: [textareaComponentMixin],
		computed: {
			setInputContainerData() {
				return {
					icon: '',
					placeholder: 'List item',
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
    padding-left: 10px;
    margin-bottom: 10px;
  }
  .input {
    @include form-element;
  }
</style>