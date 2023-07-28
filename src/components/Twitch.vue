<template>
  <div
    class="w-auto fixed top-6 left-6 border border-indigo-600 bg-indigo-200 p-2 hidden lg:block 2xl:px-4"
    :class="{'!p-1 bg-gray-100 border-0': !playerStatus}"
  >
    <a
      :href="`https://www.twitch.tv/xduracel`"
      target="_blank"
      class="flex items-center"
    >
      <div
        class="pr-4"
        :class="{'!p-0': !playerStatus}"
      >
        <img
          src="/icons/icon-twitch.png"
          class="w-8 mt-px ml-px"
          :class="{'w-6 grayscale': !playerStatus}"
        >
      </div>
      <div
        class="flex flex-col text-sm"
        v-if="playerStatus"
      >
        <div class="text-lg leading-tight"><strong>{{ playerStatus.user_name }}</strong></div>
        <div><strong>Online:</strong> {{ playerStatus.viewer_count }}</div>
        <div class="underline underline-offset-1">Jogando {{ playerStatus.game_name }}</div>
        <div
          class="truncate max-w-[330px]"
          :title="playerStatus.title"
        >Título: <em>{{ playerStatus.title }}</em></div>
      </div>
      <div v-else>
        <div class="ml-2 text-sm">Offline</div>
      </div>
    </a>
  </div>
  <div class="twitch fixed bottom-6 right-6 p-2 rounded-full w-10 h-10 portrait:w-12 portrait:h-12 block lg:hidden">
    <span class="flex absolute h-3 w-3 top-0 left-0 -mt-1 -mr-1">
      <span
        v-if="playerStatus"
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
      ></span>
      <span
        class="relative inline-flex rounded-full h-3 w-3 bg-red-500"
        :class="{'!bg-green-500': playerStatus}"
      ></span>
    </span>
    <a
      :href="`https://www.twitch.tv/xduracel`"
      target="_blank"
    >
      <img
        src="/icons/icon-twitch.png"
        class="w-auto mt-px ml-px"
      >
    </a>
    <div
      class="absolute bottom-0 right-0 rounded-full border border-gray-400 px-2 -mb-2 -mr-5 bg-white text-xs"
      v-if="playerStatus"
    >
      {{ playerStatus.viewer_count }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const playerStatus = ref(false);
const {
  VITE_CLIENT_ID: clientid,
  VITE_CLIENT_SECRET: clientsct,
  VITE_TWITCH_OAUTH: oauth,
  VITE_HELIX: helix,
} = import.meta.env;
const getAuth = () => {
  return fetch(oauth, {
    method: "POST",
    headers: {
      ["Content-Type"]: "application/json",
    },
    body: JSON.stringify({
      client_id: `${clientid}`,
      client_secret: `${clientsct}`,
      grant_type: "client_credentials",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
const getLiveStatus = async () => {
  const { access_token } = await getAuth();
  return fetch(`${helix}/streams?user_login=xduracel`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      ["Client-Id"]: `${clientid}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data.data.length ? data.data[0] : false;
    });
};
const isStatus = async () => {
  playerStatus.value = (await getLiveStatus()) || false;
};
onMounted(async () => {
  isStatus();
  setInterval(isStatus, 1800000);
});
</script>

<style scoped>
@keyframes pulse {
  0% {
    background-position: 30% 30%;
  }
  50% {
    background-position: 250% 250%;
  }
  100% {
    background-position: 30% 30%;
  }
}
.twitch {
  border: 1px solid rgba(128, 0, 213, 0.5);
  background: radial-gradient(
    circle,
    rgba(221, 146, 255, 1) 20%,
    rgba(128, 0, 213, 1) 100%
  );
  background-size: 250% 250%;
  animation: pulse 12s ease-in-out infinite alternate;
}
</style>
