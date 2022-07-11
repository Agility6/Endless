<template>
  <div class="container" v-if="homeShow">
    <el-container>
      <el-aside width="100px">
        <Sidebar />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Sidebar from '../components/Sidebar/index.vue';
import Backdrop from "./backdrop.vue";
export default {
  name: "Home",
  components: { Backdrop, Sidebar },
  data() {
    return {
      isShowHome: this.homeShow,
    };
  },
  computed: {
    ...mapState(["homeShow"]),
  },
  created() {
    // 如果sessionStorage中存储了sessionHomeShow,那么将store改为true
    if (sessionStorage.getItem("sessionHomeShow")) {
      this.$store.commit("CHANG_HOME_SHOW", true);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/transition.scss";
.container {
  display: flex;
  height: 100vh;
  width: 100%;
}
</style>