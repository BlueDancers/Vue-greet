<template>
  <div id="silde_show"  @mouseover="clearInv" @mouseout="runInv">
    <div class="slide_img">
      <a href="slides[index].title">
          <transition name="slide-trans">
            <img :src="slides[newindex].src" v-if="isShow" alt="轮播图" title="这是轮播图">
          </transition>
      </a>
       <a href="slides[index].title">
          <transition name="slide-trans-old">
            <img :src="slides[newindex].src" v-if="!isShow" alt="轮播图" title="这是轮播图">
          </transition>
      </a>
    </div>
    <h2>{{ slides[newindex].title }}</h2>
    <ul class="silde_pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides" :key="item.src" :class="{on: index === newindex}">
        <a @click="goto(index)">{{ index+1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array
    },
    inv: {
      type: Number
    }
  },
  data () {
    return {
      newindex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.newindex === 0) {
        return this.slides.length - 1
      } else {
        return this.newindex - 1
      }
    },
    nextIndex () {
      if (this.newindex === 3) {
        return 0
      } else {
        return this.newindex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.newindex = index
        this.isShow = true
        this.$emit('onchange', index)
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
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
.on {
  background: red;
}
.slide-trans-enter-active {
  transition: all 1s;
}
.slide-trans-enter {
  transform: translateX(1800px);
}
.slide-trans-old-leave-active {
  transition: all 1s;
  transform: translateX(-1800px);
}

</style>
