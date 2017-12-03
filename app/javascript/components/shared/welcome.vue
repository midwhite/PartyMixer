<template>
  <div id="WelcomePage">
    <a href="/users/auth/facebook" class="login-btn">Facebookログイン</a>
  </div>
</template>

<style scoped>
  #WelcomePage {
    position: relative;
    height: 400px;
  }
  .login-btn {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 190px;
    height: 50px;
    margin: auto;
    border: 1px solid #00297F;
    background: #3B5998;
    color: #FFF;
    text-align: center;
    line-height: 50px;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
  }
</style>
