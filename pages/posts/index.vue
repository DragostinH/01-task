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
    <h1>Posts page</h1>
    <!-- <button>Get posts</button> -->
    <p><nuxt-link class="text-[#3edada]" to="/">Home page</nuxt-link></p>
    <div class="posts-container grid gap-8 grid-cols-3">
      <div
        class="post border-[1px] border-[#00eeff] shadow-sm rounded-md"
        v-for="post in posts"
        :key="post.id"
      >
        <nuxt-link :to="/posts/ + post.id">
          <p>{{ post.userId }} {{ post.title }}</p>
          <p>{{ post.body }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

