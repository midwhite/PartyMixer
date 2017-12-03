<template>
  <div class="user-thumbnail">
    <div class="name">{{ user.name || `No Name (ID: ${user.id})` }}</div>
    <div class="photo">
      <img :src="`https://graph.facebook.com/${user.uid}/picture?width=300`" width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
}
</script>

<style scoped>
  .name {
    height: 1.5em;
  }
</style>  

