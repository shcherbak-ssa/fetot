<template>
  <div class="home-page-module">
    <fetot-grip-icon></fetot-grip-icon>
    <div class="header">
      <fetot-title>{{ module.name }}</fetot-title>
      <fetot-menu-icon></fetot-menu-icon>
    </div>
    <fetot-status-line></fetot-status-line>
    <div class="info"></div>
  </div>
</template>

<script>
  import fetotGripIcon from 'fetot-components/icons/fetot-grip-icon.vue';
  import fetotMenuIcon from 'fetot-components/icons/fetot-menu-icon.vue';

  import fetotIngoItem from 'fetot-components/elements/fetot-info-item.vue';
  import fetotStatusLine from 'fetot-components/elements/fetot-status-line.vue';
  import fetotTitle from 'fetot-components/elements/fetot-title.vue';

	export default {
		name: 'home-page-module',
    props: {
			module: Object
    },
    components: {
			'fetot-title': fetotTitle,
      'fetot-status-line': fetotStatusLine,
	    'fetot-grip-icon': fetotGripIcon,
	    'fetot-menu-icon': fetotMenuIcon,
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .home-page-module {
    background: #fff;
    position: relative;
    padding: 24px;
    width: 270px;
    @include box-sizing;
    @include static-shadow;

    .fetot-grip-icon {
      opacity: 0;
      top: 0;
      @include position-gor-center;
    }
    .header {
      align-items: center;
      width: 100%;
      @include flex-space-between;
    }
    .fetot-menu-icon {
      opacity: 0;
    }

    &:hover {
      @include hover-shadow;

      .fetot-grip-icon, .fetot-menu-icon {
        opacity: 1;
      }
    }
  }
</style>