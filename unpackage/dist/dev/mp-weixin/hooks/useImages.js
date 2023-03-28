"use strict";
const common_vendor = require("../common/vendor.js");
const utils_request = require("../utils/request.js");
const useImages = () => {
  const data = common_vendor.reactive({
    active: 1,
    categorys: [],
    images: []
  });
  common_vendor.onLoad(() => {
    getCategorys();
    currentCategory(1);
  });
  const getCategorys = async () => {
    const result = await utils_request.request({
      url: "/api/imageCategory",
      method: "GET"
    });
    if (result.status === 200) {
      data.categorys = result.data;
    } else {
      failMessage("分类列表");
    }
  };
  const currentCategory = async (current) => {
    data.active = current;
    const result = await utils_request.request({
      url: "/api/images?categoryId=" + current,
      method: "GET"
    });
    if (result.status === 200) {
      data.images = result.data;
    } else {
      failMessage("图片列表");
    }
  };
  const failMessage = (message) => {
    common_vendor.index.showToast({
      title: `获取${message}失败！`,
      icon: "error"
    });
  };
  const preview = (current) => {
    common_vendor.index.previewImage({
      current,
      urls: data.images.map((item) => item.img)
    });
  };
  return {
    data,
    currentCategory,
    preview
  };
};
exports.useImages = useImages;
