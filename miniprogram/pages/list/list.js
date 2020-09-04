"use strict";
Page({
    data: {
        motto: 'List Page',
        array: [['广州', '佛山', '长春', '大连'], ['1万-2万', '2万-3万'], ['1万-2万', '2万-3万'], ['户型1', '户型12', '户型13']],
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
        console.log(this);
    },
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxXQUFXO1FBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xHLEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7U0FDN0M7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtTQUN2QztRQUNELE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFNRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUlwQixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIG1vdHRvOiAnTGlzdCBQYWdlJyxcbiAgICBhcnJheTogW1sn5bm/5beeJywgJ+S9m+WxsScsICfplb/mmKUnLCAn5aSn6L+eJ10sIFsnMeS4hy0y5LiHJywgJzLkuIctM+S4hyddLCBbJzHkuIctMuS4hycsICcy5LiHLTPkuIcnXSwgWyfmiLflnosxJywgJ+aIt+WeizEyJywgJ+aIt+WeizEzJ11dLFxuICAgIHR5cGVzOiBbXG4gICAgICB7IG5hbWU6ICfnm7Tmkq3nnIvmiL8nLCBpY29uOiAnZmEtdGVsZXZpc2lvbicgfSxcbiAgICAgIHsgbmFtZTogJ+i/keacn+W8gOebmCcsIGljb246ICdmYS1pbHMnIH0sXG4gICAgICB7IG5hbWU6ICflupXmgLvku7cnLCBpY29uOiAnZmEtbGluZS1jaGFydCcgfSxcbiAgICAgIHsgbmFtZTogJ+S8mOaDoOalvOebmCcsIGljb246ICdmYS1zb3J0LWFscGhhLWRlc2MnIH1cbiAgICBdLFxuICAgIHByZW1pc2VzOiBbXG4gICAgICB7IG5hbWU6ICfml7bku6PlpKnlsYUxJywgaW1nU3JjOiAnbGl2ZTEuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5pe25Luj5aSp5bGFMicsIGltZ1NyYzogJ2xpdmUyLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+aXtuS7o+WkqeWxhTMnLCBpbWdTcmM6ICdsaXZlMS5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfml7bku6PlpKnlsYU0JywgaW1nU3JjOiAnbGl2ZTIuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5pe25Luj5aSp5bGFNScsIGltZ1NyYzogJ2xpdmUxLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+aXtuS7o+WkqeWxhTYnLCBpbWdTcmM6ICdsaXZlMi5qcGcnIH0sXG4gICAgXSxcbiAgICBpc01vcmU6IHRydWUsXG4gIH0sXG5cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAvLyAgIHByZW1pc2VzOiB0aGlzLmRhdGEucHJlbWlzZXMuY29uY2F0KHRoaXMuZGF0YS5wcmVtaXNlcylcbiAgICAvLyB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuICAgIHJldHVybiB7fVxuICB9XG59KSJdfQ==