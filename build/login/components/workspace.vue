<template>
  <div class="workspace" >
    <transition name="change-mode" mode="out-in">
      <div class="title" :key="mode">{{ setCurrentTitle }}</div>
    </transition>
    <login-content @check-email="checkEmailHandler" :mode="mode" :inputs="inputs"/>
    <transition name="change-mode" mode="out-in">
      <div class="link" :key="mode" @click="changeMode">{{ setCurrentLink }}</div>
    </transition>
  </div>
</template>

<script>
  import {content, inputs} from './src/workspace-data.json';
	import loginContent from './content.vue';

	export default {
		name: 'workspace',
		data() {
			return {
				mode: 'sing-in',
        currentTitle: '',
        currentLink: '',
				content,
				inputs
			}
		},
		components: {
			'login-content': loginContent
		},
		methods: {
			changeMode() {
				this.mode = this.changeCurrentMode();
			},
			changeCurrentMode() {
				switch( this.mode ) {
					case 'sing-in':
						return 'login';
					case 'login':
					case 'check-email':
						return 'sing-in';
				}
			},
			checkEmailHandler() {
				this.mode = 'check-email'
      }
		},
		computed: {
			setCurrentTitle() {
				return this.content[this.mode].title
      },
			setCurrentLink() {
				return this.content[this.mode].link;
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace {
    @include workspace-component;

    .title {
      @include workspace-title-component;
    }
    .link {
      transition: .2s;
      color: $fetot-azure;
      cursor: pointer;
      font: lighter .875rem sans-serif;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .change-mode {
    &-enter-active, &-leave-active {
      transition: opacity .2s;
    }
    &-enter, &-leave-to {
      opacity: 0;
    }
    &-enter {
      transform: translateX(-50%);
    }
    &-leave-to {
      transform: translateX(50%);
    }
  }
</style>