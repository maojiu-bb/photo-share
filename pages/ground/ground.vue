<template>
	<view class="ground">
		<view class="ground-item" v-for="item in data.posts" :key="item.post_id">
			<view class="left">
				<image :src="item.post_cover"></image>
			</view>
			<view class="right">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text class="author">作者：{{item.post_author}}</text>
					<text class="count">评论：{{item.count}}</text>
				</view>
				<view class="date">
					<text class="pb_date">发布日期：{{item.post_date}}</text>
				</view>
			</view>
		</view>
		<view class="float" @click="goPost">+</view>
	</view>
</template>

<script setup>
	import {
		useHome
	} from '@/hooks/useHome.js'
	import {
		getToken
	} from '@/utils/token.js'

	const {
		data
	} = useHome()

	const goPost = () => {
		// #ifdef H5
		if (getToken()) {
			uni.navigateTo({
				url: '/pages/post/post'
			})
		} else {
			uni.showToast({
				title: '登录后再使用！',
				icon: 'none'
			})
		}
		// #endif
		// #ifdef MP-WEIXIN
		uni.navigateTo({
			url: '/pages/post/post'
		})
		// #endif
	}
</script>

<style lang="scss">
	.ground {
		padding-bottom: 120rpx;

		.ground-item {
			display: flex;
			width: 100%;
			height: 380rpx;
			background-color: #fff;
			border-bottom: 1px solid #ccc;

			.left {
				width: 300rpx;
				height: 100%;

				image {
					margin: 50rpx 15rpx 0;
					width: 280rpx;
					height: 280rpx;
					border-radius: 15%;
					border: 1px solid #ccc;
				}
			}

			.right {
				padding: 20rpx;
				padding-top: 70rpx;

				.title {
					line-height: 1.5;
				}

				.info {
					margin-top: 100rpx;
					font-size: 26rpx;

					.count {
						margin-left: 15rpx;
					}
				}

				.date {
					margin-top: 15rpx;

					.pb_date {
						font-size: 20rpx;
					}
				}
			}
		}

		.float {
			position: fixed;
			bottom: 160rpx;
			right: 60rpx;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			background-color: #1697db;
			text-align: center;
			line-height: 80rpx;
			color: #fff;
			font-size: 40rpx;
		}
	}
</style>
