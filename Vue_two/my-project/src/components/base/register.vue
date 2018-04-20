<template>
  <div id="log">
    <div class="header">
      <div class="header_log">
        <p class="header_left">注册成为会员</p>
      </div>
    </div>
    <div class="middle">
      <div class="middle_total">
        <p class="niddle_total_p">用户名:</p>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <span>{{ userErrors.usererrorText }}</span>
      </div>
      <div class="middle_total">
        <p class="niddle_total_p">密码:</p>
        <input type="password" placeholder="请输入密码" v-model="password" >
        <span>{{ userErrors.passerrorText }}</span>
      </div>
       <div class="middle_total">
        <p class="niddle_total_p">确认密码:</p>
        <input type="password" placeholder="请输入密码" v-model="passwordpush" >
      </div>
    </div>
    <div class="footer">
      <div>
        <button class="footer_button" @click="login" :class="userErrors.status?' ':'footer_button_h'">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      passwordpush: ''
    }
  },
  computed: {
    userErrors () {
      let status, usererrorText, passerrorText
      if (/@/g.test(this.username)) {
        usererrorText = '不可以包含@'
        status = false
      } else if (this.username.length === 0) {
        usererrorText = '不可为空'
        status = false
      } else if (this.password.length < 8) {
        passerrorText = '密码不能少于8位数'
        status = false
      } else if (this.passwordpush !== this.password) {
        passerrorText = '密码输入不相同'
        status = false
      } else {
        usererrorText = '可用'
        passerrorText = '可用'
        status = true
      }
      return {
        usererrorText,
        passerrorText,
        status
      }
    }
  },
  methods: {
    login () {
      console.log(this.password.length)
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
.middle_total span {
  color: red;
  font-size: 10px;
  line-height: 36px;
  margin-left: 5px;
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
.footer_button_h {
  background: gray;
}
</style>
