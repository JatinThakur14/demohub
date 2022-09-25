<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
const loadMoreButton = ref<null | { disabled: boolean }>(null);
const { changes, limit } = storeToRefs(useCounterStore());
watchEffect(() => {
  if (limit.value == changes.value.length) {
    changes.value.push(
      JSON.parse(
        JSON.stringify(
          changes.value[Math.round(Math.random() * changes.value.length - 1)]
        )
      )
    );
    changes.value.push(
      JSON.parse(
        JSON.stringify(
          changes.value[Math.round(Math.random() * changes.value.length - 1)]
        )
      )
    );
  }
});

function incrementLimit() {
  limit.value += 2;
}
</script>
<template>
  <button ref="loadMoreButton" class="button" @click="incrementLimit">
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
}
</style>
