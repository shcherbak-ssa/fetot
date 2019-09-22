<template>
  <div class="ava" :class="setSize">
    <div class="letters">{{ setLetters }}</div>
  </div>
</template>

<script>
	export default {
		name: 'avatar',
    props: {
			fullname: String,
      size: String
    },
    computed: {
			setSize() {
				return { [`size-${this.size}`]: true }
      },
      setLetters() {
				if( !this.fullname ) return '';

				let [name, surname] = this.fullname.toUpperCase().split(' ');

				name = name ? name[0] : '';
				surname = surname ? surname[0] : '';

				return name + surname;
      }
    }
	}
</script>

<style lang="scss">
  @import 'fetot-src-scss';

  .ava {
    background-color: $fetot-azure;
    border: 2px solid $fetot-dark-blue;
    border-radius: 50%;
    position: relative;
    @include box-sizing;

    .letters {
      color: $fetot-light-gray;
      font: bold 24px sans-serif;
      @include position-center;
    }

    &.has-image {
      .letters {
        display: none;
      }
    }
    &.size-big {
      @include sizes(64px, 64px);
    }
  }
</style>