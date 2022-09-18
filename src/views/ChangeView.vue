<script setup lang="ts">
import ChangeCard from "@/components/ChangeCard.vue";
import LoadButton from "../components/LoadButton.vue";
</script>
<template>
  <main class="change">
    <ChangeCard />
    <LoadButton />
  </main>
</template>

<style>
.change {
  width: 100vw;
  display: grid;
  place-items: center;
  padding-top: 3rem;
}
</style>
