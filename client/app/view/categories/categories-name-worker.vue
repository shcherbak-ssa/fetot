<template>
  <div class="categories-name-worker bs" :class="states" :style="setTopProp">
    <input type="text" class="input full" ref="input"
           :value="item.name" @keyup.enter="blurHandler" > <!--@blur="blurHandler"-->
  </div>
</template>

<script>
	export default {
		name: 'categories-name-worker',
    props: {
			item: Object,
      top: String
    },
    data() {
			return {
				states: {
					'is-for-rename': false
        }
      }
    },
    methods: {
			// inputHandler({target}) {
			// 	this.$emit('name-worker-input', target.value)
      // },
			blurHandler({target}) {
				if( target.value === '' ) return ;
				this.$emit('name-worker-blur', { name: target.value.toLowerCase(), index: this.item.index })
      }
    },
    computed: {
			setTopProp() {
				if( !this.top ) return;

				this.states['is-for-rename'] = true;
				return `top:${this.top}px;`
      }
    },
    mounted() {
			this.$refs.input.focus();
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .categories-name-worker {
    background: #fff;
    font: 20px 'roboto-medium';
    width: 100%;
    height: 42px;
    padding-left: 42px;

    .input {
      color: $fetot-dark-blue;
      @include form-element;
    }

    &.is-for-rename {
      position: absolute;
      left: 0;
      z-index: 10;
    }
  }
</style>