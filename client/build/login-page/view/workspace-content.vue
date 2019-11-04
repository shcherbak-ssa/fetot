<template>
  <div class="workspace-content">
    <div class="content">
<!--      <p class="txt" v-if="content.text" v-html="content.text"></p>-->
<!--      <fetot-input-->
<!--              v-for="(input, index) in content.inputs"-->
<!--              :key="index" :input="inputs[input]"-->
<!--              @fetot-input-input="inputInputHandler"-->
<!--      />-->
<!--      <fetot-button v-if="content.button" @fetot-button-click="buttonClickHandler">-->
<!--        {{ content.button }}-->
<!--      </fetot-button>-->
    </div>
  </div>
</template>

<script>
	// import inputs from 'fetot-workers/inputs';
	import fetotButton from 'fetot-view/buttons/fetot-button.vue';

	export default {
		name: 'workspace-content',
    components: {
			// 'fetot-input': inputs.view,
      'fetot-button': fetotButton
    },
    methods: {
	    async buttonClickHandler() {
		    await this.runWorker();
	    },
	    async inputInputHandler() {
		    await this.runWorker()
	    },
      async runWorker() {}
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-scss';

  .workspace-content {
    background: #fff;
    padding: 42px;
    margin: 35px 0;
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
      width: 320px;
      @include flex-center-column;
    }
    .txt {
      color: $fetot-dark-gray;
      font-size: 24px;
      text-align: center;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 580px) {
      width: 100%;
      padding: 0;

      &, &:hover {
        box-shadow: none;
      }
    }
  }
</style>