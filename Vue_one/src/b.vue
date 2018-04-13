<template>
  <div>
     <!--  transition是vue提供的内置过渡组件 -->
    <div>
    <transition name="score">
      <p v-show="show_user">我的一个transition</p>
    </transition>
    <button v-on:click="click_user">切换user</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true,
      show_user: true
    }
  },
  methods: {
    click_user: function () {
      this.show_user = !this.show_user
    }
  }
}
</script>

<style>
.score-enter-active,.score-leave-active {
  transition: ease-out 0.5s all;
}
/* v-enter-active 与v-leave-active 是动画的过渡过程*/
.score-enter {
  /* transform: translateY(500px); */
}
.score-leave-active {
  /* transform: translateY(-500px); */
  opacity: 0;
}
</style>
