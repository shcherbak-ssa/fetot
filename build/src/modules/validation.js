const validation = {
	mail(value) {
		return /[^\s@]+@(gmail|mail)\.(ru|com)/.test(value) ? false : 'Invalid e-mail address';
	},
	password(value) {
		return value.length < 8 ? 'A password cannot be under 8 symbols' : false;
	}
};

function checkEmpty(value) {
	return value ? false : 'Current field doesn\'t be empty'
}

export default (label, value) => {
	let isEmpty = checkEmpty(value);
	if( isEmpty ) return isEmpty;
	
	return validation[label](value);
}