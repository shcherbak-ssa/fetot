<template>
  <div class="frame-tools-item pr" :class="isLast">
    <fetot-icon-click
            :active="active"
            :icon="item.icon"
            @fetot-icon-click="fetotIconClickHandler">
    </fetot-icon-click>
  </div>
</template>

<script>
	import fetotIconClick from '../components/icons/fetot-icon-click.vue';

  export default {
		name: 'frame-tools-item',
    props: {
			item: Object,
	    active: {
		    type: Boolean,
		    default: false
	    }
    },
    components: {
			'fetot-icon-click': fetotIconClick
    },
    methods: {
	    fetotIconClickHandler() {
	    	this.$emit('tools-item-click', this.item.label)
      }
    },
    computed: {
			isLast() {
				return { 'is-last': this.item.last || false }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .frame-tools-item {
    color: $fetot-dark-gray;
    margin: 3px 0;

    .fetot-icon-click {
      width: 38px;
      height: 38px;
    }
    .fetot-icon {
      font-size: 18px;
    }

    &.is-last {
      margin-bottom: 6px;

      &::after {
        background: $fetot-dark-gray-40;
        width: 100%;
        height: 1px;
        bottom: -5px;
        left: 0;
        @include psevdo-element;
      }
    }
  }
</style>