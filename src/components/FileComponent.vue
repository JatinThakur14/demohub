<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { getFilteredProjects, isEmpty } = storeToRefs(useCounterStore());
const projects = getFilteredProjects;
function changeChecked() {
  projects.value.forEach((item) => {
    item.checked = !item.checked;
  });
}

onMounted(() => {
  if (projects.value.length <= 0) {
    isEmpty.value = true;
  } else {
    isEmpty.value = false;
  }
});
</script>
<template>
  <div class="files">
    <div class="headerContainer">
      <input type="checkbox" @change="changeChecked" />
      <div class="header">
        <span class="headerColumn"
          ><span>Label</span>
          <font-awesome-icon icon="sort-down" class="iconSortDown"
        /></span>
        <span class="headerColumn"
          ><span>Projects</span>
          <font-awesome-icon icon="sort-down" class="iconSortDown"
        /></span>
        <span class="headerColumn"
          ><span>Owner</span>
          <font-awesome-icon icon="sort-down" class="iconSortDown"
        /></span>
        <span class="headerColumn"
          ><span>Sort</span>
          <font-awesome-icon icon="sort-down" class="iconSortDown"
        /></span>
      </div>
    </div>

    <div
      class="fileEntries"
      v-for="project in projects"
      :key="project.projectName"
    >
      <div class="leftSide">
        <input type="checkbox" :checked="project.checked" class="checkBox" />
        <div class="fileItemContainer">
          <span class="FileName"
            >{{ project.projectName }}
            <span
              class="tag"
              v-show="project.tag"
              v-for="(tag, index) in project.tag"
              :key="index"
              :style="project.tagColor[index]"
              >{{ tag }}</span
            ></span
          >
          <span class="lastUpdated">{{ project.lastUpdated }}</span>
        </div>
      </div>
      <div class="rightSide">
        <img :src="project.projectOwner" alt="User" class="owner" />
        <span class="comments"
          ><img src="@/assets/message.svg" alt="msg" />
          <span class="commentCount">{{ project.comments }} </span></span
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.files {
  display: table;
  width: 88vw;
  font-size: 14px;
  justify-self: center;
  font-weight: normal;
  color: #24292f;
  font-family: "IBM Plex Sans", sans-serif;
  outline: none;
  margin-block-start: 4rem;
  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f8fa;
    color: #24292f;
    border: 1px solid #0002;
    border-bottom: 0.5px solid #0002;
    font-size: 13px;
    line-height: 20px;
    padding-block: 0.4rem;
    font-weight: 400;
    border-radius: 6px 6px 0 0;
    padding-inline: 0.8rem;
    padding-block: 0.5rem;
    .header {
      display: flex;
      align-items: center;
      width: 20rem;
      line-height: 1.3rem;
      justify-content: space-between;
      .headerColumn {
        display: flex;
        align-items: center;
        height: inherit;
        .iconSortDown {
          transform: scale(0.9);
          padding-bottom: 0.1rem;
          padding-inline-start: 1rem;
          opacity: 0.7;
        }
      }
    }
  }
  .fileEntries {
    font-family: "IBM Plex Sans", sans-serif;
    background: #fff;
    border-block-end: 1px solid #0002;
    border-inline: 1px solid #0002;
    padding-block: 0.3rem;
    display: flex;
    font-size: 14px;
    font-style: normal;
    line-height: 26px;
    color: #24292f;
    justify-content: space-between;
    .leftSide {
      display: flex;
      padding-inline-start: 0.8rem;
      .checkBox {
        margin-block-end: 1.5rem;
      }
      .fileItemContainer {
        display: flex;
        flex-direction: column;
        padding-inline-start: 0.5rem;
        margin-inline-start: 0.2rem;
        font-weight: normal;
        letter-spacing: 0;
        .lastUpdated {
          font-size: 12px;
          color: #57606a;
        }
        .tag {
          font-size: 13px;
          font-weight: bold;
          padding: 2px 0.5rem;
          margin-inline: 0.1rem 0.3rem;
          background: lightblue;
          border-radius: 2rem;
        }
      }
    }
    .rightSide {
      display: flex;
      width: 7rem;
      margin-inline-end: 1.9rem;
      .owner {
        border-radius: 50%;
        width: 22px;
        height: 22px;
        margin-top: 0.8rem;
        margin-inline-end: 3.7rem;
      }
      .comments {
        display: flex;
        width: 3rem;
        justify-content: space-evenly;
        align-items: center;
        .commentCount {
          margin: 0.5rem;
        }
      }
    }
  }
}
</style>
