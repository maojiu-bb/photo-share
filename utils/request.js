const BASE_URL = 'http://localhost:3006'

export const request = (option) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + option.url,
			method: option.method || 'GET',
			data: option.data,
			success(res) {
				resolve(res.data)
			},
			fail() {
				reject(new Error('fail'))
			}
		})
	})
}
