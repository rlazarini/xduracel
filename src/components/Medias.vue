<template>
  <ul
    class="flex flex-col items-center justify-center portrait:flex-row portrait:justify-around"
    v-if="menuItens.length"
  >
    <li
      v-for="(sm, index) in menuItens"
      :key="`${sm.tipo}_${index}`"
      class="py-4"
    >
      <a
        :href="sm.link"
        class="flex flex-col items-center justify-center"
      >
        <img
          :src="`/icons/icon-${sm.tipo}.png`"
          alt=""
          class="max-w-[38px] portrait:max-w-[32px]"
        >
        <span class="text-sm portrait:text-xs portrait:font-bold">{{ sm.desc }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const menuItens = ref([
  {
    tipo: "instagram",
    desc: "Instagram",
    link: "https://www.instagram.com/duracelgaming/",
  },
  {
    tipo: "youtube",
    desc: "xDuracel",
    link: "https://www.youtube.com/@xDuracelx",
  },
  {
    tipo: "youtube",
    desc: "xDuracelx",
    link: "https://www.youtube.com/@xDuracelx1",
  },
  {
    tipo: "livepix",
    desc: "Livepix",
    link: "https://livepix.gg/xduracel",
  },
  {
    tipo: "calendar",
    desc: "Agenda",
    link: "/calendario",
  },
  {
    tipo: "services",
    desc: "Serviços",
    link: "/servicos",
  },
  {
    tipo: "links",
    desc: "Links úteis",
    link: "/links",
  },
]);
</script>