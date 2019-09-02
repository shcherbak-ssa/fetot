Components.input = {
	template: [
		[
			'<div class="input" data-label="',
			'"><div class="ph">',
			'</div><input type="text" class="item"><div class="error"></div></div>`'
		],
		''
	],
	build: [
		'.label',
		'.placeholder',
		'$error'
	],
	
};