<template>
  <div>
    <PageHeading>
      <h1 class="text-4xl font-bold">#{{ categories[0].name }} category</h1>
    </PageHeading>
    <section class="container" v-if="posts.length === 0">
      <div class="text-2xl font-bold mb-5">
        There are no posts in this category yet.
      </div>
      <NuxtLink
        to="/categories"
        class="
          py-2
          px-4
          inline-block
          rounded
          bg-blue-500
          text-gray-100
          hover:bg-blue-600
          ease
          duration-300
        "
        >Go and check another one</NuxtLink
      >
    </section>
    <section v-else class="grid sm:grid-cols-3 gap-5 container pb-10">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"
        :image="post._embedded['wp:featuredmedia'][0]?.source_url"
      />
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const currentSlug = route.params.slug;
const { data: categories } = await useWpApi().get(
  `categories?slug=${currentSlug}`
);
const { data: posts } = await useWpApi().getPosts(categories.value[0].id);
</script>
