const crud = require('./crud/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'crud':
      return await crud.main(event.data, context);
  }
};
