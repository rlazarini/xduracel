<template>
  <div
    class="w-full flex items-center justify-center mt-4"
    v-if="vencedor.length > 0"
  >
    <div class="winner">
      <div class="winner-inner flex flex-col w-auto px-12 py-1 items-center text-white text-xl rounded-2xl	bg-gradient-to-tr from-yellow-400 to-amber-400">
        <div class="w-full text-center text-black winner-text">Vencedor</div>
        <div class="w-full flex flex-row items-center py-1">
          <Icon
            class="drop-shadow"
            height="64"
            icon="material-symbols:trophy"
            color="#fff"
          />
          <span class="px-3 drop-shadow">{{ vencedor }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { $vencedor } from "/src/store/copinha/regras.js";
import { useStore } from "@nanostores/vue";
const vencedor = useStore($vencedor);
</script>
<style scoped lang="scss">
.winner {
  position: relative;
  z-index: 2;
  &:after {
    content: "";
    position: absolute;
    bottom: 35%;
    left: 5%;
    width: 98%;
    height: 20%;
    border-radius: 8px;
    background: transparent;
    transform: translate(8px, 12px) skew(-32deg, 0deg);
    box-shadow: 0px 32px 15px -4px rgba(255, 255, 255, 0.6);
    z-index: -1;
  }
  .winner-inner {
    box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 1);
    .winner-text {
      font-family: "Bebas Neue", sans-serif;
      font-weight: 400;
      font-style: normal;
      filter: drop-shadow(0 1px 2px rgb(255 255 255 / 0.5))
        drop-shadow(0 1px 1px rgb(255 255 255 / 0.16));
    }
  }
}
</style>
