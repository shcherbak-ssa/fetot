'use strict';

/*
*   current module use when screen width < 1280px
*
*   block width - 360px
*   margin size - 24px
*
* */

/*** exports [begin] ***/

function getBlocksPositionsConfigs(blocksCount) {
	const remains = blocksCount % 3;
	const full = (blocksCount - remains) / 3;
	
	const optionalParams = remains !== 0 && (remains === 1) ? [1] : [1, 1];
	return preparingBlocksConfig(full,  ...optionalParams);
}

/*** exports [end] ***/
/*** src [begin] ***/

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

export {getBlocksPositionsConfigs};