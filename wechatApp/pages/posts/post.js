Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content=[
      {
        date: "2018.06.08",
        title: "2017-2018赛季总决赛",
        post_img: "/images/四巨头.jpg",
        content: "四巨头的王朝，詹皇虽败犹荣！骑士再失败！",
        view_num: "97",
        collect_num: "45",
        author_img: "/images/3.jpg"
      },{
        date: "2018.06.09",
        title: "詹皇何去何从？",
        post_img: "/images/jamesTO.jpg",
        content: "在过去的四场NBA总决赛比赛中，詹姆斯打出“MVP”级别的数据，尤其是当他在最后时刻下场时，球迷依依不舍地喊着“MVP MVP”，这个伟大的NBA球星在本赛季的表现，早已是全世界篮球人心中的“MVP”。",
        view_num: "997",
        collect_num: "145",
        author_img: "/images/1.jpg"
      }, {
        date: "2018.06.10",
        title: "上合峰会灯光焰火秀上演 青岛绝美夜景惊艳世界",
        post_img: "/images/4.jpg",
        content: "央广网青岛6月9日消息（记者胡莹莹）山水一体，海天一色。9日晚，上合组织青岛峰会在青岛奥帆中心举行灯光焰火艺术表演《有朋自远方来》，以迎接出席峰会的各国嘉宾。舞台以海和城市为背景，夜景和烟花完美结合，整个城市的灯光和现代化姿态尽收眼底，成为整场演出最大亮点。",
        view_num: "697",
        collect_num: "405",
        author_img: "/images/2.jpg"
      }
    ]
    
    this.setData({
      post_key:post_content
    });
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