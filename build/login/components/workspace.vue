<template>
  <div class="workspace">
    <div class="workspace-item">
      <fetot-title>
        {{ setCurrentTitle }}
      </fetot-title>
      <div class="content">
        content
      </div>
      <fetot-link>
        <span class="link">{{ setCurrentLink }}</span>
      </fetot-link>
    </div>
  </div>
</template>

<script>
  import fetotTitle from 'fetot-components/elements/fetot-title.vue';
  import fetotLink from 'fetot-components/elements/fetot-link.vue';
  import fetotInput from 'fetot-components/form/fetot-input.vue';
  import fetotButton from 'fetot-components/form/fetot-button.vue';

	export default {
		name: 'workspace',
    props: {
			mode: String,
			inputs: Object,
      content: Object
    },
    components: {
			'fetot-title': fetotTitle,
      'fetot-link': fetotLink,
	    'fetot-input': fetotInput,
	    'fetot-button': fetotButton
    },
    computed: {
			setCurrentTitle() {
				return this.content[this.mode].title
      },
	    setCurrentLink() {
		    return this.content[this.mode].link
	    },
	    changeWorkspaceContent() {

      }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace {
    padding: 36px;
    position: relative;
    transition: .6s;
    @include full-sizes;
    @include box-sizing;
    @include flex-center-column;

    .fetot-title {
      @include position-top-center;
    }
    .content {
      @include position-center;
    }
    .fetot-link {
      @include position-bottom-center;
    }
    .link {
      font-size: 14px;
    }
  }
</style>