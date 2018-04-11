<template>
<div id="app">
    <router-view/>
    <div>
      <router-link :to="{ path: '/first'}" tag="li">to first</router-link>
      <router-link :to="{ path: '/two/one', param :{color:'oneone'}}">to two</router-link>
    </div>
    <input type="text" v-model="myvalue">
    <div>
      <img src="./assets/logo.png">
    </div>
     <compa v-on:my-event='oncom' number="78" v-bind:myvalue="myvalue">
      <h2 slot="header">标题</h2>
      <a>正文内容</a>
      <a>更多正文内容</a>
    </compa>   <!-- 使用v-model来将标签内容传递到组件 -->
    <p :is="compa" number="75">这是is模块</p>    <!-- is也可以实现渲染 不同组件-->
    <div>
      <button v-on:click="additem">增加数据</button>
    </div>
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
      <input type="radio" :value="item.name" v-model="selected_data" v-on:click="selected_score">
      {{ item.name }}
    </div>
    <comp></comp>
    <compc></compc>
</div>
</template>

<script>
import compa from './a.vue'
import comp from './b.vue'
import compc from './c.vue'

export default {
  components: {
    compa: compa,
    comp: comp,
    compc: compc
  },
  data: function () {
    // data作为组件会被很多次的使用 用函数return的时候会避免被引用后值被改变的原因
    return {
      myvalue: ' ',
      compa: 'compa',
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
      selected_data: 'css',
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
    },
    selected_score () {
      console.log(this.selected_data)
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
