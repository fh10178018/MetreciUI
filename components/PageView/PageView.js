// components/PageView/PageView.js
Component({
  /**
   * showRefresh: 是否能够下拉刷新，默认为false
   */
  properties: {
    showRefresh:{
      type:Boolean,
      value:false
    }
  },

  /**
   * paddingTop:page隔出一部分给自定义的导航栏
   * triggered: 下拉和复位的控件
   */
  data: {
    paddingTop:0,
    triggered:false,
  },
  attached:function () {
    const statusBarHeight = wx.getSystemInfoSync()['statusBarHeight'];
    const {
      top,
      height
    } =wx.getMenuButtonBoundingClientRect();
    const paddingTop = height+2*top-statusBarHeight
    this.setData({paddingTop})
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPulling(event){ // 控件下拉触发
      this.triggerEvent('pulling', {event})
    },
    onRefresh() { // 下拉且处于刷新，做延迟，使其刷新复位
      // this._freshing用来防止刷新过程中多次刷新
      if (this._freshing) return
      this._freshing = true
      setTimeout(() => {
        this.setData({
          triggered: false,
        })
        this._freshing = false
      }, 3000)
    },
    onRestore(event){ // 控制下拉复位
      this.triggerEvent('restore', {event})
    },
    onAbort(event){ // 下拉刷新被终止
      this.triggerEvent('abort', {event})
    }
  }
})
