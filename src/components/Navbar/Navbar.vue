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
      <b-navbar-item :active="isActive('dashboard')" tag="router-link" :to="{ path: '/dashboard' }">
        <div class="has-text-centered-touch" @click="navBarClicked('dashboard')">Dashboard</div>
      </b-navbar-item>
      <b-navbar-item :active="isActive('clubs')" tag="router-link" :to="{ path: '/clubs' }">
        <div class="has-text-centered-touch" @click="navBarClicked('clubs')">Clubs</div>
      </b-navbar-item>
      <b-navbar-item :active="isActive('stores')" tag="router-link" :to="{ path: '/stores' }">
        <div class="has-text-centered-touch" @click="navBarClicked('stores')">Stores</div>
      </b-navbar-item>
      <b-navbar-item :active="isActive('news')" tag="router-link" :to="{ path: '/news' }">
        <div class="has-text-centered-touch" @click="navBarClicked('news')">News</div>
      </b-navbar-item>
      <b-navbar-item :active="isActive('lost-founds')" tag="router-link" :to="{ path: '/lostfounds' }">
        <div class="has-text-centered-touch" @click="navBarClicked('lost-founds')">Lost-Founds</div>
      </b-navbar-item>
      <b-navbar-item :active="isActive('users')" tag="router-link" :to="{ path: '/users' }">
        <div class="has-text-centered-touch" @click="navBarClicked('users')">Users</div>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item class="adminSection" tag="div">
        <div class="adminSection" @click="$router.push('/settings')">
          <p class="adminName">ADMIN THANATORN</p>
          <i class="material-icons">account_circle</i>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      current: ""
    }
  },
  created() {
    this.current = this.$route.path.replace("/", "");
  },
  methods: {
    navBarClicked(item) {
      this.current = item;
    },
    isActive(item) {
      return item === this.current;
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