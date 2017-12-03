<template>
  <main>
    <div class="row">
      <div class="col-12">
        <h1>人間ビンゴ</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="user of users">
        <user-thumbnail :user="user" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserThumbnail from './user-thumbnail';

export default {
  computed: {
    ...mapState(['users']),
  },
  methods: {
    ...mapActions(['getUsers']),
  },
  components: {
    UserThumbnail,
  },
  created() {
    this.getUsers();
  },
}
</script>

<style scoped>
  h1 {
    margin: 10px 0px;
    font-size: 20px;
    text-align: center;
  }
  .name {
    height: 1.5em;
  }
</style>  
