"use strict";
Page({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1FBQ2hELFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ2hGLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNoRixFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDaEYsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQ2pGO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUNwRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUN4RixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQ25HLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7U0FDbkc7S0FDRjtJQUtELE1BQU07SUFFTixDQUFDO0lBSUQsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGJhY2tncm91bmQ6IFsnbmF2MS5qcGcnLCAnbmF2Mi5qcGcnLCAnbmF2MS5qcGcnXSxcbiAgICBwcmVtaXNlczogW1xuICAgICAgeyBuYW1lOiAn5pe25Luj5aSp5bGFMScsIGltZ1NyYzogJ2xpdmUxLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+aXtuS7o+WkqeWxhTInLCBpbWdTcmM6ICdsaXZlMi5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfml7bku6PlpKnlsYUzJywgaW1nU3JjOiAnbGl2ZTEuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5pe25Luj5aSp5bGFNCcsIGltZ1NyYzogJ2xpdmUyLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+aXtuS7o+WkqeWxhTUnLCBpbWdTcmM6ICdsaXZlMS5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfml7bku6PlpKnlsYU2JywgaW1nU3JjOiAnbGl2ZTIuanBnJyB9LFxuICAgIF0sXG4gICAgZGlzY291bnRzOiBbXG4gICAgICB7IHRpdGxlOiAn576O5aW955Sf5rS75LuO5aSn5Y2O5byA5aeLLOaAu+S7tyAzOeS4h+i1t+S6q+WPl+e+juWlveeZvuS4h+Wwj+mVhycsIGltZ1NyYzogJ2xpdmUxLmpwZycsIGRhdGU6ICcwOS0xMiAxNTozMCcgfSxcbiAgICAgIHsgdGl0bGU6ICfnvo7lpb3nlJ/mtLvku47lpKfljY7lvIDlp4ss5oC75Lu3IDM55LiH6LW35Lqr5Y+X576O5aW955m+5LiH5bCP6ZWHJywgaW1nU3JjOiAnbGl2ZTIuanBnJywgZGF0ZTogJzA5LTEyIDE1OjMwJyB9LFxuICAgICAgeyB0aXRsZTogJ+e+juWlveeUn+a0u+S7juWkp+WNjuW8gOWniyzmgLvku7cgMznkuIfotbfkuqvlj5fnvo7lpb3nmb7kuIflsI/plYcnLCBpbWdTcmM6ICdsaXZlMS5qcGcnLCBkYXRlOiAnMDktMTIgMTU6MzAnIH0sXG4gICAgICB7IHRpdGxlOiAn576O5aW955Sf5rS75LuO5aSn5Y2O5byA5aeLLOaAu+S7tyAzOeS4h+i1t+S6q+WPl+e+juWlveeZvuS4h+Wwj+mVhycsIGltZ1NyYzogJ2xpdmUyLmpwZycsIGRhdGU6ICcwOS0xMiAxNTozMCcgfSxcbiAgICBdLFxuICAgIGR5bmFtaWNzOiBbXG4gICAgICB7IG5hbWU6ICfml7bku6Pmi5vllYblpKnnpqcnLCBzdWJUaXRsZTogJ+mmluacnzI15LiH6LW35Lmw5ZOB6LSo5LiJ5oi/77yM5oiQ54af6YWN5aWX77yM6auY56uv5ZOB6LSoJywgaW1nU3JjOiAnbGl2ZTEuanBnJywgZGF0ZTogJzIwMjAtMDktMTIgMTU6MzAnIH0sXG4gICAgICB7IG5hbWU6ICfml7bku6Pmi5vllYblpKnnpqcnLCBzdWJUaXRsZTogJ+WQkeW+gOeUn+a0u++8jOmDveWcqOWkqeempycsIGltZ1NyYzogJ2xpdmUyLmpwZycsIGRhdGU6ICcyMDIwLTA5LTEyIDE1OjMwJyB9LFxuICAgICAgeyBuYW1lOiAn5pe25Luj5oub5ZWG5aSp56anJywgc3ViVGl0bGU6ICflkJHlvoDnlJ/mtLvvvIzpg73lnKjlpKnnpqcs5paH5YyW6Im65pyv55ub5a605rGH6IGa54Gv5rmWJywgaW1nU3JjOiAnbGl2ZTEuanBnJywgZGF0ZTogJzIwMjAtMDktMTIgMTU6MzAnIH0sXG4gICAgICB7IG5hbWU6ICfml7bku6Pmi5vllYblpKnnpqcnLCBzdWJUaXRsZTogJ+e+juWlveeUn+a0u+S7juWkp+WNjuW8gOWniyzmgLvku7czOeS4h+i1ty4uLicsIGltZ1NyYzogJ2xpdmUyLmpwZycsIGRhdGU6ICcyMDIwLTA5LTEyIDE1OjMwJyB9LFxuICAgIF1cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcblxuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG4gICAgY29uc29sZS5sb2cob3B0cy50YXJnZXQpXG4gICAgcmV0dXJuIHt9XG4gIH1cbn0pIl19