<template>
  <div>
    <div class="dialog_wrap" v-if="show">
      <div class="dialog_cover"></div>
      <div class="dialog_content">
        <p class="dialog_close" @click="colse">X</p>
        <div class="total">
            <div v-if="onshow == '1'">
              <slot name="login">没有数据</slot>
            </div>
            <div v-if="onshow == '2'">
              <slot name="register">没有数据</slot>
            </div>
            <div v-if="onshow == '3'">
              <slot name="about">没有数据</slot>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean
    },
    onshow: {
      type: Number
    }
  },
  data () {
    return {
    }
  },
  methods: {
    colse () {
      this.$emit('on-close')
    },
    gotoregister () {
      console.log('dasdasasd')
    }
  }
}
</script>

<style>
.dialog_wrap {
  z-index: 1;
}
.dialog_cover {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  background: dimgrey;
  z-index: 2;
}
.dialog_content {
  width: 30%;
  max-height: 80%;
  min-height: 20%;
  background: white;
  position: fixed;
  z-index: 20;
  top: 10%;
  left: 35%;
  border: 2px solid #464068;
  overflow: auto
}
.dialog_close {
  display: inline-block;
  position: fixed;
  left: 63.5%;
  top: 12%;
  color: #454545;
  z-index: 100;
  cursor: pointer;
}
.dialog_close:hover {
  color: red;
}

</style>
