<template>
  <div>
    <PageHeading>
      <h1 class="text-4xl font-bold dark:text-gray-100">Choose the Category</h1>
    </PageHeading>
    <section class="pb-10 container flex flex-wrap gap-5">
      <CategoryButton
        v-for="category in categories"
        :key="category.id"
        :slug="category.slug"
        >#{{ category.name }}</CategoryButton
      >
    </section>
  </div>
</template>

<script setup>
const { data: categories } = await useWpApi().getCategories();
</script>