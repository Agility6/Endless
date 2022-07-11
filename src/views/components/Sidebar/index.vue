<template>
  <div class="aside-item-container">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item
        v-for="(item, index) in homeData"
        :key="index"
        :index="`1-${index}`"
        class="mirai-menu-item">
        {{item}}
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      homeData: [
        '📖',
        '🤵🏻',
        '🤔',
        '🤔',
        '🤔'
      ]
    };
  },
  computed: {
    // 鼠标从左到右 --> 左边的图标会逐渐减小，右边的图标会逐渐增大
    // 需要监听所有的homeData 获取getBoundingClientRect
  }
};
</script>

<style lang="scss" scoped>
.aside-item-container {
  display: flex;
  height: 90vh;
  width: 100px;
  justify-content: center;
  .el-menu-vertical-demo {
    display: flex;
    height: 100%;
    border-radius: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mirai-menu-item {
      height: 100px;
      font-size: 30px;
      text-align: center;
      line-height: 100px;
      border-radius: 50px;
      &:hover {
        background-color: skyblue;
      }
    }
  }
}
</style>