# 需求

请设计一个餐饮/零售点单微信小程序，包含3个核心页面：首页（Home）、点单展示页（Menu）、个人中心（My）。
UI风格采用Fluent Design设计语言，主色调为#FF6B81（暖粉色）和#FFFFFF（纯白）。
* 首页需展示推荐菜品和促销信息
* 点单列表需清晰展示菜品分类和详情，
* 个人中心需包含订单历史和用户信息。

整体设计需大方优雅，注重用户体验

# 调用云函数示例

读取根目录cloudfunctions目录下的cloudfunc文件夹中的index.js文件，调用方式如下：

```js
 wx.cloud.callFunction({
     name: 'cloudfunc',
     data: {
         type: 'type',
         data: {
             model: 'bjlb',
             operation: 'read',
             query: {
                 code: 'index'
             }
         }
     }
 })
```

其中data中的type为请求类型，data为请求数据

