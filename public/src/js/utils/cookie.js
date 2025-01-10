// Set
function setCookie(name, value, minutes) {
	const expires = minutes ? `; expires=${new Date(Date.now() + minutes * 60000).toUTCString()}` : "";
	document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}${expires}; path=/`;
}

// Get
function getCookie(name) {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? JSON.parse(decodeURIComponent(match[2])) : null;
}

// Delete
function eraseCookie(name) {
	document.cookie = `${name}=; Max-Age=0; path=/`;
}

export { setCookie, getCookie, eraseCookie };
