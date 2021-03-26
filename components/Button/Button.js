// components/Button/Button.js
Component({
  /**
   * isText: 是否是文本按钮，是的话，注意不具有背景色和loading效果
   * bgColor: 背景属性颜色,具体参考颜色看文档
   * size: button的大小,small、large、normal
   * style: 组件自定义样式
   * isRound：边框是否为圆形
   */
  properties: {
    isText:Boolean, // text、primary、
    style:String, // 自定义style样式
    size:{
      type:String,
      value:'normal'
    },
    bgColor:String,
    isRound:Boolean,
    isLoading:{
      type:Boolean,
      value:false
    },
    disabled:Boolean
  },
  data:{
    textSize:'text-df'
  },
  attached:function () {
    if(this.properties.isText){
      this.setData({
        bgColor:'',
        isRound:false
      })
    }
    let textSize;
    switch (this.properties.size) {
      case 'small':
        textSize = 'text-xs'
        break;
      case 'normal':
        textSize = 'text-df'
        break;
      case 'large':
        textSize = 'text-lg'
        break;   
      default:
        textSize = 'text-df'
        break;
    }
    this.setData({
      textSize
    })
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  pageLifetimes: {
    show: function () {
      let query = wx.createSelectorQuery().in(this);
      let that = this;
      query.select('.metreci-btn').boundingClientRect(function (rect) {
        that.setData({
          height: rect.height + 'px',
          width: rect.width + 'px'
        })
      }).exec();
    }
  }
})
