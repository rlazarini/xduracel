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
  height: 105vh;
  width: 105vw;
  background: rgba(9, 7, 8, 1);
  background: url("/full_boneco.png") no-repeat 5% bottom / auto 63%,
    linear-gradient(
        85deg,
        rgba(255, 206, 15, 1) 0%,
        rgba(255, 206, 15, 1) 17.4%,
        rgba(9, 7, 8, 1) 17.5%
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
@media only screen and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .bg {
    background-size: auto 100%;
  }
  .logo-site {
    max-width: 32vw;
  }
  .twitch {
    left: 6vw !important;
  }
}
/* ----------- iPad Conf ----------- */
/* Portrait and Landscape */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .bg {
    width: 100vw;
    height: 92vh;
  }
}
</style>
