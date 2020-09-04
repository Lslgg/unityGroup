Page({

  /**
   * 页面的初始数据
   */
  data: {
    popWindowHeight: 0,
    scrollTop: 0,
    isPopWindow: false,
    background: ['nav1.jpg', 'nav2.jpg', 'nav1.jpg'],
    roomTypes: [
      { title: '2室1厅1卫', imgSrc: 'roomType.jpg', acreage: '100平方', price: '价格待定' },
      { title: '3室3厅2卫', imgSrc: 'roomType1.jpg', acreage: '120平方', price: '价格待定' },
      { title: '4室3厅2卫', imgSrc: 'roomType.jpg', acreage: '150平方', price: '价格待定' },
      { title: '5室5厅4卫', imgSrc: 'roomType1.jpg', acreage: '290平方', price: '价格待定' },
    ],
    discounts: [
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live1.jpg', date: '09-12 15:30' },
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live2.jpg', date: '09-12 15:30' },
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live1.jpg', date: '09-12 15:30' },
      { title: '美好生活从大华开始,总价 39万起享受美好百万小镇', imgSrc: 'live2.jpg', date: '09-12 15:30' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  onPageScroll: function (e) {
    this.setData({
      scrollTop: e.scrollTop,
    })
  },

  onSubject() {
    this.setData({
      isPopWindow: true,
    })
  },

  onHidePopWindow() {
    this.setData({
      isPopWindow: false,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    var query = wx.createSelectorQuery();
    query.select('#detail-page').boundingClientRect();
    query.exec((res) => {
      const h = res[0].height;
      console.log(res[0].scrollTop);
      this.setData({
        popWindowHeight: h
      });
    });
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