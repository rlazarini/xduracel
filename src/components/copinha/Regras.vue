<template>
  <template v-if="jogadores.length > 0">
    <!-- <div>
      <h2 class="text-2xl text-white font-bold pb-5 font-border">Regras</h2>
      <div class="w-full">Jogadores: {{jogadores.join(', ')}}</div>
    </div> -->
  </template>
</template>

<script setup>
import { chosenPlayers } from '/src/store/copinha/regras.js';
import { useStore } from '@nanostores/vue';
import { ref, onMounted } from "vue"
const $chosenPlayers = useStore(chosenPlayers);
const jogadores = ref($chosenPlayers)

</script>