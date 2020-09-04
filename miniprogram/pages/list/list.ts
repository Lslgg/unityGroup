Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'List Page',
    types: [
      { name: '直播看房', icon: 'fa-television' },
      { name: '近期开盘', icon: 'fa-ils' },
      { name: '底总价', icon: 'fa-line-chart' },
      { name: '优惠楼盘', icon: 'fa-sort-alpha-desc' }
    ],
    premises: [
      { name: '时代天居1', imgSrc: 'live1.jpg' },
      { name: '时代天居2', imgSrc: 'live2.jpg' },
      { name: '时代天居3', imgSrc: 'live1.jpg' },
      { name: '时代天居4', imgSrc: 'live2.jpg' },
      { name: '时代天居5', imgSrc: 'live1.jpg' },
      { name: '时代天居6', imgSrc: 'live2.jpg' },
    ],
    isMore: true,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log(this);
    this.setData({
      premises: this.data.premises.concat(this.data.premises)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  }
})