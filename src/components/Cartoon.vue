<template>
  <div class="cartoon">
    <img src="../assets/1.png" alt="" class="right position"
      :class="{'right-animate':animateAction}">
    <img src="../assets/2.png" alt="" class="left position"
      :class="{'left-animate':animateAction}">
  </div>
</template>

<script>
export default {
  name: "Cartoon",
  data() {
    return {
      timer: null,
      animateAction: false,
    };
  },
  mounted() {
    this.animateAction = true;
  },
  methods: {},
};
</script>
<style scoped>
.position {
  position: absolute;
  width: 100%;
}
.cartoon {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 5;
}
.right {
  z-index: 10;
  left: 100%;
  top: 0;
  opacity: 0.5;
}
.left {
  z-index: 10;
  bottom: 0;
  right: 100%;
  opacity: 0.5;
}
.left-animate {
  animation: left 4s ease;
}
.right-animate {
  animation: right 4s ease;
}
@keyframes left {
  0% {
    right: 100%;
    opacity: 0.5;
  }
  50% {
    right: 0;
    opacity: 1.5;
  }
  100% {
    right: 100%;
    opacity: 0.5;
  }
}
@keyframes right {
  0% {
    left: 100%;
    opacity: 0.5;
  }
  50% {
    left: 0;
    opacity: 1.5;
  }
  100% {
    left: 100%;
    opacity: 0.5;
  }
}
</style>
