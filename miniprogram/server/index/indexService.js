import { isDev } from '../../envList';
import { callFunction } from '../../utils/index';

export const getBannerList = async () => {
  if (isDev) {
    return {
      success: true,
      data: {
        records: [
          {
            img: 'https://order-3gdbxlltfdefc4c6-1352176522.tcloudbaseapp.com/resources/2025-04/lowcode-2239626',
          },
          // {
          //   img: 'https://order-3gdbxlltfdefc4c6-1352176522.tcloudbaseapp.com/resources/2025-04/lowcode-2239623',
          // },
        ],
      },
    };
  }
  return callFunction({
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
};
