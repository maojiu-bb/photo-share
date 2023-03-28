import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		request
	} from '@/utils/request.js'
	import {
		reactive
	} from "vue";

	export const useImages = () => {
		const data = reactive({
			active: 1,
			categorys: [],
			images: []
		})

		onLoad(() => {
			getCategorys()
			currentCategory(1)
		})

		const getCategorys = async () => {
			const result = await request({
				url: '/api/imageCategory',
				method: 'GET'
			})
			if (result.status === 200) {
				data.categorys = result.data
			} else {
				failMessage('分类列表')
			}
		}

		const currentCategory = async (current) => {
			data.active = current
			const result = await request({
				url: '/api/images?categoryId=' + current,
				method: 'GET',
			})
			if (result.status === 200) {
				data.images = result.data
			} else {
				failMessage('图片列表')
			}
		}

		const failMessage = (message) => {
			uni.showToast({
				title: `获取${message}失败！`,
				icon: 'error'
			})
		}

		const preview = (current) => {
			uni.previewImage({
				current,
				urls: data.images.map(item => item.img)
			})
		}

		return {
			data,
			currentCategory,
			preview
		}
	}
