<template>
  <div class="pacman">
    <div class="pacman-top"></div>
    <div class="pacman-bottom"></div>
    <div class="feed"></div>
  </div>
</template>

<script lang="ts" setup>
interface IPacmanAnimationProps {}

defineProps<IPacmanAnimationProps>();
</script>

<style lang="scss" scoped>
.pacman {
  margin: 40px 10px;
}

.pacman-top {
  background-color: yellow;
  height: 75px;
  width: 150px;
  border-radius: 100px 100px 0 0;
  animation: spin1 0.9s infinite linear;
}

.pacman-bottom {
  background-color: yellow;
  height: 75px;
  width: 150px;
  border-radius: 0 0 100px 100px;
  animation: spin2 0.9s infinite linear;
}

.feed {
  margin-top: -150px;
  margin-left: 15px;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: eat 1s linear 0s infinite;
}

/* Animation*/

@keyframes spin1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-35deg);
  }
}

@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(35deg);
  }
}

@keyframes eat {
  0% {
    box-shadow:
      50px 65px 0 0 white,
      150px 65px 0 0 white,
      250px 65px 0 0 white,
      350px 65px 0 0 white;
  }

  100% {
    box-shadow:
      30px 65px 0 0 white,
      50px 65px 0 0 white,
      150px 65px 0 0 white,
      250px 65px 0 0 white;
  }
}
</style>
