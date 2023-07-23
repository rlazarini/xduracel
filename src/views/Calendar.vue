<template>
  <main class="flex w-full h-[90vh] flex-col">
    <Header />
    <div class="grid grid-cols-3 gap-4 portrait:grid-cols-1">
      <div class="portrait:order-last portrait:hidden">
      </div>
      <div class="h-full col-span-2">
        <div class="grid grid-cols-1 gap-4 text-white portrait:grid-rows-2 portrait:grid-cols-none">
          <div class="w-full portrait:w-auto portrait:my-0 portrait:mx-auto">
            <h2 class="text-2xl text-yellow-400 font-bold pb-5 font-border">Agenda</h2>
            <div class="relative w-[95%] h-[60vh] portrait:w-[80vw] portrait:h-[57vh]">
              <div class="absolute z-10 flex w-9/12 h-[90%] items-center justify-center">
                <svg
                  aria-hidden="true"
                  class="w-32 h-32 mr-2 text-yellow-600 animate-spin dark:text-yellow-600 fill-yellow-100 portrait:ml-[50%] portrait:-mt-[100px]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E4C441&ctz=America%2FAraguaina&showTitle=0&showNav=1&showDate=1&showTabs=0&showPrint=0&showCalendars=0&showTz=0&hl=pt_BR&src=Yzg4NDgyYTYzNjhjOGRlOWY3ODY1YTdjMmRiYjI0ODBlNzIxMmQ2NjQ5YTYyOTE5ZTQ4MzViZjU3MzE3ODEyOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cHQuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%230B8043"
                style="border-width:0"
                frameborder="0"
                scrolling="no"
                class="relative w-full h-full z-20"
              ></iframe>
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
  
  <style scoped>
</style>
  