## Endless

# 前言

> Endless表示无止境的🤔Endless是用于服务自身的学习管理平台💡从零搭建全靠奇思妙想✨

## 技术选型

- Vue
- Vuex
- Vue-Router
- ElementUi

## IDEA

- [x] **主页登录欢迎页面**

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

- [x] **进入动画**

  在home-backdrop中使用过渡动效`transition`包裹实现缩放动画

  ```css
  // 主页背景动画
  .backdrop-leave-active {
    animation: bounce-in 0.8s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  ```


- [x] **欢迎页面改用flex布局**

  .....

- [x] **整体布局设计**

  左侧采用类似macdock栏

  - 个人设置
  - 学习区

- [ ] 左侧dock类mac动效


- [ ] **功能设计**

### 问题

- [x] **vuex刷新数据丢失**

  起因：backdrop结束后，通过vuex去改变isShowHome的属性达到显示HomePage，但是在刷新的时候会丢死vuex中的isShowHome属性变为false，这样会隐藏

  - 有三种方式可以解决**localstorage**、**sessionstorage**或**cookie**中

    - localstorage可以理解为关闭浏览器也不会使它消失
    - sessionstorage的生命周期是在仅在当前会话下有效
    - cookie:cookie生命期为只在设置的cookie过期时间之前一直有效

    所以使用sessionstorage比较合适，最终在backdrop销毁時将sessionHomeShow放入其中，在created時去判断是否存在，存在则把store中的homeShow修改

    ```js
    // home-index 
      created() { 
        // 如果sessionStorage中存储了sessionHomeShow,那么将store改为true
          if (sessionStorage.getItem("sessionHomeShow") ) {
            this.$store.commit('CHANG_HOME_SHOW',true)
          }
      },
        
    // home-backdrop
      beforeDestroy() {
        // 销毁组件的时候把vuex中的isShowHome变为true
        this.$store.dispatch("changeHomeShow", true);
        // 将sessionHomeShow存入sessionStorage中
        sessionStorage.setItem('sessionHomeShow','true')
      },
    ```

    - [ ] 待优化（感觉很奇怪）.....

- [ ] 让我再找找Bug...