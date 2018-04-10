<template>
<div id="app">
    <input type="text" v-model="myvalue">
    <comp v-on:my-event='oncom' number="78" v-bind:myvalue="myvalue">
      <h2 slot="header">标题</h2>
      <p>正文内容</p>
      <p>更多正文内容</p>
      <div slot="footer">底部信息</div>
    </comp>   <!-- 使用v-model来将标签内容传递到组件 -->
    <p :is="comp" number="75"></p>    <!-- is也可以实现渲染 不同组件-->
    <img src="./assets/logo.png">
<div>
  <button v-on:click="additem">增加数据</button>
</div>
    <!-- <router-view/> -->
    <a v-for="(item , index) in list" v-text="index+'  --------  '+item.price+'   ,   '" :key="item.name"></a>
    <button v-on:click="toggle">切换</button>
    <p>
      <input v-on:keydown.enter="onkey" v-model="keyvalue">
    </p>
    <div>
      <input type="checkbox" value="css" v-model="cheked" @click="bindtap">
      <input type="checkbox" value="js" v-model="cheked">
      <input type="checkbox" value="html" v-model="cheked">
    </div>
    <div>
      <input type="radio" value="css" v-model="radio_data" @click="bindtap">
      <input type="radio" value="js" v-model="radio_data">
      <input type="radio" value="html" v-model="radio_data">
    </div>
    <div v-for="item in selected" :key="item.name" >
      <input type="radio" value="item.name" v-model="radio_data">
      {{ item.name }}
    </div>
</div>

</template>

<script>
import comp from './a.vue'
export default {
  components: {
    comp: comp
  },
  data: function () {
    return {
      myvalue: ' ',
      comp: 'comp',
      keyvalue: '',
      list: [
        {
          name: '1',
          price: '1'
        },
        {
          name: '2',
          price: '2'
        },
        {
          name: '3',
          price: '3'
        }
      ],
      cheked: ['css'],
      radio_data: 'css',
      selected: [
        {
          name: 'js',
          value: 1
        },
        {
          name: 'css',
          value: 2
        },
        {
          name: 'html',
          value: 3
        }
      ]
    }
  },
  methods: {
    additem () {
      this.list.push({
        name: this.list.length,
        price: this.list.length + 1
      })
    },
    toggle () {
      this.table = !this.table
      console.log(this.table)
    },
    onkey () {
      console.log(this.keyvalue)
    },
    oncom (e) {
      console.log(e)
    },
    bindtap () {
      console.log(this.cheked)
      console.log(this.radio_data)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 40px;
  height: 40px;
}
</style>
