"use strict";
const common_vendor = require("../common/vendor.js");
const utils_request = require("../utils/request.js");
const useHome = () => {
  const data = common_vendor.reactive({
    swiper: [],
    posts: []
  });
  common_vendor.onLoad(() => {
    getSwiper();
    getPosts();
  });
  const getSwiper = async () => {
    const result = await utils_request.request({
      url: "/api/getSwiper",
      method: "GET"
    });
    if (result.status === 200) {
      data.swiper = result.data;
    } else {
      failMessage("轮播图");
    }
  };
  const getPosts = async () => {
    const result = await utils_request.request({
      url: "/api/posts",
      method: "GET"
    });
    if (result.status === 200) {
      data.posts = result.data;
    } else {
      failMessage("精选列表");
    }
  };
  const failMessage = (message) => {
    common_vendor.index.showToast({
      title: `获取${message}失败！`,
      icon: "error",
      duration: 700
    });
  };
  const preview = (current) => {
    common_vendor.index.previewImage({
      current,
      urls: data.posts.map((item) => item.post_cover)
    });
  };
  return {
    data,
    preview
  };
};
exports.useHome = useHome;
