<template>
  <div class="change-blocks-size-type-buttons pa flex-col">
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
			sizeType: Number
    },
    components: {
			'fetot-icon': fetotIcon
    },
    computed: {
			store() {
				return changeBlocksSizeTypeStore
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .change-blocks-size-type-buttons {
    top: 140px;
    right: 22px;

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