<template>
  <div class="fetot-ava br50 pr fc cp" :style="setSize" @click.stop="$emit('fetot-ava-click')">
    {{ setClientLetters }}
  </div>
</template>

<script>
	export default {
		name: 'fetot-ava',
    props: {
			fullname: String,
      size: String
    },
    computed: {
	    setClientLetters() {
	    	let [first, second] = this.fullname.split(' ');
        first = first ? first[0] : '';
        second = second ? second[0] : '';

        return (first + second).toUpperCase();
      },
      setSize() {
	    	let size = this.size + 'px';
	    	return { width: size, height: size }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .fetot-ava {
    background: $fetot-dark-blue;
    color: #fff;
    font: 18px 'roboto-medium';
    @include static-shadow;

    &::after {
      border-radius: 50%;
      top: 0;
      left: 0;
      z-index: 1;
      @include full-sizes;
      @include psevdo-element;
    }
  }
</style>