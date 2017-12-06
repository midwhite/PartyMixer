<template>
  <div class="sticky-panel">
    <div class="sticky-box left-box">
      <div class="num-str left-str">
        <span class="strong-str">{{ selectedUsers.length }}</span>
        <span>名</span>
      </div>
      <div class="num-str slash-str">/</div>
      <div class="num-str right-str">
        <span class="strong-str">{{ users.length }}</span>
        <span>名</span>
      </div>
    </div>
    <div class="sticky-box right-box">
      <div data-mode="1" :class="displayMode === 1 ? 'display-mode-panel mode-1 selected-mode' : 'display-mode-panel mode-1'" @click="switchDisplayMode">Mode-1</div>
      <div data-mode="2" :class="displayMode === 2 ? 'display-mode-panel mode-2 selected-mode' : 'display-mode-panel mode-2'" @click="switchDisplayMode">Mode-2</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['users', 'selectedUsers', 'displayMode']),
  },
  methods: {
    switchDisplayMode(e) {
      const mode = Number(e.target.dataset.mode);
      this.$store.commit('switchDisplayMode', { mode });
    },
  },
}
</script>

<style scoped>
  .sticky-panel {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    background: #FFF;
    z-index: 1;
    transition: all .3s 0s ease;
  }
  .sticky-box {
    width: 50%;
    height: 100%;
  }
  .left-box  {
    position: relative;
    float: left;
    padding: 8px;
    border: 1px solid #FF4081;
    background: #FCE4EC;
  }
  .right-box {
    margin-left: 50%;
  }
  .num-str {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
  }
  .strong-str {
    font-size: 24px;
  }
  .left-str {
    top: 0px;
    left: 45px;
  }
  .right-str {
    right: 30px;
    bottom: 0px;
  }
  .slash-str {
    left: 0px;
    right: 0px;
    top: 0px;
    width: 80px;
    margin: 0px auto;
    font-size: 36px;
    text-align: center;
  }
  .display-mode-panel {
    width: 50%;
    height: 100%;
    line-height: 60px;
    text-align: center;
  }
  .mode-1 {
    float: left;
  }
  .mode-2 {
    margin-left: 50%;
  }
  .selected-mode {
    border: 1px solid #F50057;
    background: #F50057;
    color: #FFF;
  }
</style>