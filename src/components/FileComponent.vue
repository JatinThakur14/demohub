<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const projects = store.getFilteredProjects;
function changeChecked() {
  projects.forEach((item) => {
    item.checked = !item.checked;
  });
}
</script>

<template>
  <main class="container">
    <div class="empty" v-if="!projects">
      <font-awesome-icon icon="bolt" />
      <p class="emptyHeading">You don't have any file</p>
      <span class="emptyDesc"
        >Start by <a href="#" class="addFileLink">adding a file</a></span
      >
    </div>

    <div class="files" v-else>
      <div class="headerContainer">
        <input type="checkbox" @change="changeChecked" class="checkBox" />
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
                :style="project.tagColor"
                >{{ project.tag }}</span
              ></span
            >
            <span class="lastUpdated">{{ project.lastUpdated }}</span>
          </div>
        </div>
        <div class="rightSide">
          <img
            :src="`./src/assets/${project.projectOwner}`"
            alt="User"
            class="owner"
          />
          <span class="comments"
            ><font-awesome-icon icon="message" />
            <span class="commentCount">{{ project.comments }} </span></span
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  height: 90vh;
  .checkBox {
    background: cyan;
    color: cyan;
  }
  .empty {
    width: 27.12rem;
    height: 10.25rem;
    background: white;
    place-self: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .emptyHeading {
      letter-spacing: 1px;
    }
    .emptyDesc {
      color: #57606a;
      font-size: 14px;
      .addFileLink {
        text-decoration: underline;
        color: rebeccapurple;
      }
    }
  }
  .files {
    display: table;
    width: 89vw;
    font-size: 14px;
    justify-self: center;
    font-weight: normal;
    color: #24292f;
    font-family: "IBM Plex Sans", sans-serif;
    outline: none;
    margin-block-start: 2rem;
    .headerContainer {
      display: flex;
      justify-content: space-between;
      background: #f6f8fa;
      border: 1px solid #0002;
      align-items: center;
      padding-block: 0.4rem;
      border-radius: 6px 6px 0 0;
      padding-inline-start: 0.3rem;
      & span {
        padding: 0.2rem 0.4rem;
        margin-inline: 0.5rem;
      }
      .header {
        display: flex;
        align-items: center;
        .headerColumn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .iconSortDown {
            transform: scale(0.9);
            padding-bottom: 0.4rem;
          }
        }
      }
    }
    .fileEntries {
      background: #fff;
      border: 1px solid #0002;
      padding-block: 0.4rem;
      display: flex;
      justify-content: space-between;
      .leftSide {
        display: flex;
        padding-inline-start: 0.3rem;
        .fileItemContainer {
          display: flex;
          flex-direction: column;
          padding-inline-start: 0.5rem;
          margin-inline-start: 0.2rem;
          .lastUpdated {
            font-size: 12px;
            color: #57606a;
          }
          .tag {
            font-size: 13px;
            font-weight: 600;
            padding-inline: 0.4rem;
            margin-inline-start: 0.2rem;
            background: lightblue;
            border-radius: 2rem;
          }
        }
      }
      .rightSide {
        display: flex;
        width: 7rem;
        margin-inline-end: 3rem;
        .owner {
          border-radius: 50%;
          width: 25px;
          height: 25px;
          margin-top: 0.2rem;
          margin-inline-end: 5rem;
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
}
</style>
