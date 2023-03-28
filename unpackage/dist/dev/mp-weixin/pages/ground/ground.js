"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useHome = require("../../hooks/useHome.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "ground",
  setup(__props) {
    const {
      data
    } = hooks_useHome.useHome();
    const goPost = () => {
      common_vendor.index.navigateTo({
        url: "/pages/post/post"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).posts, (item, k0, i0) => {
          return {
            a: item.post_cover,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.post_author),
            d: common_vendor.t(item.count),
            e: common_vendor.t(item.post_date),
            f: item.post_id
          };
        }),
        b: common_vendor.o(goPost)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/tupian/pages/ground/ground.vue"]]);
wx.createPage(MiniProgramPage);
