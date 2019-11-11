<template>
  <div class="fetot-ava" :style="setSize">
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
        first = first[0] || '';
        second = second[0] || '';

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
    border-radius: 50%;
    color: #fff;
    font: 18px 'roboto-medium';
    @include flex-center;
    @include static-shadow;
  }
</style>