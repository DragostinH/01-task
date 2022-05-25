<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const post = useState({});
const image = useState("");
// const apiKeyUnsplash = "1f86vtB_5QO1xef45a2ye3yzFfKPbuDckoaEJlwbj0Y";

const getRandomNum = (size) => {
  return Math.floor(Math.random() * size);
};
const randomImage = getRandomNum(8);
const randomPage = getRandomNum(20);

onMounted(async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  );
  const data = await res.json();
  post.value = data;

  const imgRes = await fetch(
    `https://api.unsplash.com/search/photos?page=${randomPage}&query=random&client_id=1f86vtB_5QO1xef45a2ye3yzFfKPbuDckoaEJlwbj0Y`
  );

  const imgList = await imgRes.json();
  image.value = imgList.results[randomImage].urls.small;
});
</script>


<template>
  <div class="post-id-container h-[100vh] flex items-center flex-col gap-8 mt-6">
    <p class="capitalize font-bold">{{ post.title }}</p>
    <div class="post grid p-12 justify-center text-center">
      <div class="flex items-center justify-center"><img class="h-30%" :srcset="image" alt="" /></div>
      <div>
        <p>User ID: {{ post.id }}</p>
      </div>
      <div>
      </div>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>