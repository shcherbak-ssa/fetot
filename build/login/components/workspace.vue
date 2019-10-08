<template>
  <div class="workspace">
    <fetot-title>
      {{ title }}
    </fetot-title>
    <keep-alive>
      <component :is="changeWorkspaceContent"></component>
    </keep-alive>
    <fetot-link>
      <span class="link">{{ setCurrentLink }}</span>
    </fetot-link>
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
    background: #fff;
    padding: 36px;
    transition: .6s;
    width: 510px;
    @include box-sizing;
    @include border-radius-6;
    @include flex-center-column;

    &:hover {
      @include hover-shadow;
    }

    @media screen and (max-width: 768px) {
      padding: 24px;
      width: 80%;
      @include hover-shadow;
    }
    @media screen and (max-width: 420px) {
      padding: 12px;
      width: 90%;
    }

    .link {
      font-size: 14px;
    }
  }
</style>