'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const scrollWorker = {
	async runMouseScroll(type, {container, content}, {clientX: x0, clientY: y0}) {
		const metricMethod = type === 'horizontal' ? 'offsetWidth' : 'offsetHeight';
		if( container[metricMethod] > content[metricMethod] ) return;
		
		const returnValue = {};
		const position = type === 'horizontal' ? 'left' : 'top';
		
		const mousemoveHandler = getMousemoveHandler(type)(container, content, x0, y0, returnValue);
		
		document.addEventListener('mousemove', mousemoveHandler);
		document.addEventListener('mouseup', mouseupHandler);
		
		function mouseupHandler() {
			if( 'value' in returnValue ) content.style[position] = returnValue.value;

			document.removeEventListener('mousemove', mousemoveHandler);
			document.removeEventListener('mouseup', mouseupHandler);
		}
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

function getMousemoveHandler(type) {
	switch( type ) {
		case 'horizontal': return horizontalScrollHandler;
		case 'vertical': return verticalScrollHandler;
	}
}

/* handlers */
function horizontalScrollHandler(container, content, x0, y0, returnValue) {
	const {left: containerLiftX, right: containerRightX} = container.getBoundingClientRect();
	const initLeft = parseInt(content.style.left);
	
	return async ({clientX: x}) => {
		const {left: contentLiftX, right: contentRightX} = content.getBoundingClientRect();
		const currentX = x - x0;
		
		if( currentX > 0 ) {
			if( contentLiftX - containerLiftX > 0 )
				return returnValue.value = 0;
		} else {
			if( containerRightX - contentRightX > 0 )
				return returnValue.value = (container.offsetWidth - content.offsetWidth) + 'px';
		}
		
		content.style.left = initLeft + currentX + 'px';
	}
}
function verticalScrollHandler(container, content, x0, y0) {
	return async ({clientX: x, clientY: y}) => {
		console.log('x - %s; y - %s', x + '', y + '')
	}
}

/*** src [end] ***/

export default scrollWorker;