import { callFunction } from '../utils/index';

export const getConfig = async () => {
  const res = await callFunction({
    name: 'cloudfunc',
    data: {
      type: 'crud',
      data: {
        model: 'qjbl',
        operation: 'read',
      },
    },
  });

  return res.data.records[0] || {};
};
