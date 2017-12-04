<template>
  <header>
    <router-link to="/" id="logo">Group Maker</router-link>
    <router-link to="/users/edit" class="icon-link">
      <img :src="require('../../assets/images/icons/settings.png')" class="icon-settings" />
    </router-link>
  </header>
</template>

<style scoped>
  header {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background: rgba(0,0,0,.8);
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
    z-index: 1;
  }
  #logo {
    padding: 13px 15px;
    color: #FFF;
    font-size: 20px;
    line-height: 50px;
    text-decoration: none;
  }
  .icon-link {
    width: 50px;
    padding: 5px;
    float: right;
    text-align: right;
    transition: background-color .3s 0s ease;
  }
  .icon-link:hover {
    background: #444;
  }
  .icon-settings {
    width: 40px;
    cursor: pointer;
  }
</style>
