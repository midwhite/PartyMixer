<template>
  <div class="user-detail">
    <div class="name">{{ user.name }}</div>
    <div class="photo-area">
      <img :src="user.photo" class="photo">
    </div>
    <div class="row user-detail-row" v-for="prop of Object.keys(props)" v-if="user[prop]">
      <div class="col-3 user-detail-header">
        <div class="display-table">
          <div class="display-cell">{{ props[prop] }}</div>
        </div>
      </div>
      <div class="col-9 user-detail-cell">{{ user[prop] }}</div>
    </div>

    <div class="profile">
      {{ user.profile }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  computed: {
    props() {
      return {
        age: "年齢",
        area: "出身",
        major: "専攻",
        industry: "業種",
        job: "職種",
        university: "大学",
      };
    },
  },
}
</script>

<style scoped>
  .photo-area {
    padding: 10px;
    max-width: 320px;
    margin: 0px auto;
  }
  .photo {
    width: 100%;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
  }
  .display-table {
    width: 100%;
    height: 100%;
    display: table;
  }
  .display-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .user-detail-row {
    border-bottom: 2px solid rgba(255,255,255,0);
  }
  .user-detail-header {
    padding: 5px 0px;
    background: #212121;
    color: #FFF;
    text-align: center;
  }
  .user-detail-cell {
    padding: 5px;
    background: #EEE;
  }
  .profile {
    padding: 8px;
    margin: 5px 0px;
    background: #EEE;
  }
</style>
