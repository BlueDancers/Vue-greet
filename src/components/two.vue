<template>
    <div>
        <p>这是来自vuex的值:{{ data }}</p>
        <button @click="bind">点击+1</button>
        <transition name="score">
          <router-view></router-view>
          <!-- 也可以给router增加动画 -->
        </transition>
        <!-- 在添加子路由的时候一定要添加子路由的上一层添加 router-view  -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: this.$store.state.totalPrice
    }
  },
  methods: {
    bind () {
      this.$store.commit('increment',1)
      console.log(this.$store.state.totalPrice)
    }
  }
}
</script>
<style>
.score-enter-active,.score-leave-active {
  transition: all 0.5s ease-in-out;
}
.score-enter,.score-leave-active {
  opacity: 0;
}
</style>
