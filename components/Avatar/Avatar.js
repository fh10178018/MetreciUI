// components/Avatar/Avatar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    size:{ // 头像大小
      type:String,
      default:'normal'
    },
    imageSrc:String, // 背景图路径
    isRound:Boolean, // 边缘是园的
    showSex:Boolean, // 是否展示性别
    isBoy:Boolean // 是男孩吗，不是则为女孩
  },  

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
