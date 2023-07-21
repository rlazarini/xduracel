<template>
  <main class="flex w-full h-[90vh] flex-col">
    <Header />
    <div class="grid grid-cols-3 gap-4 portrait:grid-cols-1">
      <div class="portrait:order-last portrait:hidden">
      </div>
      <div class="h-full col-span-2">
        <div class="grid grid-cols-1 gap-4 text-white portrait:grid-rows-2 portrait:grid-cols-none border-yellow-400">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E4C441&ctz=America%2FAraguaina&showTitle=0&showNav=1&showDate=1&showTabs=0&showPrint=0&showCalendars=0&showTz=0&hl=pt_BR&src=Yzg4NDgyYTYzNjhjOGRlOWY3ODY1YTdjMmRiYjI0ODBlNzIxMmQ2NjQ5YTYyOTE5ZTQ4MzViZjU3MzE3ODEyOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cHQuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%230B8043"
            style="border-width:0"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
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
  