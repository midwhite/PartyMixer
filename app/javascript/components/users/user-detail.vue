<template>
  <div class="user-detail">
    <div class="name">{{ user.name }}</div>
    <div class="photo-area">
      <img :src="user.photo" class="photo">
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
}
</script>

<style scoped>
  .photo-area {
    padding: 10px;
    max-width: 320px;
    margin: 0px auto;
  }
  .photo {
    width: 100%;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
  }
</style>
