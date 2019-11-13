<template>
  <div class="hamburger-button cp pa" :class="isActive" @click="clickHandler">
    <div class="it pa"></div>
    <div class="it pc"></div>
    <div class="it pa"></div>
  </div>
</template>

<script>
	export default {
		name: 'hamburger-button',
    props: {
			active: Boolean
    },
    methods: {
			clickHandler() {
				this.$emit('hamburger-button-click', this.active);
      }
    },
    computed: {
			isActive() {
				return { 'is-active': this.active }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .hamburger-button {
    width: 36px;
    height: 36px;
    transition: .4s;
  }
  .it {
    background: $fetot-dark-blue;
    height: 3px;
    transition: .4s;
    border-radius: 50px;

    &:nth-child(1), &:nth-child(3) {
      width: 70%;
    }
    &:nth-child(1) {
      top: 7px;
      right: 0;
    }
    &:nth-child(2) {
      width: 100%;
    }
    &:nth-child(3) {
      bottom: 7px;
      left: 0;
    }
  }
  .hamburger-button {
    &:hover .it {
      width: 100%;
    }
    &.is-active {
      .it {
        width: 100%;

        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(1) {
          transform-origin: right center;
          transform: rotate(-45deg);
          top: 2px;
          right: 5px;
        }
        &:nth-child(3) {
          transform-origin: left center;
          transform: rotate(45deg);
          bottom: calc(100% - 5px);
          left: 5px;
        }
      }
    }
  }
</style>