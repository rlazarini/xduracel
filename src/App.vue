<template>
  <div class="bg"></div>
  <router-view></router-view>
</template>

<style>
html {
  height: -webkit-fill-available;
  transition: all 0.5s;
}
.bg {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(9, 7, 8, 1);
  background: url("/full_boneco.png") no-repeat 5% bottom / auto 63%,
    linear-gradient(
        85deg,
        rgba(255, 206, 15, 1) 0%,
        rgba(255, 206, 15, 1) 17.8%,
        rgba(9, 7, 8, 1) 18%
      )
      center;
  background-repeat: no-repeat;
  z-index: -1;
}
@media (orientation: portrait) {
  .bg {
    background: url("/full_boneco.png") no-repeat 0 bottom / auto 40%,
      linear-gradient(
          85deg,
          rgba(255, 206, 15, 1) 0%,
          rgba(255, 206, 15, 1) 36.8%,
          rgba(9, 7, 8, 1) 37%
        )
        center;
  }
}
</style>
