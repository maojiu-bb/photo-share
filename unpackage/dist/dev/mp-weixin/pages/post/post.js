"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_select2 + _easycom_uni_file_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_select + _easycom_uni_file_picker + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "post",
  setup(__props) {
    const data = common_vendor.reactive({
      range: [],
      // 校验表单数据
      valiFormData: {
        title: "",
        category: "",
        description: "",
        cover: []
      },
      // 校验规则
      rules: {
        title: {
          rules: [{
            required: true,
            errorMessage: "标题不能为空"
          }]
        },
        category: {
          rules: [{
            required: true,
            errorMessage: "不能为空"
          }]
        }
      },
      imageStyles: {
        width: 200,
        height: 200,
        border: {
          radius: "10%"
        }
      }
    });
    common_vendor.onLoad(() => {
      getCategorys();
    });
    const getCategorys = async () => {
      const result = await utils_request.request({
        url: "/api/imageCategory",
        method: "GET"
      });
      if (result.status === 200) {
        result.data.forEach(
          (item) => data.range.push({
            value: item.categoryId,
            text: item.category
          })
        );
      }
    };
    const select = (e) => {
      data.valiFormData.cover = e.tempFilePaths[0];
    };
    const submit = async () => {
      const params = {
        title: data.valiFormData.title,
        category: data.range.find((item) => item.value === data.valiFormData.category).text,
        cover: data.valiFormData.cover
      };
      const result = await utils_request.request({
        url: "/user/share",
        method: "POST",
        params
      });
      console.log(result);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => data.valiFormData.title = $event),
        b: common_vendor.p({
          placeholder: "请输入标题",
          modelValue: data.valiFormData.title
        }),
        c: common_vendor.p({
          label: "标题",
          required: true,
          name: "title"
        }),
        d: common_vendor.o(($event) => data.valiFormData.category = $event),
        e: common_vendor.p({
          collection: "opendb-app-list",
          field: "appid as value, name as text",
          localdata: data.range,
          modelValue: data.valiFormData.category
        }),
        f: common_vendor.p({
          label: "分类",
          required: true,
          name: "category"
        }),
        g: common_vendor.o(($event) => data.valiFormData.description = $event),
        h: common_vendor.p({
          type: "textarea",
          placeholder: "简短描述",
          modelValue: data.valiFormData.description
        }),
        i: common_vendor.p({
          label: "描述",
          name: "description"
        }),
        j: common_vendor.o(select),
        k: common_vendor.p({
          limit: "1",
          title: "",
          imageStyles: data.imageStyles,
          ["file-mediatype"]: "image",
          ["file-extname"]: "png,jpg"
        }),
        l: common_vendor.p({
          label: "封面",
          required: true,
          name: "cover"
        }),
        m: common_vendor.sr("valiForm", "4f91e5ce-0"),
        n: common_vendor.p({
          rules: data.rules,
          modelValue: data.valiFormData
        }),
        o: common_vendor.o(submit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/tupian/pages/post/post.vue"]]);
wx.createPage(MiniProgramPage);
