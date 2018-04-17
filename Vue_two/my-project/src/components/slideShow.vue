<template>
  <div id="silde_show">
    <div class="slide_img">
      <a href="xxxx">
        <img :src="slides[index].src" alt="轮播图" title="这是轮播图">
      </a>
    </div>
    <h2>title</h2>
    <ul class="silde_pages">
      <li @click="goto(one)">&lt;</li>
      <li v-for="(item, index) in slides" :key="item.src">
        <a @click="goto(index)">{{ index+1 }}</a>
      </li>
      <li @click="goto(two)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array
    }
  },
  data () {
    return {
      index: 0
    }
  },
  computed: {
    one () {
      if (this.index === 0) {
        return this.slides.length - 1
      } else {
        return this.index - 1
      }
    },
    two () {
      if (this.index === 3) {
        return 0
      } else {
        return this.index + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.index = index
    }
  },
  mounted () {
    console.log(this.slides)
  }
}
</script>

<style scoped>
#silde_show {
  width: 900px;
  height: 350px;
  position: relative;
  left: 200px;
  overflow: hidden;
}
#silde_show h2 {
  position: absolute;
  width: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom: 0px;
  height: 30px;
  text-align: left;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: -10px;
}
.silde_pages {
  position: absolute;
  z-index: 1000;
}
.slide_img {
  height: 350px;
}
.silde_pages {
  display: block;
  position: relative;
  bottom: 20px;
  float: right;
  right: 40px;
  color: #fff;
}
.silde_pages li {
  display: inline-block;
  cursor:pointer;
  padding: 0% 2px 0% 2px;
}
.silde_pages li a:hover {
  color: tomato;
}
.silde_pages li:first-child {
  position: relative;
  right: 15px;
}
.silde_pages li:last-child {
  position: relative;
  left: 15px;
}
.silde_pages li a {
  color: white;
  text-decoration: none;
}

</style>
