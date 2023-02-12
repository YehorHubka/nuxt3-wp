<template>
  <div :class="{ dark: theme.theme }">
    <div class="dark:bg-gray-600 ease duration-300">
      <Header />
      <main>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/theme";
const theme = useThemeStore();
</script>

<style>
.container {
  @apply max-w-6xl px-4 mx-auto;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.3rem);
}
</style>