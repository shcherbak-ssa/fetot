<template>
  <div @click="$emit('avatar-click')" class="fetot-avatar" :class="setSize">
    <img class="image" :src="setAvatarImage" alt="">
    <div class="letters" :class="hasImage">
      <div class="txt">{{ setLetters }}</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'fetot-avatar',
    props: {
			value: String,
      size: String,
      url: String
    },
    data() {
			return {
				hasBgImage: false
      }
    },
    computed: {
			setSize() {
				return { [`size-${this.size}`]: true }
      },
      setLetters() {
				if( !this.value ) return '';

				let [name, surname] = this.value.toUpperCase().split(' ');

				name = name ? name[0] : '';
				surname = surname ? surname[0] : '';

				return name + surname;
      },
	    setAvatarImage() {
				if( !this.url ) return '';

				this.hasBgImage = true;
				return this.url;
      },
      hasImage() {
				return { 'has-image': this.hasBgImage }
      }
    }
	}
</script>

<style lang="scss">
  @import 'fetot-src-scss';

  .fetot-avatar {
    background-color: $fetot-blue;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    @include box-sizing;
    @include static-shadow;

    .letters, .image {
      position: absolute;
      top: 0;
      left: 0;
      @include full-sizes;
    }
    .letters {
      .txt {
        color: $fetot-light-gray;
        font: bold 24px sans-serif;
        @include position-center;
      }
      &.has-image {
        display: none;
      }
    }
    &.size-big {
      @include sizes(50px, 50px);
    }
  }
</style>