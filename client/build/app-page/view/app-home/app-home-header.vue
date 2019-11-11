<template>
  <div class="app-home-header">
    <div class="client-info">
      <div class="name">{{ client.fullname }}</div>
      <fetot-ava @fetot-ava-click="avaClickHandler" :fullname="client.fullname" size="46"/>
    </div>
  </div>
</template>

<script>
	import fetotAva from '$fetot-view/elements/fetot-ava.vue';
	import {clientStore, clientHandlers} from '../../components/workers/client';

	export default {
		name: 'app-home-header',
    data() {
			return {
				client: clientStore.state.config
      }
    },
    components: {
			'fetot-ava': fetotAva
    },
    methods: {
			avaClickHandler() {
				return clientHandlers.clientOpenMenuHandler()
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-home-header {
    position: relative;
    height: 60px;
    margin-bottom: 24px;
  }
  .client-info {
    overflow: hidden;
    padding: 5px;
    position: absolute;
    top: 0;
    right: 0;
    @include flex-align-items-center;
  }
  .fetot-ava {
    margin-left: 12px;
  }
  .name {
    color: $fetot-dark-blue;
    font: 18px 'roboto-medium';
    transition: .4s;

    @media screen and (max-width: 640px) {
      display: none;
    }

    .is-close & {
      opacity: 0;
    }
  }
</style>