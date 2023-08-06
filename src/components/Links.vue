<template>
  <ul class="list-outside list-disc ml-5">
    <li
      class="py-2"
      v-for="(link, index) in linksUteis"
      :key="`link_${index}`"
    >
      <a
        :href="link.link"
        target="_blank"
      >
        <h4 class="text-lg text-yellow-200">{{ link.name }}</h4>
        <p>{{ link.desc }}</p>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const linksUteis = ref([
  {
    link: "https://preview.redd.it/p22e704rpvs61.jpg?width=2478&format=pjpg&auto=webp&s=1d7b11f2753dc5c7496477e248fd69894feb0de7",
    name: "Tabela do Tricaru",
    desc: "Tabela da quantidade de defesa necessária para os icarus",
  },
  {
    link: "https://sw-tools.net/optimizer",
    name: "SW Tools",
    desc: "Calculadora de speed e sinergia do time",
  },
  {
    link: "https://swgt.io/where2use/",
    name: "SW Guild Tools",
    desc: "Defesas de Guildas por monstro",
  },
  {
    link: "https://summonerswar.fandom.com/wiki/Summoners_War:_Sky_Arena_Wiki",
    name: "Summoners War Wiki",
    desc: "",
  },
  {
    link: "https://swq.jp/l/en-US/",
    name: "SWQ",
    desc: "Códigos ativos do Summoners War",
  },
  {
    link: "https://swarfarm.com/",
    name: "Swarfarm",
    desc: "Site com detalhes sobre os monstros",
  },
]);
</script>