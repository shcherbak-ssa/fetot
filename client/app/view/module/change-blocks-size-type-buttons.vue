<template>
  <div class="change-blocks-size-type-buttons flex-col" :class="setState">
    <div class="change-button cp pr bfr-click bg-fff fc br50"
         :class="{ 'is-active': item.type === sizeType }"
         v-for="(item, index) in store"
         :key="index"
         @click.stop="$emit('change-size-type-event', item.type)">
      <fetot-icon :icon="item.icon"></fetot-icon>
    </div>
  </div>
</template>

<script>
  import fetotIcon from '../components/icons/fetot-icon.vue';
  import changeBlocksSizeTypeStore from './src/change-blocks-size-type-store';

	export default {
		name: 'change-blocks-size-type-buttons',
    props: {
			sizeType: Number,
      hasFrame: Boolean
    },
    components: {
			'fetot-icon': fetotIcon
    },
    computed: {
			store() {
				return changeBlocksSizeTypeStore
      },
	    setState() {
		    return { 'has-frame': this.hasFrame }
	    }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .change-blocks-size-type-buttons {
    position: fixed;
    top: 140px;
    right: 22px;
    transition: .4s;

    &.has-frame {
      right: -56px;
    }

    .change-button {
      margin-bottom: 16px;
      transition: .2s;
      width: 42px;
      height: 42px;

      &.is-active, &:hover {
        @include static-shadow;
      }
    }

    .fetot-icon {
      color: $fetot-dark-blue;
      font-size: 18px;
    }
  }
</style>