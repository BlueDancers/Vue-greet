<template>
  <div>
      {{ name }}
      {{ number }}
      {{ myvalue }}
      <button @click='emitMy'>来自a</button>
      <slot name="header"></slot>     <!-- 给slot元素指定一个name后可以分发多个内容slot -->
      <p><slot> 没有数据 </slot></p>   <!-- slot里面是当没有数据的时候使用的备用内容 -->
  </div>
</template>

<script>
export default {
  // props: ['number'],   使用[] 可以传多个 或者一个 使用 {} 可以指定类型
  props: {
    'number': [Number, String],
    'myvalue': [String]
  },
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
