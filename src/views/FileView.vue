<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import FileComponent from "@/components/FileComponent.vue";
import EmptyFile from "@/components/EmptyFileComponent.vue";
const { isEmpty } = storeToRefs(useCounterStore());
</script>

<template>
  <main class="container">
    <EmptyFile v-if="isEmpty" />
    <FileComponent v-else />
  </main>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  height: 90vh;
}
</style>
