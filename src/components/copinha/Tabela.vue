<template>
  <div class="w-full flex justify-between pb-5">
    <h2 class="text-2xl text-white font-bold font-border">Copinha SW</h2>
    <button
      v-if="chosenPlayers.length > 0"
      @click="limparJogares"
      class="relative h-12 overflow-hidden rounded border border-neutral-200 bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
    >
      <span class="relative">Limpar todos Jogadores</span>
    </button>
  </div>
  <template v-if="chosenPlayers.length < 1">
    <div class="flex w-full">
      <input
        v-model="nomesBatalha"
        type="text"
        placeholder="Coloque o nome dos lutadores separados por vírgula"
        class="w-10/12 px-2 py-4 text-black"
      />
      <button
        id="gerarBatalha"
        class="w-2/12 border"
        :disabled="gerarBatalhaButton"
        @click="gerarBatalha"
      >
        Gerar
      </button>
    </div>
  </template>
  <template v-else>
    Participantes:
    <span
      v-for="(jogador, index) in chosenPlayers"
      class="inline-block rounded-full text-xs font-bold text-white bg-gradient-to-r bg-cyan-700 bg-cyan-900 py-2 px-3 ml-3 mb-2"
      :class="{'!ml-0': index === 0}"
      :key="`jog_${index}`"
    >
      {{jogador}}
    </span><br>
    Total: {{chosenPlayers.length}}
    <template v-if="true">
      <div class="brackets">
        <div
          v-for="(index, num) in Object.keys(listaJogos).length"
          :class="`w-full backets-${index} flex space-between ${index === Object.keys(listaJogos).length ? 'ultima_disputa' : ''}`"
          :key="`brackets_${num}`"
        >
          <div
            v-for="(indexFormacao, index_f) in listaJogos[`linha_${num}`]"
            :class="`formacaoJogadores relative w-[${Math.floor(100 / Math.pow(2,Math.log(chosenPlayers.length)/Math.log(2) - index))}%]`"
            :key="`linha_jogos_${index_f}`"
          >
            <div
              class="bg-gradient-to-r rounded-t-lg from-stone-500 to-yellow-700 mx-2 py-1 px-2 cursor-pointer hover:bg-gradient-to-r hover:from-stone-600 hover:to-yellow-800"
              :class="{'ml-0': index_f === 0, 'mr-0': index_f === listaJogos[`linha_${num}`].length - 1}"
              @click="exibeRegra(indexFormacao['regra'], indexFormacao['jogador_1'], indexFormacao['jogador_2'])"
            >ver regra</div>
            <div
              class="relative grid grid-rows-1 rounded-b-lg col-span-2 text-ellipsis overflow-hidden mx-2 bg-gradient-to-r from-gray-200 to-gray-400 text-black"
              :class="{'ml-0': index_f === 0, 'mr-0': index_f === listaJogos[`linha_${num}`].length - 1}"
            >
              <div
                class="nomeJogador transition-all inline-flex p-2 items-center min-h-[40px]"
                :title="indexFormacao['jogador_1']"
              >
                {{indexFormacao['jogador_1']}}
                <div
                  class="acaoJogador absolute transition-all flex gap-2 -right-32"
                  v-if="indexFormacao['jogador_1'].length > 0 && indexFormacao['jogador_2'].length > 0"
                >
                  <button
                    class="flex items-center justify-center w-[24px] h-[24px] rounded bg-green-400 shadow-inner"
                    @click="escolheVencedor({
                      posicao: num,
                      bloco: index_f,
                      linha: listaJogos[`linha_${num}`][index_f],
                      vencedor: 'jogador_1'
                    })"
                  >
                    <Icon
                      class="drop-shadow"
                      icon="material-symbols:trophy"
                      color="#fff"
                    />
                  </button>
                  <!-- <button class="flex items-center justify-center w-[24px] h-[24px] rounded bg-green-400 shadow-inner">
                    <Icon
                      class="drop-shadow"
                      icon="material-symbols:trophy"
                      color="#fff"
                    />
                  </button> -->
                </div>
              </div>
              <div
                class="nomeJogador transition-all inline-flex p-2 items-center min-h-[40px] border-t-2 border-orange-600"
                :title="indexFormacao['jogador_2']"
              >
                {{indexFormacao['jogador_2']}}
                <div
                  class="acaoJogador absolute transition-all flex gap-2 -right-32"
                  v-if="indexFormacao['jogador_1'].length > 0 && indexFormacao['jogador_2'].length > 0"
                >
                  <button
                    class="flex items-center justify-center w-[24px] h-[24px] rounded bg-green-400 shadow-inner"
                    @click="escolheVencedor({
                      posicao: num,
                      bloco: index_f,
                      linha: listaJogos[`linha_${num}`][index_f],
                      vencedor: 'jogador_2'
                    })"
                  >
                    <Icon
                      class="drop-shadow"
                      icon="material-symbols:trophy"
                      color="#fff"
                    />
                  </button>
                  <!-- <button class="flex items-center justify-center w-[24px] h-[24px] rounded bg-green-400 shadow-inner">
                    <Icon
                      class="drop-shadow"
                      icon="material-symbols:trophy"
                      color="#fff"
                    />
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="jogadorCampeao.length > 0">
        O vencedor foi: {{jogadorCampeao}}
      </div>
    </template>
  </template>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import {
  $listaRegras,
  $chosenPlayers,
  updateChosenPlayers,
  getRegras,
  setRegra,
} from "/src/store/copinha/regras.js";
import { useStore } from "@nanostores/vue";
import {
  sortArray,
  randomNumber,
  alfabeto,
  elementos,
  buffs,
  debuffs,
} from "/src/utils/index.js";
import { ref, watch, computed, onMounted } from "vue";

const nomesBatalha = ref("");
const gerarBatalhaButton = ref(true);
const listaJogos = ref({});
const regrasGerais = ref([]);
const regrasUsadas = ref([]);
const jogadorCampeao = ref("");
const regraEspecialTipo = ref([
  "nova_regra",
  "elemento",
  "numero",
  "alfabeto",
  "buff_debuff",
  "debuff",
  "nova_luta",
]);
// "mob_favorito",

const listaRegras = useStore($listaRegras);
const chosenPlayers = useStore($chosenPlayers);

const gerarBatalha = () => {
  const jogadores =
    nomesBatalha.value.length > 0
      ? nomesBatalha.value?.split(",").filter((n) => n.trim())
      : chosenPlayers.value;

  if (jogadores.length === 0) {
    return false;
  } else if (
    jogadores.length !== 2 &&
    jogadores.length !== 4 &&
    jogadores.length !== 8 &&
    jogadores.length !== 16
  ) {
    alert(
      `A quantidade de jogadores deve ser de: 2, 4, 8 ou 16.\nA quantidade inserida foi de: ${jogadores.length}`
    );
    return false;
  }

  updateChosenPlayers(jogadores);
  // DEBUG //
  const sortJogadores = sortArray(jogadores);
  for (
    let i = 0, lista = sortJogadores.length / 2;
    i < Math.log(sortJogadores.length) / Math.log(2);
    i++
  ) {
    listaJogos.value[`linha_${i}`] = [];
    for (let j = 0; j < lista; j++) {
      listaJogos.value[`linha_${i}`][j] = {
        jogador_1: "",
        jogador_2: "",
        regra: gerarRegra(),
      };
    }
    lista = lista / 2;
  }
  for (let i = 0, posicao = 0; i < sortJogadores.length / 2; i++) {
    listaJogos.value["linha_0"][i] = {
      jogador_1: sortJogadores[posicao],
      jogador_2: sortJogadores[posicao + 1],
      regra: gerarRegra(),
    };
    posicao = posicao + 2;
  }
};
const exibeRegra = (regra, j1, j2) => {
  setRegra({ ...regra, jogador_1: j1, jogador_2: j2 });
};
const escolheVencedor = ({ posicao, bloco, linha, vencedor }) => {
  if (listaJogos.value[`linha_${posicao + 1}`]) {
    listaJogos.value[`linha_${posicao + 1}`][Math.floor(bloco / 2)][
      `jogador_${(bloco % 2) + 1}`
    ] = linha[vencedor];
  } else {
    jogadorCampeao.value = linha[vencedor];
  }
};
const gerarRegra = () => {
  const posicaoRegraUsada = randomNumber(0, regrasUsadas.value.length - 1);
  const randomRegra = regrasUsadas.value[posicaoRegraUsada];
  const regraEscolhida = JSON.parse(JSON.stringify(randomRegra));
  if (
    regraEscolhida?.regra_especial &&
    regraEspecialTipo.value.includes(
      regraEscolhida?.regra_especial_tipo?.tipo || ""
    )
  ) {
    switch (regraEscolhida?.regra_especial_tipo?.tipo) {
      case "nova_regra":
        const sortRegra = sortArray(
          regrasGerais.value.filter((reg) => !reg?.amaldicoar)
        );
        const formatoRegra =
          regraEscolhida?.regra_especial_tipo?.formato || false;
        const quantidadeRegra =
          regraEscolhida?.regra_especial_tipo?.quantidade || false;
        regraEscolhida["modelo"] = [];
        if (formatoRegra) {
          formatoRegra.forEach((posicao, index) => {
            for (let i = 0; i < posicao; i++) {
              const posicaoRegra = randomNumber(0, sortRegra.length - 1);
              regraEscolhida["modelo"].push({
                jogador: `jogador_${index + 1}`,
                regra: sortRegra[posicaoRegra],
              });
              sortRegra.splice(posicaoRegra, 1);
            }
          });
        } else if (quantidadeRegra) {
          for (let i = 0; i < quantidadeRegra; i++) {
            const posicaoRegra = randomNumber(0, sortRegra.length - 1);
            regraEscolhida["modelo"].push({
              elemento: sortRegra[posicaoRegra],
            });
          }
        }
        break;
      case "elemento":
        const sortElemento = sortArray(elementos);
        const formatoElm =
          regraEscolhida?.regra_especial_tipo?.formato || false;
        const quantidadeElm =
          regraEscolhida?.regra_especial_tipo?.quantidade || false;
        regraEscolhida["modelo"] = [];
        if (formatoElm) {
          formatoElm.forEach((posicao, index) => {
            for (let i = 0; i < posicao; i++) {
              const posicaoElemento = randomNumber(0, sortElemento.length - 1);
              regraEscolhida["modelo"].push({
                jogador: `jogador_${index + 1}`,
                elemento: sortElemento[posicaoElemento],
              });
              sortElemento.splice(posicaoElemento, 1);
            }
          });
        } else if (quantidadeElm) {
          for (let i = 0; i < quantidadeElm; i++) {
            const posicaoElemento = randomNumber(0, sortElemento.length - 1);
            regraEscolhida["modelo"].push({
              elemento: sortElemento[posicaoElemento],
            });
          }
        }
        break;
      case "numero":
        regraEscolhida["modelo"] = randomNumber(
          regraEscolhida?.regra_especial_tipo?.limite[0],
          regraEscolhida?.regra_especial_tipo?.limite[1]
        );
        break;
      case "alfabeto":
        regraEscolhida["modelo"] = [];
        const sortAlfabeto = sortArray(alfabeto);
        const quantidadeAlf = regraEscolhida?.regra_especial_tipo?.quantidade;
        for (let i = 0; i < quantidadeAlf; i++) {
          const posicaoAlfabeto = randomNumber(0, sortAlfabeto.length - 1);
          regraEscolhida["modelo"].push(sortAlfabeto[posicaoAlfabeto]);
          sortAlfabeto.splice(posicaoAlfabeto, 1);
        }
        break;
      // case "mob_favorito":
      //   console.log("REGRA Mob Favorito");
      //   break;
      case "buff_debuff":
      case "debuff":
        const sortBuff = sortArray(buffs.filter((a) => a.active));
        const sortDebuff = sortArray(debuffs.filter((a) => a.active));
        const formatoBuff =
          regraEscolhida?.regra_especial_tipo?.formato || false;
        const quantidadeBuff =
          regraEscolhida?.regra_especial_tipo?.quantidade || false;
        regraEscolhida["modelo"] = [];
        if (formatoBuff) {
          formatoBuff.forEach((posicao, index) => {
            for (let i = 0; i < posicao; i++) {
              const posicaoBuff = randomNumber(0, sortBuff.length - 1);
              const posicaoDebuff = randomNumber(0, sortDebuff.length - 1);
              regraEscolhida["modelo"].push({
                jogador: `jogador_${index + 1}`,
                buff: sortBuff[posicaoBuff],
                debuff: sortDebuff[posicaoDebuff],
              });
              sortBuff.splice(posicaoBuff, 1);
              sortDebuff.splice(posicaoDebuff, 1);
            }
          });
        } else if (quantidadeBuff) {
          for (let i = 0; i < quantidadeBuff; i++) {
            const posicaoBuff = randomNumber(0, sortBuff.length - 1);
            const posicaoDebuff = randomNumber(0, sortDebuff.length - 1);
            regraEscolhida["modelo"].push({
              buff: sortBuff[posicaoBuff],
              debuff: sortDebuff[posicaoDebuff],
            });
            sortBuff.splice(posicaoBuff, 1);
            sortDebuff.splice(posicaoDebuff, 1);
          }
        }
        break;
      case "nova_luta":
        // console.log("REGRA de uma nova luta");
        break;
      default:
      // console.log("nenhuma regra");
    }
  }
  regrasUsadas.value.splice(posicaoRegraUsada, 1);
  return regraEscolhida;
};
const limparJogares = () => {
  const jogadores = [];
  listaJogos.value = {};
  setRegra({});
  updateChosenPlayers(jogadores);
};
watch(nomesBatalha, () => {
  gerarBatalhaButton.value =
    nomesBatalha.value.split(",").filter((n) => n.trim()).length <= 1;
});
onMounted(async () => {
  await getRegras();
  regrasGerais.value = sortArray(listaRegras.value.regras);
  regrasUsadas.value = regrasGerais.value;
  updateChosenPlayers();
  gerarBatalha();
});
</script>
<style scope lang="scss">
#gerarBatalha {
  background-color: #000;
  &:disabled {
    background-color: #ccc;
  }
}
.brackets {
  .formacaoJogadores {
    margin-top: 22px;
    text-align: left;
    &.w-\[12\%\] {
      width: 12.5%;
    }
    &.w-\[25\%\] {
      width: 25%;
    }
    &.w-\[50\%\] {
      width: 50%;
    }
    &.w-\[75\%\] {
      width: 75%;
    }
    &.w-\[100\%\] {
      width: 100%;
    }
    &:after {
      content: "";
      width: 2px;
      height: 22px;
      bottom: -22px;
      left: calc(50% - 2px);
      position: absolute;
      background-color: #ccc;
    }
    &:before {
      // content: "";
      width: 2px;
      height: 22px;
      top: -22px;
      left: calc(50% - 2px);
      position: absolute;
      background-color: #ccc;
    }
    .nomeJogador {
      &:hover {
        .acaoJogador {
          right: 6px;
        }
      }
    }
  }
  .ultima_disputa {
    .formacaoJogadores {
      &:after {
        content: "";
        display: none;
      }
    }
  }
}
</style>