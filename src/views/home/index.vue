<template>
  <div class="container">
    <backdrop />
  </div>
</template>

<script>
import Backdrop from './backdrop.vue'
export default {
  name: "Home",
  components: {Backdrop}
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100%;

}
</style>