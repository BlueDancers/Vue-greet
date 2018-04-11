<template>
    <div>
        <p>页面的参数是{{ two }}</p>
        <router-view></router-view>
        <!-- 在添加子路由的时候一定要添加子路由的上一层添加 router-view  -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      two: this.$route.params.color
    }
  }
}
</script>
