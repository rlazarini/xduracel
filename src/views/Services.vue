<template>
  <main class="flex w-full h-[90vh] flex-col">
    <Header />
    <div class="grid grid-cols-3 gap-4 portrait:grid-cols-1">
      <div class="portrait:order-last portrait:hidden">
      </div>
      <div class="h-full col-span-2">
        <div class="grid grid-cols-1 gap-4 text-white portrait:grid-rows-2 portrait:grid-cols-none">
          <div class="w-8/12 portrait:w-auto portrait:my-0 portrait:mx-auto portrait:max-w-[85vw]">
            <h2 class="text-2xl text-yellow-400 font-bold pb-5 font-border">Serviços</h2>
            <div id="accordion">
              <!-- ---------------------------------------------- -->
              <!-- ---------------------------------------------- -->
              <!--            PRIMEIRO ITEM DO ACORDION           -->
              <!--            PRIMEIRO ITEM DO ACORDION           -->
              <!--            PRIMEIRO ITEM DO ACORDION           -->
              <!-- ---------------------------------------------- -->
              <!-- ---------------------------------------------- -->
              <div>
                <input
                  type="checkbox"
                  id="accordion-1"
                  name="accordion-1"
                  class="hidden"
                >
                <div class="accordion-header">
                  <label
                    for="accordion-1"
                    class="
                      flex
                      w-full
                      p-5
                      bg-amber-500
                      items-center
                      justify-between
                      font-medium
                      text-left
                      text-white
                      font-border
                      border
                      border-b-0
                      border-gray-200
                      hover:bg-amber-600"
                  >
                    <span>Quais serviços oferecemos?</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </label>
                </div>
                <div class="accordion-content">
                  <div class="p-5 bg-white border border-b-0 border-gray-200">
                    <p class="mb-2 text-gray-500">Coach completo, free rune para PVE e RTA, além de venda de runas.</p>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="accordion-2"
                  name="accordion-2"
                  class="hidden"
                >
                <div class="accordion-header">
                  <label
                    for="accordion-2"
                    class="
                      flex
                      w-full
                      p-5
                      bg-amber-500
                      items-center
                      justify-between
                      font-medium
                      text-left
                      text-white
                      font-border
                      border
                      border-b-0
                      border-gray-200
                      hover:bg-amber-600"
                  >
                    <span>E qual o valor dos serviços?</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </label>
                </div>
                <div class="accordion-content">
                  <div class="p-5 bg-white border border-b-0 border-gray-200">
                    <ul class="list-disc pl-4">
                      <li class="mb-2 text-gray-500">Coach completo: <strong>R$80,00</strong></li>
                      <li class="mb-2 text-gray-500">Free rune PVE: <strong>R$150,00</strong></li>
                      <li class="mb-2 text-gray-500">Free rune PVE: <strong>R$150,00</strong></li>
                      <li class="mb-2 text-gray-500">Free rune Completo: <strong>R$300,00</strong><br /><em class="underline underline-offset-1">Caso for fazer o free rune fora do sábado (por mano ou pack de free rune), terá desconto de R$50,00 e saíra por <strong>R$250,00</strong></em></li>
                      <li class="mb-2 text-gray-500">Venda de runas: <strong>R$50,00</strong><br /><em class="underline underline-offset-1">Não inclui up de runas</em></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="accordion-3"
                  name="accordion-3"
                  class="hidden"
                >
                <div class="accordion-header">
                  <label
                    for="accordion-3"
                    class="
                      flex
                      w-full
                      p-5
                      bg-amber-500
                      items-center
                      justify-between
                      font-medium
                      text-left
                      text-white
                      font-border
                      border
                      border-gray-200
                      hover:bg-amber-600"
                  >
                    <span>Como entrar em contato?</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </label>
                </div>
                <div class="accordion-content">
                  <div class="p-5 bg-white border border-t-0 border-gray-200">
                    <p class="mb-2 text-gray-500">Através do <a
                        href="https://www.facebook.com/xDuracelx/"
                        target="_blank"
                      >facebook</a>, <a
                        href="https://www.instagram.com/duracelgaming/"
                        target="_blank"
                      >instagram</a> ou durante a live na <a
                        href="https://www.twitch.tv/xduracel"
                        target="_blank"
                      >twitch</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Twitch />
  </main>
</template>
  
<script setup>
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";
import Twitch from "@/components/Twitch.vue";

const router = useRouter();
</script>
  
<style lang="scss" scoped>
#accordion {
  input[type="checkbox"] {
    &:checked {
      & ~ .accordion-header {
        svg {
          transform: rotate(180deg);
          transition: all 0.1s;
        }
      }
      & ~ .accordion-content {
        max-height: 320px;
      }
    }
    ~ .accordion-content {
      overflow: hidden;
      transition: max-height 0.3s;
      max-height: 0px;
      height: auto;
    }
  }
}
</style>
  