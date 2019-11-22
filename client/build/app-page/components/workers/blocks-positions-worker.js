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

function removeBlocksPositions() {
	blocksPositions = null;
}
function updateBlocksPositions() {
	const blocksCount = currentModuleStore.getters.settingsByKey('blocksCount');
	const blocksHeight = getCurrentBlockHeightByCurrentBlockSizeType(
		currentModuleStore.getters.settingsByKey('blocksSizeType')
	);
	
	// console.log('blocks-count:', blocksCount);
	// console.log('blocks-height:', blocksHeight);
	
	const blocksConfigs = getBlocksConfigs(blocksCount);
	const topPositionIncrement = blocksHeight === undefined ? undefined : blocksHeight + 24;
	
	// console.log('blocks-config:', blocksConfigs);
	// console.log('topPositionIncrement:', topPositionIncrement);
	
	const blocksPositionsList = new Array(blocksCount + 1);
	blocksConfigs.forEach(({left, indexList}) => {
		indexList.forEach((index, i) => {
			blocksPositionsList[index] = {
				left: left + 'px',
				top: topPositionIncrement * i + 'px' } // just do it
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
	const indexList = [];
	
	for( let i = 0; i < count; i += 1 )
		indexList[i] = 3 * i + number;
	
	return indexList;
}

/*** src [end] ***/

export {blocksPositions, updateBlocksPositions, removeBlocksPositions};