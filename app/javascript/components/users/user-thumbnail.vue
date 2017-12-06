<template>
  <div :class="userIsSelected ? 'user-thumbnail selected' : 'user-thumbnail'">
    <div class="name">{{ user.name || `No Name (ID: ${user.id})` }}</div>
    <div class="photo-area">
      <router-link :to="`users/${user.id}`">
        <img :src="user.photo" class="photo" />
      </router-link>
    </div>
    <div class="btn-area">
      <router-link :to="`users/${user.id}`" class="btn-profile">Profile</router-link>
      <div :class="userIsSelected ? 'btn-remove' : 'btn-connect'" @click="selectUser({ user })">{{userIsSelected ? 'Remove' : 'Connect'}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: ['user'],
  computed: {
    ...mapState(['selectedUsers']),
    userIsSelected() {
      return this.selectedUsers && this.selectedUsers.some(user => user.id === this.user.id)
    },
  },
  methods: {
    ...mapActions(['selectUser']),
  },
}
</script>

<style scoped>
  .user-thumbnail {
    margin: 0px -15px;
    padding: 5px;
    transition: background-color .3s 0s ease;
  }
  .user-thumbnail.selected {
    background: #FF80AB;
  }
  .name {
    height: 1.5em;
  }
  .photo {
    width: 100%;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
  }
  .btn-area {
    margin: 4px 0px;
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
  .btn-connect {
    margin-left: 50%;
    padding: 2px 0px;
    background: #F50057;
    color: #FFF;
  }
  .btn-remove {
    margin-left: 50%;
    padding: 2px 0px;
    background: #212121;
    color: #FFF;
  }
</style>
