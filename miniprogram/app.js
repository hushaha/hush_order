const { getConfig } = require('./server/globalService');

// app.js
App({
  onLaunch: async function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: wx.cloud.DYNAMIC_CURRENT_ENV,
        traceUser: true,
      });
    }

    wx.showLoading({
      title: '加载中',
    });

    this.globalData = {
      config: {},
    };
    this.loadCallBack = null;

    // 获取设备信息
    wx.getSystemInfo({
      success: (e) => {
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        this.globalData.StatusBar = e.statusBarHeight;
      },
    });

    // 获取配置信息
    const res = await getConfig();
    this.globalData.config = res;
    this.loadCallBack?.();

    wx.hideLoading();
  },
});
