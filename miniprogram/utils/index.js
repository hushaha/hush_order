export const transImgUrl = async (fileList) => {
  const res = await wx.cloud.getTempFileURL({ fileList });
  return res.fileList.map((item) => item.tempFileURL);
};

export const callFunction = async ({ name, data }) => {
  try {
    const res = await wx.cloud.callFunction({
      name,
      data,
    });

    if (res.errMsg !== 'cloud.callFunction:ok') {
      wx.showToast({
        title: '数据加载失败',
        icon: 'none',
      });
    }

    return res.result;
  } catch (error) {
    wx.showToast({
      title: error,
      icon: 'none',
    });

    return {
      errorCode: 0,
    };
  }
};
