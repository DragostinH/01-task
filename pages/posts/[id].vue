<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const post = useState({});

onMounted(async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  );
  const data = await res.json();
  post.value = data;
});
</script>


<template>
  <div class="post-id-container">
    <NuxtLink to="/posts/">
      <button class="text-[#3edada] p-[6rem]">Back to posts</button>
    </NuxtLink>
    <div class="post">
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>