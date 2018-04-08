<template>
<div id="app" v-bind:title="name">
    <!-- <comp></comp> -->
    <img src="./assets/logo.png">
<div>
  <button v-on:click="additem">增加数据</button>
</div>
    <!-- <router-view/> -->
    <a v-for="(item , index) in list" v-text="index+'  --------  '+item.price+'   ,   '" :key="item.name"></a>
    <p>
      <a v-bind:href="link">跳转</a>
    </p>
    <p v-if="table"> app1 </p>
    <p v-show="!table"> app2 </p>
    <button v-on:click="toggle">切换</button>
</div>

</template>

<script>
// import comp from './a.vue'
export default {
  // components: {
  //   comp
  // },
  data: function () {
    return {
      table: true,
      link: 'http://www.xiaowuasy.xin',
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
</style>
