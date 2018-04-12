<template>
    <div>
        <p>这是vuex的值{{ name }}</p>
        <button @click="data">按钮</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'one'
    }
  },
  methods: {
    data () {
      this.$store.commit('increment',5)
    }
  }
}
</script>
