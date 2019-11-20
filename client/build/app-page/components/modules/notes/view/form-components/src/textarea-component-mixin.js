'use strict';

/*** imports [begin] ***/

import textareaComponent from './textarea-component.vue';

/*** imports [end] ***/
/*** exports [begin] ***/

const textareaComponentMixin = {
	data() {
		return {
			isActive: false,
			hasValue: false
		}
	},
	props: {
		value: String,
		onFocus: {
			type: Boolean,
			default: false
		}
	},
	components: {
		'textarea-component': textareaComponent
	},
	methods: {
		inputHandler(value) {
			this.hasValue = value !== '';
		},
		focusHandler() {
			this.isActive = true
		},
		blurHandler(value) {
			this.isActive = false;
			this.$emit('blur-event', value)
		}
	},
	mounted() {
		this.hasValue = this.value !== '';
	}
};

/*** exports [end] ***/

export default textareaComponentMixin;