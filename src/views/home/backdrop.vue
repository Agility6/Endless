<template>
  <div class="back-container">
    <transition-group name="back">
      <welcome class="welcome" v-if="isShow" key="1" />
      <div class="backdrop" v-if="isShow" key="2"></div>
    </transition-group>
    <transition-group name="back-btn">
      <img
        v-if="isShow"
        key="1"
        class="img-back" 
        src="@/assets/imgs/dd6554108591961.5fc105b530f50.jpg" alt="">
      <button @click="changePage" v-if="isShow" class="back-btn" key="2">进入</button>
    </transition-group>

  </div>
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/transition.scss";
.back-container {
  position: relative;
  height: 100%;
  width: 100%;
  .welcome {
    z-index: 2;
  }
  .backdrop {
    height: 100%;
    width: 100%;
    // background-image: linear-gradient( 109.6deg,  rgba(25,170,209,1) 11.3%, rgba(21,65,249,1) 69.9% );
    background-color: #e0e0e0;
  }
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
    position: absolute;
    top: 0;
    right: 0;
    width: 800px;
    height: 800px;
  }
}
</style>