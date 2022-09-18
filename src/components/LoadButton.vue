<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useCounterStore } from "@/stores/counter";
const butt = ref<null | { disabled: boolean }>(null);
const store = useCounterStore();
watchEffect(() => {
  if (store.limit === store.changes.length && butt.value != null)
    butt.value.disabled = true;
});
</script>
<template>
  <button ref="butt" class="button" @click="store.limit++">LOAD MORE</button>
</template>
<style scoped lang="scss">
button {
  width: 8rem;
  height: 2.5rem;
  color: #6c6c6c;
  font-family: "IBM Font Mono", sans-serif;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  border: 4px solid /*#00f5*/ #a9c9ea;
  &:disabled {
    border-color: grey;
  }
}
</style>
