<template>
  <div id="silde_show"  @mouseover="clearInv" @mouseout="runInv">
    <div class="slide_img">
       <a :href="slides[newindex].href">
         <transition name="slide-trans">
            <img :src="slides[newindex].src" v-if="isShow">
          </transition>
          <transition name="slide-trans-old">
            <img :src="slides[newindex].src" v-if="!isShow">
          </transition>
      </a>
    </div>
    <div class="footer">
      <h2>{{ slides[newindex].title }}</h2>
      <ul class="silde_pages">
        <li @click="goto(prevIndex)">&lt;</li>
        <li v-for="(item, index) in slides" :key="item.src" :class="{on: index === newindex}">
          <a @click="goto(index)">{{ index+1 }}</a>
        </li>
        <li @click="goto(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array
    },
    inv: {
      type: Number,
      default: 1000
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
        this.isShow = true
        this.newindex = index
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
  height: 450px;
  position: relative;
  left: 200px;
  overflow: hidden;
}
.footer {
  position: absolute;
  width: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom: 0;
  height: 35px;
}
.footer h2 {
  display: inline-block;
  position: relative;
  right: 420px;
  top: 8px;
  opacity: 0.8;
}
.footer ul {
  bottom: 10px;
  position: absolute;
  z-index: 1000;
  opacity: 0.8;
}
.slide_img {
  height: 450px;
  position: absolute;
}
.slide_img img {
  height: 450px;
  width: 900px;
  position: absolute;
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
  transform: translateX(900px);
}
.slide-trans-old-leave-to {
  transform: translateX(-900px);
}
.slide-trans-old-leave-active {
  transition: all 1s;
}
/* .slide-trans-enter-active {
  transition: all 2s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 2s;
  transform: translateX(-900px);
} */
</style>
