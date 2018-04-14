<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="app_header">
      <div class="app_header_inner">
        <router-link :to="{path: '/'}" tag="p">
          <img src="../assets/logo.png">
        </router-link>
         <div class="header_nav">
           <ul class="nav_list">
             <router-link :to='{path: "/login"}'  tag="li">登录</router-link>
             <li class="nav_pile">|</li>
             <router-link :to="{path: '/register'}" tag="li">注册</router-link>
             <li class="nav_pile">|</li>
             <li>关于</li>
           </ul>
         </div>
      </div>
    </div>
    <div class="app_content">
      <keep-alive>
         <router-view/>
      </keep-alive>
    </div>
    <div class="app_footer">
      <p> 2018 fishenal MIT </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.app_header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app_header_inner{
  width: 80%;
  margin: 0 auto;
  display: flex;
}
.nav_list{
  display: flex;
  position: relative;
  left: 1050px;
}
.nav_list li {
  padding:0 10px 0 10px;

}
.app_header_inner img{
  width: 50px;
  height: 50px;
  position: relative;
  top: 23px;
}
.app_footer{
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b2b2b2
}
</style>
