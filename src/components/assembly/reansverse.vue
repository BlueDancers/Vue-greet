<template>
   <div class="chooser-component">
    <button v-for="item in ordernumber" :key="item" @click="index(item)" :class="newindex == item?'active':''">{{item}}</button>
  </div>
</template>

<script>
export default {
  props: {
    ordernumber: {
      type: Array
    }
  },
  data () {
    return {
      newindex: 0
    }
  },
  methods: {
    index (index) {
      this.newindex = index
      this.$emit('onchange', index)
    }
  }
}
</script>

<style>
button {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
