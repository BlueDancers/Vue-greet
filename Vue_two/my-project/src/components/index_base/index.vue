<template>
  <div id="index">
    <div class="index_left">
        <div class="index_left_top">
          <p class="index_p_class">全部产品</p>
            <h3 class="index_left_top_PC">PC产品</h3>
            <div class="index_left_list">
                <ul>
                    <div v-for="list in PClist" :key="list.text" class="index_left_PClist">
                        <li :href="list.link" class="index_a">
                            {{ list.text }}
                            <span v-show="list.hot" class="hot_tag"> HOT</span>
                        </li>
                    </div>
                </ul>
            </div>
            <p class="index_left_top_ip">手机产品类</p>
            <div class="index_left_list">
                <ul>
                    <div v-for="list in PClist" :key="list.text" class="index_left_PClist">
                        <li :href="list.link" class="index_a">
                            {{ list.text }}
                            <span v-show="list.hot" class="hot_tag"> HOT</span>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
        <div class="index_left_bottom">
          <p class="index_p_class">最新消息</p>
           <ul>
               <div v-for="item in getNowList" :key="item.id" class="index_left_PClist">
                   <li :href="item.url" class="index_a new_item">
                    {{ item.title }}
                   </li>
               </div>
           </ul>
        </div>
    </div>
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
export default {
  created: function () {
    this.$http.get('http://localhost:3003/PClist')
      .then((data) => {
        this.PClist = data.data
      }, () => {
        console.log('这里是用了vue-source,后端没有接口')
      })
    this.$http.get('http://localhost:3003/getNowList')
      .then((data) => {
        this.getNowList = data.data
      }, () => {
        console.log('失败')
      })
  },
  components: {
    slideShow
  },
  methods: {
    onchange (data) {
    }
  },
  data () {
    return {
      inv: 2000,
      PClist: [],
      getNowList: [],
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
.index_left {
    width: 240px;
    height: 800px;
    position: relative;
    left: 10%;
}
.index_bottom {
    width: 900px;
    height: 400px;
    position: relative;
    left: 200px;
    margin-top: 20px;
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
    background: white;
    margin-top: 20px;
    height: 350px;
    border: 1px solid #f2f2f2;
}
.index_left_bottom {
    background: white;;
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
    float: left;
    margin-left: 20px;
}
.index_left_PClist:hover {
    background: #f2f2f2;
}
.index_left_top_PC {
    font-weight: bold;
    padding-right: 160px;
    padding-top: 10px;
    white-space: nowrap;
}
.index_left_top_ip{
    font-weight: bold;
    padding-right: 140px;
    margin-top: 20px;
}
.index_left_list {
    margin-top: 15px;
    margin-bottom: 140px;
}
.index_bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
.hot_tag{
    color: white;
    background: red;
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
.new_item {
    display: inline-block;
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
