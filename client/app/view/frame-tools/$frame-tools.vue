<template>
  <div class="frame-tools flex-col" :class="setState">
    <frame-tools-item
            v-for="(item, index) in tools"
            :key="index" :item="item"
            @tools-item-click="toolsItemClickHandler">
    </frame-tools-item>
  </div>
</template>

<script>
  import frameToolsItem from './frame-tools-item.vue';

	export default {
		name: 'frame-tools',
    props: {
			tools: Array,
      isActive: Boolean
    },
    components: {
			'frame-tools-item': frameToolsItem
    },
    methods: {
	    toolsItemClickHandler(label) {
		    this.$emit('tools-item-click', label)
      }
    },
    computed: {
			setState() {
				return { 'is-active': !this.isActive }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .frame-tools {
    border-radius: 24px;
    padding: 6px;
    left: 24px;
    transition: .4s;
    @include position-vert-center;
    @include static-shadow;

    &.is-active {
      left: -50px;
      opacity: 0;
    }
  }
</style>