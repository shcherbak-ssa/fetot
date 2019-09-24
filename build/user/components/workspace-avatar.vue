<template>
  <div class="workspace-avatar">
    <fetot-avatar size="big" :value="fullname.value" :url="url"/>
    <label class="link">
      Load your avatar
      <input type="file" @change="loadAvatarHandler($event.target.files[0])">
    </label>
  </div>
</template>

<script>
	import fetotEventsHandlers from 'fetot-js-modules/fetot-events-handlers';
	import fetotAvatar from 'fetot-components/fetot-avatar.vue';

	export default {
		name: 'workspace-avatar',
    props: {
			fullname: Object,
      url: String
    },
    components: {
			'fetot-avatar': fetotAvatar
    },
    methods: {
	    loadAvatarHandler(avatar) {
		    fetotEventsHandlers.emit('load-avatar', avatar);
	    }
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .workspace-avatar {
    display: flex;
    margin-bottom: 30px;
    width: 300px;

    .fetot-avatar {
      margin-right: 10px;
    }
    input {
      display: none;
    }
    .link {
      display: flex;
      align-items: center;
      color: $fetot-azure;
      cursor: pointer;
      font: 18px sans-serif;

      &:hover {
        text-decoration: underline;
      }
    }
    .txt {
      color: $fetot-dark-gray;
      font: lighter 14px sans-serif;
    }
  }
</style>