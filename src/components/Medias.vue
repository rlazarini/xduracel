<template>
  <ul class="flex flex-col items-center justify-center portrait:flex-row portrait:justify-around">
    <li
      v-for="(sm, index) in socialMediaList"
      :key="`${tipo}_${index}`"
      class="py-4"
    >
      <a
        :href="sm.link"
        target="_blank"
        class="flex flex-col items-center justify-center"
      >
        <img
          :src="`/icons/icon-${sm.tipo}.png`"
          alt=""
          class="max-w-[48px] portrait:max-w-[36px]"
        >
        <span class="text-sm portrait:text-xs portrait:font-bold">{{ sm.desc }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const socialMediaList = ref([
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
]);
</script>