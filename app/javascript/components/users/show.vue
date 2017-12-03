<template>
  <div id="ShowUser">
    <div class="user-window" v-if="user">
      <user-detail :user="user" />
    </div>
    <div class="btn-area">
      <div @click="getPrevUser" class="prev-btn">Prev</div>
      <div @click="getNextUser" class="next-btn">Next</div>
      <div class="contact-btn">Contact</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserDetail from './user-detail';

export default {
  computed: {
    ...mapState(['users']),
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
  .btn-area > div {
    padding: 5px 0px;
    cursor: pointer;
  }
  .prev-btn {
    width: 100px;
    float: left;
    background: #EEE;
  }
  .next-btn {
    width: 100px;
    float: right;
    background: #EEE;
  }
  .contact-btn {
    margin: 0px 105px;
    background: #212121;
    color: #FFF;
  }
</style>
