import {
	request
} from '@/utils/request.js'
import {
	onLoad
} from '@dcloudio/uni-app'
import {
	reactive
} from "vue";

export const useHome = () => {
	const data = reactive({
		swiper: [],
		posts: []
	})

	onLoad(() => {
		getSwiper()
		getPosts()
	})

	const getSwiper = async () => {
		const result = await request({
			url: '/api/getSwiper',
			method: 'GET'
		})
		if (result.status === 200) {
			data.swiper = result.data
		} else {
			failMessage('轮播图')
		}
	}

	const getPosts = async () => {
		const result = await request({
			url: '/api/posts',
			method: 'GET'
		})
		if (result.status === 200) {
			data.posts = result.data
		} else {
			failMessage('精选列表')
		}
	}

	const failMessage = (message) => {
		uni.showToast({
			title: `获取${message}失败！`,
			icon: 'error',
			duration: 700
		})
	}

	const preview = (current) => {

		uni.previewImage({
			current,
			urls: data.posts.map(item => item.post_cover)
		})
	}

	return {
		data,
		preview
	}
}
