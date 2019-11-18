<template>
  <div class="app-module pa bs flex" :class="setState">
    <div class="frame" v-if="hasFrame">
    </div>
    <div class="blocks">
      <app-module-workspace></app-module-workspace>
    </div>

    <create-block-button @create-block-event="createBlockHandler"></create-block-button>
  </div>
</template>

<script>
  import appModuleWorkspace from './app-module-workspace.vue';
  import createBlockButton from './create-block-button.vue';

  import frameComponent from '../frame/frame-component.vue';

  import eventsEmitterWorker from '$fetot-events-emitter';

  import {currentModuleStore} from '../../components/workers/current-module';
  import modulesViewStore from '../../store/modules-view-store';

	export default {
		name: 'app-module',
    data() {
			return {
				hasFrame: false,
        appEventsEmitter: eventsEmitterWorker.getEmitter('app'),
      }
    },
    components: {
      'app-module-workspace': appModuleWorkspace,
	    'create-block-button': createBlockButton,

      'frame-component': frameComponent
    },
    methods: {
	    createBlockHandler() {
	    	const modalOptions = this.currentModuleStore.state.config.createBlockModalOptions;
	    	modalOptions.confirmHandler = this.confirmCreateBlockModalHandler;

		    this.appEventsEmitter.emit('show-modal', modalOptions);
      },
      confirmCreateBlockModalHandler(contentData) {
        if( !contentData.title ) return;

	      this.hasFrame = true;
	      this.appEventsEmitter.on('close-frame', this.closeFrameHandler)
      },
	    closeFrameHandler() {
	    	this.hasFrame = false;
		    this.appEventsEmitter.remove('close-frame', this.closeFrameHandler)
      },
    },
    computed: {
			setState() {
				return { 'has-frame': this.hasFrame }
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-module {
    padding: 148px 128px 0;
    width: calc(100% + 24px);
    height: 100%;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 419px) {
      padding: 148px 6.25% 0;
    }

    .blocks {
      width: 100%;
    }

    &.has-frame {
      justify-content: space-around;

      .frame {
        width: 60%;
      }
      .blocks {
        width: 30%;
      }
    }
  }
</style>