<template>
  <div>
    <body>
      <header id="springHeader">
        <div class="b-logo b-wrap" style="margin: 0px">
          <a href="//www.bilibili.com" class="head-logo">
            <img src="./logo.png" class="logo-img" />
          </a>
        </div>
        <img src="./back1.png" class="back-img" />
      </header>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    document.title = this.$route.meta.title
  },
  mounted() {
    this.spring()
  },
  methods: {
    spring() {
      const header = document.querySelector('header')
      let StartPosition = 0
      document
        .getElementById('winterHeader')
        .addEventListener('mouseover', (e) => {
          StartPosition = e.clientX
          header.classList.add('moving')
          console.log('进入了画面，初始位置为' + StartPosition)
        })
      document
        .getElementById('winterHeader')
        .addEventListener('mousemove', (e) => {
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
    },
  },
}
</script>

<style scoped>
.back-img {
  height: 160px;
  position: relative;
  overflow: hidden;
}
.logo-img {
  position: absolute;
  z-index: 999;
  margin: 70px 130px;
}
</style>