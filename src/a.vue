<template>
  <div>
      {{ name }}
      <button @click='emitMy'>emit</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '我是组件'
    }
  },
  methods: {
    emitMy () {
      this.$emit('my-event', this.name)
    }
  }
}
</script>
