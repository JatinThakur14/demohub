<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
const { getLimitedChanges } = storeToRefs(useCounterStore());
const changes = getLimitedChanges;
</script>

<template>
  <div class="card" v-for="change in changes" :key="change.userName">
    <div class="heading">
      <img :src="change.pfp" alt="user" />
      <span class="title">
        <span class="bold">{{ change.userName }} </span>
        <span>made changes to </span>
        <span class="bold">{{ change.repo }}</span>
      </span>
    </div>
    <div class="body">
      <div class="holder">
        <span class="action">2 {{ change.action }} to </span>
        <span class="branch">{{ change.branch }}</span>
      </div>
      <div class="logs">
        <div class="logItem" v-for="log in change.logs" :key="log.code">
          <img src="@/assets/link.svg" alt="link" class="link" />
          <span class="code">{{ log.code }}</span>
          <span class="msg">{{ log.msg }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$cardBodyWidth: 80rem;
$cardBodyHeight: 6.8rem;
.card {
  color: #000000;
  margin-inline-start: -2rem;
  margin-block-end: 2rem;
  .heading {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-block-end: 0.2rem;
    .title {
      margin-inline-start: 0.7rem;
    }
    .bold {
      font-weight: 700;
    }
    img {
      width: 35px;
    }
  }
  .body {
    margin-inline-start: 3rem;
    background-color: #fff;
    outline: 1px solid #c1c1c1;
    width: $cardBodyWidth;
    height: $cardBodyHeight;
    border-radius: 7px;
    .holder {
      display: inline-flex;
      margin-block: 1rem 0.5rem;
      align-items: center;
      margin-inline-start: 2rem;
      .action {
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.15px;
        margin-inline-end: 1.3rem;
      }
      .branch {
        font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
        letter-spacing: 1.5px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        background-color: #0969da22;
        border-radius: 10px;
        padding: 0.2rem 0.4rem;
        color: #0366d6;
      }
    }
    .logs {
      .logItem {
        display: flex;
        align-items: center;
      }
      margin-inline-start: 2rem;
      .link {
        width: 14.57px;
        height: 13px;
        margin-inline-end: 0.3rem;
      }
      .code {
        font-size: 14px;
        letter-spacing: -0.15px;
        color: #821fcf;
      }
      .msg {
        margin-inline-start: 1rem;
      }
    }
  }
}
</style>
