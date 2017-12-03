<template>
  <div id="app" class="container-fluid">
    <header-component />
    <div id="container">
      <router-view />
    </div>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/shared/header';
import FooterComponent from './components/shared/footer';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style scoped>
  #container {
    margin-top: 50px;
  }
</style>
