<template>
  <div id="buy" @click="score">
    <div class="header_left">
      <img :src="productIcon">
      <ul class="header_ul">
        <router-link  v-for="item in list" :key="item.text" :to="{ path: '/buy/'+item.path }"
         tag="li" active-class="active">
          {{item.text}}
        </router-link>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          text: '数据统计',
          path: 'count',
          active: true
        },
        {
          text: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          text: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          text: '广告发布',
          path: 'issue',
          active: false
        }
      ],
      imgMap: {
        '/buy/count': require('../assets/images/1.png'),
        '/buy/forecast': require('../assets/images/2.png'),
        '/buy/analysis': require('../assets/images/3.png'),
        '/buy/issue': require('../assets/images/4.png')
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap[this.$route.fullPath]
    }
  },
  methods: {
    score () {
      console.log()
    }
  }
}
</script>

<style scoped>
#buy {
  background-color: #f2f2f2;
  display: flex;
}
.header_left {
  background: white;
  padding-top: 20px;
  height: 350px;
  width: 200px;
  border: 1px solid #f2f2f2;
}
.header_ul li {
  display: block;
  padding: 5px 0 5px 10px;
  text-align: left;
  cursor: pointer;

}
.header_ul li:hover,
.header_ul li.active {
  background-color: #4fc08d;
}
.active {
  background-color: #4fc08d
}
/* #detail {
  width: 1200px;
  margin:20px 0 0 50px;
  border: 1px solid rgb(93, 93, 145);
}
.buy_header {
  height: 1200px;
  border: 1px solid red;
} */
</style>
