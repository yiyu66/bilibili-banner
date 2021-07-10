<template>
  <div>
    <body>
      <header id="AutumnImages" class="Autumn">
        <div>
          <img src="./1.png" />
        </div>
        <div>
          <img :src="imgWinkNow" />
        </div>
        <div>
          <img src="./3.png" />
        </div>
        <div>
          <img src="./4.png" />
        </div>
        <div>
          <img src="./5.png" />
        </div>
        <div>
          <img src="./6.png" />
        </div>
      </header>
    </body>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgWinkNow: require('./2-bi.png'),
      imgWink: [require('./2.png'), require('./2-bi.png'), require('./2-zha.png')]
    }
  },
  created () {
    document.title = this.$route.meta.title
    console.log('images');
  },
  mounted () {
    this.Autumn()

  },
  methods: {
    Autumn () {
      const images = document.querySelectorAll('header > div > img')
      let blur = 10 //模糊度系数
      let StartPosition = 0
      let movePercent = 0
      let blurValue = 0 // 图片模糊度
      let startOffset = 5
      //初始化模糊度
      for (let [index, image] of images.entries()) {
        startOffset *= 1.3  //后一张图片偏移量是前一张的1.3倍
        blurValue = (Math.pow((index / images.length), 2) * blur)
        image.style.setProperty('--offset', `${startOffset}px`)
        image.style.setProperty('--blur', `${blurValue}px`)
      }
      document.getElementById('AutumnImages').addEventListener('mouseover', (e) => {
        StartPosition = e.clientX / window.outerWidth
        console.log('进入了画面，初始位置为' + StartPosition);
      })
      document.getElementById('AutumnImages').addEventListener('mousemove', (e) => {
        movePercent = (e.clientX / window.outerWidth) - StartPosition // 鼠标位移量
        let offset = 10 * movePercent + 5
        for (let [index, image] of images.entries()) {
          offset *= 1.3
          blurValue = (Math.pow((index / images.length - movePercent), 2) * blur)
          image.style.setProperty('--offset', `${offset}px`)
          image.style.setProperty('--blur', `${blurValue}px`)
        }
      })
      // 离开区域时恢复原状，这里模拟鼠标拉到中间位置
      document.getElementById('AutumnImages').addEventListener('mouseleave', () => {
        let moveOffset = 10 * movePercent + 5

        let restore = setInterval(() => {
          moveOffset = 0.9 * (moveOffset - 5) + 5
          let offset = moveOffset
          if (offset >= 4.8 && offset <= 5.2) {
            clearInterval(restore);
          }
          for (let [index, image] of images.entries()) {
            offset *= 1.3
            blurValue = (Math.pow((index / images.length - (moveOffset - 5) / 10), 2) * blur)
            image.style.setProperty('--offset', `${offset}px`)
            image.style.setProperty('--blur', `${blurValue}px`)
          }
        }, 16);
      })
      // 眨眼动画
      setInterval(() => {
        setTimeout(() => {
          this.imgWinkNow = this.imgWink[1]
        }, 100)
        setTimeout(() => {
          this.imgWinkNow = this.imgWink[2]
        }, 200)
        setTimeout(() => {
          this.imgWinkNow = this.imgWink[0]
        }, 300)
      }, 3000);
    }
  }
}
</script>

<style scoped>
.Autumn {
  margin: 0;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.Autumn > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。使用 align-content 属性对齐交叉轴上的各项（垂直）。这里是为了上下左右居中   */
  justify-content: center;
  align-items: center;
  /* 预设值*/
  --offset: 5px;
  --blur: 4px;
}

.Autumn > div > img {
  display: block;
  height: 100%;
  width: 110%;
  object-fit: cover;
  transform: translatex(var(--offset));
  filter: blur(var(--blur));
}
</style>