<template>
  <div class="twitch absolute bottom-6 left-3 p-2 rounded-full w-10 h-10 portrait:left-auto portrait:right-6 portrait:w-12 portrait:h-12">
    <a
      href="https://www.twitch.tv/xduracel"
      target="_blank"
    >
      <img
        src="/icons/icon-twitch.png"
        alt="w-auto mt-px ml-px"
      >
    </a>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0% {
    background-position: 30% 30%;
  }
  50% {
    background-position: 250% 250%;
  }
  100% {
    background-position: 30% 30%;
  }
}
.twitch {
  border: 1px solid rgba(128, 0, 213, 0.5);
  background: radial-gradient(
    circle,
    rgba(221, 146, 255, 1) 20%,
    rgba(128, 0, 213, 1) 100%
  );
  background-size: 250% 250%;
  animation: pulse 12s ease-in-out infinite alternate;
}
</style>
