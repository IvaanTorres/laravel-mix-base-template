<template>
  <div>
    <h1>{{ about }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const about = ref("about");

    return {
      about,
    };
  },
});
</script>

<style></style>
