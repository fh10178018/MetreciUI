// components/TabBar/TabBar.js

Component({
  options: {
    addGlobalClass: true
  },
  /**
   * pageCur：当前页码
   * classNmae: 额外添加的属性
   * list: 每页的信息
   */
  properties: {
    pageCur: {
      type: Number, // 属性
      value: 0 // 默认类型
    },
    className: String,
    list: {
      type: Array,
      value: []
    },
    style:String
  },
  /**
   * tabChange: tab点击触发函数
   */
  methods: {
    tabChange(e) {
      const {index} = e.currentTarget.dataset
      if (index === this.data.pageCur) {
        return
      }
      this.setData({
        pageCur: index
      })
      this.triggerEvent('change', {index, item: this.data.list[index]})
    }
  }
})
