"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useHome = require("../../hooks/useHome.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const {
      data,
      preview
    } = hooks_useHome.useHome();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).swiper, (item, k0, i0) => {
          return {
            a: item.url,
            b: item.id
          };
        }),
        b: common_vendor.f(common_vendor.unref(data).posts, (item, index, i0) => {
          return {
            a: item.post_cover,
            b: common_vendor.o(($event) => common_vendor.unref(preview)(item.post_cover), item.post_id),
            c: common_vendor.t(item.title),
            d: item.post_id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/tupian/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
