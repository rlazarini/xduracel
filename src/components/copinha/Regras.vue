<template>
  <div class="pr-4">
    <div
      class="pb-8"
      v-if="Object.keys(regraEscolhida).length > 0"
    >
      <div class="rounded-t-lg p-2 text-xl text-black font-bold bg-gradient-to-r from-gray-200 to-gray-400">{{ regraEscolhida.titulo }}</div>
      <div
        class="regra-descricao p-2 bg-white text-black"
        :class="{'rounded-b-lg': !regraEscolhida.regra_especial}"
        v-html="regraEscolhida.descricao"
      ></div>
      <div
        v-if="regraEscolhida.regra_especial"
        class="p-2 rounded-b-lg bg-white text-black"
      >Regra Especial: {{ regraEscolhida.regra_especial_tipo }}</div>
    </div>
    <!-- Regras :::
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
    </div> -->
  </div>
</template>

<script setup>
import {
  $chosenPlayers,
  $listaRegras,
  $regraEscolhida,
} from "/src/store/copinha/regras.js";
import { useStore } from "@nanostores/vue";
import { ref, onMounted } from "vue";
const chosenPlayers = useStore($chosenPlayers);
const listaRegras = useStore($listaRegras);
const regraEscolhida = useStore($regraEscolhida);
const jogadores = ref(chosenPlayers);

onMounted(() => {});
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