<template>
  <div class="p-3 shadow-md bg-blue-50 rounded-sm">
    <div class="w-full h-[200px] relative mb-4 overflow-hidden rounded">
      <img
        :src="image"
        :alt="title"
        class="absolute w-full h-full object-cover"
      />
    </div>
    <div class="text-2xl font-bold text-gray-800 mb-2">
      {{ title }}
    </div>
    <div class="text-md text-gray-500 mb-2">{{ excerpt }}</div>
    <NuxtLink
      :to="`/${slug}`"
      class="text-gray-900 font-bold hover:text-blue-500 ease duration-300"
      >Read more</NuxtLink
    >
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  slug: String,
  excerpt: String,
  image: String,
});
</script>