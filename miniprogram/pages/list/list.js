"use strict";
Page({
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
        this.setData({
            premises: this.data.premises.concat(this.data.premises)
        });
    },
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxXQUFXO1FBQ2xCLEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7U0FDN0M7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtTQUN2QztRQUNELE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFNRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4RCxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIG1vdHRvOiAnTGlzdCBQYWdlJyxcbiAgICB0eXBlczogW1xuICAgICAgeyBuYW1lOiAn55u05pKt55yL5oi/JywgaWNvbjogJ2ZhLXRlbGV2aXNpb24nIH0sXG4gICAgICB7IG5hbWU6ICfov5HmnJ/lvIDnm5gnLCBpY29uOiAnZmEtaWxzJyB9LFxuICAgICAgeyBuYW1lOiAn5bqV5oC75Lu3JywgaWNvbjogJ2ZhLWxpbmUtY2hhcnQnIH0sXG4gICAgICB7IG5hbWU6ICfkvJjmg6Dmpbznm5gnLCBpY29uOiAnZmEtc29ydC1hbHBoYS1kZXNjJyB9XG4gICAgXSxcbiAgICBwcmVtaXNlczogW1xuICAgICAgeyBuYW1lOiAn5pe25Luj5aSp5bGFMScsIGltZ1NyYzogJ2xpdmUxLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+aXtuS7o+WkqeWxhTInLCBpbWdTcmM6ICdsaXZlMi5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfml7bku6PlpKnlsYUzJywgaW1nU3JjOiAnbGl2ZTEuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5pe25Luj5aSp5bGFNCcsIGltZ1NyYzogJ2xpdmUyLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+aXtuS7o+WkqeWxhTUnLCBpbWdTcmM6ICdsaXZlMS5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfml7bku6PlpKnlsYU2JywgaW1nU3JjOiAnbGl2ZTIuanBnJyB9LFxuICAgIF0sXG4gICAgaXNNb3JlOiB0cnVlLFxuICB9LFxuXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBwcmVtaXNlczogdGhpcy5kYXRhLnByZW1pc2VzLmNvbmNhdCh0aGlzLmRhdGEucHJlbWlzZXMpXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcbiAgICByZXR1cm4ge31cbiAgfVxufSkiXX0=