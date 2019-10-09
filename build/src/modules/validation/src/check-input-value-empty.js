'use strict';

async function checkInputValueEmpty(value) {
	return (value.length === 0 || /^\s$/.test(value)) ? 'Current field doesn\'t be empty' : false
}

export default checkInputValueEmpty