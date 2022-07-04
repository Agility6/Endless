<template>
  <div class="w-container">
    <h2 class="w-container-text">Welcome the use</h2>
    <transition name="mask">
      <div class="w-container-mask">
        <div
          class="w-container-mask-content"
          :class="[
            {
              'data-show': index === activeShow,
              'data-up': index === activeUp,
            },
            `w-container-mask-content${index}`,
          ]"
          v-for="(item, index) in textData"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      textData: ["欢迎使用", "歡迎使用", "ようこそ", "환영하다"],
      activeShow: 0,
      activeUp: -1,
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.activeShow = this.activeShow + 1;
      this.activeUp = this.activeUp + 1;
      if (this.activeShow === 4) {
        this.activeShow = 0;
      } else if (this.activeUp === 4) {
        this.activeUp = 0;
      }
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    console.log("end");
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";
@import "@/style/transition.scss";
.w-container {
  position: absolute;
  top: 110px;
  left: 45px;
  .w-container-text {
    font-size: 100px;
    font-weight: 700;
    line-height: 1.06;
    letter-spacing: -0.02em;
    color: #1d1d1f;
    margin-bottom: 10px;
  }
  .w-container-mask {
    position: relative;
    height: 106px;
    overflow: hidden;
    .w-container-mask-content {
      position: absolute;
      top: 100px;
      font-size: 70px;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 106px;
      display: block;
      background-size: 100% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-repeat: no-repeat;
    }
  }
}
</style>