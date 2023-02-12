<template>
  <header
    class="
      bg-gray-700
      py-6
      shadow-md
      relative
      ease
      duration-300
      dark:bg-gray-900
    "
  >
    <div class="container sm:flex justify-between items-center">
      <NuxtLink
        to="/"
        class="font-bold hidden sm:block text-white text-2xl sm:text-3xl"
        >Nuxt3-Blog</NuxtLink
      >
      <div
        class="flex gap-4 justify-between sm:justify-end sm:gap-10 items-center"
      >
        <nav class="flex gap-4">
          <NuxtLink to="/" class="text-white">Main</NuxtLink>
          <NuxtLink to="/categories" class="text-white">Categories</NuxtLink>
        </nav>
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
nav .router-link-active {
  @apply text-blue-300;
}
</style>