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
  <div class="post-id-container h-[100vh]">
    <div class="post flex flex-col">
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>