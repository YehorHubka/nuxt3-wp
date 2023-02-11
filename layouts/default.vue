<template>
  <div>
    <Header />
    <main>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>
  </div>
</template>

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