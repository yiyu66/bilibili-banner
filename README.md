# bilibili 秋冬春夏 banner仿写 不同季节头部动画仿写
图片随着鼠标的位移呈现不同位置的移动以及模糊变换
由于我写的时候已经是21年夏天了，20年季节的banner多为网上仿写学习而来
## 鼠标移入banner
记录鼠标切入点。
## 鼠标在banner中移动
通过与鼠标初始未知的差计算偏移量，进行模糊和位移操作。
## 鼠标移出banner
鼠标移出时缓慢恢复到初始状态方法
- 使用setInterval每16ms操作一次
- 使用requestAnimationFrame
- 直接用CSS3 transition过渡效果
## 2020秋眨眼效果
  应该要判断图片是否加载完成，再进行动画。动画效果可以使用requestAnimationFrame代替setTimeout试试。

  通过require获取图片资源，有的有CDN资源，有的是本地获取。例如：`require('./2-bi.png')`
1. **2020秋冬**
2. **2021春夏**


  
  **加粗**
  *倾斜*
  ***加粗倾斜***
  
```javascript
//代码块
```
