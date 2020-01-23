<template>
  <div>
    <Header />
    <div class="pageFullHeight" v-if="!isAuthenticated">
      <router-view></router-view>
    </div>
    <div class="pageFullHeight" v-else>
      <navbar></navbar>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/partials/Foorter";
import Header from "./components/partials/Header";
import Navbar from "@/components/Navbar/Navbar";
import { mapState, mapGetters } from "vuex";

export default {
  name: "app",
  components: { Footer, Header, Navbar },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {

  }
};
</script>

<style>
.pageFullHeight {
  height: 100vh;
}
.fullHeight {
  height: 100%;
}
</style>