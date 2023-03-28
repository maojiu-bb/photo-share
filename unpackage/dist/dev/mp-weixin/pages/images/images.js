"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useImages = require("../../hooks/useImages.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "images",
  setup(__props) {
    const {
      data,
      currentCategory,
      preview
    } = hooks_useImages.useImages();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).categorys, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.category),
            b: common_vendor.unref(data).active === item.categoryId ? 1 : "",
            c: item.categoryId,
            d: common_vendor.o(($event) => common_vendor.unref(currentCategory)(item.categoryId), item.categoryId)
          };
        }),
        b: common_vendor.f(common_vendor.unref(data).images, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.o(($event) => common_vendor.unref(preview)(item.img), item.id),
            c: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/tupian/pages/images/images.vue"]]);
wx.createPage(MiniProgramPage);
