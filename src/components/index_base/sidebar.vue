<template>
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
</template>

<script>
  export default {
    data () {
      return {
          PClist: [
        {
          'text': '数据统计',
          'link': '#',
          'hot': true
        },
        {
          'text': '数据检测',
          'link': '#',
          'hot': false
        },
        {
          'text': '流量分析',
          'link': '#',
          'hot': false
        },
        {
          'text': '广告发布',
          'link': '#',
          'hot': false
        }
      ],
      getNowList: [
        {
          'id': '1',
          'title': '新闻条目1..................................',
          'url': '#'
        },
        {
          'id': '2',
          'title': '新闻条目2..................................',
          'url': '#'
        },
        {
          'id': '3',
          'title': '新闻条目3..................................',
          'url': '#'
        },
        {
          'id': '4',
          'title': '新闻条目4..................................',
          'url': '#'
        }
      ],
      }
    }
  }
</script>

<style scoped>
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
.new_item {
    display: inline-block;
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.hot_tag{
    color: white;
    background: red;
}
</style>