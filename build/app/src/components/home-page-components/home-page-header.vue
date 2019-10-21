<template>
  <div class="home-page-header">
    <div class="modes">
      <fetot-mode-icon v-for="(mode, key) in modes" :mode="mode" :key="key"/>
    </div>
    <div class="client">
      <div class="cont">
        <div class="full-name">{{ client.fullname }}</div>
        <div class="email">{{ client.email }}</div>
      </div>
      <fetot-ava :fullname="client.fullname" size="64"></fetot-ava>
    </div>
  </div>
</template>

<script>
	import fetotModeIcon from 'fetot-components/icons/fetot-mode-icon.vue';
	import fetotAva from 'fetot-components/elements/fetot-ava.vue';

	import storeWorker from 'fetot-worker-modules/store-worker';

	export default {
		name: 'home-page-header',
    data() {
			return {
				client: storeWorker.getGlobalStore('client')
      }
    },
    props: {
			modes: Array
    },
    components: {
	    'fetot-mode-icon': fetotModeIcon,
      'fetot-ava': fetotAva
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .home-page-header {
    width: 100%;
    margin-bottom: 40px;
    @include flex-space-between;
  }

  .client {
    @include flex-align-items-center;
  }
  .modes {
    display: flex;
  }
  .full-name {
    color: $fetot-dark-blue;
    font: 24px 'roboto-medium';
    margin-bottom: 5px;
  }
  .email {
    color: $fetot-azure;
    font: 18px 'roboto-light';
  }
  .full-name, .email {
    text-align: right;
  }
  .fetot-ava {
    margin-left: 10px;
  }
</style>