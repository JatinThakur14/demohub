<template>
  <div class="empty">
    <font-awesome-icon icon="bolt" />
    <p class="emptyHeading">You don't have any file</p>
    <span class="emptyDesc"
      >Start by <a href="#" class="addFileLink">adding a file</a></span
    >
  </div>
</template>
<style scoped lang="scss">
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
</style>
