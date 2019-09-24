<template>
  <div class="workspace-avatar">
    <fetot-avatar size="big" :value="fullname.value" :url="url"/>
    <fetot-link fontSize="18px">
      <label class="label">
        Load your avatar
        <input type="file" hidden @change="loadAvatarHandler($event.target.files[0])">
      </label>
    </fetot-link>
  </div>
</template>

<script>
	import fetotAvatar from 'fetot-components/fetot-avatar.vue';
	import fetotLink from 'fetot-components/elements/fetot-link.vue';

	import fetotEventsHandlers from 'fetot-js-modules/fetot-events-handlers';

	export default {
		name: 'workspace-avatar',
    props: {
			fullname: Object,
      url: String
    },
    components: {
			'fetot-avatar': fetotAvatar,
      'fetot-link': fetotLink
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
    display: none;
    //display: flex;
    margin-bottom: 30px;
    width: 300px;

    .fetot-avatar {
      margin-right: 10px;
    }
    .label {
      height: 100%;
      cursor: pointer;
      @include flex-align-items-center;
    }
    .txt {
      color: $fetot-dark-gray;
      font: lighter 14px sans-serif;
    }
  }
</style>