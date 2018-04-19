<template>
  <div>
    <div class="dialog_wrap">
      <div class="dialog_cover"></div>
      <div class="dialog_content">
        <p class="dialog_close">X</p>
        <div class="total">
            hello
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
  width: 50%;
  max-height: 80%;
  min-height: 20%;
  background: white;
  position: fixed;
  z-index: 20;
  top: 10%;
  left: 25%;
  border: 2px solid #464068;
  overflow: auto
}
.dialog_close {
  display: inline-block;
  position: fixed;
  left: 73%;
  top: 12%;
  color: #454545;
  z-index: 100;
}
</style>
