<template>
  <div class="container" v-if="homeShow">
    <el-container>
      <el-aside width="10rem">
        <Sidebar />
      </el-aside>
      <el-main>
        <!-- <button  @click="$router.push('study')">按钮</button> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Sidebar from '../components/Sidebar/index.vue';
export default {
  name: "Home",
  components: { Sidebar },
  data() {
    return {
    };
  },
  methods: {

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