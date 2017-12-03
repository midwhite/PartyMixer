<template>
  <div class="user-thumbnail">
    <div class="name">{{ user.name || `No Name (ID: ${user.id})` }}</div>
    <div class="photo">
      <img :src="`https://graph.facebook.com/${user.uid}/picture?width=300&height=300`" width="100%" />
    </div>
    <div class="btn-area">
      <a href class="btn-profile">Profile</a>
      <div class="btn-contact">Contact</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
}
</script>

<style scoped>
  .user-thumbnail {
    margin: 0px -15px;
    padding: 0px 5px;
  }
  .name {
    height: 1.5em;
  }
  .btn-area {
    margin: 4px 0px;
    border: 1px solid #212121;
    font-size: 12px;
    text-align: center;
  }
  .btn-profile {
    width: 50%;
    float: left;
    padding: 2px 0px;
    background: #EEE;
    color: #212121;
  }
  .btn-contact {
    margin-left: 50%;
    padding: 2px 0px;
    background: #212121;
    color: #FFF;
  }
</style>  

