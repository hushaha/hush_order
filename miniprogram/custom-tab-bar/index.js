Component({
  data: {
    barList: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
      },
      {
        pagePath: '/pages/order/index',
        text: '点单',
      },
      {
        pagePath: '/pages/user-center/index',
        text: '我的',
      },
    ],
    selected: 0,
  },
  attached() {},
  methods: {
    switchTab(e) {
     const data = e.currentTarget.dataset;
     const url = data.path;
     wx.switchTab({ url });
     this.setData({
       selected: data.index,
     });
    },
  },
});
