<template>
  <div class="workspace-content">
    <div class="content">
      <p class="txt" v-if="options.data.text">
        {{ options.data.text }}
      </p>
      <fetot-input
              v-for="(input, index) in options.data.inputs"
              :key="index" :input="inputs[input]"
              @fetot-input-input="inputInputHandler"
      />
      <fetot-button v-if="options.data.button" @fetot-button-click="buttonClickHandler">
        {{ options.data.button }}
      </fetot-button>
    </div>
  </div>
</template>

<script>
	import fetotInput from 'fetot-components/form/fetot-input.vue';
	import fetotButton from 'fetot-components/form/fetot-button.vue';

	import storeWorker from 'fetot-worker-modules/store-worker';

	export default {
		name: 'workspace-content',
    data() {
			return {
				inputs: storeWorker.getGlobalStore('inputs')
      }
    },
    props: {
			options: Object
    },
    components: {
	    'fetot-input': fetotInput,
	    'fetot-button': fetotButton
    },
    methods: {
			buttonClickHandler() {
				this.options.events.emit('fetot-button-click')
      },
      inputInputHandler() {
				this.options.events.emit('fetot-input-input')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-content {
    background: #fff;
    padding: 36px;
    margin: 50px 0;
    transition: .4s;
    width: 510px;
    z-index: 1;
    @include box-sizing;
    @include border-radius-6;
    @include flex-center;
    @include static-shadow;

    &:hover {
      @include hover-shadow;
    }

    .content {
      width: 300px;
      @include flex-center-column;
    }
    .txt {
      color: $fetot-dark-gray;
      font-size: 18px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
</style>