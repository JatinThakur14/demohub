<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useCounterStore } from "@/stores/counter";
const loadMoreButton = ref<null | { disabled: boolean }>(null);
const store = useCounterStore();
watchEffect(() => {
  if (store.limit === store.changes.length && loadMoreButton.value != null)
    loadMoreButton.value.disabled = true;
});
</script>
<template>
  <button ref="loadMoreButton" class="button" @click="store.limit++">
    LOAD MORE
  </button>
</template>
<style scoped lang="scss">
$buttonTextColor: #6c6c6c;
$buttonBorder: 4px solid #a9c9ea;
button {
  width: 8rem;
  height: 2.5rem;
  color: $buttonTextColor;
  font-family: "IBM Font Mono", sans-serif;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  border: $buttonBorder;
  transition: box-shadow 0.1s linear;
  &:disabled {
    border-color: grey;
  }
  &:hover:not(:disabled) {
    box-shadow: inset 8rem 0 #a9c9ea;
  }
}
</style>
