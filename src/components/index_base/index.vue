<template>
  <div id="index">
    <sidebar></sidebar>
    <div class="index-right">
      <slide-show :slides="slides" :inv="inv" @onchange="onchange"></slide-show>
        <div class="index_bottom">
            <div v-for="list in imglist" :key="list.img" class="index_bottom_list" :class="list.id==1 || list.id==3?'index_bottom_list_1':''">
                <img :src="list.img" alt="图片">
                <div class="index_bottom_list_bottom">
                    <p>{{ list.title }}</p> <br>
                    <p>{{ list.explain }}</p> <br>
                    <router-link :to="{path:'/buy'}" tag="a">立即购买</router-link>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from './slideShow'
import sidebar from './sidebar'
export default {
  created: function () {

  },
  components: {
    slideShow,
    sidebar
  },
  methods: {
    onchange (data) {
    }
  },
  data () {
    return {
      inv: 2000,
      imglist: [
        {
          id: 1,
          img: require('./images/1.png'),
          title: '开放产品',
          explain: '开放产品是一款开放产品',
          link: '#'
        },
        {
          id: 2,
          img: require('./images/2.png'),
          title: '品牌营销',
          explain: '品牌营销帮助你的产品更好的找到定位',
          link: '#'
        },
        {
          id: 3,
          img: require('./images/3.png'),
          title: '使命必达',
          explain: '使命必达快速迭代永远保持最前端的速度',
          link: '#'
        },
        {
          id: 4,
          img: require('./images/4.png'),
          title: '勇攀高峰',
          explain: '帮你勇闯高峰,达到事业的顶端',
          link: '#'
        }
      ],
      slides: [
        {
          src: require('./slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('./slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('./slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'www.xiaowuasy.xin'
        },
        {
          src: require('./slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'www.baidu.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
#index {
    display: flex;
    background: #f2f2f2;
}
.index_bottom {
    width: 900px;
    height: 400px;
    position: relative;
    left: 200px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.index_a {
    text-decoration: none
}
.index_bottom_list{
    background: white;
    width: 435px;
    border: 3px solid #f2f2f2;
    display: flex;
    align-items: center;
}
.index_bottom_list img {
    margin-left: 25px;
    margin-right: 25px;
}
.index_bottom_list_1 {
    background: white;
    width: 445px;
    border-right: 8px solid #f2f2f2;
    border-top: 3px solid #f2f2f2;
    border-left: 3px solid #f2f2f2;
    border-bottom: 3px solid #f2f2f2;
}
.index_bottom_list_bottom p {
    float: left;
    padding: 5px 0 5px 0;
}
.index_bottom_list_bottom p:first-child {
    font-weight: bold
}
.index_bottom_list_bottom a {
    float: left;
    padding: 10px 8px 10px 8px;
    text-decoration: none;
    background:#4fc08d;
    color: white;
}

</style>
