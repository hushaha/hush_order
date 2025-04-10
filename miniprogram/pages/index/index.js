import { getTopGoods, getTypeList, getHotGoods } from '../../server/index/indexService';

const app = getApp();

Page({
  data: {
    logo: '',
    cardCur: 1,
    customBarHeight: app.globalData.CustomBar,
    topGoods: [],
    typeList: [],
    hotGoods: [],
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
    }
  },

  async onLoad() {
    // get logo
    if (!app.globalData.config.logo) {
      app.loadCallBack = () => {
        this.setData({
          logo: app.globalData.config.logo,
        });
        app.loadCallBack = null;
      };
    } else {
      this.setData({
        logo: app.globalData.config.logo,
      });
    }

    this.setTopGoods();
    this.setTypeList();
    this.setHotGoods();
  },

  async setTopGoods() {
    const res = await getTopGoods();
    if (res.success) {
      this.setData({
        topGoods: res.data.records,
      });
    }
  },

  async setTypeList() {
    const res = await getTypeList();
    if (res.success) {
      this.setData({
        typeList: res.data.records,
      });
    }
  },

  async setHotGoods() {
    const res = await getHotGoods();
    if (res.success) {
      this.setData({
        hotGoods: res.data.records,
      });
    }
  },

  onCardSwiper(e) {
    this.setData({
      cardCur: e.detail.current,
    });
  },
});
