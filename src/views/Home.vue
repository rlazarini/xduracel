<template>
  <main class="flex w-full h-[90vh] flex-col">
    <Header />
    <Content />
    <Twitch />
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import Twitch from "@/components/Twitch.vue";

const router = useRouter();
</script>

<style scoped>
</style>
