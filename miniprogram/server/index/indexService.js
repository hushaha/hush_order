import { callFunction } from '../../utils/index';

export const getBannerList = async () => {
  return callFunction({
    name: 'cloudfunc',
    data: {
      type: 'crud',
      data: {
        model: 'bjlb',
        operation: 'read',
        query: {
          code: 'index', // banner图片
        },
      },
    },
  });
};

// 获取销量最好的4个商品
export const getTopGoods = async () => {
  return callFunction({
    name: 'cloudfunc',
    data: {
      type: 'crud',
      data: {
        model: 'shop_product',
        operation: 'read',
        query: {
          orderBy: [
            {
              xl: "desc", // 创建时间，倒序
            },
          ],
          pageSize: 4
        }
      },
    },
  })
}

export const getTypeList = async () => {
  return callFunction({
    name: 'cloudfunc',
    data: {
      type: 'crud',
      data: {
        model: 'shop_category',
        operation: 'read',
        query: {
          select: {
            $master: true,
            ssfl: {
              _id: true
            }
          },
        }
      },
    },
  })
}

export const getHotGoods = async () => {
  return callFunction({
    name: 'cloudfunc',
    data: {
      type: 'crud',
      data: {
        model: 'shop_product',
        operation: 'read',
        query: {
          orderBy: [
            {
              xl: "desc", // 创建时间，倒序
            },
          ],
          pageSize: 4
        }
      },
    },
  })
}
