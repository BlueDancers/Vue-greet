<template>
  <div id="log">
    <div class="header">
      <div class="header_log">
        <p class="header_left">会员登录</p>
          <div class="header_rigth">
           <p>还没有账户?</p>
           <p class="header_rigth_reg" @click="gotoregister">立即注册</p>
          </div>
      </div>
    </div>
    <div class="middle">
      <div class="middle_total">
        <p class="niddle_total_p">用户名:</p>
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="middle_total">
        <p class="niddle_total_p">密码:</p>
        <input type="password" placeholder="请输入密码" v-model="password" >
      </div>
    </div>
    <div class="footer">
      <div>
        <button class="footer_button" @click="login">确认登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$http.get('http://localhost:3003/PClist')
        .then((data) => {
          this.$emit('getuser', this.username)
        }, (error) => {
          console.log(error)
        })
    },
    gotoregister () {
      this.$emit('gotoregister', 2)
    }
  }
}
</script>

<style scoped>
#log {
  margin: 40px;
}
.header_log {
  display: flex;
}
.header_left {
  font-size: 30px;
  display: inline-block;
}
.header_rigth {
  display: flex;
  position: relative;
  top: 15px;
  left: 70px;
  font-size: 17px;
}
.header_rigth_reg {
  color: red;
  font-weight: bold;
  cursor: pointer;
}
.middle {
  margin-top: 20px;
}
.middle_total {
  display: flex;
  margin: 20px 0 20px 0;
}
.middle_total input {
  width: 200px;
  height: 30px;
  border: 1px solid #DAE2E5;
}
.niddle_total_p {
  width: 80px;
  text-align: left;
  line-height: 36px;
  cursor: pointer;
}
.footer_button {
  width: 100px;
  height:35px;
  background: #4fc08d;
  color: white;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
</style>
