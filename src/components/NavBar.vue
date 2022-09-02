<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <nav>
    <div class="left-side">
      <img src="../assets/logo.png" alt="logo" width="46" height="44" />
      <input type="search" class="searchBar" placeholder="&#xF002;" />
      <RouterLink to="/">Files</RouterLink>
      <RouterLink to="/changes">Changes</RouterLink>
    </div>
    <div class="right-side">
      <img src="@/assets/help.svg" alt="Help" width="30.25" />
      <img
        src="@/assets/osuProfilePic.jpg"
        alt="user's Profile"
        id="userProfile"
      />
    </div>
  </nav>
</template>
<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;

  .left-side {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25rem;
    .searchBar {
      border-radius: 6px;
      height: 1.8rem;
      width: 11rem;
      position: relative;
      font-family: FontAwesome;
      padding-inline-start: 6px;
      border: 1px solid #0969da;
      box-shadow: 0px 0px 0px 3px rgba(3, 102, 214, 0.3);
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 7rem;
    #userProfile {
      width: 32px;
      border-radius: 20rem;
    }
  }
}
</style>
