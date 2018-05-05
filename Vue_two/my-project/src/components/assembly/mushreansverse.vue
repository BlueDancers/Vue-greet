<template>
   <div class="chooser-component">
    <button v-for="item in ordernumber" :key="item" @click="index(item)" :class="{active: checkAcive(item)}">{{item}}</button>
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
      newindex: []
    }
  },
  methods: {
    index (index) {
      if (this.newindex.indexOf(index) === -1) {
        this.newindex.push(index)
      } else {
        var newarray = []
        for (let i = 0; i < this.newindex.length; i++) {
          if (this.newindex[i] !== index) {
            newarray.push(this.newindex[i])
          }
        }
        this.newindex = newarray
      }
    },
    checkAcive (index) {
      return this.newindex.indexOf(index) !== -1
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
