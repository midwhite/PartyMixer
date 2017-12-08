<template>
  <main>
    <div class="row">
      <div class="col-12">
        <h1>人間ビンゴ</h1>
      </div>
    </div>
    <div class="row" v-if="displayMode === 1">
      <bingo-user :user="user" v-for="user of users" />
    </div>
    <div class="row" v-else>
      <div class="col-4" v-for="user of users">
        <user-thumbnail :user="user" />
      </div>
    </div>
    <sticky-box></sticky-box>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import UserThumbnail from './user-thumbnail';
import BingoUser from './bingo-user';
import StickyBox from './sticky-box';

export default {
  computed: {
    ...mapState(['displayMode', 'users']),
  },
  components: {
    UserThumbnail,
    BingoUser,
    StickyBox,
  },
}
</script>

<style scoped>
  h1 {
    margin: 10px 0px;
    font-size: 20px;
    text-align: center;
  }
</style>
