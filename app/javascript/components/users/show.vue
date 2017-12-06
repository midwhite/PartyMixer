<template>
  <div id="ShowUser">
    <div class="user-window" v-if="user">
      <user-detail :user="user" />
    </div>
    <div class="btn-area">
      <div @click="getPrevUser" class="prev-btn">Prev</div>
      <div @click="getNextUser" class="next-btn">Next</div>
      <div class="connect-btn" @click="selectUser({ user })">{{userIsSelected ? 'Remove' : 'Connect'}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserDetail from './user-detail';

export default {
  computed: {
    ...mapState(['users', 'selectedUsers']),
    user() {
      const userId = Number(this.$route.params.id);
      return this.users.find(user => user.id === userId);
    },
    nextUser() {
      const currentIndex = this.users.findIndex(user => user.id === this.user.id);
      return this.users[currentIndex + 1];
    },
    prevUser() {
      const currentIndex = this.users.findIndex(user => user.id === this.user.id);
      return this.users[currentIndex - 1];
    },
    userIsSelected() {
      return this.selectedUsers && this.selectedUsers.some(user => user.id === this.user.id)
    },
  },
  methods: {
    getNextUser() {
      if (this.nextUser) {
        this.$router.push(`/users/${this.nextUser.id}`);
      } else {
        this.$router.push(`/users/${this.users[0].id}`);
      }
    },
    getPrevUser() {
      if (this.prevUser) {
        this.$router.push(`/users/${this.prevUser.id}`);
      } else {
        const lastUser = this.users[this.users.length - 1];
        this.$router.push(`/users/${lastUser.id}`);
      }
    },
    selectUser() {
      this.$store.dispatch('selectUser', { user: this.user });
      this.$router.push('/');
    },
  },
  components: {
    UserDetail,
  },
}
</script>

<style scoped>
  .btn-area {
    text-align: center;
  }
  .prev-btn, .next-btn, .connect-btn {
    position: relative;
    padding: 5px 0px;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
    transition: background-color, .3s 0s ease;
    cursor: pointer;
  }
  .prev-btn {
    width: 100px;
    float: left;
    background: #212121;
    color: #FFF;
  }
  .next-btn {
    width: 100px;
    float: right;
    background: #212121;
    color: #FFF;
  }
  .connect-btn {
    margin: 0px 105px;
    background: #F50057;
    color: #FFF;
  }
  .prev-btn:hover, .next-btn:hover {
    background: #444;
    color: #FFF;
  }
  .connect-btn:hover {
    background: #FF4081;
  }
</style>
