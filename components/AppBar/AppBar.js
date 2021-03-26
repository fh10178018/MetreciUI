// components/AppBar/AppBar.js
Component({
  /**
   * content:标题内容
   */
  properties: {
    content:String
  },
  data:{
    hasBack:true
  },
  /**
   * havaBack： 是否有返回按钮
   * statusBarHeight：系统状态栏的高度
   * appBar: 导航栏相关位置和大小信息
   */
  data: {
    havaBack:true,
    statusBarHeight: 0,
    appBar:{
      height:0,
      paddingRight:0
    }
  },
  attached:function () {
    const statusBarHeight = wx.getSystemInfoSync()['statusBarHeight'];
    const statusBarWidth = wx.getSystemInfoSync()['windowWidth'];
    const {
      top,
      height,
      left
    } =wx.getMenuButtonBoundingClientRect()
    const appBar = {
      height:height+2*(top-statusBarHeight),
      paddingRight:statusBarWidth - left
    }
    let haveBack;
    if (getCurrentPages().length === 1) { // 当只有一个页面时，并且是从分享页进入
      haveBack = false;
    } else {
      haveBack = true;
    }
    this.setData({
      statusBarHeight,
      appBar,
      haveBack
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goBack: function () {
      wx.navigateBack({
        delta: 1
      });
    },
    goHome: function () {
      wx.navigateTo({
        url: '/pages/index/index',
      });
    }
  }
})
