<script setup>
const posts = useState({});

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  posts.value = data;
});
</script>


<template>
  <div class="container">
    <!-- <button>Get posts</button> -->
    <div class="posts-container p-[2rem] grid gap-4 grid-cols-2">
      <div
        class="
          post
          hover:shadow-[#00eeff]
          text-elipsis
          p-2
          border-[1px] border-[#00eeff]
          shadow-sm
          rounded-md
        "
        v-for="post in posts"
        :key="post.id"
      >
        <nuxt-link :to="/posts/ + post.id">
          <p class="absolute">
            {{ post.userId }}
          </p>
          <div class="p-4 top-post-container flex border-b-[1px]">
            <p class="capitalize">{{ post.title }}</p>
          </div>
          <p class="p-4">{{ post.body }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

