<template>
  <div>
    <div class="flex gap-[10px]"">
      <a href="/" class="hover:text-blue-600 transition-colors">Home</a>
      <a href="/csr/page1" class="hover:text-blue-600 transition-colors">Page1</a>
    </div>
    <div class="p-5 pb-12 min-h-screen flex-grow transition-opacity duration-100 ease-in">
      <slot />
    </div>
  </div>
</template>

<script setup>
// Import CSS for Vike SSR
import '../style.css'
</script>

<style>
</style>