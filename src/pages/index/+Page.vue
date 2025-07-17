<template>
  <div class="home-page">
    <div class="container mx-auto px-4 py-8">
      <!-- Games List -->
      <div class="flex flex-wrap gap-[24px]">
        <div
          v-for="game in games"
          :key="game.gameCode"
          class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex items-center justify-center"
        >
          <div
            class="w-[180px] h-[225px] relative"
          >
            <img
              class="w-full h-full z-0"
              :src="`https://cdn-dev.dingyi.io/${game?.materialPackage?.game}`"
            />
            <div
              class="absolute bottom-[0px] left-[0px] right-[0px] z-1 text-[#fff] text-center"
            >
                <span
                  class="break-words whitespace-pre-wrap"
                >
                  {{ game?.name }}
                </span>
            </div>
          </div>
        </div>
      >
      </div>

      <!-- Cache Status -->
      <div class="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 class="text-lg font-semibold mb-2">
          Server-Side Rendering
        </h2>
        <p class="text-sm text-gray-700">
          This page is server-side rendered with caching.
          Games data is cached based on version changes.
        </p>
        <p class="text-sm text-gray-600 mt-2">
          Total games loaded: {{ games.length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vike-vue/useData';

const data = useData();
const games = data?.games || [];

console.log('SSR Home Page - Games loaded:', games.length);
</script>

<style scoped>

</style>
