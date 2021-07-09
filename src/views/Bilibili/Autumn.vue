<template>
  <div>
    <body>
      <header id="AutumnImages" class="Autumn">
        <div>
          <img src="https://assets.codepen.io/2002878/bilibili-autumn-1.png" />
        </div>
        <div>
          <img src="https://assets.codepen.io/2002878/bilibili-autumn-2.png" />
        </div>
        <div>
          <img src="https://assets.codepen.io/2002878/bilibili-autumn-3.png" />
        </div>
        <div>
          <img src="https://assets.codepen.io/2002878/bilibili-autumn-4.png" />
        </div>
        <div>
          <img src="https://assets.codepen.io/2002878/bilibili-autumn-5.png" />
        </div>
        <div>
          <img src="https://assets.codepen.io/2002878/bilibili-autumn-6.png" />
        </div>
      </header>
    </body>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
      // const images = document.getElementById('AutumnImages > div > img')
      console.log(images);
      document.getElementById('AutumnImages').addEventListener('mousemove', (e) => {
        let percentage = e.clientX / window.outerWidth
        let offset = 10 * percentage
        let blur = 20
        for (let [index, image] of images.entries()) {
            offset *= 1.3 //越往后的图片位移越多
            let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)
            image.style.setProperty('--offset', `${offset}px`)
            image.style.setProperty('--blur', `${blurValue}px`)
        }
      })
    }
  }
}
</script>

<style scoped>
.Autumn {
  margin: 0;
  height: 160px;
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
  --offset: 0px;
  --blur: 2px;
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