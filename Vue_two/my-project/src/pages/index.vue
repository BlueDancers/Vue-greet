<template>
  <div id="index">
    <div class="index_left">
        <div class="index_left_top">
          <p class="index_p_class">全部产品</p>
            <p class="index_left_top_PC">PC产品</p>
            <div class="index_left_list">
                <div v-for="list in PClist" :key="list.text" class="index_left_PClist">
                    <a :href="list.link" class="index_a">{{ list.text }}</a>
                </div>
            </div>
            <p class="index_left_top_ip">手机产品类</p>
            <div class="index_left_list">
                <div v-for="list in PClist" :key="list.text" class="index_left_PClist">
                    <a :href="list.link" class="index_a">{{ list.text }}</a>
                </div>
            </div>
        </div>
        <div class="index_left_bottom">
          <p class="index_p_class">最新消息</p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
        </div>
    </div>
    <div class="index_bottom">
        <div v-for="list in imglist" :key="list.img" class="index_bottom_list">
            <img :src="list.img" alt="图片">
            <div>
                <p>{{ list.title }}</p>
                <p>{{ list.explain }}</p>
                <a href="">立即购买</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      PClist: [
        {
          text: '数据统计',
          link: '#'
        },
        {
          text: '数据检测',
          link: '#'
        },
        {
          text: '流量分析',
          link: '#'
        },
        {
          text: '广告发布',
          link: '#'
        }
      ],
      imglist: [
        {
          img: require('../assets/images/1.png'),
          title: '开放产品',
          explain: '开放产品是一款开放产品',
          link: '#'
        },
        {
          img: require('../assets/images/2.png'),
          title: '品牌营销',
          explain: '品牌营销帮助你的产品更好的找到定位',
          link: '#'
        },
        {
          img: require('../assets/images/3.png'),
          title: '使命必达',
          explain: '使命必达快速迭代永远保持最前端的速度',
          link: '#'
        },
        {
          img: require('../assets/images/4.png'),
          title: '勇攀高峰',
          explain: '帮你勇闯高峰,达到事业的顶端',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
#index {
    display: flex;
}
.index_left {
    width: 240px;
    height: 800px;
    position: relative;
    left: 10%;
}
.index_bottom {
    border: 1px solid red;
    width: 900px;
    height: 400px;
    position: relative;
    left: 15%;
}
.index_p_class {
    background: #4fc08d;
    color: aliceblue;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.index_left_top {
    margin-top: 20px;
    height: 320 px;
    border: 1px solid #f2f2f2;
}
.index_left_bottom {
    margin-top: 20px;
    height: 300px;
    border: 1px solid #f2f2f2;
}
.index_a {
    text-decoration: none
}
.index_left_PClist {
    padding: 5px 0 5px 0;
    padding-right: 80px;
}
.index_left_PClist:hover {
    background: #f2f2f2;
}
.index_left_top_PC {
    font-weight: bold;
    padding-right: 160px;
    padding-top: 10px;
}
.index_left_top_ip{
    font-weight: bold;
    padding-right: 140px;
}
.index_left_list {
    margin-top: 20px;
    margin-bottom: 10px;
}
.index_bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.index_bottom_list{
    width: 400px;
    border: 1px solid #f2f2f2;
}
</style>
