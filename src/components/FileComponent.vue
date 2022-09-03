<script setup lang="ts">
const isEmpty = false;
const projects = [
  {
    projectName: "Lovissa/Site",
    lastUpdated: "changed 2 hours ago by pekkaharju",
    tag: "Planning",
    projectOwner: "src/assets/osuProfilePic.jpg",
    comments: 5,
    tagColor: {
      "background-color": "lightblue",
    },
  },
  {
    projectName: "Lovissa/Design",
    lastUpdated: "changed 4 hours ago by katrik",
    tag: "Completed",
    projectOwner: "src/assets/osuProfilePic.jpg",
    comments: 1,
    tagColor: {
      "background-color": "#DCF487",
    },
  },
  {
    projectName: "Lovissa/Project",
    lastUpdated: "changed 7 hours ago by pekkaharju",
    tag: "",
    projectOwner: "src/assets/osuProfilePic.jpg",
    comments: 22,
    tagColor: {},
  },
  {
    projectName: "Lovissa/Purchasing",
    lastUpdated: "changed yesterday by pekkaharju",
    tag: "Completed",
    projectOwner: "src/assets/osuProfilePic.jpg",
    comments: 1,
    tagColor: {
      "background-color": "#DCF487",
    },
  },
];
</script>

<template>
  <main class="container">
    <div class="empty" v-if="isEmpty">
      <font-awesome-icon icon="bolt" />
      <p class="emptyHeading">You don't have any file</p>
      <span class="emptyDesc"
        >Start by <a href="#" class="addFileLink">adding a file</a></span
      >
    </div>

    <div class="files" v-else>
      <div class="header">
        <input type="checkbox" />
        <div>
          <span>Label</span>
          <span>Project</span>
          <span>Owner</span>
          <span>Sort</span>
        </div>
      </div>
      <div
        class="fileEntries"
        v-for="project in projects"
        :key="project.projectName"
      >
        <div class="leftSide">
          <input type="checkbox" />
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
          <img :src="project.projectOwner" alt="User" class="owner" />
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
    width: 80vw;
    font-size: 14px;
    justify-self: center;
    font-weight: normal;

    border-radius: 6px;
    margin-block-start: 2rem;
    .header {
      display: flex;
      justify-content: space-between;
      background: #f6f8fa;
      border: 1px solid #0002;
      align-items: center;
      padding-block: 0.4rem;
      & span {
        padding: 0.2rem 0.4rem;
        margin-inline: 1rem;
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
        .fileItemContainer {
          display: flex;
          flex-direction: column;
          padding-inline-start: 0.5rem;
          .lastUpdated {
            font-size: 12px;
            color: grey;
          }
          .tag {
            font-size: 13px;
            font-weight: 600;
            padding-inline: 0.4rem;
            background: lightblue;
            border-radius: 2rem;
          }
        }
      }
      .rightSide {
        display: flex;
        width: 7rem;
        margin-inline-end: 1rem;
        .owner {
          border-radius: 50%;
          width: 25px;
          height: 25px;
          margin-inline-end: 2.9rem;
        }
        .comments {
          display: flex;
          width: 3rem;
          justify-content: space-evenly;
          align-items: center;
        }
      }
    }
  }
}
</style>
