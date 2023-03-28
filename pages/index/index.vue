<template>
	<view class="home">
		<!-- 顶部轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper" circular>
			<swiper-item class="swiper-item" v-for="item in data.swiper" :key="item.id">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		<!-- 精选列表 -->
		<view class="curation">
			<!-- 标题 -->
			<view class="title">精选列表</view>
			<!-- items -->
			<view class="card">
				<view class="curation-item" v-for="(item, index) in data.posts" :key="item.post_id">
					<image :src="item.post_cover" mode="aspectFit" @click="preview(item.post_cover)"></image>
					<view class="text">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		useHome
	} from '@/hooks/useHome.js'

	const {
		data,
		preview
	} = useHome()
</script>

<style lang="scss">
	.home {
		.swiper {
			width: 750rpx;
			height: 500rpx;

			.swiper-item {
				width: 100%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.curation {
			width: 750rpx;
			/* #ifdef H5 */
			padding-bottom: 120rpx;
			/* #endif */

			.title {
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 35rpx;
			}

			.card {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				background-color: #efefef;

				.curation-item {
					background-color: #fff;
					width: 360rpx;
					margin: 10rpx;

					&:nth-child(2n) {
						margin-left: 0;
					}

					image {
						width: 100%;
						height: 400rpx;
					}

					.text {
						margin: 20rpx;
						margin-top: 0;
						/* #ifdef H5 */
						font-size: 28rpx;
						/* #endif */
						/* #ifdef MP-WEIXIN */
						font-size: 24rpx;
						/* #endif */
						line-height: 1.5;

					}
				}
			}
		}
	}
</style>
