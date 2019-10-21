<template>
  <div class="fetot-mode-icon" :class="setActive" @click="$emit('fetot-mode-icon-click')">
    <fetot-icon :icon="mode.icon"></fetot-icon>
    <div class="name">{{ mode.name }} mode</div>
  </div>
</template>

<script>
  import fetotIcon from './fetot-icon.vue';

	export default {
		name: 'fetot-mode-icon',
    props: {
			mode: Object
    },
    components: {
			'fetot-icon': fetotIcon
		},
    computed: {
			setActive() {
				return { 'is-active': this.mode.active }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .fetot-mode-icon {
    cursor: pointer;
    margin-right: 24px;
    @include flex-align-items-center;
  }
  .fetot-icon {
    background: #fff;
    border: 1px solid $fetot-dark-blue;
    border-radius: 50%;
    @include sizes(42px, 42px);
  }
  .fetot-mode-icon, .name {
    color: $fetot-dark-blue;
  }
  .name {
    font-size: 18px;
    width: 0;
    overflow: hidden;
  }

  .fetot-mode-icon.is-active {
    .fetot-icon {
      background: $fetot-dark-blue;
      color: #fff;
      margin-right: 10px;
    }
    .name {
      width: auto;
    }
  }
</style>