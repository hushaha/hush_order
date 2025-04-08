import { getBannerList } from '../../server/index/indexService';
import { transImgUrl } from '../../utils/index';

Page({
  data: {
    bannerList: [],
  },
  async onLoad() {
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
