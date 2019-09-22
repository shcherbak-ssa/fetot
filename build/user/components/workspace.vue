<template>
  <div class="workspace">
    <div class="title">New user</div>
    <div class="email">{{ email }}</div>
  </div>
</template>

<script>
  import storage from 'fetot-js-modules/local-storage';

	export default {
		name: 'workspace',
    data() {
			return {
				email: ''
      }
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