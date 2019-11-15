<template>
  <div class="modal-content bs w100">
    <slot>
      <input-title-component :in-focus="true" :title="content.title"
                             @input-title-event="inputTitleEventHandler">
      </input-title-component>
    </slot>
  </div>
</template>

<script>
	import inputTitleComponent from '../inputs/input-title-component.vue';

	export default {
		name: 'modal-content',
    props: {
			content: Object
    },
    components: {
			'input-title-component': inputTitleComponent
    },
    methods: {
	    inputTitleEventHandler(value) {
	    	this.content.title = value
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .modal-content {
    padding: 42px;
  }
</style>