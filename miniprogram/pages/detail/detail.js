"use strict";
Page({
    data: {
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
    onReady: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUNoRCxTQUFTLEVBQUU7WUFDVCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUM7WUFDekUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDO1lBQzFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQztZQUN6RSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUM7U0FDM0U7UUFDRCxTQUFTLEVBQUU7WUFDVCxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDaEYsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ2hGLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNoRixFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDakY7S0FDRjtJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGJhY2tncm91bmQ6IFsnbmF2MS5qcGcnLCAnbmF2Mi5qcGcnLCAnbmF2MS5qcGcnXSxcbiAgICByb29tVHlwZXM6IFtcbiAgICAgIHsgdGl0bGU6ICcy5a6kMeWOhTHljasnLCBpbWdTcmM6ICdyb29tVHlwZS5qcGcnLCBhY3JlYWdlOiAnMTAw5bmz5pa5JyxwcmljZTon5Lu35qC85b6F5a6aJ30sXG4gICAgICB7IHRpdGxlOiAnM+WupDPljoUy5Y2rJywgaW1nU3JjOiAncm9vbVR5cGUxLmpwZycsIGFjcmVhZ2U6ICcxMjDlubPmlrknLHByaWNlOifku7fmoLzlvoXlrponfSxcbiAgICAgIHsgdGl0bGU6ICc05a6kM+WOhTLljasnLCBpbWdTcmM6ICdyb29tVHlwZS5qcGcnLCBhY3JlYWdlOiAnMTUw5bmz5pa5JyxwcmljZTon5Lu35qC85b6F5a6aJ30sXG4gICAgICB7IHRpdGxlOiAnNeWupDXljoU05Y2rJywgaW1nU3JjOiAncm9vbVR5cGUxLmpwZycsIGFjcmVhZ2U6ICcyOTDlubPmlrknLHByaWNlOifku7fmoLzlvoXlrponfSxcbiAgICBdLFxuICAgIGRpc2NvdW50czogW1xuICAgICAgeyB0aXRsZTogJ+e+juWlveeUn+a0u+S7juWkp+WNjuW8gOWniyzmgLvku7cgMznkuIfotbfkuqvlj5fnvo7lpb3nmb7kuIflsI/plYcnLCBpbWdTcmM6ICdsaXZlMS5qcGcnLCBkYXRlOiAnMDktMTIgMTU6MzAnIH0sXG4gICAgICB7IHRpdGxlOiAn576O5aW955Sf5rS75LuO5aSn5Y2O5byA5aeLLOaAu+S7tyAzOeS4h+i1t+S6q+WPl+e+juWlveeZvuS4h+Wwj+mVhycsIGltZ1NyYzogJ2xpdmUyLmpwZycsIGRhdGU6ICcwOS0xMiAxNTozMCcgfSxcbiAgICAgIHsgdGl0bGU6ICfnvo7lpb3nlJ/mtLvku47lpKfljY7lvIDlp4ss5oC75Lu3IDM55LiH6LW35Lqr5Y+X576O5aW955m+5LiH5bCP6ZWHJywgaW1nU3JjOiAnbGl2ZTEuanBnJywgZGF0ZTogJzA5LTEyIDE1OjMwJyB9LFxuICAgICAgeyB0aXRsZTogJ+e+juWlveeUn+a0u+S7juWkp+WNjuW8gOWniyzmgLvku7cgMznkuIfotbfkuqvlj5fnvo7lpb3nmb7kuIflsI/plYcnLCBpbWdTcmM6ICdsaXZlMi5qcGcnLCBkYXRlOiAnMDktMTIgMTU6MzAnIH0sXG4gICAgXVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICBcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcbiAgICBcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcbiAgICBcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBcbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcbiAgICByZXR1cm4ge31cbiAgfVxufSkiXX0=