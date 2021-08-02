<template>
  <div class="bili-banner">
    <div class="animated-banner">
      <div class="layer" id="layer">
        <video
          class="summerVideo"
          autoplay="autoplay"
          loop=""
          :src="videoSrc"
          width="1851"
          height="158"
          data-height="180"
          data-width="2104"
        ></video>
        <!-- 原站视频链接之一 -->
        <!-- src="blob:https://www.bilibili.com/848fc61b-4c32-4383-9bf4-ba9720342c4a" -->
        <!-- style="object-fit: cover; transform: scale(1) translate(44px, 0px) rotate(0deg);" -->
      </div>
    </div>
    <div class="b-logo">
      <a href="//www.bilibili.com" class="head-logo">
        <img src="./logo-summer.png" class="logo-img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: require('./video-summer-daytime1.webm'),
      summer_daytime: [
        require('./video-summer-daytime1.webm'),
        require('./video-summer-daytime2.webm'),
        require('./video-summer-daytime3.webm'),
        require('./video-summer-daytime4.webm'),
      ],
      summer_night: [
        require('./video-summer-night1.webm'),
        // require('./video-summer-night2.webm'),
        // require('./video-summer-night3.webm'),
      ],
      summer_dusk: [
        require('./video-summer-dusk1.webm'),
        require('./video-summer-dusk2.webm'),
      ],
    }
  },
  beforeCreate() {},
  created() {
    document.title = this.$route.meta.title
  },
  mounted() {
    this.videoSrcSelect()
    this.summer()
  },
  methods: {
    videoSrcSelect() {
      var myDate = new Date()
      let DateNow = myDate.getHours()
      console.log(Math.floor(Math.random()*this.summer_dusk.length));
      if (DateNow > 6 && DateNow <= 16) {
        // 白天
        this.videoSrc = this.summer_daytime[Math.floor(Math.random()*this.summer_daytime.length)]
      } else if (DateNow > 16 && DateNow < 20) {
        // 黄昏
        this.videoSrc = this.summer_dusk[Math.floor(Math.random()*this.summer_dusk.length)]
      } else {
        // 晚上
        this.videoSrc = this.summer_night[Math.floor(Math.random()*this.summer_night.length)]
      }
    },
    summer() {
      const videoLayer = document.querySelector('video')
      let StartPosition = 0
      let offset = 0

      videoLayer.addEventListener('mouseover', (e) => {
        StartPosition = e.clientX
        videoLayer.style.transition = 'none'
      })

      videoLayer.addEventListener('mousemove', (e) => {
        let movePercent = (e.clientX - StartPosition) / window.outerWidth // 鼠标位移量
        offset = movePercent * 20 + 0
        videoLayer.style.setProperty('--offset', `${offset}px`)
      })

      videoLayer.addEventListener('mouseleave', () => {
        videoLayer.style.transition = '.5s all'
        videoLayer.style.setProperty('--offset', `0px`)
      })
    },
  },
}
</script>

<style scoped>
.bili-banner {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-height: 155px;
  height: 9.375vw;
  min-width: 999px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}
.animated-banner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.animated-banner > .layer {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* --offset: -35px; */
}

.b-logo {
  position: relative;
  margin-right: auto;
  margin-left: 10%;
}
.head-logo {
  position: absolute;
  width: 150px;
  height: 50%;
  min-height: 60px;
  bottom: 10px;
  z-index: 1;
}
.logo-img {
  height: 100%;
}
.layer > .summerVideo {
  position: absolute;
  margin: auto;
  height: 100%;
  width: 110%;
  object-fit: cover;
  transform: translatex(var(--offset));
  transition: 0.5s all;
}
</style>
