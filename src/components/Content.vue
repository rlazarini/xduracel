<template>
  <div class="grid grid-cols-4 gap-4 portrait:grid-cols-1">
    <div class="portrait:order-last portrait:hidden">
    </div>
    <div class="h-full col-span-3">
      <div class="grid grid-cols-6 gap-4 text-white portrait:grid-rows-2 portrait:grid-cols-none border-yellow-400">
        <div class="block-content p-4 landscape:col-span-5 stroke-gray-22550">
          Fala galera.... beleza?
        </div>
        <div class="portrait:order-first text-center">
          <Medias />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Medias from "@/components/Medias.vue";
</script>

<style scoped>
* {
  border: 1px solid red;
}
.block-content {
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3), 1px -1px 0 rgba(0, 0, 0, 0.3),
    -1px 1px 0 rgba(0, 0, 0, 0.3), 1px 1px 0 rgba(0, 0, 0, 0.3);
}
</style>