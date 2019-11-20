<template>
  <input-container :data="setInputContainerData">
    <list-component-item
            v-for="(value, index) in list"
            :key="index" :value="value"
            @blur-event="blurEventHandler">
    </list-component-item>
  </input-container>
</template>

<script>
  import listComponentItem from './list-component-item.vue';

	export default {
		name: 'list-component',
		data() {
			return {
				isActive: false
			}
		},
    props: {
			isNum: Boolean,
      list: Array
    },
    components: {
			'list-component-item': listComponentItem
    },
    methods: {
	    blurEventHandler(value) {}
    },
    computed: {
	    setInputContainerData() {
		    return {
			    icon: this.isNum ? '&#xF0CB;' : '&#xF0CA;',
			    placeholder: '',
			    isActive: this.isActive,
			    hasValue: false
		    }
	    }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .list-component {
    padding: 10px 10px 10px 30px;
  }
</style>