<template>
  <div>
    <body>
      <header id="winterHeader">
        <div class="view">
          <img
            src="https://assets.codepen.io/2002878/bilibili-winter-view-1.jpg"
            class="morning"
            alt=""
          />
          <img
            src="https://assets.codepen.io/2002878/bilibili-winter-view-2.jpg"
            class="afternoon"
            alt=""
          />
          <video autoplay loop muted class="evening">
            <source
              src="https://assets.codepen.io/2002878/bilibili-winter-view-3.webm"
              type="video/webm"
            />
          </video>
          <img
            src="https://assets.codepen.io/2002878/bilibili-winter-view-3-snow.png"
            class="window-cover"
            alt=""
          />
        </div>

        <div class="tree">
          <img
            src="https://assets.codepen.io/2002878/bilibili-winter-tree-1.png"
            class="morning"
            alt=""
          />
          <img
            src="https://assets.codepen.io/2002878/bilibili-winter-tree-2.png"
            class="afternoon"
            alt=""
          />
          <img
            src="https://assets.codepen.io/2002878/bilibili-winter-tree-3.png"
            class="evening"
            alt=""
          />
        </div>
      </header>
    </body>
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
    this.winter()
  },
  methods: {
    winter() {
      const header = document.querySelector('header')

      let StartPosition = 0
      // let movePercent = 0
      // let startOffset = 5
      //初始化模糊度
      // for (let [index, image] of images.entries()) {
      //   startOffset *= 1.3  //后一张图片偏移量是前一张的1.3倍
      //   blurValue = (Math.pow((index / images.length), 2) * blur)
      //   image.style.setProperty('--offset', `${startOffset}px`)
      //   image.style.setProperty('--blur', `${blurValue}px`)
      // }
      document
        .getElementById('winterHeader')
        .addEventListener('mouseover', e => {
          StartPosition = e.clientX
          header.classList.add('moving')
          console.log('进入了画面，初始位置为' + StartPosition)
        })
      document
        .getElementById('winterHeader')
        .addEventListener('mousemove', e => {
          let percentage = (e.clientX - StartPosition) / window.outerWidth + 0.5
          header.style.setProperty('--percentage', percentage)
        })
      // 离开区域时恢复原状，这里模拟鼠标拉到中间位置
      document
        .getElementById('winterHeader')
        .addEventListener('mouseleave', () => {
          header.classList.remove('moving')
          header.style.setProperty('--percentage', 0.5)
        })
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

header {
  height: 160px;
  position: relative;
  overflow: hidden;

  --percentage: 0.5;
}

header .view,
header .tree {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

header img,
header video {
  position: absolute;
  display: block;
  width: 120%;
  height: 100%;
  object-fit: cover;
}

header .morning {
  z-index: 20;
  opacity: calc(1 - (var(--percentage) - 0.25) / 0.25);
}

header .afternoon {
  z-index: 10;
  opacity: calc(1 - (var(--percentage) - 0.5) / 0.5);
}

header .view {
  transform: translatex(calc(var(--percentage) * 100px));
}

header .tree {
  transform: translatex(calc(var(--percentage) * 50px));
  filter: blur(3px);
}

header .view,
header .tree,
header .morning,
header .afternoon {
  transition: 0.2s all ease-in;
}

header.moving .view,
header.moving .tree,
header.moving .morning,
header.moving .afternoon {
  transition: none;
}

header .window-cover {
  opacity: calc((var(--percentage) - 0.9) / 0.1);
}
</style>
