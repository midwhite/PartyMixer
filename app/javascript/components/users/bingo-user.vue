<template>
  <div class="col-3">
    <div :class="bingoClassName">
      <router-link :to="`/users/${user.id}`">
        <img :src="user.photo" width="100%" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['user'],
  computed: {
    ...mapState(['selectedUsers']),
    isSelected() {
      return this.selectedUsers.some(user => user.id === this.user.id);
    },
    bingoClassName() {
      return `bingo-photo${this.isSelected ? ' selected' : ''}`;
    },
  },
}
</script>

<style scoped>
  .bingo-photo {
    padding: 5px;
    margin: 0px -15px;
  }
  .bingo-photo img {
    transition: all .3s 0s ease;
  }
  .bingo-photo.selected img {
    opacity: .5;
  }
</style>
