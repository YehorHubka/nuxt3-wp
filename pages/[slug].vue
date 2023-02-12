<template>
  <div>
    <PageHeading>
      <h1 class="text-2xl sm:text-4xl text-center font-bold dark:text-gray-100">
        {{ post.title.rendered }}
      </h1>
    </PageHeading>
    <section class="text-lg pb-10 text-gray-700 dark:text-gray-100">
      <div class="container">
        <div
          class="
            w-full
            h-[200px]
            sm:h-[500px]
            relative
            rounded
            overflow-hidden
            mb-5
          "
        >
          <img
            :src="post._embedded['wp:featuredmedia'][0]?.source_url"
            :alt="post.title.rendered"
            class="absolute w-full h-full object-cover"
          />
        </div>
        <div class="text-center text-lg mb-5">
          <span class="mr-3"
            >Created date: <b>{{ post.date.slice(0, 10) }}</b></span
          >
          <span
            >Author: <b>{{ post._embedded["author"][0].name }}</b></span
          >
        </div>
        <div class="post-content" v-html="post.content.rendered"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: posts } = await useWpApi().getPost(route.params.slug);
const post = posts.value[0];
</script>

<style>
.post-content p {
  @apply mb-3;
}
.post-content ol {
  @apply mb-3;
}
.post-content ul {
  @apply mb-3;
}
.post-content h2 {
  @apply mb-3 font-bold text-2xl mt-6;
}
.post-content h3 {
  @apply mb-3 font-bold text-xl mt-6;
}
.post-content h4 {
  @apply mb-3 font-bold text-xl mt-6;
}
.post-content pre {
  @apply mb-3 border p-4 rounded;
}
</style>
