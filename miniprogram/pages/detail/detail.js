"use strict";
Page({
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
    onLoad: function () {
    },
    onPageScroll: function (e) {
        console.log(e.scrollTop);
        this.setData({
            scrollTop: e.scrollTop,
        });
    },
    onSubject: function () {
        this.setData({
            isPopWindow: true,
        });
    },
    onHidePopWindow: function () {
        this.setData({
            isPopWindow: false,
        });
    },
    onReady: function () {
        var _this = this;
        var query = wx.createSelectorQuery();
        query.select('#detail-page').boundingClientRect();
        query.exec(function (res) {
            var h = res[0].height;
            console.log(res[0].scrollTop);
            _this.setData({
                popWindowHeight: h
            });
        });
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsQ0FBQztRQUNsQixTQUFTLEVBQUUsQ0FBQztRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1FBQ2hELFNBQVMsRUFBRTtZQUNULEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUM1RSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDN0UsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQzVFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUM5RTtRQUNELFNBQVMsRUFBRTtZQUNULEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNoRixFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDaEYsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ2hGLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUNqRjtLQUNGO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFFRCxZQUFZLEVBQUUsVUFBVSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7U0FDdkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87UUFBUCxpQkFVQztRQVRDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNiLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxlQUFlLEVBQUUsQ0FBQzthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHBvcFdpbmRvd0hlaWdodDogMCxcbiAgICBzY3JvbGxUb3A6IDAsXG4gICAgaXNQb3BXaW5kb3c6IGZhbHNlLFxuICAgIGJhY2tncm91bmQ6IFsnbmF2MS5qcGcnLCAnbmF2Mi5qcGcnLCAnbmF2MS5qcGcnXSxcbiAgICByb29tVHlwZXM6IFtcbiAgICAgIHsgdGl0bGU6ICcy5a6kMeWOhTHljasnLCBpbWdTcmM6ICdyb29tVHlwZS5qcGcnLCBhY3JlYWdlOiAnMTAw5bmz5pa5JywgcHJpY2U6ICfku7fmoLzlvoXlrponIH0sXG4gICAgICB7IHRpdGxlOiAnM+WupDPljoUy5Y2rJywgaW1nU3JjOiAncm9vbVR5cGUxLmpwZycsIGFjcmVhZ2U6ICcxMjDlubPmlrknLCBwcmljZTogJ+S7t+agvOW+heWumicgfSxcbiAgICAgIHsgdGl0bGU6ICc05a6kM+WOhTLljasnLCBpbWdTcmM6ICdyb29tVHlwZS5qcGcnLCBhY3JlYWdlOiAnMTUw5bmz5pa5JywgcHJpY2U6ICfku7fmoLzlvoXlrponIH0sXG4gICAgICB7IHRpdGxlOiAnNeWupDXljoU05Y2rJywgaW1nU3JjOiAncm9vbVR5cGUxLmpwZycsIGFjcmVhZ2U6ICcyOTDlubPmlrknLCBwcmljZTogJ+S7t+agvOW+heWumicgfSxcbiAgICBdLFxuICAgIGRpc2NvdW50czogW1xuICAgICAgeyB0aXRsZTogJ+e+juWlveeUn+a0u+S7juWkp+WNjuW8gOWniyzmgLvku7cgMznkuIfotbfkuqvlj5fnvo7lpb3nmb7kuIflsI/plYcnLCBpbWdTcmM6ICdsaXZlMS5qcGcnLCBkYXRlOiAnMDktMTIgMTU6MzAnIH0sXG4gICAgICB7IHRpdGxlOiAn576O5aW955Sf5rS75LuO5aSn5Y2O5byA5aeLLOaAu+S7tyAzOeS4h+i1t+S6q+WPl+e+juWlveeZvuS4h+Wwj+mVhycsIGltZ1NyYzogJ2xpdmUyLmpwZycsIGRhdGU6ICcwOS0xMiAxNTozMCcgfSxcbiAgICAgIHsgdGl0bGU6ICfnvo7lpb3nlJ/mtLvku47lpKfljY7lvIDlp4ss5oC75Lu3IDM55LiH6LW35Lqr5Y+X576O5aW955m+5LiH5bCP6ZWHJywgaW1nU3JjOiAnbGl2ZTEuanBnJywgZGF0ZTogJzA5LTEyIDE1OjMwJyB9LFxuICAgICAgeyB0aXRsZTogJ+e+juWlveeUn+a0u+S7juWkp+WNjuW8gOWniyzmgLvku7cgMznkuIfotbfkuqvlj5fnvo7lpb3nmb7kuIflsI/plYcnLCBpbWdTcmM6ICdsaXZlMi5qcGcnLCBkYXRlOiAnMDktMTIgMTU6MzAnIH0sXG4gICAgXVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuXG4gIH0sXG5cbiAgb25QYWdlU2Nyb2xsOiBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUuc2Nyb2xsVG9wKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2Nyb2xsVG9wOiBlLnNjcm9sbFRvcCxcbiAgICB9KVxuICB9LFxuXG4gIG9uU3ViamVjdCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaXNQb3BXaW5kb3c6IHRydWUsXG4gICAgfSlcbiAgfSxcblxuICBvbkhpZGVQb3BXaW5kb3coKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGlzUG9wV2luZG93OiBmYWxzZSxcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICB2YXIgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XG4gICAgcXVlcnkuc2VsZWN0KCcjZGV0YWlsLXBhZ2UnKS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBxdWVyeS5leGVjKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGggPSByZXNbMF0uaGVpZ2h0O1xuICAgICAgY29uc29sZS5sb2cocmVzWzBdLnNjcm9sbFRvcCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBwb3BXaW5kb3dIZWlnaHQ6IGhcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcbiAgICByZXR1cm4ge31cbiAgfVxufSkiXX0=