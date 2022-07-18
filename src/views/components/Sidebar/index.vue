<template>
  <div class="aside-container">
    <ul
      default-active="1-4-1"
      class="aside-container-ul"
      @mouseleave="leaveFun()"
    >
      <li
        v-for="(item, index) in homeData"
        :key="index"
        :index="`1-${index}`"
        @mousemove="enterFun(index, $event)"
        ref="item"
        class="aside-container-item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      homeData: ["📖", "🤵🏻", "🤔", "🤔", "🤔"],
    };
  },
  methods: {
    // 鼠标进入
    /**
     * 1.先获取itemList --> 再获取对应的item
     * 2.拿到getBoundingClientRect()
     * 3.计算offset
     * 4.获取prev和next
     * 5.添加属性
     */
    enterFun(idx, event) {
      const itemList = this.$refs.item;
      const item = itemList[idx];
      const itemRect = item.getBoundingClientRect();
      const offset = Math.abs(event.clientY - itemRect.top) / itemRect.height;
      const prev = itemList[idx - 1] || null;
      const next = itemList[idx + 1] || null;
      const scale = 0.6;
      item.style.setProperty("--scale", 1 + scale);
      if (prev) {
        prev.style.setProperty("--scale", 1 + scale * Math.abs(offset - 1));
      }
      if (next) {
        next.style.setProperty("--scale", 1 + scale * offset);
      }
    },
    // 鼠标离开
    leaveFun() {
      this.resetScale();
    },
    // 重置scale
    resetScale() {
      const itemList = this.$refs.item;
      itemList.forEach((element) => {
        element.style.setProperty("--scale", 1);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.aside-container {
  display: flex;
  height: 90vh;
  width: 8rem;
  justify-content: center;
  .aside-container-ul {
    display: flex;
    height: 100%;
    width: 7rem;
    border-radius: 50px;
    background-color: #34609F;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    --scale: 1;
    .aside-container-item {
      text-align: center;
      border-radius: 50px;
      font-size: calc(4rem * var(--scale));
      padding: 1rem 0;
      cursor: default;
      position: relative;
      right: calc((4rem * var(--scale) - 4rem) / 2 * -1);
    }
  }
}
</style>