<template>
  <input-container :data="setInputContainerData">
    <ul class="list-component bs">
      <li class="pr" v-for="(value, index) in list" :key="index">
        <div class="list-item-label br50 pa fc" :class="listType">{{ isNum ? index + 1 : '' }}</div>
        <list-component-item :value="value" @blur-event="blurEventHandler"></list-component-item>
      </li>
    </ul>
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
	    },
      listType() {
	    	return { 'is-mark-list': !this.isNum }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .input-container {
    margin-bottom: 6px;
  }
  .list-component {
    list-style-type: none;
    padding: 10px 10px 10px 32px;
  }
  .list-item-label {
    color: inherit;
    font: inherit;
    width: 12px;
    height: 12px;
    top: 10px;
    left: -22px;

    &.is-mark-list {
      background: $fetot-dark-gray;
    }
  }
</style>