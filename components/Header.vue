<template>
  <header class="bg-gray-700 py-6 shadow-md relative">
    <div class="container flex justify-between items-center">
      <NuxtLink to="/" class="font-bold text-white text-2xl sm:text-3xl"
        >Nuxt3-Blog</NuxtLink
      >
      <nav class="flex gap-4">
        <NuxtLink to="/" class="text-white">Main</NuxtLink>
        <NuxtLink to="/categories" class="text-white">Categories</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav .router-link-active {
  @apply text-blue-300;
}
</style>