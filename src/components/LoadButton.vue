<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
const butt = ref<null | { disabled: boolean }>(null);
const store = useCounterStore();

function loadMoreButton() {
  console.log(store.limit, store.changes.length);
  if (store.limit === store.changes.length && butt.value != null) {
    console.log("Limit Reached");
    butt.value.disabled = true;
  } else store.limit++;
}
</script>
<template>
  <button ref="butt" class="button" @click="loadMoreButton">LOAD MORE</button>
</template>
<style scoped lang="scss">
.button {
  width: 8rem;
  height: 2.5rem;
  color: #6c6c6c;
  font-family: "IBM Font Mono", sans-serif;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  border: 4px solid rgba(27, 31, 36, 0.5);
}
</style>
