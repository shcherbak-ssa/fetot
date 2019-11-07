<template>
  <div class="workspace-content">
    <div class="content">
      <p class="txt" v-if="content.text" v-html="content.text"></p>
      <login-input
              v-for="(input, index) in content.inputs"
              :key="index" :input="input"
              @fetot-input-input="runCurrentModuleWorker"
      />
      <fetot-button v-if="content.button" @fetot-button-click="runCurrentModuleWorker">
        {{ content.button }}
      </fetot-button>
    </div>
  </div>
</template>

<script>
	import {currentModuleStore, currentModuleWorker} from '../components/workers/current-module';

	import loginInput from './login-input.vue';
	import fetotButton from '$fetot-view/buttons/fetot-button.vue';

	export default {
		name: 'workspace-content',
    data() {
			return {
				content: currentModuleStore.state.data.content
      }
    },
    components: {
			'login-input': loginInput,
      'fetot-button': fetotButton
    },
    methods: {
      async runCurrentModuleWorker() {
	    	alert('@fetot-button-click')
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

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