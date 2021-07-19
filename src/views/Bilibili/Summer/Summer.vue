<template>
  <div class="bili-banner">
    <div class="animated-banner">
      <div class="layer" id="videoLayer">
        <video
          autoplay="autoplay"
          loop=""
          src="./video-summer3.webm"
          width="1851"
          height="158"
          data-height="180"
          data-width="2104"
        ></video>
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
      // imgWinkNow: require('./2-bi.png'),
      // imgWink: [require('./2.png'), require('./2-bi.png'), require('./2-zha.png')]
    }
  },
  created() {
    document.title = this.$route.meta.title
    console.log('images')
  },
  mounted() {
    this.summer()
  },
  methods: {
    summer() {
      let layer = document.getElementById('videoLayer')
      let StartPosition = 0
      let offset = 0
      // let movePercent = 0
      // let startOffset = 5
      //初始化模糊度
      // for (let [index, image] of images.entries()) {
      //   startOffset *= 1.3  //后一张图片偏移量是前一张的1.3倍
      //   blurValue = (Math.pow((index / images.length), 2) * blur)
      //   image.style.setProperty('--offset', `${startOffset}px`)
      //   image.style.setProperty('--blur', `${blurValue}px`)
      // }
      document.getElementById('videoLayer').addEventListener('mouseover', e => {
        StartPosition = e.clientX
        layer.classList.add('moving')
        console.log('进入了画面，初始位置为' + StartPosition)
      })
      document.getElementById('videoLayer').addEventListener('mousemove', e => {
        let movePercent = (e.clientX - StartPosition) / window.outerWidth // 鼠标位移量
        offset = movePercent * 20 + 35
        layer.style.setProperty('--offset', `${offset}px`)
      })
      // 离开区域时恢复原状，这里模拟鼠标拉到中间位置
      document
        .getElementById('videoLayer')
        .addEventListener('mouseleave', () => {
          layer.classList.remove('moving')
          layer.style.setProperty('--offset', `35px`)
        })
    }
  }
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
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  --offset: 35px;
  transform: translatex(var(--offset));
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
</style>
