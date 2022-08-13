<template>
  <div class="test-viewport">
    <img src="../assets/home1.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.test-viewport {
}
img {
  width: 100%;
}
</style>
