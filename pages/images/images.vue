<template>
	<view class="images">
		<scroll-view scroll-y class="left">
			<view :class="{active: data.active === item.categoryId}" v-for="item in data.categorys"
				:key="item.categoryId" @click="currentCategory(item.categoryId)">
				{{item.category}}
			</view>
		</scroll-view>
		<scroll-view scroll-y class="right">
			<view class="item" v-for="(item, index) in data.images" :key="item.id">
				<image :src="item.img" mode="aspectFit" @click="preview(item.img)"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		useImages
	} from '@/hooks/useImages.js'
	const {
		data,
		currentCategory,
		preview
	} = useImages()
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.images {
		display: flex;
		/* #ifdef MP-WEIXIN */
		height: 100%;
		/* #endif */
		/* #ifdef H5 */
		height: 1417rpx;
		padding-bottom: 120rpx;
		/* #endif */

		.left {
			height: 100%;
			width: 240rpx;
			border-right: 1px solid #ccc;
			box-sizing: border-box;

			view {
				width: 100%;
				height: 120rpx;
				text-align: center;
				line-height: 120rpx;
				border-bottom: 1px solid #ccc;
				box-sizing: border-box;

				&.active {
					color: #fff;
					background-color: #1296db;
				}
			}
		}

		.right {
			height: 100%;
			width: 510rpx;

			.item {
				margin: 5prx;
				width: 500rpx;
				height: 400rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
