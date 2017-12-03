<template>
  <div id="app" class="container-fluid">
    <header-component />
    <div id="container" v-if="signedIn">
      <router-view />
    </div>
    <welcome-page v-else />
    <footer-component />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import HeaderComponent from './components/shared/header';
import FooterComponent from './components/shared/footer';
import WelcomePage from './components/shared/welcome';

export default {
  computed: {
    ...mapState(['signedIn']),
  },
  methods: {
    ...mapActions(['login', 'getUsers']),
  },
  components: {
    HeaderComponent,
    FooterComponent,
    WelcomePage,
  },
  created() {
    this.login().then(response => {
      this.getUsers();
    });
  },
}
</script>

<style scoped>
  #container {
    margin-top: 50px;
    padding-bottom: 5px;
  }
</style>
