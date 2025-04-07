Page({
  data: {
    bannerList: [],
  },
  async onLoad(options) {
    try {
      const res = await wx.cloud.callFunction({
        name: 'cloudfunc',
        data: {
          type: 'crud',
          data: {
            model: 'bjlb',
            operation: 'read',
            query: {
              code: 'index',
            },
          },
        },
      });

      if (res.errMsg === 'cloud.callFunction:ok') {
        console.log(res.result.data.records.map((item) => item.img));

        const imgList = await wx.cloud.getTempFileURL({ fileList: res.result.data.records.map((item) => item.img) });
        console.log(imgList);
        // this.setData({
        //   bannerList: res.records,
        // });
      } else {
        wx.showToast({
          title: '数据加载失败',
          icon: 'none',
        });
      }
    } catch (err) {
      wx.showToast({
        title: '网络请求失败',
        icon: 'none',
      });
    }
  },
  onShow: function () {
    // 页面显示时执行
  },
  onReady: function () {
    // 页面首次渲染完毕时执行
  },
  onHide: function () {
    // 页面隐藏时执行
  },
  onUnload: function () {
    // 页面卸载时执行
  },
  gotoGoodsListPage() {
    wx.navigateTo({
      url: '/pages/goods-list/index',
    });
  },
  navigateToPickup: function () {
    wx.navigateTo({
      url: '/pages/order/order?type=pickup',
    });
  },
  navigateToDelivery: function () {
    wx.navigateTo({
      url: '/pages/order/order?type=delivery',
    });
  },
});
