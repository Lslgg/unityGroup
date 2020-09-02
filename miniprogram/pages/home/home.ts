Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['nav1.jpg', 'nav2.jpg', 'nav1.jpg'],
    premises: [
      { name: '时代天居1', imgSrc: 'live1.jpg' },
      { name: '时代天居2', imgSrc: 'live2.jpg' },
      { name: '时代天居3', imgSrc: 'live1.jpg' },
      { name: '时代天居4', imgSrc: 'live2.jpg' },
      { name: '时代天居5', imgSrc: 'live1.jpg' },
      { name: '时代天居6', imgSrc: 'live2.jpg' },
    ],
    discounts: [
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live1.jpg', date: '09-12 15:30' },
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live2.jpg', date: '09-12 15:30' },
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live1.jpg', date: '09-12 15:30' },
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live2.jpg', date: '09-12 15:30' },
    ],
    dynamics: [
      { name: '时代招商天禧', subTitle: '首期25万起买品质三房，成熟配套，高端品质', imgSrc: 'live1.jpg', date: '2020-09-12 15:30' },
      { name: '时代招商天禧', subTitle: '向往生活，都在天禧', imgSrc: 'live2.jpg', date: '2020-09-12 15:30' },
      { name: '时代招商天禧', subTitle: '向往生活，都在天禧,文化艺术盛宴汇聚灯湖', imgSrc: 'live1.jpg', date: '2020-09-12 15:30' },
      { name: '时代招商天禧', subTitle: '美好生活从大华开始,总价39万起...', imgSrc: 'live2.jpg', date: '2020-09-12 15:30' },
    ]
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  }
})