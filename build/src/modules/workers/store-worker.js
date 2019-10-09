'use strict';

async function transformLikeMap(store) {
	return new Map( Object.entries(store) )
}

export default {
	transformLikeMap
};