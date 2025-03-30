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
      <template v-if="regraEscolhida.regra_especial">
        <div class="p-2 rounded-b-lg bg-white text-black">
          <template v-if="regraEspecialTipo.includes(regraEscolhida.regra_especial_tipo.tipo)">
            <template v-if="regraEscolhida.regra_especial_tipo.tipo === 'elemento'">
              <template v-if="regraEscolhida.modelo.filter(md => md.jogador).length > 0">
                <div
                  class="flex items-center"
                  v-for="(md, index) in regraEscolhida.modelo"
                  :key="`elm_${index}`"
                >
                  <strong>{{ regraEscolhida[md.jogador] || `Jogador ${index + 1}` }}</strong>:
                  <img
                    :src="md.elemento.icon"
                    class="h-8 mx-2"
                    :alt="md.elemento.nome"
                    :title="md.elemento.nome"
                  >
                </div>
              </template>
              <template v-else>
                <div
                  class="flex items-center"
                  v-for="(md, index) in regraEscolhida.modelo"
                  :key="`elm_${index}`"
                >
                  <strong>Elemento</strong>:
                  <img
                    :src="md.elemento.icon"
                    class="h-8 mx-2"
                    :alt="md.elemento.nome"
                    :title="md.elemento.nome"
                  >
                </div>
              </template>
            </template>
            <template v-else-if="regraEscolhida.regra_especial_tipo.tipo === 'numero'">
              <strong>Número sorteado</strong>: {{ regraEscolhida.modelo }}
            </template>
            <template v-else-if="regraEscolhida.regra_especial_tipo.tipo === 'alfabeto'">
              <strong>Letras sorteadas</strong>: {{ regraEscolhida.modelo.join(', ') }}
            </template>
            <template v-else-if="regraEscolhida.regra_especial_tipo.tipo === 'buff_debuff' || regraEscolhida.regra_especial_tipo.tipo === 'debuff'">
              <template v-if="regraEscolhida.regra_especial_tipo.tipo === 'buff_debuff'">
                <div
                  class="flex items-center pb-2"
                  v-for="(md, index) in regraEscolhida.modelo"
                  :key="`buff_${index}`"
                >
                  <strong>Buff</strong>:
                  <img
                    :src="md.buff.icon"
                    class="h-6 mx-2"
                    :alt="md.buff.nome"
                    :title="md.buff.nome"
                  >
                </div>
              </template>
              <div
                class="flex items-center pb-2"
                v-for="(md, index) in regraEscolhida.modelo"
                :key="`debuff_${index}`"
              >
                <strong>Debuff</strong>:
                <img
                  :src="md.debuff.icon"
                  class="h-6 mx-2"
                  :alt="md.debuff.nome"
                  :title="md.debuff.nome"
                >
              </div>
            </template>
          </template>
          <!-- {{ regraEspecialTipo.includes(regraEscolhida.regra_especial_tipo.tipo) }} - {{ regraEscolhida.regra_especial_tipo }} -->
        </div>
      </template>
      <!-- Regra Especial: {{ regraEscolhida.regra_especial_tipo }} -->
    </div>
  </div>
</template>

<script setup>
import { $regraEscolhida } from "/src/store/copinha/regras.js";
import { useStore } from "@nanostores/vue";
import { ref, onMounted } from "vue";
const regraEscolhida = useStore($regraEscolhida);
const regraEspecialTipo = ref([
  "nova_regra",
  "elemento",
  "numero",
  "alfabeto",
  "mob_favorito",
  "buff_debuff",
  "debuff",
  "nova_luta",
]);

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