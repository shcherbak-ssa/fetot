<template>
  <div class="input-title-component bg-fff br3px w100 pr flex" :class="setState">
    <input type="text" class="input bs pr full"
           ref="input" :value="title"
           @focus="focusHandler"
           @blur="blurHandler"
           @input="inputHandler"
    >
    <fetot-icon icon="&#xF1DC;"></fetot-icon>
    <div class="ph">Title</div>
  </div>
</template>

<script>
  import fetotIcon from '$fetot-view/icons/fetot-icon.vue';

	export default {
		name: 'input-title-component',
    data() {
			return {
				isActive: false,
				hasValue: false
      }
    },
    props: {
			title: String,
      inFocus: {
				type: Boolean,
        default: false
      }
    },
    components: {
			'fetot-icon': fetotIcon
    },
    methods: {
	    inputHandler({target}) {
	    	this.hasValue = target.value !== '';
	    	this.$emit('input-title-event', target.value);
      },

	    focusHandler() {
	    	this.isActive = true
      },
	    blurHandler() {
	    	this.isActive = false
      }
    },
    computed: {
			setState() {
				return {
					'is-active': this.isActive,
          'has-value': this.hasValue
				}
      }
    },
    mounted() {
			if( this.inFocus ) this.$refs.input.focus();
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .input-title-component {
    height: 42px;
    transition: .2s;
    font: 18px 'roboto-bold';

    &.is-active, &:hover {
      @include static-shadow;
    }
    &.has-value {
      .ph {
        left: 100%;
        opacity: 0;
      }
    }
  }

  .fetot-icon {
    color: $fetot-dark-blue;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 9px;
    left: -24px;
  }
  .input {
    color: $fetot-dark-blue;
    padding-left: 10px;
    flex-grow: 1;
    z-index: 1;
    @include form-element;
  }
  .ph {
    color: $fetot-dark-gray-60;
    font: 16px 'roboto-medium';
    transition: .4s;
    left: 10px;
    @include position-vert-center;
  }
</style>