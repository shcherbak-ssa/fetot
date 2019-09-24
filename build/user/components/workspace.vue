<template>
  <div class="workspace">
    <workspace-header :email="email"/>
    <workspace-avatar :fullname="inputs.fullname" :url="url"/>
    <workspace-form :inputs="inputs"/>
  </div>
</template>

<script>
  import workspaceHeader from './workspace-header.vue';
  import workspaceAvatar from './workspace-avatar.vue';
  import workspaceForm from './workspace-form.vue';

	export default {
		name: 'workspace',
    props: {
			inputs: Object,
      email: String,
      url: String
    },
    components: {
			'workspace-header': workspaceHeader,
			'workspace-avatar': workspaceAvatar,
      'workspace-form': workspaceForm
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace {
    width: 510px;
    @include flex-center-column;
    @include workspace-component;
  }
</style>