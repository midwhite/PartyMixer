<template>
  <main>
    <div class="row">
      <div class="col-12">
        <h1>人間ビンゴ</h1>
      </div>
    </div>
    <div class="row" v-if="displayMode === 1">
      <div class="col-4" v-for="user of users">
        <user-thumbnail :user="user" />
      </div>
    </div>
    <div class="row" v-else>
      <div>Display Mode 2</div>
    </div>
    <sticky-box></sticky-box>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import UserThumbnail from './user-thumbnail';
import StickyBox from './sticky-box';

export default {
  computed: {
    ...mapState(['displayMode', 'users']),
  },
  components: {
    UserThumbnail,
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
  .name {
    height: 1.5em;
  }
</style>
