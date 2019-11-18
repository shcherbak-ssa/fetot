<template>
  <div class="app-module-workspace pr w100 flex bs">
    <common-block v-for="(block, index) in getCurrentBlocks"
                  :key="index" :block="block">
    </common-block>
<!--    <component :is="getCurrentBlocksComponent"-->
<!--               v-for="(block, index) in getCurrentBlocks"-->
<!--               :key="index" :block="block">-->
<!--    </component>-->
  </div>
</template>

<script>
  import {currentBlocksStore} from '../../components/workers/current-blocks';
  import {clientStore} from '../../components/workers/client';

	export default {
		name: 'app-module-workspace',
    components: {
			'common-block': commonBlock
    },
    computed: {
			getCurrentBlocksComponent() {
				if( clientStore.state.config.blockType === 'common' ) return 'common-block'
      },
			getCurrentBlocks() {
				return currentBlocksStore.getters.getLikeArray()
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .app-module-workspace {
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
</style>