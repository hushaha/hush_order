import { getBannerList } from '../../server/index/indexService';
import { transImgUrl } from '../../utils/index';

const app = getApp();

Page({
  data: {
    cardCur: 1,
    bannerList: [],
    customBarHeight: app.globalData.CustomBar,
    logo: '',
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

    // get banner list
    const res = await getBannerList();
    if (res.success) {
      const imgList = await transImgUrl(res.data.records.map((item) => item.img));
      this.setData({
        bannerList: imgList,
      });
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
    }
  },
  onCardSwiper(e) {
    this.setData({
      cardCur: e.detail.current,
    });
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
