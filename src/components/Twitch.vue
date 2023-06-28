<template>
  <div class="twitch fixed bottom-6 left-3 p-2 rounded-full w-10 h-10 portrait:left-auto portrait:right-6 portrait:w-12 portrait:h-12">
    <span class="flex absolute h-3 w-3 top-0 left-0 -mt-1 -mr-1">
      <span
        v-if="isOnOffline.hasOwnProperty('id')"
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
      ></span>
      <span
        class="relative inline-flex rounded-full h-3 w-3 bg-red-500"
        :class="{'!bg-green-500': isOnOffline.hasOwnProperty('id')}"
      ></span>
    </span>
    <a
      href="https://www.twitch.tv/xduracel"
      target="_blank"
    >
      <img
        src="/icons/icon-twitch.png"
        alt="w-auto mt-px ml-px"
      >
    </a>
    <div
      class="absolute bottom-0 right-0 rounded-full border border-gray-400 px-2 -mb-2 -mr-5 bg-white text-xs"
      v-if="isOnOffline.hasOwnProperty('id')"
    >
      {{ isOnOffline.viewer_count }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const isOnOffline = ref({});
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
      return data;
    });
};
onMounted(async () => {
  const dataIsOnOffline = await getLiveStatus();
  isOnOffline.value = dataIsOnOffline?.data[0] || {};
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
