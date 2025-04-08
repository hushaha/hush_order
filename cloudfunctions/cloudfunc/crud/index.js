const cloud = require('wx-server-sdk');
const cloudbase = require('@cloudbase/node-sdk');

const app = cloudbase.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const models = app.models;

// 通用CRUD云函数入口函数
exports.main = async (event, context) => {
  const { model, operation, data, query, pageSize = 10, pageNumber = 1, getCount } = event;

  if (!model || !operation) {
    return {
      success: false,
      message: '缺少必要参数：model和operation',
    };
  }

  try {
    switch (operation) {
      case 'create':
        if (!data) {
          return {
            success: false,
            message: '创建操作需要data参数',
          };
        }
        const { data: createResult } = await models[model].create({
          data,
        });
        return {
          success: true,
          data: createResult,
        };

      case 'read':
        const { data: readResult } = await models[model].list({
          filter: query || {},
          pageSize,
          pageNumber,
          getCount,
        });
        return {
          success: true,
          data: readResult,
        };

      case 'update':
        if (!query || !data) {
          return {
            success: false,
            message: '更新操作需要query和update参数',
          };
        }
        const { data: updateResult } = await models[model].update({
          data,
          filter: query,
        });
        return {
          success: true,
          data: updateResult,
        };

      case 'delete':
        if (!query) {
          return {
            success: false,
            message: '删除操作需要query参数',
          };
        }
        const { data: deleteResult } = await models[model].delete({
          filter: query,
        });
        return {
          success: true,
          data: deleteResult,
        };

      default:
        return {
          success: false,
          message: '不支持的操作类型',
        };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
