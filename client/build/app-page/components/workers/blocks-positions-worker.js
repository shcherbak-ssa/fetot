'use strict';

/*
*   current module use when screen width < 1280px
*
*   block width - 360px
*   margin size - 24px
*
* */

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const currentModuleStore = StoreWorker.getStore('current-module');

let blocksPositions = null;

/*** init [end] ***/
/*** exports [begin] ***/

function updateBlocksPositions(removeBlockPositions = false) {
	if( removeBlockPositions ) return blocksPositions = null;
	
	const blocksCount = currentModuleStore.state.config.settings.blocksCount;
	const blocksHeight = getCurrentBlockHeightByCurrentBlockSizeType(
		currentModuleStore.state.config.settings.blocksSizeType
	);
	
	const blocksConfigs = getBlocksConfigs(blocksCount);
	const topPosition = blocksHeight === undefined ? undefined : blocksHeight + 24;
	
	const blocksPositionsList = new Array(blocksCount + 1);
	blocksConfigs.forEach(({left, indexList}) => {
		indexList.forEach((index) => {
			blocksPositionsList[index] = {
				left: left + 'px',
				top: topPosition + 'px' }
		})
	});
	
	blocksPositions = blocksPositionsList;
}

/*** exports [end] ***/
/*** src [begin] ***/

function getCurrentBlockHeightByCurrentBlockSizeType(sizeType) {
	return [
		222, // is-normal
		122, // is-small
		80   // is-list
	][sizeType]
}
function getBlocksConfigs(blocksCount) {
	const remains = blocksCount % 3;
	const full = (blocksCount - remains) / 3;
	
	const optionalParams = remains !== 0 && (remains === 1) ? [1] : [1, 1];
	return preparingBlocksConfig(full,  ...optionalParams);
}

/* preparing blocks configs */
function preparingBlocksConfig(full, leftSideRemain = 0, centerRemain = 0) {
	return [
		preparingLeftSideBlocksConfig(full + leftSideRemain),
		preparingCenterBlocksConfig(full + centerRemain),
		preparingRightSideBlocksConfig(full)
	]
}
function preparingLeftSideBlocksConfig(count) {
	return {
		left: 0,
		indexList: createIndexList(count, 1)
	}
}
function preparingCenterBlocksConfig(count) {
	return {
		left: 384,
		indexList: createIndexList(count, 2)
	}
}
function preparingRightSideBlocksConfig(count) {
	return {
		left: 768,
		indexList: createIndexList(count, 3)
	}
}

/* create index list */
function createIndexList(count, number) {
	const indexNumber = (n) => 3 * n + number;
	const indexList = new Array(count);
	
	return indexList.map((it, i) => indexNumber(i));
}

/*** src [end] ***/

export {blocksPositions, updateBlocksPositions};