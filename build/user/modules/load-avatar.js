'use strict';

function loadAvatarWorker(avatar) {
	let url = URL.createObjectURL(avatar);
	console.log(url);
}

export default {
	loadWorker: loadAvatarWorker
}