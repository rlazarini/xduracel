<template>
  <div class="pr-4">
    Regras :::
    <div
      v-for="(regra, index) in listaRegras.regras"
      :key="`regra_${index}`"
      class="pb-8"
    >
      <div class="rounded-t-lg p-2 text-xl text-black font-bold bg-gradient-to-r from-gray-200 to-gray-400">{{ regra.titulo }}</div>
      <div
        class="regra-descricao p-2 bg-white text-black"
        :class="{'rounded-b-lg': !regra.regra_especial}"
        v-html="regra.descricao"
      ></div>
      <div
        v-if="regra.regra_especial"
        class="p-2 rounded-b-lg bg-white text-black"
      >Regra Especial: {{ regra.regra_especial_tipo }}</div>
    </div>
  </div>
  <template v-if="jogadores.length > 0">
    <div>
      <h2 class="text-2xl text-white font-bold pb-5 font-border">Regras</h2>
    </div>
  </template>
</template>

<script setup>
import { $chosenPlayers, $listaRegras } from "/src/store/copinha/regras.js";
import { useStore } from "@nanostores/vue";
import { ref, onMounted } from "vue";
const chosenPlayers = useStore($chosenPlayers);
const listaRegras = useStore($listaRegras);
const jogadores = ref(chosenPlayers);

onMounted(() => {
  console.log("Lista das regras :: ", listaRegras.value);
  console.log("Lista personagens :: ", chosenPlayers.value);
});
</script>
<style scoped lang="scss">
:deep(.regra-descricao) {
  div {
    &:not(:last-child) {
      padding-bottom: 8px;
    }
  }
}
</style>