<template>
  <transition name="backdrop">
    <div class="back-container" v-if="isShow">
      <div class="back-backdrop">
        <welcome class="welcome" />
        <div class="backdrop"></div>
      </div>
      <div class="back-btn-img">
        <img
          class="img-back"
          src="@/assets/imgs/dd6554108591961.5fc105b530f50.jpg"
          alt=""
        />

        <button @click="changePage" class="back-btn">进入</button>
      </div>
    </div>
  </transition>
</template>

<script>
import Welcome from "@/components/home/Welcome";
export default {
  name: "backdrop",
  components: { Welcome },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    changePage() {
      this.isShow = false;
      // 使用replace它不会向 history 添加新记录
      this.$router.replace("/Home");
    },
  },
  beforeDestroy() {
    // 销毁组件的时候把vuex中的isShowHome变为true
    this.$store.dispatch("changeHomeShow", true);
    // 将sessionHomeShow存入sessionStorage中
    sessionStorage.setItem('sessionHomeShow','true')
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/transition.scss";
.back-container {
  display: flex;
  height: 100%;
  width: 100%;
  .back-backdrop {
    .welcome {
      z-index: 2;
    }
    .backdrop {
      height: 100%;
      width: 100%;
      // background-image: linear-gradient( 109.6deg,  rgba(25,170,209,1) 11.3%, rgba(21,65,249,1) 69.9% );
      background-color: #e0e0e0;
    }
  }
  .back-btn-img {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    .back-btn {
      font-size: 20px;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 5%;
      width: 350px;
      height: 50px;
      border-radius: 30px;
      border: 1px solid #2864d4;
      margin-top: 200px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-image: linear-gradient(
          109.6deg,
          rgba(25, 170, 209, 1) 11.3%,
          rgba(21, 65, 249, 1) 69.9%
        );
      }
    }
    .img-back {
      width: 800px;
      height: 800px;
    }
  }
}
</style>