<template>
  <div class="workspace">
    <div class="header">
      <div class="title">New user</div>
      <div class="email">{{ email }}</div>
    </div>
    <div class="form">
      <user-form/>
    </div>
  </div>
</template>

<script>
  import userForm from './user-form.vue';
  import storage from 'fetot-js-modules/local-storage';

	export default {
		name: 'workspace',
    data() {
			return {
				email: ''
      }
    },
    components: {
			'user-form': userForm
    },
    created() {
			this.email = storage.getStorageItem('fetot-client-email');
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace {
    @include workspace-component;

    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .title {
      @include workspace-title-component;
      margin-bottom: 10px;
    }
    .email {
      color: $fetot-dark-gray;
      font-size: 18px;
    }
  }
</style>