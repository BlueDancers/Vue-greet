<template>
  <div>
   <!--  <transition name="fade">     transition是vue提供的内置过渡组件 -->
      <!-- <p v-show="show">我是show</p>
    </transition>
    <button v-on:click="tab">切换show</button>
    <div>
    <transition name="score">
      <p v-show="show_user">我是我自己写的一个transition</p>
    </transition>
    <button v-on:click="click_user">切换user</button>
    </div> -->
    {{ name }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'MVC',
      show: true,
      show_user: true
    }
  },
  methods: {
    tab: function () {
      this.show = !this.show
    },
    click_user: function () {
      this.show_user = !this.show_user
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.score-enter-active,.score-leave-active {
  transition: ease-out 0.5s all;
}
/* v-enter-active 与v-leave-active 是动画的过渡过程*/
.score-enter {
  transform: translateY(500px);
  opacity: 0;
}
.score-leave-active {
  transform: translateY(-500px);
  opacity: 0;
}
</style>
