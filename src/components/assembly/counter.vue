<template>
  <div id="counter">
    <div class="counterbtn" @click="minus">-</div>
    <div class="counter-show">
      <input type="text" v-model="ordernumber" @keyup="fixNumber">
    </div>
    <div class="counterbtn" @click="add">+</div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  },
  data () {
    return {
      ordernumber: 1
    }
  },
  watch: {
    ordernumber () {
      this.$emit('onchange', this.ordernumber)
    }
  },
  methods: {
    minus () {
      if (this.ordernumber <= this.min) return
      this.ordernumber--
    },
    add () {
      if (this.ordernumber >= this.max) return
      this.ordernumber++
    },
    fixNumber () {
      if (isNaN(this.ordernumber)) {
        this.ordernumber = 0
      } else {
        if (this.ordernumber >= this.max) {
          this.ordernumber = 20
        } else if (this.ordernumber <= this.min) {
          this.ordernumber = ''
        }
      }
    }
  }
}
</script>

<style scoped>
#counter {
  display: flex;
}
.counter-show input{
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
  text-align: center;
}
.counterbtn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none; /* Chrome/Safari/Opera */
}
.counterbtn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>
