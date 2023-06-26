<template>
  <router-view></router-view>
</template>

<style>
body {
  height: 100vh;
  background: rgb(255, 206, 15);
  background: url("/full_boneco.png") no-repeat 10% bottom / auto 80%,
    url("/logo.png") no-repeat 65% 8% / 33% auto,
    linear-gradient(
        75deg,
        rgba(255, 206, 15, 1) 0%,
        rgba(255, 206, 15, 1) 30.8%,
        rgba(9, 7, 8, 1) 31%
      )
      top left / cover;
}
@media (orientation: portrait) {
  body {
    height: 100vh;
    background: rgb(255, 206, 15);
    background: url("/full_boneco.png") no-repeat 0 bottom / auto 40%,
      url("/logo.png") no-repeat center 4% / 60% auto,
      linear-gradient(
          85deg,
          rgba(255, 206, 15, 1) 0%,
          rgba(255, 206, 15, 1) 36.8%,
          rgba(9, 7, 8, 1) 37%
        )
        top left / cover;
  }
}
</style>
