<template>
  <div class="detail">
    <div class="detail-bg">
      <div class="nav w">
        <div class="navBtn"><img src="../assets/back.png" alt=""></div>
      </div>
      <div class="detail-name text-shadow">
        吕家村
      </div>
      <div class="carouselContainer w">
        <div ref="mySwiper" class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide my-swiper-slide">1</div>
            <div class="swiper-slide my-swiper-slide">2</div>
            <div class="swiper-slide my-swiper-slide">3</div>
            <div class="swiper-slide my-swiper-slide">4</div>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="detail-menu w">
        <div class="menu-btn"><img src="../assets/line.png" alt=""><span
            class="menuDesc">游览路线</span></div>
        <div class="menu-btn"><img src="../assets/line.png" alt=""><span
            class="menuDesc">热门打卡</span></div>
        <div class="menu-btn"><img src="../assets/line.png" alt=""><span
            class="menuDesc">话题圈</span></div>
        <div class="menu-btn"><img src="../assets/line.png" alt=""><span
            class="menuDesc">文旅话事</span></div>
        <div class="menu-btn"><img src="../assets/line.png" alt=""><span
            class="menuDesc">文旅推车</span></div>
      </div>
      <div class="viewDesc w">
        <div class="beautyroad text-shadow">
          <div class="title">秀美天路</div>
          <div class="enTitle">BEAUTIFUL TIANLU</div>
          <div class="roadImg"><img src="../assets/lv.jpeg" alt=""></div>
        </div>
        <div class="longBgc  text-shadow">
          <div class="title">热点话题</div>
          <div class="enTitle">HOT TOPIC</div>
          <div class="hotTopic">
            <div class="longImg"><img
                src="http://szyz.yun36524.cn/upload/img/f7820479-7e84-414d-8da8-e9476f9a7d5f.jpg"
                alt="">
              <div class="footerTitleImg">
                <div class="footerBox"><span class="footerDesc ellipsis">四合院民居特色</span>
                  <div class="favorBtn"><img src="../assets/favor.png" alt=""><span
                      class="favorNum">14</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="recommend">
            <div class="recommendTitle">景点推荐</div>
            <div class="enTitle">RECOMMENDATION</div>
            <!-- 遍历渲染 -->
            <div class="viewShow">
              <img src="../assets/lv.jpeg" alt="">
              <div class="footerRecommend">
                <span class="footerDesc ellipsis">四合院民居特色</span>
                <span class="checkDetail">查看详情</span>
              </div>
            </div>
            <div class="lookAllView">查看所有景点</div>
          </div>
          <div class="hotClock">
            <div class="title">热门打卡</div>
            <div class="enTitle">POPULAR PUNCH CARD</div>
            <!-- 遍历渲染  -->
            <div class="punchCard">
              <img src="../assets/lv.jpeg" alt="">
              <div class="footerCard">
                <span class="footerDesc ellipsis">四合院</span>
                <div class="yesBtn"><img src="../assets/yes.png" alt=""><span
                    class="yesNum">已有xxx人打卡</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import data from "../data";
export default {
  name: "Detail",
  data() {
    return {
      currentSwiper: null,
      data: data,
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      // eslint-disable-next-line
      let vueComponent = this; //获取vue组件实例
      //一个页面有多个swiper实例时，为了不互相影响,绑定容器用不同值或变量绑定
      this.currentSwiper = new Swiper(this.$refs.mySwiper, {
        loop: true, // 循环模式选项
        autoHeight: "true", //开启自适应高度,容器高度由slide高度决定
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //分页器按钮可点击
        },

        autoplay: {
          //自动播放,不同版本配置方式不同
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      });
    },
  },
};
</script>

<style  scoped>
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.w {
  width: 350px;
  margin: 0 auto;
}
.text-shadow {
  text-shadow: 0 0 1px #000;
}
.datail {
  width: 100%;
  height: 800px;
  font-size: 16px;
}
.detail-bg {
  position: relative;
  width: 100%;
  background-image: url("../assets/background.jpg");
  background-repeat: repeat;
}
.nav {
  position: relative;
  height: 70px;
}
.navBtn {
  position: absolute;
  top: 20px;
  left: 0;
}
.navBtn img {
  width: 60px;
}
.detail-name {
  position: absolute;
  width: 200px;
  height: 52px;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  background-image: url("../assets/name-bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  color: #f6d4a0;
  text-align: center;
  line-height: 45px;
  font-size: 32px;
  z-index: 3;
}
.CarouselContainer {
  background-color: gray;
}
/*swiper容器样式*/
.swiper-container {
  width: 100%;
  height: 225px;
}
/*slide样式*/
.my-swiper-slide {
  height: 225px;
  background-color: pink;
}
/*自定义分页器按钮被点击选中时的样式*/
.swiper-pagination-bullet-active {
  background-color: #d5a72f !important;
  width: 20px;
}
/*自定义分页器按钮常规样式*/
.swiper-pagination-bullet {
  background-color: #9624bf;
  opacity: 1;
  width: 20px;
}
.detail-menu {
  margin-top: 20px;
  justify-content: space-around;
  display: flex;
}
.menu-btn {
  display: flex;
  width: 60px;
  flex-direction: column;
  color: #f6d4a0;
  text-align: center;
  font-size: 12px;
}
.menu-btn img {
  width: 60px;
  height: 60px;
}
.beautyroad {
  padding: 10px 5px;
  background-image: url("../assets/bg.png");
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid #f7d59d;
  box-shadow: 0.02667rem 0.02667rem 0.3rem rgb(13 4 8 / 50%);
}
.title {
  width: 180px;
  height: 55px;
  background-image: url("../assets/title-bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  font-size: 28px;
  line-height: 48px;
  color: #f6d4a0;
}
.enTitle {
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  color: #f6d4a0;
  font-size: 22px;
}
.roadImg {
  width: 300px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #f7d59d;
  font-size: 0;
}
.roadImg img {
  width: 100%;
  border-radius: 10px;
}
.longBgc {
  padding: 10px 5px;
  background-image: url("../assets/bg.png");
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid #f7d59d;
  box-shadow: 0.02667rem 0.02667rem 0.3rem rgb(13 4 8 / 50%);
  background-repeat: repeat;
  background-size: 100%;
}
.longImg {
  width: 300px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #f7d59d;
  font-size: 0;
}
.longImg img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.footerTitleImg {
  height: 40px;
  background-image: url("../assets/footer-bg.png");
  background-repeat: repeat;
  background-size: 100% 100%;
  border-radius: 0px 0px 10px 10px;
}
.footerBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 10px;
}
.footerDesc {
  width: 150px;
  font-size: 16px;
  color: #f6d4a0;
}
.favorBtn {
  width: 50px;
}
.favorBtn img {
  width: 16px;
  margin-right: 10px;
}
.favorNum {
  font-size: 18px;
  color: #f6d4a0;
}
.recommend {
  width: 300px;
  background-image: url("../assets/viewbackground.jpg");
  background-repeat: repeat;
  background-size: 100%;
  border: 1px solid #f6d4a0;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
}
.recommendTitle {
  width: 180px;
  height: 55px;
  background-image: url("../assets/title-bg.png");
  background-repeat: repeat;
  background-size: 100%;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  font-size: 28px;
  line-height: 48px;
  color: #f6d4a0;
}
.viewShow {
  width: 250px;
  margin: 0 auto;
  border: 1px solid #f6d4a0;
  border-radius: 10px;
  font-size: 0;
  margin-top: 20px;
}
.viewShow img {
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
}
.footerRecommend {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background-image: url("../assets/footer-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 0 0 10px 10px;
}
.checkDetail {
  width: 60px;
  height: 20px;
  font-size: 12px;
  color: #f7d59d;
  background-color: #831f15;
  border: 1px solid #f7d59d;
  border-radius: 30px;
  text-align: center;
  line-height: 18px;
}
.lookAllView {
  width: 250px;
  margin: 20px auto;
  font-size: 24px;
  text-align: center;
  color: #f7d59d;
}
.punchCard {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #f7d59d;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 0;
}
.punchCard img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.footerCard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 0 0 10px 10px;
  background-image: url("../assets/footer-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.yesBtn img {
  width: 18px;
  vertical-align: middle;
  margin-right: 5px;
}
.yesNum {
  width: 50px;
  vertical-align: middle;
  color: #f7d59d;
  font-size: 16px;
}
</style>