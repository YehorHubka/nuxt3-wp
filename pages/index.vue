<template>
  <div>
    <PageHeading>
      <div class="flex flex-col sm:flex-row items-center gap-7">
        <div
          class="w-full sm:w-[200px] h-[200px] relative rounded overflow-hidden"
        >
          <img
            src="~/assets/img/1.jpg"
            alt="author"
            class="absolute w-full h-full object-cover"
          />
        </div>
        <div class="max-w-[400px]">
          <div class="text-4xl font-bold text-gray-800 mb-3 dark:text-gray-100">
            Yehor's Blog
          </div>
          <div class="text-md text-gray-500 mb-4 dark:text-gray-200">
            This blog was created by using a modern tecnologies as Nuxt3, Pinia,
            TailwindCSS, WP REST Api.
          </div>
          <a
            href="tg://resolve?domain=egortelegram"
            target="_blank"
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
            >Join Telegramm</a
          >
        </div>
      </div>
    </PageHeading>
    <section class="grid sm:grid-cols-3 gap-5 container pb-10">
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
const { data: posts } = await useWpApi().getPosts();
</script>