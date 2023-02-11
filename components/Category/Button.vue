<template>
  <NuxtLink
    :to="`categories/${slug}`"
    class="
      py-2
      px-5
      rounded
      inline-block
      bg-blue-500
      text-blue-50 text-lg text-bold
      ease
      duration-300
      hover:bg-blue-600
    "
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  slug: String,
});
</script>