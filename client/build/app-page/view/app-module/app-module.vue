<template>
  <div class="app-module pa bs flex" :class="setState">
    <div class="frame">
      <frame-component v-if="hasFrame"></frame-component>
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
  import createBlockModalStore from '../../store/create-block-modal-store';

	export default {
		name: 'app-module',
    data() {
			return {
				hasFrame: false,
        modalOptions: {
					header: {},
	        modalType: 'is-small',
	        confirmHandler: '',
	        contentData: {
		        title: ''
          }
        }
      }
    },
    components: {
      'app-module-workspace': appModuleWorkspace,
	    'create-block-button': createBlockButton,

      'frame-component': frameComponent
    },
    methods: {
	    createBlockHandler() {
		    this.modalOptions.confirmHandler = this.confirmHandler;
		    this.modalOptions.contentData.title = '';
		    this.updateModalOptionsHeader();

		    eventsEmitterWorker.getEmitter('app').emit('show-modal', this.modalOptions);
      },
      confirmHandler(contentData) {
        if( contentData.title ) this.hasFrame = true;
      },

      /* src */
      updateModalOptionsHeader() {
	      this.modalOptions.header = {...createBlockModalStore[ currentModuleStore.state.name ]}
      }
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
    padding: 148px 90px 42px;
    width: calc(100% + 24px);
    height: 100%;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 419px) {
      padding: 24px 6.25% 0;
    }

    .frame {
      display: none;
    }
    .blocks {
      width: 100%;
    }

    &.has-frame {
      justify-content: space-around;

      .frame {
        display: block;
        width: 40%;
      }
      .blocks {
        width: 30%;
      }
    }
  }
</style>