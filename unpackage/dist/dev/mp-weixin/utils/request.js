"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://localhost:3006";
const request = (option) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + option.url,
      method: option.method || "GET",
      data: option.data,
      success(res) {
        resolve(res.data);
      },
      fail() {
        reject(new Error("fail"));
      }
    });
  });
};
exports.request = request;
