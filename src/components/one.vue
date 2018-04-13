<template>
    <div>
        <p>这是vuex的值{{ name }}</p>
        <button @click="data">加5</button>
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
      this.$store.dispatch('increase', 5)
    }
  }
}
</script>
