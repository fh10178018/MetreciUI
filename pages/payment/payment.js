var {getFormat} = require('../../utils/util')

// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false,
    endTime:1616759808000,
    countDown:0,
    stringTime:'',
  },
  handleClick(){
    this.setData({
      isLoading:true
    })
  },
   /**
 * 倒计时
 */
 setCountDown: function () {
    let time = 1000;
    let { countDown,stringTime } = this.data;
    if (countDown <= 0) {
      countDown = 0;
    }
    let format = getFormat(countDown);
    countDown -= time;
    stringTime = `${format.hh}:${format.mm}:${format.ss}`;
    this.setData({
      countDown,
      stringTime
    });
    setTimeout(this.setCountDown, time);
  },
  setInitialTime:function(){
    const timestamp = Date.parse(new Date()); // 获取时间戳，只精确到秒
    let countDown = this.data.endTime - timestamp
    this.setData({
      countDown
    })
  },
  onLoad: function () {
    this.setInitialTime()
    this.setCountDown()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})