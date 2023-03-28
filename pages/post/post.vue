<template>
	<view class="post">
		<view class="example">
			<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="data.rules" :modelValue="data.valiFormData">
				<uni-forms-item label="标题" required name="title">
					<uni-easyinput v-model="data.valiFormData.title" placeholder="请输入标题" />
				</uni-forms-item>
				<uni-forms-item label="分类" required name="category">
					<uni-data-select collection="opendb-app-list" field="appid as value, name as text"
						v-model="data.valiFormData.category" :localdata="data.range" />
				</uni-forms-item>
				<uni-forms-item label="描述" name="description">
					<uni-easyinput type="textarea" v-model="data.valiFormData.description" placeholder="简短描述" />
				</uni-forms-item>
				<uni-forms-item label="封面" required name="cover">
					<view class="example-body">
						<uni-file-picker limit="1" title="" class="cover" :imageStyles="data.imageStyles"
							file-mediatype="image" file-extname="png,jpg" @select="select">
						</uni-file-picker>
					</view>
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit">发布</button>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		computed,
		reactive
	} from "vue";
	import {
		request
	} from '@/utils/request.js'

	const data = reactive({
		range: [],
		// 校验表单数据
		valiFormData: {
			title: '',
			category: '',
			description: '',
			cover: []
		},
		// 校验规则
		rules: {
			title: {
				rules: [{
					required: true,
					errorMessage: '标题不能为空'
				}]
			},
			category: {
				rules: [{
					required: true,
					errorMessage: '不能为空'
				}]
			}
		},
		imageStyles: {
			width: 200,
			height: 200,
			border: {
				radius: '10%'
			}
		}
	})

	onLoad(() => {
		getCategorys()
	})

	const getCategorys = async () => {
		const result = await request({
			url: '/api/imageCategory',
			method: 'GET'
		})
		if (result.status === 200) {
			result.data.forEach(item =>
				data.range.push({
					value: item.categoryId,
					text: item.category
				})
			)
		}
	}

	const select = (e) => {
		data.valiFormData.cover = e.tempFilePaths[0]
	}

	const submit = async () => {
		const params = {
			title: data.valiFormData.title,
			category: data.range.find(item => item.value === data.valiFormData.category).text,
			cover: data.valiFormData.cover
		}
		const result = await request({
			url: '/user/share',
			method: 'POST',
			params
		})
		console.log(result)
	}
</script>

<style lang="scss">
	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}

	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}
</style>
