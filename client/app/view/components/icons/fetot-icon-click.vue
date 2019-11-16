<template>
  <div class="fetot-icon-click br50 cp fc" :class="isActive" @click.stop="$emit('fetot-icon-click')">
    <fetot-icon :icon="icon"></fetot-icon>
  </div>
</template>

<script>
  import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-icon-click',
    props: {
			icon: String,
      active: {
				type: Boolean,
        default: false
      }
    },
    components: { 'fetot-icon': fetotIcon },
    computed: {
			isActive() {
				return { 'is-active': this.active }
      }
    }
	}
</script>

<style lang="scss">
  @import '$fetot-scss';

  .fetot-icon-click {
    transition: .4s;

    &:hover, &.is-active {
      @include static-shadow;
    }

    @media screen and (max-width: 1024px) {
      &:hover {
        box-shadow: none;
      }
    }
  }
</style>