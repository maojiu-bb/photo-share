export const getToken = () => {
	return localStorage.getItem('token') || null
}

export const setToken = (Token) => {
	localStorage.setItem('token', Token)
}

export const removeToken = () => {
	localStorage.removeItem('token')
}
