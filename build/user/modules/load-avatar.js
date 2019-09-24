'use strict';

function loadAvatarWorker(avatar) {
	return URL.createObjectURL(avatar);
}
async function changeAvatarWorker(url, canvas) {
	let context = canvas.getContext('2d'),
		avatar = new Image();
	
	avatar.src = url;
	return avatar.onload = () => {
		context.drawImage(avatar, 0, 0, canvas.width, canvas.height);
		
	}
}

export default {
	loadWorker: loadAvatarWorker,
	changeWorker: changeAvatarWorker
}