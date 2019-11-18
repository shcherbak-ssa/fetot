'use strict';

/*** init [begin] ***/

const listStyles = 'padding-left:30px;margin-bottom:10px';

/*** init [end] ***/
/*** exports [begin] ***/

const drawBlock = {
	content: {
		getParagraph(paragraph) {
			return `<p style="margin-bottom: 10px;">${paragraph}</p>`
		},
		getList(list) {
			return (typeof list[0] === 'boolean' )
				? getNumberedList(list) : getMarkedList(list);
		}
	},
	info: {
		getDate(date) {
			date = new Date(date);
			return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
		}
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

function getNumberedList(list) {
	list.shift();
	return `<ol style="${listStyles}">${ preparingListItems(list) }</ol>`
}
function getMarkedList(list) {
	return `<ul style="${listStyles}">${ preparingListItems(list) }</ul>`
}
function preparingListItems(list) {
	return list.map((item) => `<li style="margin-bottom: 5px;">${item}</li>`).join('')
}

/*** src [end] ***/

export default drawBlock;