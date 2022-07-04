## Endless

#### 前言

Endless表示无止境的🤔

打造自己使用的学习管理平台

#### 技术选择

- Vue
- Vuex
- Vue-Router

#### IDEA

- [x] 主页登录欢迎页面

  整体思路就是使用`v-for`遍历，利用index去控制切换的词语，在进行简单的判断，在created的时候添加定时器

  ```html
  <!-- html -->
  <div
  class="w-container-mask-content"
  :class="{
      'data-show': index === activeShow,
      'data-up': index === activeUp,}"
  v-for="(item, index) in textData"
  :key="index">
  {{item}}</div>
  ```

  ```js
  // js
  created() {
        this.timer = setInterval(() => {
        this.activeShow = this.activeShow+1
        this.activeUp = this.activeUp+1
        if(this.activeShow === 4) {
          this.activeShow = 0
        } else if(this.activeUp === 4) {
           this.activeUp = 0
        }
      }, 2000);
  }
  ```

- [x] 进入动画

  采用缩放动画

  ```css
  // Home
  .back-btn-leave-active,.back-leave-active,.back-leave-active {
    animation: bounce-in .8s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  ```

  