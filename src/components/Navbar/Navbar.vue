<template>
  <b-navbar type="is-success" fixed-top>
    <template slot="brand">
      <b-navbar-item>
        <img
          src="https://www.ku.ac.th/web2012/resources/template2/ui/images/logo72.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/dashboard' }">
        <div class="has-text-centered-touch">Dashboard</div>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/clubs' }">
        <div class="has-text-centered-touch">Clubs</div>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/stores' }">
        <div class="has-text-centered-touch">Stores</div>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/news' }">
        <div class="has-text-centered-touch">News</div>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/lostfounds' }">
        <div class="has-text-centered-touch">Lost-Founds</div>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/users' }">
        <div class="has-text-centered-touch">Users</div>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/comments' }">
        <div class="has-text-centered-touch">Comments</div>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item class="adminSection" tag="div">
        <div class="adminSection" @click="$router.push('/settings')">
          <p class="adminName">ADMIN VARITASS</p>
          <i class="material-icons">account_circle</i>
        </div>
      </b-navbar-item>
      <b-navbar-item class="adminSection" tag="div">
        <div class="adminSection" @click="logoutButtonClicked()">
          <p class="adminName">Log out</p>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { LOGOUT } from "@/store/actions.type";

export default {
  data() {
    return {
    }
  },
  methods: {
    logoutButtonClicked() {
      this.$store.dispatch(LOGOUT);
      location.reload();
    }
  }
}
</script>

<style scoped>
.adminSection {
  display: flex;
  cursor: pointer;
  justify-content: center;
}
.adminName {
  margin-right: 10px;
}
</style>